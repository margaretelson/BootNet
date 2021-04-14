import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const AlumniCard = (
  { alumn, name, link, avatar_url, email, location, hireable, company, bio, id }) => {
  return (

    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={alumn.avatar_url} />
    <Card.Body>
      <Card.Title>{alumn.id}</Card.Title>
      <Card.Text>
        {alumn.bio}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>{alumn.email}</ListGroupItem>
      <ListGroupItem>{alumn.company}</ListGroupItem>
      <ListGroupItem>{alumn.hireable}</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href={alumn.html_url} target="_blank">Github</Card.Link>
      <Card.Link href="#">LinkenIn</Card.Link>
      <Card.Link href="#">Slack Invite</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default AlumniCard
