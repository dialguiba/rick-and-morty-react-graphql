import React from "react";
import { Card } from "react-bootstrap";

export const CharacterCard = ({ name, image }) => {
  return (
    <div className="col">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
