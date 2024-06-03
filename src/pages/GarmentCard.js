import React from 'react';
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'


export default function GarmentCard({ garment }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={garment.image} alt={garment.name} />
      <Card.Body>
        <Card.Title>{garment.name}</Card.Title>
        <Card.Text>
          Category: {garment.category}
          <br />
          Color: {garment.color}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}