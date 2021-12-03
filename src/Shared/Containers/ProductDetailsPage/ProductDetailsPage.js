import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import decodeToken from "../../../utils/decodeToken";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";

const initialState = {
  _id: "",
  name: "",
  details: "",
  price: "",
  img: {
    path: "",
  },
  likes: {
    count: 0,
    users: [],
  },
};

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(initialState);
  const params = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://ecommerce-robust-api.herokuapp.com/api/${params.id}/details`
        );
        setProduct({
          _id: data._id,
          name: data.name,
          details: data.details,
          price: data.price,
          img: {
            path: data.img.path,
          },
          likes: {
            count: data.likes.count,
            users: data.likes.users,
          },
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <ProductDetails
        pId={product._id}
        pName={product.name}
        pDetails={product.details}
        pPrice={product.price}
        pImg={product.img.path}
        pLikes={product.likes.count}
        uLikes={
          typeof product.likes.users.find(
            (ele) => ele.toString() === decodeToken().id.toString()
          ) != "undefined"
        }
      />
    </Container>
  );
};

export default ProductDetailsPage;
