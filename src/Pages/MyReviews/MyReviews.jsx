import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthConext } from "../../Authentication/authContext";
import Loading from "../Loading/Loading";

const MyReviews = () => {
  document.title = "My Reviews-Tour DE Bangladesh";

  // refresh state
  const [refresh, setRefresh] = useState(false);

  // loading state
  const [loading, setLoading] = useState(true);

  // data state
  const [reviews, setReviews] = useState([]);

  const { user, photoURL } = useContext(AuthConext);
  const { email } = user;

  useEffect(() => {
    fetch(`https://tour-de-bd-server.vercel.app/myreviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [email, refresh]);

  // console.log(reviews);

  // delete review section
  const handleDeleteReview = (id) => {
    //   getting confirmation from user
    const confirm = window.confirm("Confirm Delete This Review");

    if (confirm) {
      fetch(`https://tour-de-bd-server.vercel.app/deletereview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          const { deletedCount } = data.data;
          if (deletedCount > 0) {
            setRefresh(!refresh);
            toast.success("Successfully Deleted The Review");
          }
        })
        .catch((err) => console.error(err));
    } else {
      toast.error("Can't Delete This Review");
    }
  };

  return (
    <div className="w-[80%] mx-auto my-10 min-h-[70vh]">
      <h2 className="text-2xl font-bold text-center text-teal-400 my-4">
        Here is all your reviews
      </h2>

      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          {/* reviews section */}
          {reviews.length ? (
            <div>
              {reviews.map((review, idx) => {
                const { _id, name, message, rating } = review;
                return (
                  <div key={idx}>
                    <div className="border border-teal-300 p-4 rounded my-4">
                      <div className="md:flex items-center">
                        {/* image div */}
                        <div className="flex justify-center">
                          <img
                            src={
                              photoURL
                                ? photoURL
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                            }
                            alt={name + "photo"}
                            className="w-16 h-16 border-2 border-teal-600 rounded-full"
                          />
                        </div>
                        {/* content div */}
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                          {/* user infos */}
                          <div>
                            <h2 className="text-lg font-semibold md:ml-6">
                              {name ? name : "Anonymous"}
                            </h2>
                            <h4 className="text-lg font-semibold md:ml-6">
                              Rating :{" "}
                              {rating ? rating : "No ratings were added"}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="my-3 italic ">
                        <p>{message}</p>
                      </div>

                      {/* buttons */}
                      <div className="md:flex justify-end w-full mt-4">
                        {/* update btn */}
                        <Link to={`/updatereview/${_id}`}>
                          <button className="block text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Update Review
                          </button>
                        </Link>

                        {/* delete btn */}
                        <button
                          onClick={() => handleDeleteReview(_id)}
                          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Delete Review
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-teal-400 text-center">
                No Reviews were found
              </h2>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyReviews;
