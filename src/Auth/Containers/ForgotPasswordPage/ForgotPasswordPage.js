import React from "react";
import { Container } from "react-bootstrap";
import ForgotPasswordForm from "../../Components/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ForgotPasswordForm />
    </Container>
  );
};

export default ForgotPasswordPage;
