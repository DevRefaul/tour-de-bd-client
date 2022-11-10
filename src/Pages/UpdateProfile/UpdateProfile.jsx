import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthConext } from "../../Authentication/authContext";

const UpdateProfile = () => {
  const { user, handleUpdateProfile } = useContext(AuthConext);

  const navigate = useNavigate();

  const handleUpdateUserDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    handleUpdateProfile(name, photo)
      .then((result) => {
        console.log(result);
        toast.success("Profile Updated Successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex justify-center items-center my-8">
          <img
            className="w-20 h-20 rounded-full border-2 border-teal-400"
            src={
              user.photoURL
                ? user.photoURL
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
            }
            alt=""
          />
        </div>

        <form
          onSubmit={handleUpdateUserDetails}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-800">
              User Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={user.displayName ? user.displayName : "Anonymous"}
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-gray-800 focus:border-teal-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={user.email}
              className="w-full px-4 py-3 rounded-md border-gray-700  text-white focus:border-teal-400 bg-slate-400"
              disabled
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-800">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Your image URl"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-gray-800 focus:border-teal-400"
            />
          </div>
          <button
            type="submit"
            className="block w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
