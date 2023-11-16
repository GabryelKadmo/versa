import "./SessaoFP.css";
import {
  Flex,
  SimpleGrid,
  Accordion,
  Checkbox,
  Space,
  Anchor,
  Radio,
  Group,
  Rating,
  Slider,
  Pagination,
  Text,
  createStyles,
  rem,
  Burger,
  Drawer,
} from "@mantine/core";
import Produtos from "../Produto/Produtos";
import AppContext from "../Context/AppContext";
import { ChangeEvent, useContext, useState } from "react";
import SearchResult from "../../SearchResult/SearchResult";
import { useDisclosure } from "@mantine/hooks";

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

export function MeioFiltroProduto() {

  const [, setFiltroOn] = useState(true);

  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }


  const { produtos, searchResults, setSearchResults } = context

  const camisetaOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    const checkOn = e.target.checked;
    setFiltroOn(checkOn);

    if (checkOn) {
      setFiltroOn(true);
      const camiseta = 'camiseta';
      const filteredProducts = produtos.filter((product) =>
        product.categoria.toLowerCase().includes(camiseta)
      );
      setSearchResults(filteredProducts);
    } else {
      setFiltroOn(false);
      // Se desejar, pode limpar a lista de resultados aqui quando o checkbox for desmarcado.
      setSearchResults([]);
    }

  };

  const camisaOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    const checkOn = e.target.checked;
    setFiltroOn(checkOn);

    if (checkOn) {
      setFiltroOn(true);
      const camiseta = 'camisa';
      const filteredProducts = produtos.filter((product) =>
        product.categoria.toLowerCase().includes(camiseta)
      );
      setSearchResults(filteredProducts);
    } else {
      setFiltroOn(false);
      // Se desejar, pode limpar a lista de resultados aqui quando o checkbox for desmarcado.
      setSearchResults([]);
    }

  };

  const moletomOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    const checkOn = e.target.checked;
    setFiltroOn(checkOn);

    if (checkOn) {
      setFiltroOn(true);
      const camiseta = 'moletom';
      const filteredProducts = produtos.filter((product) =>
        product.categoria.toLowerCase().includes(camiseta)
      );
      setSearchResults(filteredProducts);
    } else {
      setFiltroOn(false);
      // Se desejar, pode limpar a lista de resultados aqui quando o checkbox for desmarcado.
      setSearchResults([]);
    }

  };

  const calcaOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    const checkOn = e.target.checked;
    setFiltroOn(checkOn);

    if (checkOn) {
      setFiltroOn(true);
      const camiseta = 'calça';
      const filteredProducts = produtos.filter((product) =>
        product.categoria.toLowerCase().includes(camiseta)
      );
      setSearchResults(filteredProducts);
    } else {
      setFiltroOn(false);
      // Se desejar, pode limpar a lista de resultados aqui quando o checkbox for desmarcado.
      setSearchResults([]);
    }

  };

