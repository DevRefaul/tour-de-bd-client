import React from "react";
import AboutME from "../../Components/AboutME/AboutME";
import Carousel from "../../Components/Carousel/Carousel";
import ReadBlogs from "../../Components/ReadBlogs/ReadBlogs";
import Review from "../../Components/Review/Review";
import Sale from "../../Components/Sale/Sale";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Services />
      <AboutME />
      <Sale />
      <Review />
      <ReadBlogs />
    </div>
  );
};

export default Home;
