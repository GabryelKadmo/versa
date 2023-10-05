import {
  Box,
  Burger,
  Button,
  Center,
  Divider,
  Drawer,
  Group,
  Header,
  Input,
  ScrollArea,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
//---------
import { Link } from "react-router-dom";
import Carrinho from "../Cart/Carrinho";
import "./Header.css";

// const [mostrarHeader, setMostrarHeader] = useState(true);

//---------
const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <a
            href="https://versa-blond.vercel.app/"
            id="versaLogo"
            className={classes.link}
          >
            VERSA
          </a>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="/" id="header-things" className={classes.link}>
              Home
            </a>

            <a href="/Novidades" id="header-things" className={classes.link}>
              Novidades
            </a>
            <a href="#" id="header-things" className={classes.link}>
              Camisas
            </a>
            <a href="#" id="header-things" className={classes.link}>
              Moletons
            </a>
            <a href="#" id="header-things" className={classes.link}>
              Pacotes
            </a>
          </Group>

          <Input
            placeholder={"Pesquisar"}
            // className="input-iconeLupa"
            icon={<IconSearch size={16} />}
          ></Input>

          <Group className={classes.hiddenMobile}>
            <Carrinho />
            <Link to="/Login" id="LoginButton">
              Entrar
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Novidades
              </Box>
            </Center>
          </UnstyledButton>
          <a href="#" className={classes.link}>
            Camisas
          </a>
          <a href="#" className={classes.link}>
            Moletons
          </a>
          <a href="#" className={classes.link}>
            Pacotes
          </a>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button
              onClick={() => (window.location.href = "/Login")}
              variant="default"
            >
              Entrar
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
