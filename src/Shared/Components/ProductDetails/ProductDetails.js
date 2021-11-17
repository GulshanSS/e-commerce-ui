import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BiLike, BiDislike } from "react-icons/bi";

const ProductDetails = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm="12" md="4">
          <img
            src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
            style={{ maxWidth: "300px" }}
          />
        </Col>
        <Col sm="12" md="8">
          <Row>
            <h1>Title</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start">
              <Button variant="danger">Add to Cart</Button>
              <Button className="ml-2" variant="warning">
                Buy Now
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
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
