import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";

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
    console.log(quantity);
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
        console.log("updated", data);
      });
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
    </div>
  );
};

export default UpdateProduct;
