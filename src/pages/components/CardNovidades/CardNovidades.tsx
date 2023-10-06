import { Card, Image, Text, Button, Group, Rating, Flex } from '@mantine/core';
import "./CardNovidades.css"

type Props = {
    title: string;
    preco: number;
    img: string;
    rating: number;
    avaliacoes: number;
    descricao: string;
  }

export function CardNovidades(props: Props){
    return(
        <div>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={props.img}
                        height={330}
                        alt="Norway"
                    />
                </Card.Section>
            <Group 
                position="apart" 
                mt="md" 
                mb="xs">
                    <Text ff={'Inter'} weight={500} color='dimmed'>{props.title}
                    </Text>        
            </Group>
            <Text ff={'Inter'} size="lg" weight={800} >
                R${props.preco}
            </Text>
            <Flex gap={12} >
                <Rating pt={6} defaultValue={props.rating} fractions={2} readOnly/> 
                <Text pt={3} color="dimmed">({props.avaliacoes})</Text>
            </Flex>
            <Button  color="dark" fullWidth mt="md" radius="lg">
                Adicionar ao carrinho
            </Button>
            </Card>
    </div>
    )
}