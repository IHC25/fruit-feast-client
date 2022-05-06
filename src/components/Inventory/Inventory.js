import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import Product from "../Product/Product";

const Inventory = () => {
  const [products] = useInventory();

  return (
    <div className="container mt-5">
      <h1>Inventory</h1>
      <div className="row m-0 p-0 g-3">
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
