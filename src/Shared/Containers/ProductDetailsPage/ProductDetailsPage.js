import axios from "axios";
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  // useEffect(() => {
  //   (async () => {
  //     const {data} = await axios.get("") 
  //   })();
  // }, []);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ProductDetails />
    </Container>
  );
};

export default ProductDetailsPage;
