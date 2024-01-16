import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/pages/Login";
import BaseLayout from "./designSystem/BaseLayout/BaseLayout";
import Home from "./Home";
import Gps from "./Gps";

export const allRouters = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/gps",
        element: <Gps />,
      },
    ],
  },
]);
