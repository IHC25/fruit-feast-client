import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyProducts = () => {
  const [user] = useAuthState(auth);
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/my-products?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, [user]);
  return [myProducts, setMyProducts];
};
export default useMyProducts;
