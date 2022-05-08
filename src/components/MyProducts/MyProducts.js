import React from "react";
import { Button } from "react-bootstrap";
import useMyProducts from "../../hooks/useMyProducts";

const MyProducts = () => {
  const [myProducts, setMyProducts] = useMyProducts();

  const handleDeleteMyProduct = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
        const url = `http://localhost:5000/my-products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = myProducts.filter((product) => product._id !== id);
            setMyProducts(remaining);
          });
    }
  };

  return (
    <div className="container" style={{ height: "530px" }}>
      <h2>My Products</h2>

      {myProducts.map((myProduct) => (
        <div
          className="d-flex align-items-center justify-content-evenly border"
          key={myProduct._id}
        >
          <img
            style={{ height: "50px", width: "50px" }}
            src={myProduct.img}
            alt=""
          />
          <p className="fw-bold">{myProduct.name}</p>
          <Button
            onClick={() => handleDeleteMyProduct(myProduct._id)}
            variant="danger"
            size="sm"
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
