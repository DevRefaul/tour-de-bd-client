import React from "react";
import { Link } from "react-router-dom";

const SingleServiceCard = ({ service }) => {
  const { name, img, price, description, _id } = service;
  console.log(_id);

  return (
    <>
      <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/">
          <img
            className="rounded-t-lg h-60 w-full object-cover"
            src={img}
            alt=""
          />
        </Link>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-400 dark:text-white">
            Price : {price}
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
