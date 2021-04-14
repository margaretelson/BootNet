import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const AlumniCard = ({ name, link, avatar_url, email, location, hireable, company, bio, id}) => {
  console.log(id);
  console.log(avatar_url);
  return (

    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={avatar_url} />
    <Card.Body>
      <Card.Title>{id}</Card.Title>
      <Card.Text>
        {bio}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>{email}</ListGroupItem>
      <ListGroupItem>{company}</ListGroupItem>
      <ListGroupItem>{hireable}</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Link to Github</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default AlumniCard
