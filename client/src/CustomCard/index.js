import React from "react"
import "./CustomCard.css";

<<<<<<< HEAD

const CustomCard = ({ alumn }) =>
{
  return (<React.Fragment Fragment>
    <div className="card">
      <div className="card-image"><img src={alumn.avatar_url} alt="BootNetwork Member" />
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


=======
const CustomCard = ({alumn}) => {
  return (
    <div className="custom-card">
      <img src={alumn.avatar_url} alt="" />
      <h3>{alumn.name}</h3>
      <p>Email</p>
      <p>Company</p>
      <a href={alumn.html_url} target="_blank" rel="noreferrer">Github</a>
      <a href="#">LinkedIn</a>
      <a href="#">BootCamp</a>
    </div>
  )
}

export default CustomCard
>>>>>>> main
