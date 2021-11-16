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

import RegisterForm from "./Auth/Containers/RegisterForm/RegisterForm";
import LoginForm from "./Auth/Containers/LoginForm/LoginForm";

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
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
