import jwtDecode from "jwt-decode";
import authHeader from "./authHeader";
export default () => {
  const { id, role } = jwtDecode(authHeader().Authorization);
  return {
    id,
    role,
  };
};
