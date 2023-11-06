import { ActionIcon, Button, Divider, Flex, Text, Title } from "@mantine/core";
import {
  IconBookmark,
  IconRuler2,
  IconShare,
} from "@tabler/icons-react";
import { CoresP } from "./CoresP";
import "./InfoP.css";
import { TamanhoP } from "./TamanhoP";
// import { QuantidadeCompraP } from "./QuantidadeCompraP";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import medidaMasculina from "./../images/TabelaMedidas/SizingChart.png";
import { BotaoCompra } from "./BotaoCompra";
type Props = {
  marca: string;
  categoria: string;
  _id: string;
  titulo: string;
  preco: number;
  imgurl: string;
  rating: number;
  avaliacao: number;
  descricao: string;
};

export function InfoP(props: Props) {
  
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedSize, setSelectedSize] = useState("");

  // Construct a unique local storage key using the product's _id
  const localStorageKey = `tamanho_${props._id}`;

  const handleSizeChange = (size:string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    // Save the selected size to local storage using the unique key
    localStorage.setItem(localStorageKey, selectedSize);
  }, [selectedSize, localStorageKey]);

  
  const valorFormatado = props.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
const descontoFake = props.preco
    ? parseFloat((props.preco * 2).toFixed(2))
    : 0;

  return (

    <>
      <div>
        <Flex
          className="configP"
          direction={"column"}
          w={{ base: 250, sm: 300, md: 350, lg: 450, xl: 500 }}
        >
          <Flex className="configP">
            <Flex className="configP" direction={"column"}>
              <Title>{props.titulo}</Title>

              <Text color="dimmed" mb="xs">
                {props.descricao}
              </Text>
            </Flex>

            <Flex gap={10} className="configP" w={122} justify={"end"}>

              <ActionIcon color="dark" radius="md" variant="light">
                <IconBookmark size="1.125rem" />
              </ActionIcon>

              <ActionIcon color="dark" radius="md" variant="light">
                <IconShare size="1.125rem" />
              </ActionIcon>
            </Flex>
          </Flex>

          <Divider my="sm" />

          <Title mt="xs">{valorFormatado}</Title>

          <Text color="dimmed" td="line-through" mb="xs">
            R$ {descontoFake}
          </Text>

          <Divider my="sm" />

          <Text color="dimmed" mt="xs">
            Escolha a cor:
          </Text>

          <CoresP />

          <Divider my="sm" />

          <Text color="dimmed" mt="xs">
            Escolha o tamanho:
          </Text>

          <TamanhoP onChange={handleSizeChange} productId={props._id} />


          <Divider my="sm" />

          <Flex
            mt="xs"
            mb="xs"
            gap={20}
            direction={{ base: "column", md: "row" }}
          >
            {/* <QuantidadeCompraP /> */}
            <BotaoCompra
              _id={props._id}
              titulo={props.titulo}
              preco={props.preco}
              descricao={props.descricao}
              marca={props.marca}
              categoria={props.categoria}
              rating={props.rating}
              avaliacao={props.avaliacao}
              imgurl={props.imgurl}
              quantidade={1}
              quantidade_estoque={""}
              total={0}
              tamanho={selectedSize}
            />

            <Modal opened={opened} onClose={close} centered size={1020}>
              <img src={medidaMasculina} alt="Tabela de medidas" />
            </Modal>
            <Button onClick={open} className="tabelaMedida">
              <IconRuler2 size={20} />
            </Button>
          </Flex>
        </Flex>
      </div>
    </>
  );
}
