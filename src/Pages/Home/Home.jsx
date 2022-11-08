import React from "react";
import AboutME from "../../Components/AboutME/AboutME";
import Carousel from "../../Components/Carousel/Carousel";
import Sale from "../../Components/Sale/Sale";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutME />
      <Sale />
    </div>
  );
};

export default Home;
