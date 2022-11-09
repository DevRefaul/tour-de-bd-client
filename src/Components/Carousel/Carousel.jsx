import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const images = [
    "https://i.ibb.co/6F7CQTV/pexels-fabian-wiktor-994605-1.jpg",
    "https://i.ibb.co/gw80yn9/pexels-pixabay-247431-1.jpg",
    "https://i.ibb.co/FDdYqLB/pexels-pixabay-219998-1.jpg",
    "https://i.ibb.co/ryVsLBy/pexels-markus-spiske-129105-1.jpg",
  ];

  return (
    <div>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          pagination: false,
          height: "80vh",
          width: "100vw",
        }}
      >
        {images.map((img, idx) => (
          <SplideSlide key={idx}>
            <div className="imageOverlay h-full w-full">
              <img
                src={img}
                alt="slider img"
                className="h-full w-full object-cover relative"
              />
            </div>
            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-semibold text-white leading-[4rem] text-center">
              <span className="text-2xl">Welcome to</span> <br />{" "}
              <span className="text-5xl font-semibold text-teal-400">
                Tour De Bangladesh
              </span>
              <span className="block leading-6">
                The Best partner you get as your touring guide <br /> for
                travelling Bangladesh.
              </span>
              <Link to="/services">
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">
                  Hire Me
                </button>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
