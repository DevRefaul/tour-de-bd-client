import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthConext } from "../Authentication/authContext";
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthConext);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    console.log("private route hitted");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
