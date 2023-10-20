import { IconShoppingCart } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Indicator } from "@mantine/core";
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
          {cartItem.map((item) => (
            <div><CardProdutosCart
              key={item._id}
              _id={item._id}
              title={item.titulo}
              preco={item.preco}
              img={item.imgurl}
              cor={item.descricao}
              tamanho={item.marca} />
              <hr />
              </div>
              ))}
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
      <Indicator inline withBorder disabled label="1" size={20} offset={5}>
      <Button
        
        onClick={open}
        style={{
          background: "#f1f1f1",
          color: "black",
          borderRadius: "10px", // Define o border-radius como 0 para tornar o botão quadrado
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1px",
          width: "100px", // Largura e altura são iguais para criar um botão quadrado
          height: "42px", // Largura e altura são iguais para criar um botão quadrado
        }}
      >
        <IconShoppingCart size={20} /> Carrinho
      </Button>
      </Indicator>
      {/* Botão sem texto */}
    </>
  );
}
