import { IconShoppingCart } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
// import { bearerToken } from "./../../../../Utils/config";
// import React, { useState, useEffect } from "react";
import CardProdutosCart from "./CardProdutosCart";
import img from "./../../components/images/Cart/Camisa florida.jpeg";
import img2 from "./../../components/images/Cart/CamisaJeans.jpeg";
import img3 from "./../../components/images/Cart/CamisaSocialBranca.jpeg";
import CartBotton from "./CartBotton";
import "./Carrinho.css";

export default function Carrinho() {
  const [opened, { open, close }] = useDisclosure(false);

  const conteudo = (
    <div>
      <h1 className="titleCart-h1 text-center pb-4">SEU CARRINHO</h1>
      <hr />
      <div style={{ maxHeight: "500px", overflow: "auto" }}>
        <CardProdutosCart
          title="Camisa Florida"
          preco={100}
          cor="Preto"
          tamanho="M"
          img={img}
        />
        <br />
        <br />
        <CardProdutosCart
          title="Camisa Jeans"
          preco={300}
          cor="Preto"
          tamanho="G"
          img={img2}
        />
        <br />
        <br />
        <CardProdutosCart
          title="Camisa Social"
          preco={59.92}
          cor="Branco"
          tamanho="P"
          img={img3}
        />
      </div>

      <CartBotton />
    </div>
  );
  // const [value, setValue] = useState<number | "">(0);

  return (
    <>
      <Drawer position="right" opened={opened} onClose={close}>
        {conteudo}
      </Drawer>
      <Button
        onClick={open}
        style={{
          background: "#f1f1f1",
          color: "black",
          borderRadius: "50%", // Define o border-radius para tornar o fundo redondo
          display: "flex", // Use display: flex
          justifyContent: "center", // Centraliza horizontalmente
          alignItems: "center", // Centraliza verticalmente
          padding: "1px", // Ajuste o padding conforme necessário
          width: "50px",
          height: "50px",
        }}
      >
        <IconShoppingCart size={20} />
      </Button>
      {/* Botão sem texto */}
    </>
  );
}
