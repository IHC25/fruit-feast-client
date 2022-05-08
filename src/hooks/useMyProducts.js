import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyProducts = () => {
  const [user] = useAuthState(auth);
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    const email = user.email;
    fetch(`https://aqueous-sierra-14452.herokuapp.com/my-products?email=${email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, [user]);
  return [myProducts, setMyProducts];
};
export default useMyProducts;
