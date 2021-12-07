import React from "react";
import { Container } from "react-bootstrap";
import EmailVerify from "../../Components/EmailVerify/EmailVerify";
const EmailVerifyPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <EmailVerify />
    </Container>
  );
};

export default EmailVerifyPage;