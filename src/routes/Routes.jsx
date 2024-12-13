import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import LandingPage from "../pages/LandingPage";

const createRouter = createBrowserRouter([
  {
    path: "/asdas",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Routes = () => {
  return <RouterProvider router={createRouter} />;
};

export default Routes;
