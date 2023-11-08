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
  Button,
} from "@mantine/core";

import { Link } from "react-router-dom";

export function SessaoNP() {
  return (
    <div className="container_np">
      <Flex direction={"column"} mb={200}>
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
              <Link to={"/produto/" + "654b7291612bbb9957764cb2"}>
                <Image src={Pacote3} height={600} alt="Streetwear" />
              </Link>
            </Card.Section>
            <Group position="center" mt="md" mb="xs">
              <Text
                weight={400}
                sx={{ fontFamily: "Roboto, sans-serif" }}
                fz={30}
                mt={15}
                mb={15}
              >
                PACOTE ESPORTIVO - R$250
              </Text>
            </Group>

            <Button
          color="dark"
          fullWidth
          mt="md"
          radius="lg"
          component="a"
          rel="noopener noreferrer"
          href={"/produto/" + "654b7291612bbb9957764cb2"}
        >
          Ver detalhes
        </Button>
          </Card>
          <Card
            className="hover_click_np"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Link to={"/produto/" + "654b6ee91516552fe15a9fa4"}>
                <Image src={Pacote1} height={600} alt="Norway" />
              </Link>
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text
                weight={400}
                sx={{ fontFamily: "Roboto, sans-serif" }}
                fz={30}
                mt={15}
                mb={15}
              >
                PACOTE CASUAL - R$200
              </Text>
            </Group>

            <Button
          color="dark"
          fullWidth
          mt="md"
          radius="lg"
          component="a"
          rel="noopener noreferrer"
          href={"/produto/" + "654b6ee91516552fe15a9fa4"}
        >
          Ver detalhes
        </Button>
          </Card>
          <Card
            className="hover_click_np"
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Link to={"/produto/" + "654b6b01ab6ca861310cec50"}>
                <Image src={Pacote2} height={600} alt="Formal" />
              </Link>
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
              <Text
                weight={400}
                sx={{ fontFamily: "Roboto, sans-serif" }}
                mt={15}
                fz={30}
                mb={15}
              >
                PACOTE MINIMALISTA - R$180
              </Text>
            </Group>
            <Button
              color="dark"
              fullWidth
              mt="md"
              mb={15}
              radius="lg"
              component="a"
              rel="noopener noreferrer"
              href={"/produto/" + "654b6b01ab6ca861310cec50"}
            >
              Ver detalhes
            </Button>
          </Card>
        </SimpleGrid>
      </Flex>
    </div>
  );
}
