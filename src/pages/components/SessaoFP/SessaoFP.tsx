import "./SessaoFP.css"
import { Flex, SimpleGrid, Accordion, Checkbox, Space, Anchor, Radio, Group, Rating, Slider } from '@mantine/core';
// import { IconAt } from '@tabler/icons-react';

export function MeioFiltroProduto(){

    const itemCategoria = [
        <Checkbox
            fz={13}
            label="Esportivo (18)"
        />,
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
                <Radio value='5.0' label={<Rating defaultValue={5} readOnly/>}/>5.0
                <Radio value='4.5' label={<Rating defaultValue={4.5} fractions={2} readOnly/>}/>4.5
                <Radio value='4.0' label={<Rating defaultValue={4} readOnly/>}/>4.0
                <Radio value='3.5' label={<Rating defaultValue={3.5} fractions={2} readOnly/>}/>3.5
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
        <div className="caixa_centro">
            <Flex
            gap={1000}
            direction={'column'}
            >
                
                <Accordion >
                    {items}
                </Accordion>
                
            </Flex>
            <SimpleGrid>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, doloremque.</p>
            </SimpleGrid>

        </div>
    );
}