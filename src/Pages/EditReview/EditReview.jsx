import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditReview = () => {
  // getting the old data
  const oldReview = useLoaderData();

  const naviagte = useNavigate();

  const { name, email, message, _id, rating } = oldReview.data;

  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const message = form.review.value;
    const updatedReview = { name, email, message, rating };

    fetch(`https://tour-de-bd-server.vercel.app/updatereview/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        const { modifiedCount } = data.data;
        if (modifiedCount) {
          toast.success("Successfully Updated The Review");
          naviagte("/myreviews");
        } else {
          toast.error("Can't Update The Review");
        }
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="border-2 border-teal-400 rounded p-4">
        <h4 className="text-lg font-bold my-6 text-teal-400">
          Update Your Review
        </h4>
        <form onSubmit={handleUpdateReview}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name field */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                id="name"
                className="w-full px-2 py-1 rounded"
                required
              />
            </div>
            {/* email field */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                defaultValue={email}
                name="email"
                id="email"
                className="w-full px-2 py-1 rounded"
                required
              />
            </div>
            {/* rating field */}
            <div>
              <label htmlFor="email">Rating</label>
              <input
                type="text"
                defaultValue={rating}
                name="rating"
                id="rating"
                className="w-full px-2 py-1 rounded"
                required
              />
            </div>
          </div>
          {/* textarea field */}
          <div className="mt-4">
            <label htmlFor="review">Your Review</label>
            <textarea
              className="block w-full rounded"
              defaultValue={message}
              name="review"
              id="review"
              cols="30"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="submit"
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
