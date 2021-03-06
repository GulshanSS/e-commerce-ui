import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Form, Button, Spinner } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        "Content-type": "application/json",
      };
      const { data } = await axios.post(
        "https://ecommerce-robust-api.herokuapp.com/api/login",
        {
          email,
          password,
        },
        config
      );
      if (data.success) {
        localStorage.setItem("access_token", data.token);
      }
      setLoading(false);
      navigate("/user");
    } catch (err) {
      setLoading(false);
      setMessage({ ...err.response.data });
    }
  };

  return (
    <>
      <Container>
        <h3 className="text-center">Login Form</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="Email"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!message.email}
              />
              <Form.Control.Feedback type="invalid">
                {message.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="password"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!message.password}
              />
              <Form.Control.Feedback type="invalid">
                {message.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <Button
              variant="success"
              type="submit"
              style={{ width: "120px", height: "50px" }}
            >
              {loading ? (
                <Spinner animation="border" variant="dark" />
              ) : (
                "login"
              )}
            </Button>
          </div>
        </Form>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <a href="/sendmail">
            Forgot Password?
          </a>
        </div>
      </Container>
    </>
  );
};
export default LoginForm;
