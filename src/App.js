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
import ProductUpdatePage from "./ECommerce/Containers/ProductUpdatePage";
import ProductDisplayAllPage from "./Shared/Containers/ProductDisplayAllPage/ProductDisplayAllPage";
import ProductDetailsPage from "./Shared/Containers/ProductDetailsPage/ProductDetailsPage";
import TablePage from "./Shared/Containers/TablePage/TablePage";
import UserDetailsPage from "./Shared/Containers/UserDetailsPage/UserDetailsPage";
import Logout from "./Shared/Components/Logout/Logout";
import AddToCartPage from "./ECommerce/Containers/AddToCartPage";
import MyOrdersPage from "./ECommerce/Containers/MyOrdersPage";
import AdminTablePage from "./ECommerce/Containers/AdminTablePage";
import PasswordResetPage from "./Shared/Containers/PasswordResetPage/PasswordResetPage";
import EmailVerifyPage from "./Shared/Containers/EmailVerifyPage/EmailVerifyPage";
import SendMailPage from "./Auth/Containers/SendMailPage/SendMailPage";
import ForgotPasswordPage from "./Auth/Containers/ForgotPasswordPage/ForgotPasswordPage"
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
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/productAdd" element={<ProductAddPage />} />
            <Route path="/productUpdate/:id" element={<ProductUpdatePage />} />
            <Route path="/myorders" element={<MyOrdersPage />} />
            <Route path="/products" element={<ProductDisplayAllPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/user" element={<UserDetailsPage />} />
            <Route path="/cart" element={<AddToCartPage />} />
            <Route path="/admintable" element={<AdminTablePage />} />
            <Route path="/reset-password" element={<PasswordResetPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/emailVerify/:id/:token" element={<EmailVerifyPage/>} />
            <Route path="/sendmail" element={<SendMailPage/>} />
            <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
