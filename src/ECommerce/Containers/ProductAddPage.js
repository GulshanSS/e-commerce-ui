import React from "react";
import { Container } from "react-bootstrap";
import ProductAddForm from "../Components/ProductAddForm";
const ProductAddPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ProductAddForm />
    </Container>
  );
};

export default ProductAddPage;
