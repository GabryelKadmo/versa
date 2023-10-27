import "./SessaoNR.css";
import ImagemEsquerda from "../images/SessaoNR/Esquerda.png";
import ImagemMeio from "../images/SessaoNR/Meio.png";
import ImagemDireita from "../images/SessaoNR/Direita.png";
import { SimpleGrid, Flex, Card, Title, Text, Image, Group } from '@mantine/core';

export function SessaoNR() {
  return (
    <div className="container_nr">

      <Flex direction={"column"}>

      <Title 
      order={1} 
      sx={{ fontFamily: 'Poppins, sans-serif' }}
      fz={70}
      weight={800}
      >
        NOVAS
      </Title>
      <Title 
      order={1} 
      sx={{ fontFamily: 'Poppins, sans-serif' }}
      fz={70}
      weight={1}
      mb={100}>
        NA LOJA
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
        <Card className="hover_click_nr" shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={ImagemEsquerda}
            height={760}
            alt="Moletom Crest"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text
          weight={600}
          sx={{ fontFamily: 'Roboto, sans-serif' }}
          fz={32} 
          >
            MOLETOM CREST
          </Text>
          
        </Group>

        <Text
        weight={400}
        sx={{ fontFamily: 'Roboto, sans-serif' }}
        fz={16}
        >
            Ideal para treinos ou estilo de academia. Interior quente e macio, capuz ajustável e design minimalista, tornando-o um item indispensável.
        </Text>

        <Text 
        weight={400}
        sx={{ fontFamily: 'Roboto, sans-serif' }}
        fz={16}
        mt={10}
        >
          $300
        </Text>
        
        </Card>

        <Card className="hover_click_nr" shadow="sm" padding="lg" radius="md" withBorder>
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
              HENLEY LEGACY
            </Text>
            
          </Group>

          <Text 
          weight={400}
          sx={{ fontFamily: 'Roboto, sans-serif' }}
          fz={16}
          >
            Estilos clássicos, funcionalidades modernas, cortes tradicionais e tecidos novos, com uma estampa que homenageia a tradição da Versa. Agora, é sua vez de construir seu próprio legado.
          </Text>

          <Text 
          weight={400}
          sx={{ fontFamily: 'Roboto, sans-serif' }}
          fz={16}
          mt={10}
          >
            $300
          </Text>
          
        </Card>

        <Card className="hover_click_nr" shadow="sm" padding="lg" radius="md" withBorder>
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
              LEGACY RAG TOP
            </Text>
            
          </Group>

          <Text 
          weight={400}
          sx={{ fontFamily: 'Roboto, sans-serif' }}
          fz={16}
          >
            Estilos clássicos, funcionalidades modernas, cortes tradicionais e tecidos novos, com uma estampa que homenageia a tradição da Versa. Agora, é sua vez de construir seu próprio legado.
          </Text>

          <Text
          weight={400}
          sx={{ fontFamily: 'Roboto, sans-serif' }}
          fz={16}
          mt={10}
          >
          $300
          </Text>

        </Card>

      </SimpleGrid>

      </Flex>

      <button className="novidades">VEJA TODAS NOVIDADES</button>
    </div>
  );
}
