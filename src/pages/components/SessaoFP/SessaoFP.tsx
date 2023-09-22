import "./SessaoFP.css"
import { Flex, SimpleGrid, Accordion, Checkbox } from '@mantine/core';

export function MeioFiltroProduto(){

    const itemCategoria = [
        <Checkbox
            label="asdasdasd"
        />,
        <Checkbox
            label="I agree to sell my privacy"
        />,
        <Checkbox
            label="I agree to sell my privacy"
        />,
            <Checkbox
            label="I agree to sell my privacy"
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
            'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
        },
        {
          value: 'Marcas',
          description:
            'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
        },
        {
            value: 'Preço',
            description:
                'asdfadf'
              ,
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