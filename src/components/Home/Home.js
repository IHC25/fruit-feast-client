import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Inventory from "../Inventory/Inventory";
import TopProduct from "../TopProduct/TopProduct";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <TopProduct></TopProduct>
      <Contact></Contact>
    </div>
  );
};

export default Home;
