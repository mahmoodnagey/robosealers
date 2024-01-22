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
import RawData from "./raw-data/pages/RawData";

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
        path: "/monitoring/gps",
        element: <Gps />,
      },
      {
        path: "/monitoring/lidar-map",
        element: <LidarMap />,
      },
      {
        path: "/monitoring/battery",
        element: <Battery />,
      },
      {
        path: "/monitoring/motor",
        element: <Motor />,
      },
      {
        path: "/monitoring/camera",
        element: <Camera />,
      },
      {
        path: "/monitoring/imu",
        element: <Imu />,
      },
      {
        path: "/monitoring/sealant",
        element: <Sealant />,
      },
      {
        path: "/monitoring/light-system-blower",
        element: <LightSystem_Blower />,
      },
      {
        path: "/raw-data",
        element: <RawData />,
      },
    ],
  },
]);
