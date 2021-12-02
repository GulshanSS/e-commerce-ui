import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { ImCheckmark } from "react-icons/im";
import authHeader from "../../utils/authHeader";
import { useParams } from "react-router-dom";

const ProductUpdateForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [section, setSection] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});
  const [result, setResult] = useState("Update");
  const params = useParams();
  const clearText = () => {
    setName("");
    setPrice("");
    setSection("");
    setDetails("");
    setImage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const config = {
        "Content-Type": "application/json",
        headers: authHeader(),
      };
      console.log(image);
      const response = await axios.put(
        `https://ecommerce-robust-api.herokuapp.com/api/vendor/${params.id}/update`,
        {
          name: name,
          price: price,
          section: section,
          details: details,
          image: image === "" ? undefined : image,
        },
        config
      );
      setLoading(false);
      setResult(<ImCheckmark />);
      setMessage({});
      console.log(response);
    } catch (err) {
      setLoading(false);
      setResult("Update");
      setMessage({ ...err.response.data });
    }
  };
  return (
    <Container>
      <h3 className="text-center">Update Product</h3>
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="6">
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                isInvalid={!!message.name}
              />
              <Form.Control.Feedback type="invalid">
                {message.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="3">
            <Form.Group className="mb-3" controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Product Price"
                isInvalid={!!message.price}
              />
              <Form.Control.Feedback type="invalid">
                {message.price}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm="12" md="3">
            <Form.Group className="mb-3" controlId="productSection">
              <Form.Label>Section</Form.Label>
              <Form.Control
                type="text"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                placeholder="Product Section"
                isInvalid={!!message.section}
              />
              <Form.Control.Feedback type="invalid">
                {message.section}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="6">
            <Form.Group className="mb-3" controlId="productDetails">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={2}
                isInvalid={!!message.details}
              />
              <Form.Control.Feedback type="invalid">
                {message.details}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm="12" md="6">
            <Form.Group className="mb-3" controlId="productImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Product Image Path"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
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
          <Button
            className="ml-2"
            variant="danger"
            type="reset"
            onClick={clearText}
            style={{ width: "120px", height: "50px" }}
          >
            Cancle
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default ProductUpdateForm;
