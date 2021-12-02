import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";

const ProductCard = ({ pId, pImg, pName, pDetails, pPrice }) => {
  let navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/product/${pId}`);
  };
  return (
    <Card key={pId} onClick={handleProductDetails} className="p-2 my-2">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs="4">
          <Card.Img variant="top" src={pImg} />
        </Col>
        <Col xs="8">
          <Row>
            <Card.Body>
              <Card.Title>{pName}</Card.Title>
              <Card.Text>{pDetails}</Card.Text>
              <Card.Text>
                <h2>{`Rs ${pPrice}/-`}</h2>
              </Card.Text>
            </Card.Body>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
