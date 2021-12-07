import axios from "axios";
import React, { useState } from "react";

import { Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { ImCheckmark } from "react-icons/im";

const SendMailFrom = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("Send");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "https://ecommerce-robust-api.herokuapp.com/api/forgot-password",
        {
          email: email,
        },
        config
      );
      setResult(<ImCheckmark />);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <>
      <Container>
        <h3 className="text-center">Send Mail</h3>
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
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
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
                result
              )}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default SendMailFrom;
