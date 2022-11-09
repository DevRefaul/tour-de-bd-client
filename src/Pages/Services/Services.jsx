import React, { useEffect, useState } from "react";
import SingleServiceCard from "../../Components/Services/SingleServiceCard";

const Services = () => {
  document.title = "Services-Tour DE Bangladesh";

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setDatas(data.data));
  }, []);

  return (
    <div className="w-[80%] mx-auto my-10">
      <h2 className="text-3xl font-bold text-teal-400 my-4 text-center">
        This is services page
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {datas?.map((service, idx) => (
          <SingleServiceCard key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
