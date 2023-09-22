import "./SessaoFC.css"
import { Text, Button, Input, Flex, NativeSelect } from '@mantine/core';
// import { IconAt } from '@tabler/icons-react';

export function FiltroCima(){
    return(
        <div className="filtro_cima">
            <Flex 
            direction={{base: 'column', sm: 'row'}}
            gap={{base: 50, sm: 183}} 
            align="Center" 
            
            >
                <Text 
                size="md" 
                >
                    Filtros
                </Text>
                <Button 
                variant="default" 
                radius="xl"
                >
                    Limpar
                </Button>
            </Flex>
            <Flex 
            direction={{base: 'column', sm: 'row'}} 
            gap={{base: 50, lg: 200, xl: 800}} 
            align="Center" 
            pl={12}
            >
                <Text 
                size="xs" 
                c="blue"
                >
                    Mostrando 12 resultados de 230
                </Text>
                <Input 
                placeholder="Search" 
                /> 
            </Flex>
            <Flex
            pl={42}
            align="Center"
            direction={{base: 'column', sm: 'row'}}
            >
                <NativeSelect size="sm" radius="xl" data={['Popularidade', 'Promoção', 'Preço decrescente', 'Preço crescente']} />
            </Flex>
        </div>
    )
}