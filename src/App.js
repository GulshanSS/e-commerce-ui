import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./App.css";
import { BiSearchAlt } from "react-icons/bi";

import RegisterPage from "./Auth/Containers/RegisterPage/RegisterPage";
import LoginPage from "./Auth/Containers/LoginPage/LoginPage";
import ProductAddPage from "./ECommerce/Containers/ProductAddPage";

const App = () => {
  return (
    <>
      <Router>
        <div className="app-container">
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Form className="d-flex" style={{ width: "800px" }}>
                <FormControl
                  type="search"
                  placeholder="Search Products"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="ml-2">
                  <BiSearchAlt size="24px" />
                </Button>
              </Form>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav className="me-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/productAdd" element={<ProductAddPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
