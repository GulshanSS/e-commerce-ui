import React from "react";
import { Container } from "react-bootstrap";
import SendMailForm from "../../Components/SendMailForm/SendMailForm";

const SendMailPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <SendMailForm />
    </Container>
  );
};

export default SendMailPage;
