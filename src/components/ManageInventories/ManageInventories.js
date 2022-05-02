import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";

const ManageInventories = () => {
  let [count, setCount] = useState(1);
  const [products, setProducts] = useInventory();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((service) => service._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default ManageInventories;
