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
  }, []);
  return (
    <div className="w-50 mx-auto">
      <h2>Update Product</h2>
      <Card className="w-100" style={{ width: "12rem" }}>
        <Card.Img
          className="p-2 rounded"
          height={300}
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
          <ListGroupItem>{product.quantity === 0 ? "Sold" : ""}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button>Delivered</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateProduct;
