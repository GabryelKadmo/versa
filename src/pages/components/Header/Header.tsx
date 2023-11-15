import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  Header,
  ScrollArea,
  createStyles,
  rem,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
//---------
import { Link } from "react-router-dom";
import Carrinho from "../Cart/Carrinho";
import "./Header.css";
import { IconShirtFilled } from '@tabler/icons-react';
import { PiPantsFill } from "react-icons/pi";
import { PiCoatHangerBold } from "react-icons/pi";
import { GiPirateCoat } from "react-icons/gi";
import AppContext from "../Context/AppContext";
import { useContext } from "react";


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
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

export default function HeaderMegaMenu() {

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();

  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { produtos, setSearchResults } = context

  function AddResultCalça(){
    const valueOp = "calça";
    const filteredProducts = produtos.filter((product) => product.categoria.toLowerCase().includes(valueOp));
      setSearchResults(filteredProducts);
  }

  function AddResultCamisa(){
    const valueOp = "camisa";
    const filteredProducts = produtos.filter((product) => product.categoria.toLowerCase().includes(valueOp));
      setSearchResults(filteredProducts);
  }

  function AddResultMoletom(){
    const valueOp = "moletom";
    const filteredProducts = produtos.filter((product) => product.categoria.toLowerCase().includes(valueOp));
      setSearchResults(filteredProducts);
  }

  function AddResultProdutos(){
    setSearchResults([]);
  }

  return (
    <Box pb={40}>
      <Header height={60} px="md" sx={{ position: 'fixed'}}>
        <Group  position="apart" sx={{ height: "100%" }}>
          <Group 
          // className="bordinha_teste_header" 
          w={{base:0, xs: 150, sm: 150, md: 150, lg: 150, xl:150}}
          >            
          <a href="/" id="versaLogo" className={classes.link}>
            VERSA
          </a>
          </Group>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
            // className={"bordinha_teste_header"}
            ml={{base:10, sm: 30, md: 50, lg: 70, xl:90}}
            
            // ml={300}
          >
            <a href="/" id="header-things" className={classes.link}>
              Home
            </a>
            <Menu width={200}>

              <Menu.Target>
                <UnstyledButton className={classes.link}>
                  <Text id="header-things">
                    Produtos  
                  </Text>      
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Geral</Menu.Label>
                
                {/* <Menu.Item icon={<PiCoatHangerBold size={14} />}>
                  <a href="/produtos" className="texto_op_produto">
                    Produtos
                  </a>
                </Menu.Item> */}
                <Link to={"/produtos"} className="off_sublinhado">
                    <Menu.Item onClick={AddResultProdutos} icon={<PiCoatHangerBold size={14} />}>
                      <Text className="texto_op_produto" >
                        Produtos
                      </Text>
                    </Menu.Item>
                  </Link>
                
                <Menu.Divider />

                <Menu.Label>
                  Roupas
                </Menu.Label>
              
                  <Link to={"/calcas"} className="off_sublinhado">
                    <Menu.Item  onClick={AddResultCalça} icon={<PiPantsFill size={14} />}>
                      <Text className="texto_op_produto" >
                        Calças
                      </Text>
                    </Menu.Item>
                  </Link>
              
               
                  <Link to={"/camisas"} className="off_sublinhado">
                    <Menu.Item onClick={AddResultCamisa} icon={<IconShirtFilled size={14} />}>
                      <Text className="texto_op_produto" >
                        Camisas
                      </Text>
                    </Menu.Item>
                  </Link>
          
              
                  <Link to={"/moletoms"} className="off_sublinhado">
                    <Menu.Item onClick={AddResultMoletom} icon={<GiPirateCoat size={14} />}>
                      <Text className="texto_op_produto" >
                        Moletons
                      </Text>
                    </Menu.Item>
                  </Link>
          

              </Menu.Dropdown>

            </Menu>
            <a href="/pacotes" id="header-things" className={classes.link}>
              Pacotes
            </a>
          </Group>

          <Group className="align_button_mobile" >
            <Carrinho />
            <Group className={classes.hiddenMobile}>
              <Link to="/Login" id="LoginButton">Entrar</Link>
            </Group>
          </Group>

          <Burger
            ml={-180}
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
        title="VERSA"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="/" className={classes.link}>
            Home
          </a>
          <a href="/produtos" className={classes.link}>
            Produtos
          </a>
          <a href="/pacotes" className={classes.link}>
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
