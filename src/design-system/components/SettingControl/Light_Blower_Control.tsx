import { Flex, Switch, Text } from "@mantine/core";
import { usePrimaryColorHex } from "../../hooks/use-primary-color";

export default function Light_Blower_Control() {
  const color = usePrimaryColorHex(6);
  return (
    <>
      <Flex direction="column" gap="md">
        <Switch
          labelPosition="left"
          label={
            <Text c={color} fw="bold">
              Light System
            </Text>
          }
          size="md"
          onLabel="ON"
          offLabel="OFF"
        />
        <Switch
          labelPosition="left"
          label={
            <Text c={color} fw="bold">
              Blower System
            </Text>
          }
          size="md"
          onLabel="Start"
          offLabel="Stop"
        />
      </Flex>
    </>
  );
}
