import { useEffect, useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { close } from "../Header/slice/menuSlice";

interface LinksGroupProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  link,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const dispatch = useDispatch();
  const route = useLocation();
  const [opened, setOpened] = useState(initiallyOpened || false);
  useEffect(() => {
    if (route.pathname.includes(label.toLowerCase())) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  }, [route.pathname]);
  const items = (hasLinks ? links : []).map((link) => (
    <Link
      className={
        route.pathname === link.link ? classes.activeLink : classes.link
      }
      onClick={() => dispatch(close())}
      to={link.link}
      key={link.label}
    >
      {link.label}
    </Link>
  ));

  return (
    <>
      {link && items && items.length === 0 && (
        <Link to={link}>
          <UnstyledButton
            onClick={() => {
              dispatch(close());
            }}
            className={
              route.pathname === link ? classes.activeControl : classes.control
            }
          >
            <Group justify="space-between" gap={0}>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <ThemeIcon variant="light" size={30}>
                  <Icon style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>

                <Box ml="md">{label}</Box>
              </Box>
            </Group>
          </UnstyledButton>
        </Link>
      )}
      {!link && items && items.length > 0 && (
        <UnstyledButton
          onClick={() => {
            setOpened((o) => !o);
          }}
          className={classes.control}
        >
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>

              <Box ml="md">{label}</Box>
            </Box>

            {hasLinks && (
              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? "rotate(-90deg)" : "none",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      )}
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
