import React, { useState } from "react";
import "./CustomCard.css";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
// import git from "../../Assets/github-brands.png";
//import { fab } from "@fortawesome/free-brands-svg-icons";

const CustomCard = ({ alumn }) => {
  const [hover, setHover] = useState(false);
  const [alumnDetail, setAlumnDetail] = useState({});
  // Modal functions
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const getAlumnDetail = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log("Is there a response?", res);
        console.log(res.data);
        console.log("The alumn is", res.data);
        setAlumnDetail(res.data);
        setShow(true);
      })
      .catch((err) => console.log(err));
  };

  // const closeDetails = () => {
  //   setAlumnDetail(null);
  // };

  //Function to save user profile once MongoDB is set up
  const handleSave = () => {
    console.log("The alumn being saved is", alumnDetail);
    axios.post("/api/users", alumnDetail).then((res) => {
      if (res) {
        alert("User profile was saved");
      }
    });
  };

  const handleDelete = () => {
    axios.delete("/api/users", alumnDetail).then((res) => {
      if (res) {
        alert("User profile was deleted");
      }
    });
  };
  // console.log(alumn)
  // console.log(alumnDetail)

  //This code limits the user profile to 50 characters. If the profile is >50 characters, an ellipsis appears at the end, cutting the profile short. The full profile can be seen by hovering over the card.
  return (
    <div
      className="card"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img width="150" src={alumn.avatar_url} alt="BootNetwork Member" />
      <div className="card-text">
        <h3>{alumn.login}</h3>
        {alumnDetail ? (
          <Button
            onClick={() => {
              getAlumnDetail(alumn.url);
            }}
          >
            User Details
          </Button>
        ) : null}
        {alumnDetail ? (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="card-text">
                <h2>{alumn.login}</h2>
                <h3>Email</h3>
                {alumnDetail.email ? (
                  <p>{alumnDetail.email}</p>
                ) : (
                  <p>Not provided</p>
                )}
                <h3>Company</h3>
                {alumnDetail.company ? (
                  <p>{alumnDetail.company}</p>
                ) : (
                  <p>Not provided</p>
                )}
                <h3>Hireable?</h3>
                {alumnDetail.hireable ? <p>Yes</p> : <p>Unspecified</p>}
                <h3>Bio</h3>
                {alumnDetail.bio ? (
                  <p>
                    {hover ? alumnDetail.bio : alumnDetail.bio.substr(0, 50)}
                    {!hover && alumnDetail.bio.length > 50 && "..."}
                  </p>
                ) : (
                  <p>Not provided</p>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <li className="list-group-item">
                <button className="button" onClick={handleSave}>
                  Save Profile
                </button>
              </li>
              <li className="list-group-item">
                <button className="button" onClick={handleDelete}>
                  Delete
                </button>
              </li>
            </Modal.Footer>
          </Modal>
        ) : null}
      </div>

      <div className="card-links d-flex justify-content-center">
        <a
          className="link"
          href={alumn.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {/* <img src={git} alt="GitHub logo" /> */}
          GitHub
        </a>
      </div>
    </div>
  );
};

export default CustomCard;
