import { ScrollArea } from "@mantine/core";
import { IconGauge, IconView360 } from "@tabler/icons-react";

import classes from "./sidebar.module.scss";
import { LinksGroup } from "./LinksGroup";

const mockdata = [
  { label: "Overview", icon: IconGauge, link: "/home" },
  {
    label: "Monitoring",
    icon: IconView360,
    links: [
      { label: "GPS", link: "/gps" },
      { label: "Camera Track", link: "/camera" },
      { label: "Lidar Map", link: "/lidar-map" },
      { label: "Battery", link: "/battery" },
      { label: "Motor", link: "/motor" },
      { label: "IMU", link: "/imu" },
      { label: "Sealant", link: "/sealant" },
      { label: "Light System & Blower", link: "/light-system-blower" },
    ],
  },
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
