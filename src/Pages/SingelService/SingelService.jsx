import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { RiStarFill } from "react-icons/ri";
import ServiceReviewSection from "../../Components/ServiceReviewSection/ServiceReviewSection";
import { AuthConext } from "../../Authentication/authContext";
import AddReviewForm from "../../Components/AddReviewForm/AddReviewForm";
import { PhotoProvider, PhotoView } from "react-photo-view";

const SingelService = () => {
  const service = useLoaderData();

  // refresh state for refreshing useffect dataa loader
  const [refresh, setRefresh] = useState(false);

  const { user } = useContext(AuthConext);

console.log(user);

const { name, price, img, description, duration, rating, _id } = service.data;
document.title = `${name}-Tour De Bangladesh`;

return (
  <div className="w-[80%] mx-auto my-10">
    <div>
      <h2 className="text-3xl font-semibold">{name}</h2>
      <div className="w-[50%]">
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              alt={name + "image"}
              className="w-full my-4 cursor-pointer"
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <h4 className="text-xl font-semibold mb-4">
        Duration Of This Tour : {duration}
      </h4>
      <h4 className="text-xl font-semibold mb-4 flex items-center">
        Average Ratings : {rating}{" "}
        <RiStarFill className="ml-2 text-teal-400 text-base" />
      </h4>
      <p className="text-lg font-medium py-3">{description}</p>
      <h2 className="text-2xl font-bold text-teal-400 mt-4">Price : {price}</h2>
    </div>

    {/* review section */}
    <div className="mt-8 border-t border-teal-600">
      <h2 className="text-2xl font-semibold text-teal-400 my-4">
        Previous Tour Reviews
      </h2>
      <ServiceReviewSection _id={_id} refresh={refresh} />

      {user?.uid ? (
        <>
          <AddReviewForm
            name={name}
            _id={_id}
            setRefresh={setRefresh}
            refresh={refresh}
          />
        </>
      ) : (
        <>
          <Link to="/login" className="block">
            <button className=" w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Please Login To Give Your Review
            </button>
          </Link>
        </>
      )}
    </div>
  </div>
);
};

export default SingelService;
