import React, { useEffect, useState } from "react";

import { MdDelete, MdCancel } from "react-icons/md";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

import authHeader from "../../utils/authHeader";
import decodeToken from "../../utils/decodeToken";
import { useNavigate } from "react-router";

const AdminTable = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const config = {
    "Content-Type": "application/json",
    headers: authHeader(),
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecommerce-robust-api.herokuapp.com/api/admin/getAllUser",
          config
        );

        setUsers([
          ...data.filter(
            (ele) => ele._id.toString() != decodeToken().id.toString()
          ),
        ]);
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, []);

  let count = 1;
  const handleDeleteApproval = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://ecommerce-robust-api.herokuapp.com/api/admin/${id}/delete`,
        config
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancleDeleteApproval = async (id) => {
    try {
      const { data } = await axios.post(
        `https://ecommerce-robust-api.herokuapp.com/api/admin/${id}/cancelDeleteApproval`,
        {},
        config
      );
      window.location.reload();
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Delete Approvals</th>
        </tr>
      </thead>
      <tbody>
        {users.map((p) => {
          return (
            <tr key={p._id}>
              <td>{count++}</td>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.role}</td>
              <td>{p.gender}</td>
              <td>{p.active ? "YES" : "NO"}</td>
              <td>
                {p.deleteApproval ? (
                  <>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteApproval(p._id)}
                      className="mr-2"
                    >
                      <MdDelete />
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleCancleDeleteApproval(p._id)}
                    >
                      <MdCancel />
                    </Button>
                  </>
                ) : (
                  "NA"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AdminTable;
