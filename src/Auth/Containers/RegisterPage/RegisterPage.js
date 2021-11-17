import { Container } from "react-bootstrap";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;