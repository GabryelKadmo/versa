import { IconShoppingCart } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import CardProdutosCart from "./CardProdutosCart";
import CartBotton from "./CartBotton";
import "./Carrinho.css";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

export default function Carrinho() {
  
  const [opened, { open, close }] = useDisclosure(false);
  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { cartItem } = context;

  const conteudo = (
    <div>
      <h1 className="titleCart-h1 text-center pb-4">SEU CARRINHO</h1>
      <hr />
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      <div className="cart-items">
          {cartItem.map((item, index: number) => (
            <><CardProdutosCart
              key={index}
              _id={item._id}
              title={item.titulo}
              preco={item.preco}
              img={item.imgurl}
              cor={item.descricao}
              tamanho={item.marca} /><hr /></>))}
      </div>
      </div>

      <CartBotton />
    </div>
  );

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
