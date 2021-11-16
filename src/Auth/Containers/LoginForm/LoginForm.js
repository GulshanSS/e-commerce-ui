import React from "react";

import { Col, Container, Row, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  return (
    <>
      <Container className="my-3">
        <h3 className="text-center">Login Form</h3>
        <Form>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
        </Form>
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="success">Login</Button>
        </div>
      </Container>
    </>
  );
};
export default LoginForm;
