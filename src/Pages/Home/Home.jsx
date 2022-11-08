import React from "react";
import AboutME from "../../Components/AboutME/AboutME";
import Carousel from "../../Components/Carousel/Carousel";
import Review from "../../Components/Review/Review";
import Sale from "../../Components/Sale/Sale";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutME />
      <Sale />
      <Review />
    </div>
  );
};

export default Home;
