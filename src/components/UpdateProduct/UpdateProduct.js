import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, product]);

  const handleDelivered = () => {
    const quantity = product.quantity - 1;
    const updatedProduct = { quantity };

    // send data to server to update quantity
    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Delivered Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const handleRestock = (e) => {
    e.preventDefault();
    const oldQuantity = product.quantity;
    const newQuantity = e.target.quantity.value;
    const quantity = parseInt(oldQuantity) + parseInt(newQuantity) + "";
    const updatedProduct = { quantity };

    // send data to server to restock product
    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Restocked Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    e.target.reset();
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Update Product</h2>
      <Card className="w-100" style={{ width: "12rem" }}>
        <Card.Img
          className="p-2 rounded mx-auto"
          style={{ width: "60%" }}
          variant="top"
          src={product.img}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-start">{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {product.price} Tk</ListGroupItem>
          <ListGroupItem>Quantity: {product.quantity} kg</ListGroupItem>
          <ListGroupItem>Supplier: {product.supplier}</ListGroupItem>
        </ListGroup>
        <p
          className={product.quantity === 0 ? "text-success fw-bold" : "d-none"}
        >
          Sold
        </p>
        <Card.Body>
          <Button onClick={handleDelivered}>Delivered</Button>
        </Card.Body>
      </Card>
      <form onSubmit={handleRestock}>
        <input
          type="number"
          className="m-2"
          name="quantity"
          placeholder="Enter Quantity"
          required
        />
        <Button as="input" type="submit" value="Restock" size="sm" />
      </form>
      <Button
        style={{ textDecoration: "none" }}
        variant="link"
        size="lg"
        as={Link}
        to="/manage"
      >
        Manage Inventories
      </Button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default UpdateProduct;
