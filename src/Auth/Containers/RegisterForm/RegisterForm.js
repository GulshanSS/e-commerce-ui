import React from "react";
import "./RegisterForm.css";

import { Col, Container, Row, Form, Button } from "react-bootstrap";

const RegisterForm = () => {
  return (
    <>
      <Container className="my-3">
        <h3>Registration Form</h3>
        <Form>
          <Row>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="dob">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" placeholder="Date of Birth" />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="text" placeholder="Mobile No." />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="confirmPass">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="confirmPass">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  inline
                  className="ml-3"
                  label="Male"
                  type="radio"
                  name="gendergroup"
                />
                <Form.Check
                  inline
                  className="ml-3"
                  label="Female"
                  type="radio"
                  name="gendergroup"
                />
                <Form.Check
                  inline
                  className="ml-3"
                  label="Other"
                  type="radio"
                  name="gendergroup"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Role</Form.Label>
                <Form.Check
                  inline
                  className="ml-3"
                  label="User"
                  type="radio"
                  name="rolegroup"
                />
                <Form.Check
                  inline
                  className="ml-3"
                  label="Vendor"
                  type="radio"
                  name="rolegroup"
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div className="d-flex justify-content-center align-items-center">
          <Button variant="success">Register</Button>
        </div>
      </Container>
    </>
  );
};

export default RegisterForm;
