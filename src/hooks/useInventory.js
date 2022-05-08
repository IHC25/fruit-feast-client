import { useEffect, useState } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-sierra-14452.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return [products, setProducts];
};
export default useInventory;
