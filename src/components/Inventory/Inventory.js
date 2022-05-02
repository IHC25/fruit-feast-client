import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <h1>Inventory</h1>
      <div className="row p-3">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <Button
        style={{ textDecoration: "none" }}
        variant="link"
        size="lg"
        as={Link}
        to="/manage"
      >
        Manage Inventories
      </Button>
    </div>
  );
};

export default Inventory;
