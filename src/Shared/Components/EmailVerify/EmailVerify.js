import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner, Row, Col } from "react-bootstrap";

const EmailVerify = () => {
  const [result, setResult] = useState({
    success: "red",
    msg1: "Sorry",
    msg2: "An Error Occured",
  });
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    try {
      setLoading(true);
      (async () => {
        const { data } = await axios.get(
          `https://ecommerce-robust-api.herokuapp.com/api/verify/${params.id}/${params.token}`
        );
      })();
      setLoading(false);
      setResult({
        success: "green",
        msg1: "Thank you!",
        msg2: "Your Email has been registered successfully",
      });
    } catch (err) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <Col>
          <Row>
            <h1 style={{ color: `${result.success}`, fontWeight: "bold" }}>{result.msg1}</h1>
          </Row>
          <Row>
            <p>
              <h4>{result.msg2}</h4>
            </p>
          </Row>
        </Col>
      )}
    </>
  );
};

export default EmailVerify;
