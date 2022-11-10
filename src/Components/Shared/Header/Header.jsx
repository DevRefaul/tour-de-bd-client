import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/TourdebdLOGO.png";
import { AuthConext } from "../../../Authentication/authContext";
import "./Header.css";

const Header = () => {
  const { user, handleSignOut } = useContext(AuthConext);

  // handle log out
  const handleLogout = () => {
    handleSignOut()
      .then((result) => toast.success("Successfully Log Out"))
      .catch((err) => toast.err(err.message));
  };

  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="sticky top-0 z-50 border-b"
      >
        <Navbar.Toggle className="md:mr-3 h-8" />
        <Navbar.Brand>
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="md:mr-3 h-14 sm:h-16"
              alt="tour de bd logo"
            />
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  className="border-2 rounded-full"
                  alt="User settings"
                  img={
                    user.photoURL
                      ? user.photoURL
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
                  }
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user.name ? user.name : "Anonymous"}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user.email ? user.email : "no user email"}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                {" "}
                <NavLink
                  to={`/myreviews`}
                  className="block capitalize text-black rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  My reviews
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <NavLink
                  to={`/addservices`}
                  className="block capitalize text-black rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Add Services
                </NavLink>
              </Dropdown.Item>
              {/* <Dropdown.Item>Profile</Dropdown.Item> */}
              <Dropdown.Divider />

              <Dropdown.Item>
                <Link>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="block text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Logout
                  </button>
                </Link>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="hidden md:block text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center  "
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
        <Navbar.Collapse>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">
            <button
              type="button"
              className="md:hidden text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center mt-4 "
            >
              Login
            </button>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
