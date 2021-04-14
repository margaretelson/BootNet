import React from "react"
import "./CustomCard.css";

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
