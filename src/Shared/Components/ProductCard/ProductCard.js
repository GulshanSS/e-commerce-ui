import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProductCard = () => {
  return (
    <Card className="p-2 my-2">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs="4">
          <Card.Img variant="top" src="holder.js/100px180" />
        </Col>
        <Col xs="8">
          <Row>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
