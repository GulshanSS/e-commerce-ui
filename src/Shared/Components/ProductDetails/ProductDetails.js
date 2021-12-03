import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BiLike, BiDislike } from "react-icons/bi";
import decodeToken from "../../../utils/decodeToken";
import authHeader from "../../../utils/authHeader";
import { useNavigate } from "react-router";

const ProductDetails = ({
  pId,
  pName,
  pDetails,
  pImg,
  pPrice,
  pLikes,
  uLikes,
}) => {
  const navigate = useNavigate();
  const config = {
    "Content-Type": "application/json",
    headers: authHeader(),
  };
  const handleBuyNow = async () => {
    try {
      const { data } = await axios.post(
        `https://ecommerce-robust-api.herokuapp.com/api/customer/${pId}/buyNow`,
        {},
        config
      );
      navigate("/myorders");
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddToCart = async () => {
    try {
      const { data } = await axios.post(
        `https://ecommerce-robust-api.herokuapp.com/api/customer/${pId}/addToCart`,
        {},
        config
      );
      navigate("/cart");
    } catch (err) {
      console.log(err.response);
    }
  };
  const postLike = async () => {
    try {
      const { data } = await axios.post(
        `https://ecommerce-robust-api.herokuapp.com/api/customer/${pId}/like`,
        {},
        config
      );
      window.location.reload();
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm="12" md="4">
          <img src={pImg} style={{ maxWidth: "300px" }} alt="" />
        </Col>
        <Col sm="12" md="8">
          <Row>
            <Col>
              <h1>{pName}</h1>
              <p>{pDetails}</p>
              <h3>RS {pPrice}/-</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start">
              <Button variant="danger" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button className="ml-2" variant="warning" onClick={handleBuyNow}>
                Buy Now
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="m-2">
                <Button
                  onClick={postLike}
                  variant={uLikes ? "success" : "primary"}
                >
                  {pLikes} likes{" "}
                  {uLikes ? (
                    <BiDislike fontSize="24px" />
                  ) : (
                    <BiLike fontSize="24px" />
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
