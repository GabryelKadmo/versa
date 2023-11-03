import "./SessaoFC.css"
import { Text, Button, Flex, NativeSelect } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';
import SearchBar from "../SearchBar/SearchBar";

export function FiltroCima(){
    return(
        <div className="filtro_cima">
            <Flex 
            // className="borda_teste_fc"
            w={"100vw"}      
            justify={"center"}
            >
            <Flex 
            direction={{base: 'column', sm: 'row'}}
            align="Center" 
            // className="borda_teste_fc" 
            >
                <Text 
                size="md" 
                >
                    Filtros
                </Text>
                <Flex  
                align="Center"
                direction={{base: 'column', sm: 'row'}}
                w={{base: 50, xs: 84, sm: 154, md: 164, lg: 204, xl: 384}}
                // className="borda_teste_fc"
                justify={"flex-end"}
                >
                    <Button 
                    variant="default" 
                    radius="xl"
                    >
                        Limpar
                    </Button>
                </Flex>
            </Flex>
            <Flex 
            direction={{base: 'column', sm: 'row'}} 
            align="Center" 
            pl={12}
            // className="borda_teste_fc"
            >
                <Text 
                size="xs" 
                c="blue"
                >
                    Mostrando 12 resultados de 12
                </Text>
                <Flex
                justify={"flex-end"}
                className="gap_search_button"
                w={{base: 50,xs: 150, sm: 250, md: 490, lg: 650, xl: 880}} 
                >
                    <SearchBar />
                </Flex>
            </Flex>
            <Flex
            
            align="Center"
            direction={{base: 'column', sm: 'row'}}
            w={{base: 50, xs: 84, sm: 154, md: 164, lg: 204, xl: 264}}         
            // className="borda_teste_fc"
            justify={"flex-end"}
            >
                <NativeSelect size="sm" radius="xl" data={['Popularidade', 'Promoção', 'Preço decrescente', 'Preço crescente']} />
            </Flex>
            </Flex>
            
        </div>

    )
}