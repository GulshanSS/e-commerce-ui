import axios from "axios";
import react, { useEffect, useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import authHeader from "../../../utils/authHeader";
import decodeToken from "../../../utils/decodeToken";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const config = { headers: authHeader() };
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecommerce-robust-api.herokuapp.com/api/customer/details",
          config
        );
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const handleDeleteApproval = async () => {
    try {
      const { data } = await axios.post(
        "https://ecommerce-robust-api.herokuapp.com/api/vendor/deleteApproval",
        {},
        config
      );
      console.log(data);
      window.location.reload();
    } catch (err) {
      console.log(err.response);
    }
  };
  const handleResetPassword = () => {
    navigate("/reset-password");
  };
  return (
    <>
      <Card style={{ maxWidth: "480px" }}>
        <Card.Header>
          <h3>User Details</h3>
        </Card.Header>
        <Card.Body>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Mobile No: {user.mobile_no}</p>
          <p>Role: {user.role}</p>
          <p>Address: {user.address}</p>
          <p>Gender: {user.gender}</p>
          <p>Active: {user.active ? "Yes" : "No"}</p>
          {decodeToken().role === "vendor" ? (
            <p>
              Send Delete Approval{" "}
              <Button
                disabled={user.deleteApproval ? true : false}
                onClick={handleDeleteApproval}
                variant="danger"
              >
                Request
              </Button>
            </p>
          ) : null}
          <p>
            Password Reset:{" "}
            <Button onClick={handleResetPassword} variant="warning">
              RESET
            </Button>
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserDetails;
