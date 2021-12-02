import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.css";
import { ImCheckmark } from "react-icons/im";
import { Col, Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("M");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("Register");
  const navigate = useNavigate();
  let cpasserr = {};
  const checkPasswords = (pass, cpass) => {
    if (pass != cpass) {
      return { confirmpassword: "Confirm Password is not same as password" };
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      cpasserr = checkPasswords(pass, cpass);
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "https://ecommerce-robust-api.herokuapp.com/api/register",
        {
          name: name,
          email: email,
          mobile: mobile,
          password: pass,
          dob: new Date(dob).getTime(),
          address: address,
          gender: gender,
          role: role,
        },
        config
      );
      setResult(<ImCheckmark />);
      setLoading(false);
      setMessage({});
      navigate("/login");
    } catch (err) {
      setLoading(false);
      setResult("Register");
      setMessage({ ...err.response.data, ...cpasserr });
    }
  };

  return (
    <>
      <Container>
        <h3 className="text-center">Registration Form</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  isInvalid={!!message.name}
                />
                <Form.Control.Feedback type="invalid">
                  {message.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  isInvalid={!!message.email}
                />
                <Form.Control.Feedback type="invalid">
                  {message.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="dob">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="Date of Birth"
                  isInvalid={!!message.dob}
                />
                <Form.Control.Feedback type="invalid">
                  {message.dob}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile No."
                  isInvalid={!!message.mobile}
                />
                <Form.Control.Feedback type="invalid">
                  {message.mobile}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Password"
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
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="confirmPass">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={cpass}
                  onChange={(e) => setCpass(e.target.value)}
                  placeholder="Confirm Password"
                  isInvalid={!!message.confirmpassword}
                />
                <Form.Control.Feedback type="invalid">
                  {message.confirmpassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="confirmPass">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={2}
                  isInvalid={!!message.address}
                />
                <Form.Control.Feedback type="invalid">
                  {message.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm="12" md="6">
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  defaultChecked
                  inline
                  className="ml-3"
                  label="Male"
                  type="radio"
                  name="gendergroup"
                  value={gender}
                  onChange={(e) => setGender("M")}
                />
                <Form.Check
                  inline
                  className="ml-3"
                  label="Female"
                  type="radio"
                  name="gendergroup"
                  value={gender}
                  onChange={(e) => setGender("F")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Role</Form.Label>
                <Form.Check
                  defaultChecked
                  inline
                  className="ml-3"
                  label="User"
                  type="radio"
                  name="rolegroup"
                  value={role}
                  onChange={(e) => setRole("user")}
                />
                <Form.Check
                  inline
                  className="ml-3"
                  label="Vendor"
                  type="radio"
                  name="rolegroup"
                  value={role}
                  onChange={(e) => setRole("vendor")}
                />
              </Form.Group>
            </Col>
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

export default RegisterForm;
