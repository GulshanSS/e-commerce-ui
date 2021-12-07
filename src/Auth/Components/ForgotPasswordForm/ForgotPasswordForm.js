import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { ImCheckmark } from "react-icons/im";

const ForgotPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("Send");
  const params = useParams();
  let cpasserr = {};
  const checkPasswords = (password, confirmPassword) => {
    if (password != confirmPassword) {
      return { confirmpassword: "Confirm Password is not same as password" };
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      cpasserr = checkPasswords(password, confirmPassword);
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        `https://ecommerce-robust-api.herokuapp.com/api/forgot-password/${params.id}/${params.token}`,
        {
          password: password,
        },
        config
      );
      console.log(data);
      setResult(<ImCheckmark />);
      setLoading(false);
      setMessage({});
    } catch (err) {
      console.log(err.response);
      setLoading(false);
      setMessage({ ...err.response.data, ...cpasserr });
    }
  };
  return (
    <>
      <Container>
        <h3 className="text-center">Forgot Password</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="d-flex justify-content-center align-items-center">
            <Form.Group
              className="mb-3 col-6"
              controlId="Email"
              style={{ maxWidth: "350px" }}
            >
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!message.password}
              />
              <Form.Control.Feedback type="invalid">
                {message.password && message.password.split("-").length === 1
                  ? message.password
                  : message.password &&
                    message.password.split("-").map((ele, i) => (
                      <li itemID={i} className="ml-3">
                        {ele}
                      </li>
                    ))}
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
                value={confirmPassword}
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
              variant="dark"
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
export default ForgotPasswordForm;
