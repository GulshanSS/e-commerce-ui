import axios from "axios";
import React, { useState } from "react";

import { Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { ImCheckmark } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import authHeader from "../../../utils/authHeader";
import decodeToken from "../../../utils/decodeToken";

const PasswordReset = () => {
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("Reset");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        "Content-type": "application/json",
        headers: authHeader(),
      };
      const { data } = await axios.post(
        `https://ecommerce-robust-api.herokuapp.com/api/${
          decodeToken().role === "user" ? "customer" : "vendor"
        }/resetpassword`,
        {
          oldpassword,
          newpassword,
          confirmpassword,
        },
        config
      );
      setResult(<ImCheckmark />);
      setLoading(false);
      setMessage({});
      navigate("/user")
    } catch (err) {
      console.log(err.response);
      setLoading(false);
      setMessage({ ...err.response.data });
    }
  };
  return (
    <>
      <Container>
        <h3 className="text-center">Password Reset</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="Email"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                value={oldpassword}
                placeholder="Old Password"
                onChange={(e) => setOldPassword(e.target.value)}
                isInvalid={!!message.oldpassword}
              />
              <Form.Control.Feedback type="invalid">
                {message.oldpassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="password"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={newpassword}
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
                isInvalid={!!message.newpassword}
              />
              <Form.Control.Feedback type="invalid">
                {message.newpassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="password"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                isInvalid={!!message.confirmpassword}
              />
              <Form.Control.Feedback type="invalid">
                {message.confirmpassword}
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
                <Spinner animation="border" variant="success" />
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

export default PasswordReset;
