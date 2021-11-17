import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductDisplayAllPage = () => {
  return (
    <Container
    >
      <Row className="d-flex justify-content-center align-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default ProductDisplayAllPage;
