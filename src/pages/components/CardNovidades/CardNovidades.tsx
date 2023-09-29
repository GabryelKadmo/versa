
import { Card, Image, Text, Button, Group, Rating, Flex } from '@mantine/core';
import ImagemCard from "../images/CardNovidades/ImagemNovidade.png"
import "./CardNovidades.css"

export function CardNovidades(){
    return(
        <div>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={ImagemCard}
                        height={330}
                        alt="Norway"
                    />
                </Card.Section>
            <Group 
                position="apart" 
                mt="md" 
                mb="xs">
                    <Text ff={'Inter'} weight={500} color='dimmed'>Flanela de Mangas Longas
                    </Text>        
            </Group>
            <Text ff={'Inter'} size="lg" weight={800} >
                R$ 99,00
            </Text>
            <Flex gap={12} >
                <Rating pt={6} defaultValue={5} fractions={2} readOnly/> 
                <Text pt={3} color="dimmed">(121)</Text>
            </Flex>
            <Button  color="dark" fullWidth mt="md" radius="lg">
                Adicionar ao carrinho
            </Button>
            </Card>
    </div>
    )
}