import { Flex, RingProgress, Text, Title } from "@mantine/core";
import useIsMobile from "../../designSystem/hooks/use-is-mobile";

export default function DynamicRobotSpeedChart() {
  const volume = 60;
  const mobile = useIsMobile();
  return (
    <>
      <Flex direction="column" align="center" w={mobile ? "100%" : "33%"}>
        <Title order={4} c="gray.7">
          Robot Speed
        </Title>

        <RingProgress
          size={160}
          thickness={7}
          sections={[
            {
              value: volume,
              color:
                volume < 100 && volume > 70
                  ? "green"
                  : volume < 70 && volume > 35
                  ? "yellow"
                  : "red",
              tooltip: `${volume}Gm`,
            },
          ]}
          label={
            <Text
              ta="center"
              c={
                volume < 100 && volume > 70
                  ? "green"
                  : volume < 70 && volume > 35
                  ? "yellow"
                  : "red"
              }
              fw={700}
              size="xl"
            >
              {volume} M/H
            </Text>
          }
        />
      </Flex>
    </>
  );
}
