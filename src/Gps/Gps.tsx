import { Flex } from "@mantine/core";
import MessageFromRobot from "../designSystem/components/MessageFromRobot";
import useIsMobile from "../designSystem/hooks/use-is-mobile";
import DynamicBatteryChart from "./components/DynamicBatteryChart";
import DynamicDirectionChart from "./components/DynamicDirectionChart";
import DynamicSealantChart from "./components/DynamicSealantChart";
import DynamicRotationChart from "./components/DynamicRotationChart";
import DynamicRobotTempChart from "./components/DynamicRobotTempChart";
import DynamicSealantTempChart from "./components/DynamicSealantTempChart";
import Drawing from "./components/Drawing";
import DynamicRobotSpeedChart from "./components/DynamicRobotSpeedChart";
import TopRobotInfo from "../designSystem/components/TopRobotInfo/TopRobotInfo";

export default function Gps() {
  const mobile = useIsMobile();
  return (
    <>
      <TopRobotInfo />
      <MessageFromRobot />
      <Drawing />
      <Flex
        justify="space-between"
        direction={mobile ? "column" : "row"}
        gap="2.5rem"
        mb="2.5rem"
      >
        <DynamicDirectionChart />
        <DynamicRotationChart />
      </Flex>
      <Flex
        justify="space-between"
        direction={mobile ? "column" : "row"}
        gap="2.5rem"
        my="2.5rem"
      >
        <DynamicRobotTempChart />
        <DynamicSealantTempChart />
      </Flex>
      <Flex
        justify="space-between"
        direction={mobile ? "column" : "row"}
        gap="3rem"
        my="2.5rem"
      >
        <DynamicSealantChart />
        <DynamicBatteryChart />
        <DynamicRobotSpeedChart />
      </Flex>
    </>
  );
}
