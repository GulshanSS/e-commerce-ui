import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductDisplayAllPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://ecommerce-robust-api.herokuapp.com/api/getAll"
        );
        setProducts([...data]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "100px 0" }}
      >
        {products.map((e) => (
          <ProductCard
            pId={e._id}
            pImg={e.img.path}
            pName={e.name}
            pDetails={e.details}
            pPrice={e.price}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductDisplayAllPage;
