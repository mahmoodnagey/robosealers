import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/pages/Login";
import Home from "./home";
import Battery from "./battery/pages";
import Motor from "./motor/pages";
import Camera from "./camera/pages/Camera";
import Imu from "./imu/pages";
import LidarMap from "./lidar-map/pages/LidarMap";
import Sealant from "./sealant/pages/Sealant";
import LightSystem_Blower from "./light-system-blower/pages/LightSystem_Blower";
import BaseLayout from "./design-system/BaseLayout/BaseLayout";
import Gps from "./gps";

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
      {
        path: "/lidar-map",
        element: <LidarMap />,
      },
      {
        path: "/battery",
        element: <Battery />,
      },
      {
        path: "/motor",
        element: <Motor />,
      },
      {
        path: "/camera",
        element: <Camera />,
      },
      {
        path: "/imu",
        element: <Imu />,
      },
      {
        path: "/sealant",
        element: <Sealant />,
      },
      {
        path: "/light-system-blower",
        element: <LightSystem_Blower />,
      },
    ],
  },
]);
