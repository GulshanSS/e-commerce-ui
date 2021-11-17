import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ProductAddForm = () => {
  return (
    <Container>
      <h3 className="text-center">Add Product</h3>
      <Form>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="6">
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Product Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="3">
            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Product Price" />
            </Form.Group>
          </Col>
          <Col sm="12" md="3">
            <Form.Group className="mb-3" controlId="productSection">
              <Form.Label>Section</Form.Label>
              <Form.Control type="text" placeholder="Product Section" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="6">
            <Form.Group className="mb-3" controlId="productDetails">
              <Form.Label>Details</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="6">
            <Form.Group className="mb-3" controlId="productImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Product Image Path" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="success">Add</Button>
        <Button variant="danger" className="ml-2">
          Cancel
        </Button>
      </div>
    </Container>
  );
};

export default ProductAddForm;
