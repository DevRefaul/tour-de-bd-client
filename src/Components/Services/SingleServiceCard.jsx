import React from "react";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const SingleServiceCard = ({ service }) => {
  const { name, img, price, description, _id, rating } = service;

  return (
    <>
      <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              className="rounded-t-lg h-60 w-full object-cover cursor-pointer"
              src={img}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            Average Ratings : {rating}{" "}
            <RiStarFill className="ml-2 text-teal-400 text-base" />
          </h4>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-400 dark:text-white">
            Tour Cost : {price} Taka
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description.slice(0, 60) + "..."}
          </p>
          <Link
            to={`/services/${_id}`}
            className="inline-flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Know more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleServiceCard;
