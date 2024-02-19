import { ScrollArea } from "@mantine/core";
import {
  IconChartAreaLine,
  IconGauge,
  IconMessage,
  IconView360,
} from "@tabler/icons-react";

import classes from "./sidebar.module.scss";
import { LinksGroup } from "./LinksGroup";

const mockdata = [
  { label: "Overview", icon: IconGauge, link: "/home" },
  {
    label: "Monitoring",
    icon: IconView360,
    links: [
      { label: "GPS", link: "/monitoring/gps" },
      { label: "Camera Track", link: "/monitoring/camera" },
      { label: "Lidar Map", link: "/monitoring/lidar-map" },
      { label: "Battery", link: "/monitoring/battery" },
      { label: "Motor", link: "/monitoring/motor" },
      { label: "IMU", link: "/monitoring/imu" },
      { label: "Sealant", link: "/monitoring/sealant" },
      {
        label: "Light System & Blower",
        link: "/monitoring/light-system-blower",
      },
    ],
  },
  {
    label: "Statistics",
    icon: IconChartAreaLine,
    links: [
      { label: "All Operations", link: "/statistics/all-operations" },
      { label: "Distance", link: "/statistics/distance" },
      { label: "Running Hours", link: "/statistics/running-hours" },
      { label: "Sealant Volume", link: "/statistics/sealant-volume" },
      { label: "Cracks Number", link: "/statistics/cracks-number" },
      { label: "Cracks Volume", link: "/statistics/cracks-volume" },
      { label: "Chart & Graphs", link: "/statistics/chart-graphs" },
    ],
  },
  { label: "Raw Data", icon: IconMessage, link: "/raw-data" },
];

export default function Sidebar() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      {/* <div className={classes.footer}>
        <Flex align="center" gap=".3rem" bg={color}>
          <Avatar color="white" />
          <Title c="white" order={5}>
            User
          </Title>
        </Flex>
      </div> */}
    </nav>
  );
}
