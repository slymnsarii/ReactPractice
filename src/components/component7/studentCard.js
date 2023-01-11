import React from "react";
import { Card } from "react-bootstrap";

const StudentCard = ({ data }) => {
  const { isim, yas, kurs, img } = data;

  return (
    <Card>
      <Card.Img variant="top" src={img} style={{ height: "350px" }} />
      <Card.Body>
        <Card.Title>{isim}</Card.Title>
        <Card.Text>{yas}</Card.Text>
        <Card.Text>{kurs}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
