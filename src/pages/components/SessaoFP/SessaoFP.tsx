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
} from "@mantine/core";
import Produtos from "../Produto/Produtos";
import AppContext from "../Context/AppContext";
import { ChangeEvent, useContext, useState } from "react";
import SearchResult from "../../SearchResult/SearchResult";

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

  return (
    <div>
      <Flex className="borda" maw={1730} pt={40} wrap={"nowrap"}>
        <Flex
          gap={1000}
          direction={"column"}
          // className="borda"
          miw={300}
          maw={300}
        >
          <Accordion
            multiple
            defaultValue={["item-1", "item-2", "item-3", "item-4"]}
          >
            <Accordion.Item value="item-1">
              <Accordion.Control>Categoria</Accordion.Control>
              <Accordion.Panel>
                <Flex className="borda_teste">
                  <Checkbox onChange={camisetaOnChange} fz={13} label="Camiseta" />
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
                  <Checkbox onChange={camisaOnChange} fz={13} label="Camisas" />
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
                  <Checkbox onChange={moletomOnChange} fz={13} label="Moletom" />
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
                  <Checkbox onChange={calcaOnChange} fz={13} label="Calças" />
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
                        value="5.0"
                        label={<Rating defaultValue={5} readOnly />}
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
                        value="5.0"
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
                        value="5.0"
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
                        value="5.0"
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
                  <Checkbox fz={13} label="Cavallier" />
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
                  <Checkbox fz={13} label="Manfinity" />
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
                  <Checkbox fz={13} label="Nike" />
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
                  <Checkbox fz={13} label="PerfectBlend" />
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
                  <Checkbox fz={13} label="BECLOT" />
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
                  <Checkbox fz={13} label="Voker" />
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
                  <Checkbox fz={13} label="Harlan" />
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
                  <Checkbox fz={13} label="Prison" />
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
                  <Checkbox fz={13} label="HUF" />
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
        <SimpleGrid
          className="borda"
          cols={4}
          w={1300}
          spacing="lg"
          breakpoints={[
            { maxWidth: "xl", cols: 4, spacing: "lg" },
            { maxWidth: "lg", cols: 3, spacing: "md" },
            { maxWidth: "md", cols: 2, spacing: "sm" },
            { maxWidth: "sm", cols: 1, spacing: "sm" },
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
