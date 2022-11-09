import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleServiceCard from "./SingleServiceCard";

const Services = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/serviceshome")
      .then((res) => res.json())
      .then((data) => setDatas(data.data));
  }, []);

  console.log(datas);

  return (
    <div className="my-10 w-[80%] mx-auto">
      <h2 className="text-4xl font-bold text-teal-400 my-6 text-center">
        My Tour Guide Services
      </h2>
      {/* services */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {datas?.map((service, idx) => (
          <SingleServiceCard key={idx} service={service} />
        ))}
      </div>
      {/* services */}

      <div className="flex justify-center mt-6">
        <Link to="/services">
          <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
            See My All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
