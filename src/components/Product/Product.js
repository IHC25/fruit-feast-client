import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, price, quantity, supplier, description } = product;
  //   const shortDescription = description.slice(0, 200);
  const navigate = useNavigate();
  //   handle navigateToUpdate
  const navigateToUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col-lg-4 col-12 col-md-6">
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="overflow-hidden" style={{ height: "18rem" }}>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Price: {price} Tk</ListGroupItem>
          <ListGroupItem>Quantity: {quantity} kg</ListGroupItem>
          <ListGroupItem>Supplier: {supplier}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button onClick={() => navigateToUpdate(_id)}>Update</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
