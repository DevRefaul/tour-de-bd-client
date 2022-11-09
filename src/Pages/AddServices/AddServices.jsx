import React from "react";
import toast from "react-hot-toast";
import "./AddService.css";

const AddServices = () => {
  document.title = "Add Services-Tour DE Bangladesh";

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.image.value;
    const price = form.price.value;
    const duration = form.time.value;
    const review = form.review.value;
    const description = form.text.value;

    const service = { name, img, price, duration, review, description };
    fetch("http://localhost:5000/addservice", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        const { insertedId } = data.data;
        if (insertedId) {
          toast.success("Successfully Uploaded The Service");
        } else {
          toast.error("Can't Upload This Service");
        }
      })
      .catch((err) => console.error(err));

    form.reset();
  };

  return (
    <div className="w-[80%] mx-auto my-6">
      <h2 className="text-4xl font-bold text-teal-400 my-6 text-center">
        Add New Services
      </h2>

      <div className="w-10/12 mx-auto border-2 border-teal-400 p-10 rounded-lg">
        <form onSubmit={handleAddService} className="addServiceForm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* service name */}
            <div>
              <label htmlFor="name">Service Name :</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Service Name"
                className="block w-full py-2 px-1 outline-none border border-teal-400 focus:border-none rounded"
              />
            </div>
            {/* service price */}
            <div>
              <label htmlFor="name">Service Price :</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Service price"
                className="block w-full py-2 px-1 outline-none border border-teal-400 focus:border-none rounded"
              />
            </div>
            {/* service Duration */}
            <div>
              <label htmlFor="name">Service Duration :</label>
              <input
                type="text"
                name="time"
                id="time"
                placeholder="Service Duration How Many Days and Nights"
                className="block w-full py-2 px-1 outline-none border border-teal-400 focus:border-none rounded"
              />
            </div>
            {/* service review */}
            <div>
              <label htmlFor="name">Service Review :</label>
              <input
                type="text"
                name="review"
                id="review"
                placeholder="Service Review How much Point in 5"
                className="block w-full py-2 px-1 outline-none border border-teal-400 focus:border-none rounded"
              />
            </div>
            {/* service iamge */}
            <div>
              <label htmlFor="name">Service Image :</label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Service Image URL"
                className="block w-full py-2 px-1 outline-none border border-teal-400 focus:border-none rounded"
              />
            </div>
          </div>
          {/* description */}
          <div className="mt-4">
            <label htmlFor="name" className="block">
              Service Description :
            </label>
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              placeholder="Write down something about this service "
              className="block w-full py-2 px-1 outline-none border border-teal-400 focus:border-none rounded"
            ></textarea>
          </div>

          {/* submit btn */}
          <div className="mt-6">
            <button
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="submit"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
