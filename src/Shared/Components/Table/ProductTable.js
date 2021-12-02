import React, { useEffect, useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

import authHeader from "../../../utils/authHeader";
import { useNavigate } from "react-router";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const config = {
    "Content-Type": "application/json",
    headers: authHeader(),
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecommerce-robust-api.herokuapp.com/api/vendor/products",
          config
        );
        setProducts([...data]);
      } catch (err) {
        console.log(err.response);
      }
    })();
  }, []);
  let count = 1;
  const handleDeleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://ecommerce-robust-api.herokuapp.com/api/vendor/${id}/delete`,
        config
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProduct = (id) => {
    navigate(`/productUpdate/${id}`);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Section</th>
          <th>Details</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => {
          return (
            <tr>
              <td>{count++}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.section}</td>
              <td>{p.details}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(p._id)}
                  className="mr-2"
                >
                  <AiOutlineDelete />
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleEditProduct(p._id)}
                >
                  <FaEdit />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ProductTable;
