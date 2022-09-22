import React from 'react'
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem, CardLink } from 'reactstrap'
import './CreateEventPageStyle.css'

export default function CreateEventPage(props) {
  return (
    <div>
      <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Card"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {props.eventName}
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
  <CardBody>
    <CardLink href="#">
      Card Link
    </CardLink>
    <CardLink href="#">
      Another Card Link
    </CardLink>
  </CardBody>
</Card>
    </div>
  )
}