const [opened, { toggle: abrirDrawer, close: fecharDrawer }] =
    useDisclosure(false);
  const { classes } = useStyles();

  return (
    <div>
      <Burger
            ml={-180}
            opened={opened}
            onClick={abrirDrawer}
            className={classes.hiddenDesktop}
          />
      <Flex className="borda" maw={1730} pt={40} wrap={"nowrap"}>
        <Flex
          className={classes.hiddenMobile}
          gap={1000}
          direction={"column"}
          // className="borda"
          miw={300}
          maw={300}
        >
          <Accordion
            multiple
            defaultValue={["item-1"]}
          >
            <Accordion.Item value="item-1">
              <Accordion.Control>Categoria</Accordion.Control>
              <Accordion.Panel>
                <Flex className="borda_teste">
                  <Checkbox color="dark" fz={13} label="Camisetas" onChange={camisetaOnChange}/>
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={173}
                  >
                    <Text ta={"right"} color="dimmed">
                      (1)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox color="dark" fz={13} label="Camisas" onChange={camisaOnChange}/>
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={185}
                  >
                    <Text ta={"right"} color="dimmed">
                      (10)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox color="dark" fz={13} label="Moletom" onChange={moletomOnChange}/>
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={179}
                  >
                    <Text ta={"right"} color="dimmed">
                      (4)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox color="dark" fz={13} label="Calças" onChange={calcaOnChange}/>
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={197}
                  >
                    <Text ta={"right"} color="dimmed">
                      (5)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Anchor fz={13} target="_blank">
                  Mostrar mais
                </Anchor>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Control>Avaliações</Accordion.Control>
              <Accordion.Panel>
                <Radio.Group name="Rating">
                  <Group className="group" fz={13} align="initial">
                    <Flex gap={12} className="borda_teste">
                      <Radio
                        value="5"
                        label={
                          <Rating defaultValue={5} readOnly />
                        }
                      />
                      <Text>5.0</Text>
                      <Flex
                        className="borda_teste"
                        align={"end"}
                        justify={"end"}
                        w={95}
                      >
                        <Text color="dimmed">(18)</Text>
                      </Flex>
                    </Flex>
                    <Flex gap={12} className="borda_teste">
                      <Radio
                        value="4.5"
                        label={
                          <Rating defaultValue={4.5} fractions={2} readOnly />
                        }
                      />
                      <Text>4.5</Text>
                      <Flex
                        className="borda_teste"
                        align={"end"}
                        justify={"end"}
                        w={95}
                      >
                        <Text color="dimmed">(1)</Text>
                      </Flex>
                    </Flex>
                    <Flex gap={12} className="borda_teste">
                      <Radio
                        value="4"
                        label={<Rating defaultValue={4} readOnly />}
                      />
                      <Text>4.0</Text>
                      <Flex
                        className="borda_teste"
                        align={"end"}
                        justify={"end"}
                        w={95}
                      >
                        <Text color="dimmed">(0)</Text>
                      </Flex>
                    </Flex>
                    <Flex gap={12} className="borda_teste">
                      <Radio
                        value="3.5"
                        label={
                          <Rating defaultValue={3.5} fractions={2} readOnly />
                        }
                      />
                      <Text>3.5</Text>
                      <Flex
                        className="borda_teste"
                        align={"end"}
                        justify={"end"}
                        w={95}
                      >
                        <Text color="dimmed">(0)</Text>
                      </Flex>
                    </Flex>
                  </Group>
                </Radio.Group>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="item-3">
              <Accordion.Control>Marcas</Accordion.Control>
              <Accordion.Panel>
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="Cavallier" value="Cavallier" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={184}
                  >
                    <Text ta={"right"} color="dimmed">
                      (1)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="Manfinity" value="Manfinity"/>
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={177}
                  >
                    <Text ta={"right"} color="dimmed">
                      (2)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox color="dark" fz={13} label="Nike" value="Nike" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={207}
                  >
                    <Text ta={"right"} color="dimmed">
                      (1)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="PerfectBlend" value="PerfectBlend" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={158}
                  >
                    <Text ta={"right"} color="dimmed">
                      (1)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="BECLOT" value="BECLOT" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={188}
                  >
                    <Text ta={"right"} color="dimmed">
                      (6)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="Voker" value="Voker" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={200}
                  >
                    <Text ta={"right"} color="dimmed">
                      (1)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="Harlan" value="Harlan" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={195}
                  >
                    <Text ta={"right"} color="dimmed">
                      (4)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="Prison" value="Prison" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={197}
                  >
                    <Text ta={"right"} color="dimmed">
                      (3)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Flex className="borda_teste">
                  <Checkbox fz={13} label="HUF" value="HUF" />
                  <Flex
                    className="borda_teste"
                    align={"end"}
                    justify={"end"}
                    w={209}
                  >
                    <Text ta={"right"} color="dimmed">
                      (1)
                    </Text>
                  </Flex>
                </Flex>
                <Space h="sm" />
                <Anchor fz={13} target="_blank">
                  Mostrar mais
                </Anchor>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="item-4">
              <Accordion.Control>Preço</Accordion.Control>
              <Accordion.Panel>
                <Slider defaultValue={60} label={null} color="dark" />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Flex>
        
          <Drawer
        opened={opened}
        onClose={fecharDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        asdasd
      </Drawer>
        <SimpleGrid
          className="borda"
          cols={4}
          w={1300}
          spacing="lg"
          breakpoints={[
            { maxWidth: "xl", cols: 4, spacing: "lg" },
            { maxWidth: "lg", cols: 3, spacing: "md" },
            { maxWidth: "md", cols: 3, spacing: "sm" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
          ]}
        >
          <>
           {searchResults.length <= 0 ? <Produtos /> : <SearchResult />}
          </>
        </SimpleGrid>
      </Flex>

      <Flex justify={"center"}>
        <Pagination color={"dark"} total={1} mt={130} mb={130} />
      </Flex>
    </div>
  );
}
