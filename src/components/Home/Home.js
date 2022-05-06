import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <Contact></Contact>
    </div>
  );
};

export default Home;
