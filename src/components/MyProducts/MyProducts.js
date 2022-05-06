import React from "react";
import { Button } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import useMyProducts from "../../hooks/useMyProducts";

const MyProducts = () => {
  const [products, setProducts] = useInventory();
  const [myProducts, setMyProducts] = useMyProducts();

  const handleDeleteMyProduct = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const deleteProduct = async (url) => {
        const response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        console.log(data);
        const productsRemaining = products.filter(
          (product) => product._id !== id
        );
        const myProductsRemaining = myProducts.filter(
          (product) => product._id !== id
        );
        setProducts(productsRemaining);
        setMyProducts(myProductsRemaining);
      };
      deleteProduct(`http://localhost:5000/inventory/${id}`);
      deleteProduct(`http://localhost:5000/my-products/${id}`);
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
