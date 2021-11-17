import React from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Table } from "react-bootstrap";

const ProductTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <AiOutlineDelete /> <FaEdit />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductTable;
