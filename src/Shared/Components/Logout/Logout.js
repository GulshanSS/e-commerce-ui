import { useNavigate } from "react-router-dom";
import removeHeader from "../../../utils/removeHeader";
import LoginPage from "../../../Auth/Containers/LoginPage/LoginPage";

const Logout = () => {
  const navigate = useNavigate();
  removeHeader();
  navigate("/login");
  return <LoginPage/>
};

export default Logout;
