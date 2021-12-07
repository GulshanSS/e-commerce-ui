import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Form, Button, Spinner } from "react-bootstrap";

const ForgotPasswordForm = () => {
  return (
    <>
      <Container>
        <h3 className="text-center">Forgot Password</h3>
        <Form >
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="Email"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="email"
                value=""
                placeholder="Password"
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="password"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="success"
              type="submit"
              style={{ width: "120px", height: "50px" }}
            >
                Change
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default ForgotPasswordForm;
