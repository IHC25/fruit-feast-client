import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";

const ManageInventories = () => {
  let count = 1;
  const [products, setProducts] = useInventory();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://aqueous-sierra-14452.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h2 className="py-2">Manage Inventories</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{count++}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.supplier}</td>
              <td>
                <Button
                  onClick={() => handleDelete(product._id)}
                  variant="danger"
                  size="small"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => navigate("/add")} variant="primary" size="lg">
        ADD NEW PRODUCT
      </Button>
    </div>
  );
};

export default ManageInventories;
