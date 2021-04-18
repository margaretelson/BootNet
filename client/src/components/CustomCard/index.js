import React, { useState } from "react";
import "./CustomCard.css";

const CustomCard = ({ alumn }) =>
{
  const [hover, setHover] = useState(false)

  //Function to save user profile once MongoDB is set up
  function handleSave()
  {
    fetch("backend URL", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(alumn)
    })
      .then(data => data.json())
      .then(res =>
      {
        if (res)
        {
          alert("User profile was saved")
        }
      })
  }
  //This code limits the user profile to 50 characters. If the profile is >50 characters, an ellipsis appears at the end, cutting the profile short. The full profile can be seen by hovering over the card.
  return (
      <div
        className="card"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div class="card-image">
          <img width="150" src={alumn.avatar_url} alt="BootNetwork Member" />
          <div className="card-text">
            <h2>{alumn.name}</h2>
            <h3>Email</h3>
            <p>{alumn.email}</p>
            <h3>Company</h3>
            <p>{alumn.company}</p>
          <h3>Bio</h3>
          {alumn.bio &&
            <p>
            
              {hover ? alumn.bio : alumn.bio.substr(0, 50)}
              {!hover && alumn.bio.length > 50 && "..."}
            </p>
          }
          </div>
          <li class="list-group-item">
            <button
              class="btn btn-outline-success"
              onClick={handleSave}
            >
              Save this User
            </button>
          </li>
          <div className="card-links">
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