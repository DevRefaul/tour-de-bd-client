import React from "react";
import { Link } from "react-router-dom";
import "./Sale.css";

const Sale = () => {
  return (
    <div className="w-[80%] h-auto mx-auto imageWithGradient rounded-md">
      <div className="py-8 flex justify-between flex-col lg:flex-row">
        {/* texts */}
        <div className="text-center lg:text-start">
          <h2 className="text-4xl text-cyan-400 font-bold">
            Sale up for this Winter
          </h2>
          <p className="text-xl font-semibold py-4">
            Book Me now quickly at a discount price
          </p>
        </div>
        {/* button */}
        <div className="flex justify-center items-center mt-6">
          <Link>
            <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">
              Hire Me For Your Next Trip
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
