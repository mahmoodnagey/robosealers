import { Flex } from "@mantine/core";
import { Helmet } from "react-helmet";
import useIsMobile from "../design-system/hooks/use-is-mobile";
import MainTitle from "../design-system/components/MainTitle";
import TopRobotInfo from "../design-system/components/TopRobotInfo/TopRobotInfo";
import MessageFromRobot from "../design-system/components/MessageFromRobot";
import Drawing from "./components/Drawing";
import DynamicRobotTempChart from "./components/DynamicRobotTempChart";
import DynamicBatteryChart from "../battery/components/DynamicBatteryChart";

export default function Gps() {
  const mobile = useIsMobile();
  return (
    <>
      <Helmet>
        <title>Gps</title>
      </Helmet>
      <MainTitle title="GPS" />

      <TopRobotInfo />
      <MessageFromRobot />
      <Drawing />

      <Flex
        justify="space-between"
        direction={mobile ? "column" : "row"}
        gap="2.5rem"
        my="2.5rem"
      >
        <DynamicRobotTempChart />
        {/* <DynamicSealantTempChart /> */}
      </Flex>
      <Flex
        justify="space-between"
        direction={mobile ? "column" : "row"}
        gap="3rem"
        my="2.5rem"
      >
        {/* <DynamicSealantChart /> */}
        {/* <DynamicBatteryChart /> */}
        {/* <DynamicRobotSpeedChart /> */}
      </Flex>
    </>
  );
}
