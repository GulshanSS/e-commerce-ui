import { Container } from "react-bootstrap";
import LoginForm from "../../Components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
