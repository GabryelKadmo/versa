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

export function MeioFiltroProduto() {

  return (
    <div>
      <Flex className="borda" maw={1730} pt={40} wrap={"wrap"}>
        <Flex
          gap={1000}
          direction={"column"}
          // className="borda"
          w={300}
          // maw={200}
        >
          <Accordion multiple defaultValue={['item-1', 'item-2', 'item-3', 'item-4']}>

          <Accordion.Item value="item-1">
          <Accordion.Control>
            Categoria
          </Accordion.Control>
          <Accordion.Panel>
            <Flex className="borda_teste" >
              <Checkbox fz={13} label="Esportivo" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={176}>
                <Text ta={"right"} color="dimmed">(18)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">
              <Checkbox fz={13} label="Formal" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={191}>
                  <Text ta={"right"} color="dimmed">(12)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">
              <Checkbox fz={13} label="Casual" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={193}>
                  <Text ta={"right"} color="dimmed">(23)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">   
              <Checkbox fz={13} label="Minimalista" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={163}>
                  <Text ta={"right"} color="dimmed">(67)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">
              <Checkbox fz={13} label="StreetWear" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={166}>
                  <Text ta={"right"} color="dimmed">(34)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">
              <Checkbox fz={13} label="Floral" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={200}>
                  <Text ta={"right"} color="dimmed">(12)</Text>
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
                <Radio value="5.0" label={<Rating defaultValue={5} readOnly />} />
                <Text>5.0</Text>
                <Flex className="borda_teste" align={"end"} justify={"end"} w={93}>
                  <Text color="dimmed">(1991)</Text>
                </Flex>
              </Flex>
              <Flex gap={12} className="borda_teste">
                <Radio
                  value="5.0"
                  label={<Rating defaultValue={4.5} fractions={2} readOnly />}
                />
                <Text>4.5</Text>
                <Flex className="borda_teste" align={"end"} justify={"end"} w={93}>
                  <Text color="dimmed">(200)</Text>
                </Flex>
              </Flex>
              <Flex gap={12} className="borda_teste">
                <Radio value="5.0" label={<Rating defaultValue={4} readOnly />} />
                <Text>4.0</Text>
                <Flex className="borda_teste" align={"end"} justify={"end"} w={93}>
                  <Text color="dimmed">(300)</Text>
                </Flex>
              </Flex>
              <Flex gap={12} className="borda_teste">
                <Radio
                  value="5.0"
                  label={<Rating defaultValue={3.5} fractions={2} readOnly />}
                />
                <Text>3.5</Text>
                <Flex className="borda_teste" align={"end"} justify={"end"} w={93}>
                  <Text color="dimmed">(500)</Text>
                </Flex>
              </Flex>
            </Group>
          </Radio.Group> 
          </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="item-3">
          <Accordion.Control>Marcas</Accordion.Control>
          <Accordion.Panel>
          <Flex className="borda_teste" >
            <Checkbox fz={13} label="Adidas" />
            <Flex className="borda_teste" align={"end"} justify={"end"} w={192}>
              <Text ta={"right"} color="dimmed">(18)</Text>
            </Flex>
          </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">
              <Checkbox fz={13} label="Gymshark" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={173}>
                  <Text ta={"right"} color="dimmed">(12)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">
              <Checkbox fz={13} label="Nike" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={205}>
                  <Text ta={"right"} color="dimmed">(23)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">   
              <Checkbox fz={13} label="Kenneth Cole" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={151}>
                  <Text ta={"right"} color="dimmed">(67)</Text>
              </Flex>
            </Flex>
            <Space h="sm" />
            <Flex className="borda_teste">
              <Checkbox fz={13} label="Puma" />
              <Flex className="borda_teste" align={"end"} justify={"end"} w={199}>
                  <Text ta={"right"} color="dimmed">(34)</Text>
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
            <Produtos />
          </>
        </SimpleGrid>
      </Flex>

      <Flex justify={"center"}>
        <Pagination color={"dark"} total={1} mt={130} mb={130} />
      </Flex>
    </div>
  );
}
