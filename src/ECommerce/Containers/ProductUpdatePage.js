import React from "react";
import { Container } from "react-bootstrap";
import ProductUpdateForm  from "../Components/ProductUpdateForm";
const ProductUpdatePage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ProductUpdateForm />
    </Container>
  );
};

export default ProductUpdatePage;
