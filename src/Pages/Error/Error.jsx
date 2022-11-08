import React from "react";
import erroranim from "./erroranim.json";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  document.title = "Error-Tour DE Bangladesh";
  const errorInfo = useRouteError();
  const { status, statusText } = errorInfo;
  console.log(errorInfo);

  return (
    <div className="flex justify-center items-center h-screen text-center">
      <div>
        <Lottie animationData={erroranim} />
        <h2 className="text-5xl text-red-600 font-bold my-6">{status}</h2>
        <p className="text-lg font-semibold mb-6">
          {statusText} <br />
          An unknown error has occured
        </p>
        <Link to="/">
          <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Go to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
