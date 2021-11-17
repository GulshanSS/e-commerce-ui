import React from "react";
import { Container } from "react-bootstrap";
import ProductTable from "../../Components/Table/ProductTable";
const TablePage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ProductTable />
    </Container>
  );
};

export default TablePage;
