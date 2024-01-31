import { Button, Flex, Switch, Text } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { useState } from "react";
import { usePrimaryColorHex } from "../../hooks/use-primary-color";

export default function PowerControl() {
  const [checked, setChecked] = useState(false);
  const color = usePrimaryColorHex(6);

  return (
    <Flex direction="column" gap="md">
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        labelPosition="left"
        label={
          <Text c={color} fw="bold">
            Power
          </Text>
        }
        size="md"
        onLabel="Start"
        offLabel="Stop"
      />
      <Button
        w="fit-content"
        size="xs"
        disabled={checked ? false : true}
        rightSection={<IconRefresh size="1rem" />}
      >
        Reboot
      </Button>
    </Flex>
  );
}
