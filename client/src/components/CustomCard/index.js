import React, { useState } from "react";
import "./CustomCard.css";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const CustomCard = ({ alumn }) => {
  const [hover, setHover] = useState(false);
  const [alumnDetail, setAlumnDetail] = useState({});
  // Modal functions
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setAlumnDetail(null);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const getAlumnDetail = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAlumnDetail(res.data);
        handleShow(true);
      })
      .catch((err) => console.log(err));
  };

  // const closeDetails = () => {
  //   setAlumnDetail(null);
  // };

  //Function to save user profile once MongoDB is set up
  const handleSave = () => {
    axios.post("/api/users", alumnDetail)
      .then(res =>
      {
        if (res)
        {
          alert("User profile was saved")
        }
      })
  };
  
  //This code limits the user profile to 50 characters. If the profile is >50 characters, an ellipsis appears at the end, cutting the profile short. The full profile can be seen by hovering over the card.
  return (
    <div
      className="card"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="card-image">
        <img width="150" src={alumn.avatar_url} alt="BootNetwork Member" />
        <div className="card-text">
          {/* <h3>Repo:</h3> */}
          <h3>{alumn.login}</h3>
          {alumnDetail === null ? (
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
                  <h2>{alumnDetail.name}</h2>
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
                  {/* <button className="button" onClick={closeDetails}>
                    X Close
                  </button> */}
                </li>
              </Modal.Footer>
            </Modal>
          ) : null}
        </div>

        <div>
          {/* className="card-links"
           style={{ width: "24px", height: "24px", viewBox: "0 0 24 24" }}
         
           <svg>
             <path */}
          {/* fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11. 15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
             />
           </svg> */}
          <a
            className="link"
            href={alumn.html_url}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
