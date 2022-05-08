import React from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user] = useAuthState(auth);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const email = user?.email;
    const name = e.target.name.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const supplier = e.target.supplier.value;
    const newProduct = {
      email,
      name,
      img,
      description,
      quantity,
      price,
      supplier,
    };
    fetch("https://aqueous-sierra-14452.herokuapp.com/inventory/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("New Product Added.");
      });

    fetch("https://aqueous-sierra-14452.herokuapp.com/my-products/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {});

    e.target.reset();
  };
  return (
    <div className="container my-5">
      <h2 className="pt-4">Add New Product</h2>
      <form onSubmit={handleAddProduct} className="p-2 mb-5">
        <input
          className="px-5 my-2 w-50"
          type="text"
          name="name"
          placeholder="Product Name"
          required
        />
        <br />
        <input
          className="px-5 my-2 w-50"
          type="text"
          name="img"
          placeholder="Product Image URL"
          required
        />
        <br />
        <textarea
          className="px-5 my-2 w-50"
          type="text"
          name="description"
          placeholder="Product Description"
          required
        />
        <br />
        <input
          className="px-5 my-2 w-50"
          type="number"
          name="price"
          placeholder="Product Price"
          required
        />
        <br />
        <input
          className="px-5 my-2 w-50"
          type="number"
          name="quantity"
          placeholder="Product Quantity"
          required
        />
        <br />
        <input
          className="px-5 my-2 w-50"
          type="text"
          name="supplier"
          placeholder="Supplier Name"
          required
        />
        <br />
        <Button type="submit" variant="primary">
          Add Product
        </Button>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default AddProduct;
