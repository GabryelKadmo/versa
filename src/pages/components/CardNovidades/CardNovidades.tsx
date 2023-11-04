import { Card, Image, Text, Button, Group, Rating, Flex } from "@mantine/core";
import "./CardNovidades.css";
import AppContext from "../Context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

type Props = {
  _id: string;
  titulo: string;
  preco: number;
  descricao: string;
  marca: string;
  categoria: string;
  rating: number;
  avaliacao: number;
  imgurl: string;
  quantidade_estoque: string;
  quantidade: number;
  total: number;
};

export function CardNovidades(props: Props) {

  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }
  const { cartItem } = context;


  localStorage.setItem("cart", JSON.stringify(cartItem));
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Link to={"/produto/" + props._id}>
            <Image src={props.imgurl} height={330} alt="Norway" />
          </Link>
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text ff={"Inter"} weight={500} color="dimmed">
            {props.titulo}
          </Text>
        </Group>
        <Text ff={"Inter"} size="lg" weight={800}>
          R${props.preco}
        </Text>
        <Flex gap={12}>
          <Rating
            pt={6}
            defaultValue={props.avaliacao}
            fractions={2}
            readOnly
          />
          <Text pt={3} color="dimmed">
            ({props.avaliacao})
          </Text>
        </Flex>
        <Button
          color="dark"
          fullWidth
          mt="md"
          radius="lg"
          component="a"
          rel="noopener noreferrer"
          href={"/produto/" + props._id}
        >
          Ver detalhes
        </Button>
      </Card>
    </div>
  );
}
