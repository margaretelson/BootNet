import React, { useState } from 'react'
import axios from 'axios';
import AlumniCard from "../AlumniCard/AlumniCard";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AlumniSearch = () => {
  const [searchString, setSearchString] = useState('');
  
  const [alumniData, setAlumniData] = useState({
    name: '',
    avatar_url: '',
    email: '',
    location: '',
    hireable: '',
    company: '',
    bio: '',
    id: '',
  })
  // Make API call to GET alumni data for a GitHub user. 
  // If successful(200), console log the response(res) and capture it in state using "setAlumniData". (So "setAlumniData" is a value that holds that API res)
  // If the call is unsuccessful, producing HTTP 500, 404, or any other error, capture and console log it.
  const searchAlumni = (searchFor) =>
  {
    axios.get('https://api.github.com/users/' + searchFor)
    .then(res =>
      {
        console.log(res);
        setAlumniData({
          name: res.data.name,
          avatar_url: res.data.avatar_url,
          email: res.data.email,
          location: res.data.location,
          hireable: res.data.hireable,
          company: res.data.company,
          bio: res.data.bio,
          id: res.data.id,
          link: res.data.link
        })
        
      }).catch(err => console.log(err));
    }
// Input field for search bar. 
// Note: In Bootstrap, mb-3 means "margin bottom, 3rem." 1 rem=the width of a capital "M" in HTML, which is usually 16px.
// The onChange function receives the search string value captured by setSearchString. When a user clicks Search, the data is held in the searchString state. 
// The searchString variable takes the initial value entered inside the parens. The onClick function triggers the searchAlumni GET function, passing in the value of the search string. So onChange takes in "e.target.value" and uses setSearchString as a variable to change and hold the searchString value.
    return (
      <div>
      <InputGroup className="mb-3">
      <FormControl
      placeholder="Alumni username"
      aria-label="Alumni username"
      aria-describedby="basic-addon2"
      onChange = {(e) => {setSearchString(e.target.value)}}
      />
      <InputGroup.Append>
      <Button onClick={() => {searchAlumni(searchString)}} variant="outline-secondary">Search</Button>
      </InputGroup.Append>
      </InputGroup>
      <AlumniCard 
      name={alumniData.name}
      avatar_url={alumniData.avatar_url}
      email={alumniData.email}
      location={alumniData.location}
      hireable={alumniData.hireable}
      company={alumniData.company}
      bio={alumniData.bio}
      id={alumniData.id}
      link={alumniData.link}
      />
      </div>
      )
    }
    // We use the AlumniCard, above, to pass through the response and set it equal to the data we want (e.g., name=alumniData.name). Each property on the card can be accessed by a function that grabs and holds their values. 
    export default AlumniSearch
    