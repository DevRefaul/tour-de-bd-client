import React, { useContext, useEffect, useState } from "react";
import { AuthConext } from "../../Authentication/authContext";

const ServiceReviewSection = ({ _id, refresh }) => {
  const { user } = useContext(AuthConext);
  const [reviewData, setReviewData] = useState([]);

  const { displayName, photoURL } = user;

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data.data);
      })
      .catch((err) => console.error(err));
  }, [refresh, _id]);

  return (
    <div className="my-6">
      {reviewData.length ? (
        <div>
          {reviewData.map((review, idx) => (
            <div key={idx}>
              <div className="border border-teal-300 p-4 rounded my-4">
                <div className="flex items-center">
                  {/* image div */}
                  <div>
                    <img
                      src={
                        photoURL
                          ? photoURL
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                      }
                      alt={displayName + "photo"}
                      className="w-16 h-16 border-2 border-teal-600 rounded-full"
                    />
                  </div>
                  {/* content div */}
                  <div>
                    <h2 className="text-lg font-semibold ml-6">
                      {review.name ? review.name : "Anonymous"}
                    </h2>
                    <h4 className="text-lg font-semibold ml-6">
                      Rating :{" "}
                      {review.rating ? review.rating : "No ratings were added"}
                    </h4>
                  </div>
                </div>

                <div className="mt-3 italic ">
                  <p>{review.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-teal-400 text-center">
            No Reviews were found
          </h2>
        </>
      )}
    </div>
  );
};

export default ServiceReviewSection;
