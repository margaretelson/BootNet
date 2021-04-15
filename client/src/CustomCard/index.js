import React from "react"
import "./CustomCard.css";


const CustomCard = ({ alumn }) =>
{
  return (<React.Fragment Fragment>
    <div className="card">
      <div class="card-image"><img src={alumn.avatar_url} alt="BootNetwork Member" />
        <div className="card-text">
          <h2>{alumn.name}</h2>
      <h3>Email</h3>
      <p>{alumn.email}</p>
      <h3>Company</h3>
      <p>{alumn.company}</p>
      <h3>Bio</h3>
      <p>{alumn.bio}</p>
</div>
      <div className="card-links">
      <a className="link" href={alumn.html_url} target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
           </div>
    </React.Fragment>)
}

export default CustomCard


