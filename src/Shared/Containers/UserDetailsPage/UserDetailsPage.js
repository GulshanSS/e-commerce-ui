import react from "react";
import UserDetails from "../../Components/UserDetails/UserDetails";
import { Container } from "react-bootstrap";

const UserDetailsPage = () => {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <UserDetails />
      </Container>
    </>
  );
};

export default UserDetailsPage;
