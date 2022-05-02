import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";

const ManageInventories = () => {
  let [count, setCount] = useState(1);
  const [products] = useInventory();

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
            <tr>
              <td>{count++}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.supplier}</td>
              <td>
                <Button variant="danger" size="small">
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
