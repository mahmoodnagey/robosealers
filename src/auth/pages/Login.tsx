import LoginHeader from "../components/LoginHeader";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";
import robotImg from "../../../shared/images/robot.jpg";
import { Box, Flex } from "@mantine/core";
export default function Login() {
  const mobile = useIsMobile();

  return (
    <>
      <Box w={mobile ? "95%" : "88%"} mx="auto">
        <Flex
          justify="space-between"
          direction={mobile ? "column" : "row"}
          gap="md"
        >
          <LoginHeader />
          <Box w={mobile ? "100%" : "48%"}>
            <img src={robotImg} alt="robot-img" width="100%" height="100%" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
