import "./SessaoNP.css";
import Pacote1 from "../images/SessaoNP/PacoteCasual.jpg";
import Pacote2 from "../images/SessaoNP/PacoteMinimalista.jpg";
import Pacote3 from "../images/SessaoNP/PacoteEsportivo.jpg";

import {
  SimpleGrid,
  Flex,
  Card,
  Title,
  Text,
  Image,
  Group,
} from "@mantine/core";

export function SessaoNP() {
  return (
    <div className="container_np">
      <Flex direction={"column"}>
        <Title
          order={1}
          sx={{ fontFamily: "Poppins, sans-serif" }}
          fz={70}
          weight={800}
        >
          ASSINE
        </Title>

        <Title
          order={1}
          sx={{ fontFamily: "Poppins, sans-serif" }}
          fz={70}
          weight={1}
          mb={20}
        >
          NOSSOS PACOTES
        </Title>

        <SimpleGrid
          cols={3}
          spacing="xl"
          breakpoints={[
            { maxWidth: "xl", cols: 3, spacing: "xl" },
            { maxWidth: "lg", cols: 2, spacing: "lg" },
            { maxWidth: "md", cols: 1, spacing: "md" },
          ]}
        >
          <Card
            className="hover_click_np"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image src={Pacote3} height={600} alt="Streetwear" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text
                weight={600}
                sx={{ fontFamily: "Roboto, sans-serif" }}
                fz={36}
                mt={15}
              >
                PACOTE ESPORTIVO
              </Text>
            </Group>

            <Text
              weight={400}
              sx={{ fontFamily: "Roboto, sans-serif" }}
              fz={15}
            >
              Receba mensalmente em sua residência roupas esportivas de alta
              qualidade com nossa assinatura mensal exclusiva. Aproveite o
              conforto e o estilo que só encontrará em nossa loja.
            </Text>

            <Text
              weight={400}
              sx={{ fontFamily: "Roboto, sans-serif" }}
              fz={25}
              mt={50}
            >
              R$250
            </Text>
          </Card>
          <Card
            className="hover_click_np"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image src={Pacote1} height={600} alt="Norway" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text
                weight={600}
                sx={{ fontFamily: "Roboto, sans-serif" }}
                fz={36}
                mt={15}
              >
                PACOTE CASUAL
              </Text>
            </Group>

            <Text
              weight={400}
              sx={{ fontFamily: "Roboto, sans-serif" }}
              fz={15}
            >
              Receba todo mês roupas confortáveis e versáteis, perfeitas para o
              seu dia a dia, entregues diretamente à sua porta. Estilo sem
              esforço ao seu alcance.
            </Text>

            <Text
              weight={400}
              sx={{ fontFamily: "Roboto, sans-serif" }}
              fz={25}
              mt={50}
            >
              R$200
            </Text>
          </Card>
          <Card
            className="hover_click_np"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image src={Pacote2} height={600} alt="Formal" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text
                weight={600}
                sx={{ fontFamily: "Roboto, sans-serif" }}
                mt={15}
                fz={36}
              >
                PACOTE MINIMALISTA
              </Text>
            </Group>

            <Text
              weight={400}
              sx={{ fontFamily: "Roboto, sans-serif" }}
              fz={15}
            >
              Receba mensalmente peças de roupa de design simples, cortes limpos
              e cores neutras, garantindo um estilo sofisticado e descomplicado,
              diretamente na sua porta.
            </Text>

            <Text
              weight={400}
              sx={{ fontFamily: "Roboto, sans-serif" }}
              fz={25}
              mt={50}
            >
              R$180
            </Text>
          </Card>
        </SimpleGrid>
      </Flex>
      <button className="mais_pacotes">MAIS PACOTES</button>
    </div>
  );
}
