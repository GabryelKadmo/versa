import "./SessaoCO.css";
import ImagemEsquerda from "../images/SessaoCO/Esquerda.png";
import ImagemMeio from "../images/SessaoCO/Meio.png";
import ImagemDireita from "../images/SessaoCO/Direita.png";
import { SimpleGrid, Flex, Card, Title, Text, Image, Group } from '@mantine/core';

export function SessaoCO() {
  function redirectProdutos(){
    window.location.href = '/produtos';
  }

  return (
    <div className="container_co">
      <Flex direction={"column"}>

        <Title
        order={1}
        sx={{ fontFamily: 'Poppins, sans-serif' }}
        fz={70}
        weight={800}
        >
          COMPRE
        </Title>
        
        <Title 
        order={1}
        sx={{ fontFamily: 'Poppins, sans-serif' }}
        fz={70}
        weight={1} 
        mb={30}>
          POR OCASIÃO
        </Title>

        <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: 'xl', cols: 3, spacing: 'xl' },
          { maxWidth: 'lg', cols: 2, spacing: 'lg' },
          { maxWidth: 'md', cols: 1, spacing: 'md' },
        ]}
        >
          <Card className="hover_click_co" shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section >
            <Image
            src={ImagemEsquerda}
            height={760}
            alt="Streetwear"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text 
            weight={600}
            sx={{ fontFamily: 'Roboto, sans-serif' }}
            fz={32}
            >
              STREETWEAR
            </Text>
            
          </Group>

          <Text 
          weight={400}
          sx={{ fontFamily: 'Roboto, sans-serif' }}
          fz={16}
          >
            Estilo urbano e despojado, inspirado pela cultura hip-hop e skate, com roupas confortáveis e expressivas.
          </Text>

          
          </Card>

          <Card className="hover_click_co" shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={ImagemMeio}
                height={760}
                alt="Formal"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text 
              weight={600}
              sx={{ fontFamily: 'Roboto, sans-serif' }}
              fz={32}
              >
                FORMAL
              </Text>
              
            </Group>

            <Text 
            weight={400}
            sx={{ fontFamily: 'Roboto, sans-serif' }}
            fz={16}
            >
              Estilo elegante e sofisticado, geralmente composto por trajes como terno, gravata e camisa social, adequado para ocasiões especiais.
            </Text>

            
          </Card>

          <Card className="hover_click_co" shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={ImagemDireita}
                height={760}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text
              weight={600}
              sx={{ fontFamily: 'Roboto, sans-serif' }}
              fz={32} 
              >
                FLORAL
              </Text>
              
            </Group>

            <Text 
            weight={400}
            sx={{ fontFamily: 'Roboto, sans-serif' }}
            fz={16}
            >
              Estampa de flores em roupas, muitas vezes usada para criar um visual vibrante e primaveril.
            </Text>
        
          </Card>
        
        </SimpleGrid>

      </Flex>

      <button onClick={redirectProdutos} className="mais_estilos">MAIS ESTILOS</button>
    </div>
  );
}
