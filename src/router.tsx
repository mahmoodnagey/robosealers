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
import Distance from "./distance/pages/Distance";
import RunningHours from "./running-hours/pages/RunningHours";
import SealantVolume from "./sealant-volume/pages/SealantVolume";
import CracksNumber from "./cracks-number/pages/CracksNumber";
import CracksVolume from "./cracks-volume/pages/CracksVolume";
import Chart_Graphs from "./chart-graphs/pages/Chart_Graphs";
import AllOperations from "./all-operations/pages/AllOperations";
import Roles from "./roles/pages/Roles";

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
        path: "/statistics/all-operations",
        element: <AllOperations />,
      },
      {
        path: "/statistics/distance",
        element: <Distance />,
      },
      {
        path: "/statistics/running-hours",
        element: <RunningHours />,
      },
      {
        path: "/statistics/sealant-volume",
        element: <SealantVolume />,
      },
      {
        path: "/statistics/cracks-number",
        element: <CracksNumber />,
      },
      {
        path: "/statistics/cracks-volume",
        element: <CracksVolume />,
      },
      {
        path: "/statistics/chart-graphs",
        element: <Chart_Graphs />,
      },
      {
        path: "/roles",
        element: <Roles />,
      },
      {
        path: "/raw-data",
        element: <RawData />,
      },
    ],
  },
]);
