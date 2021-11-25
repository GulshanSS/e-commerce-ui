import axios from "axios";
import React, { useState } from "react";

import { Container, Row, Form, Button } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      const config = {
        "Content-type": "application/json",
      };
      const { data } = await axios.post(
        "https://ecommerce-robust-api.herokuapp.com/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <h3 className="text-center">Login Form</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="success" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default LoginForm;
