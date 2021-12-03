import React from "react";
import { Container } from "react-bootstrap";
import AdminTable from "../Components/AdminTable";
const AdminTablePage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <AdminTable />
    </Container>
  );
};

export default AdminTablePage;
