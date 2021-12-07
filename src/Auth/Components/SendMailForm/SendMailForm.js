import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Form, Button, Spinner } from "react-bootstrap";

const SendMailFrom = () => {
    return(
        <>
        <Container>
          <h3 className="text-center">Send Mail</h3>
          <Form >
            <Row className="d-flex justify-content-center align-items-center">
              <Form.Group
                className="mb-3 col-6"
                controlId="Email"
                style={{ maxWidth: "350px" }}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value=""
                  placeholder="Email"
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="success"
                type="submit"
                style={{ width: "120px", height: "50px" }}
              >
                Send
              </Button>
            </div>
          </Form>
        </Container>
      </>
    )
};
export default SendMailFrom;
