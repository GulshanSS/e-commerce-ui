import React from "react";
import { Container } from "react-bootstrap";
import PasswordReset from "../../Components/PasswordReset/PasswordReset";
const PasswordResetPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <PasswordReset />
    </Container>
  );
};

export default PasswordResetPage;
