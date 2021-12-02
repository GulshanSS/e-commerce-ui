import axios from "axios";
import react, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import authHeader from "../../../utils/authHeader";
import decodeToken from "../../../utils/decodeToken";

const UserDetails = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecommerce-robust-api.herokuapp.com/api/customer/details",
          { headers: authHeader() }
        );
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
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
        </Card.Body>
      </Card>
    </>
  );
};

export default UserDetails;
