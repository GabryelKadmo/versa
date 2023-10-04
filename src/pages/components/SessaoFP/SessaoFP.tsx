import "./SessaoFP.css"
import { Flex, SimpleGrid, Accordion, Checkbox, Space, Anchor, Radio, Group, Rating, Slider, Pagination, Text} from '@mantine/core';
import {CardNovidades} from "../CardNovidades/CardNovidades"
// import { IconAt } from '@tabler/icons-react';

export function MeioFiltroProduto(){

    const itemCategoria = [
        <Flex className="borda" ta={"right"}>
            <Checkbox
                fz={13}
                label="Esportivo"
            />
            <Text ta={"right"}>18</Text>
        </Flex>,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Formal (12)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Casual (23)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Minimalista (67)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="StreetWear (34)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Floral (12)"
        />,
        <Space 
            h="sm" 
        />,
        <Anchor 
            fz={13} 
            target="_blank" 
        >
                Mostrar mais
        </Anchor>
    ]

    const itemAvaliação = [
        <Radio.Group
        name="Rating"
        >
            <Group className="group" fz={13}>
                <Flex gap={12}>
                <Radio value='5.0' label={<Rating defaultValue={5} readOnly/>}/>
                <Text>5.0</Text>
                <Text color="dimmed">(1991)</Text>
                </Flex>
                <Flex gap={12}>
                <Radio value='5.0' label={<Rating defaultValue={4.5} fractions={2} readOnly/>}/>
                <Text>4.5</Text>
                <Text color="dimmed">(200)</Text>
                </Flex>
                <Flex gap={12}>
                <Radio value='5.0' label={<Rating defaultValue={4} readOnly/>}/>
                <Text>4.0</Text>
                <Text color="dimmed">(300)</Text>
                </Flex>
                <Flex gap={12}>
                <Radio value='5.0' label={<Rating defaultValue={3.5} fractions={2} readOnly/>}/>
                <Text>3.5</Text>
                <Text color="dimmed">(500)</Text>
                </Flex>
            </Group>
        </Radio.Group>
    ]

    const itemMarca =[
        <Checkbox
            fz={13}
            label="Adidas (18)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Gymshark (12)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Nike (23)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Kenneth Cole (67)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Puma (34)"
        />,
        <Space 
            h="sm" 
        />,
        <Checkbox
            fz={13}
            label="Floral (12)"
        />,
        <Space 
            h="sm" 
        />,
        <Anchor 
            fz={13} 
            target="_blank" 
        >
                Mostrar mais
        </Anchor>
    ]

    const itemPreco = [
        <Slider 
        defaultValue={60}
        label={null}
        color="dark"
        />
    ]

    const filtros = [
        {
          value: 'Categoria',
          description:        
            itemCategoria,            
        },
        {
          value: 'Avaliações',
          description:
            itemAvaliação,
        },
        {
          value: 'Marcas',
          description:
            itemMarca,
        },
        {
            value: 'Preço',
            description:
                itemPreco,
          },
      ];

      const items = filtros.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.value}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ));

    return(
        <div> 
            <Flex className="borda" maw={1730} pt={40}>
                <Flex
                gap={1000}
                direction={'column'}
                // className="borda"
                w={300}
                // maw={200}
                >
                    
                    <Accordion>
                        {items}
                    </Accordion>
                    
                </Flex>
                <SimpleGrid
                
                className="borda"
                cols={4}
                w={1300}
                spacing="lg"
                breakpoints={[
                    { maxWidth: 'xl', cols: 4, spacing: 'lg' },
                    { maxWidth: 'lg', cols: 3, spacing: 'md' },
                    { maxWidth: 'md', cols: 2, spacing: 'sm' },
                    { maxWidth: 'sm', cols: 1, spacing: 'sm' },
                ]}
                >
                    <CardNovidades img="..." title="Camisa véa" preco={50} rating={3} avaliacoes={50} />
                    
                </SimpleGrid>

                </Flex>

                <Flex justify={"center"}>
                    <Pagination 
                        color={"dark"}
                        total={7} 
                        mt={130}
                        mb={130}
                    />
                </Flex>
        </div>
    );
}