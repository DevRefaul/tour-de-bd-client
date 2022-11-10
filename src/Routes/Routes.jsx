import { createBrowserRouter } from "react-router-dom";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import EditReview from "../Pages/EditReview/EditReview";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";
import SingelService from "../Pages/SingelService/SingelService";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://tour-de-bd-server.vercel.app/services/${params.id}`),
        element: <SingelService />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatereview/:id",
        loader: ({ params }) =>
          fetch(`https://tour-de-bd-server.vercel.app/myreviews/${params.id}`),
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
