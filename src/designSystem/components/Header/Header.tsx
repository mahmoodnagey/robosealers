import {
  Group,
  Button,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Title,
  Flex,
  Text,
} from "@mantine/core";

import classes from "./header.module.scss";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { close, open } from "./slice/menuSlice";
import { IconLogout, IconRobot } from "@tabler/icons-react";
import { usePrimaryColorHex } from "../../hooks/use-primary-color";
import { logOut } from "../../../auth/slice/user-slice";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/use-is-mobile";

export default function Header() {
  const opened = useSelector((state: RootState) => state.menu.status);
  const isUser = useSelector((state: RootState) => state.user.status);
  const dispatch = useDispatch();
  const color = usePrimaryColorHex();
  const navigate = useNavigate();
  const mobile = useIsMobile();
  return (
    <>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Flex align="center" c={color}>
            <IconRobot size={"2rem"} />
            <Title order={2}>Robosealers</Title>
          </Flex>
          {isUser && !mobile && (
            <>
              <Button
                onClick={() => {
                  dispatch(logOut());
                  navigate("/");
                }}
              >
                <Flex align="center" gap=".4rem">
                  <Text>Log out</Text>
                  <IconLogout />
                </Flex>
              </Button>
            </>
          )}
          {isUser && (
            <Burger
              opened={opened}
              onClick={() => dispatch(open())}
              hiddenFrom="sm"
              color="gray.7"
            />
          )}
        </Group>
      </header>

      <Drawer
        opened={opened}
        onClose={() => dispatch(close())}
        size="md"
        title={
          <Flex align="center" c={color}>
            <IconRobot size={"2rem"} />
            <Title order={2}>Robosealers</Title>
          </Flex>
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Sidebar />
          <Divider my="sm" />

          {isUser && (
            <Button
              ml="sm"
              onClick={() => {
                dispatch(logOut());
                dispatch(close());

                navigate("/");
              }}
            >
              <Flex align="center" gap=".4rem">
                <Text>Log out</Text>
                <IconLogout />
              </Flex>
            </Button>
          )}
        </ScrollArea>
      </Drawer>
    </>
  );
}
