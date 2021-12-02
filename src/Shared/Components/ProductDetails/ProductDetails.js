import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BiLike, BiDislike } from "react-icons/bi";

const ProductDetails = ({ pId, pName, pDetails, pImg, pPrice, pLikes }) => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm="12" md="4">
          <img src={pImg} style={{ maxWidth: "300px" }} />
        </Col>
        <Col sm="12" md="8">
          <Row>
            <Col>
              <h1>{pName}</h1>
              <p>{pDetails}</p>
              <h3>RS {pPrice}/-</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start">
              <Button variant="danger">Add to Cart</Button>
              <Button className="ml-2" variant="warning">
                Buy Now
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="m-2">
                <span>{pLikes} likes</span>
              </div>
              <Button className="mr-2">
                <BiLike />
              </Button>
              <Button>
                <BiDislike />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
