import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/TourdebdLOGO.png";
import { AuthConext } from "../../../Authentication/authContext";

const Header = () => {
  const { user, handleSignOut } = useContext(AuthConext);

  // menus
  const menus = ["home", "services", "blog", "contact"];

  // handle log out
  const handleLogout = () => {
    handleSignOut()
      .then((result) => toast.success("Successfully Log Out"))
      .catch((err) => toast.err(err.message));
  };

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-1 dark:bg-gray-900  border-b border-gray-200 dark:border-gray-600 sticky top-0 z-50">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-16 sm:h-16"
              alt="tour de bd logo"
            />
          </Link>
          <div className="flex md:order-2">
            {user ? (
              <Link>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="hidden md:block text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="hidden md:block text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Login
                </button>
              </Link>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 z-10"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menus?.map((menu, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/${menu}`}
                    className="block py-2 pr-4 pl-3 capitalize text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {menu}
                  </NavLink>
                </li>
              ))}
              {user ? (
                <>
                  <NavLink
                    to={`/myreviews`}
                    className="block py-2 pr-4 pl-3 capitalize text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    My reviews
                  </NavLink>
                  <NavLink
                    to={`/addservices`}
                    className="block py-2 pr-4 pl-3 capitalize text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Add Services
                  </NavLink>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
