import React from "react"
import "./CustomCard.css";

const CustomCard = ({ alumn }) =>
{
  return (<React.Fragment Fragment>
    <div className="card">
      <div class="card-image"><img src={alumn.avatar_url} alt="BootNetwork Member" />
        <div className="card-text">
      <h3>{alumn.name}</h3>
      <h4>Email</h4>
      <p>{alumn.email}</p>
      <h4>Company</h4>
      <p>{alumn.company}</p>
      <h4>Bio</h4>
      <p>{alumn.bio}</p>
</div>
      <div className="card-links">
      <a className="link" href={alumn.html_url} target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
           </div>
    </React.Fragment>)
}

export default CustomCard


