import React, { useState } from 'react'
import axios from 'axios';

const AlumniSearch = () => {
  
  
  const searchAlumni = (input) => {
    axios.get('https://api.github.com/users/' + input).then(res => {
      console.log(res.data);

    }).catch(err => console.log(err));
  }

  return (
    <div>
      <h1> Search Alumni </h1>
    </div>
  )
}

export default AlumniSearch
