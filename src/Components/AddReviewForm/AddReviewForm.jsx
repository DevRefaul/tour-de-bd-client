import React from "react";
import toast from "react-hot-toast";

const AddReviewForm = ({ _id, refresh, setRefresh }) => {
  const handlePostReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const message = form.review.value;
    const reviewTime = new Date();
    const reviewedService = _id;
    const review = {
      name,
      email,
      message,
      rating,
      reviewedService,
      reviewTime,
    };

    fetch("http://localhost:5000/postreview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        const { insertedId } = data.data;
        if (insertedId) {
          toast.success("Successfully added your review");
          setRefresh(!refresh);
        }
      })
      .catch((err) => console.error(err));
    form.reset();
  };

  return (
    <div className="border-2 border-teal-400 rounded p-4">
      <h4 className="text-lg font-bold my-6 text-teal-400">Add Your Review</h4>
      <form onSubmit={handlePostReview}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name field */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
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
              placeholder="Your Email"
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
              placeholder="Your Rating"
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
            placeholder="Your Review Here"
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
  );
};

export default AddReviewForm;
