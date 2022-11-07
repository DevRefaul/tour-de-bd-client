import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
