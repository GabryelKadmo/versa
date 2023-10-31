import { IconShoppingCart } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Indicator } from "@mantine/core";
import CardProdutosCart from "./CardProdutosCart";
import CartBotton from "./CartBotton";
import "./Carrinho.css";
import { useContext, useEffect, useState } from "react";
import cartSVG from "./../images/Cart/O carrinho está vazio.svg";
import AppContext from "../Context/AppContext";

export default function Carrinho() {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  const [opened, { open, close }] = useDisclosure(false);
  const context = useContext(AppContext);

  useEffect(() => {
    quantidadePopup();
  });

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { cartItem } = context;

  const quantidadePopup = () => {
    setQuantidadeCarrinho(cartItem.length);
  };

  const conteudo = (
    <div className="mt-3 " style={{ overflow: "hidden" }}>
      <h1 className="titleCart-h1 text-center pt-2 pb-2">SEU CARRINHO</h1>
      <hr />
      <div>
        {quantidadeCarrinho >= 1 ? (
          <div
            className="cartContent"
            style={{ maxHeight: "450px", overflowY: "scroll" }}
          >
            <div className="cart-items">
              {cartItem.map((item) => (
                <div>
                  <CardProdutosCart
                    key={item._id}
                    _id={item._id}
                    title={item.titulo}
                    preco={item.preco}
                    img={item.imgurl}
                    cor={item.descricao}
                    tamanho={item.marca}
                  />
                  <hr />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <img
            src={cartSVG}
            alt="imagem carrinho vazio"
            style={{ width: "100%", height: "auto" }}
          />
        )}
      </div>

      <CartBotton />
    </div>
  );

  return (
    <>
      <Drawer position="right" size={450} opened={opened} onClose={close}>
        {conteudo}
      </Drawer>
      {quantidadeCarrinho < 1 ? (
        // Renderizar o componente sem label e com size 0
        <Button
          onClick={open}
          style={{
            background: "#f1f1f1",
            color: "black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1px",
            width: "100px",
            height: "42px",
          }}
        >
          <IconShoppingCart size={20} /> Carrinho
        </Button>
      ) : (
        <Indicator
          inline
          withBorder
          label={quantidadeCarrinho}
          color="dark"
          size={20}
          offset={5}
        >
          <Button
            onClick={open}
            style={{
              background: "#f1f1f1",
              color: "black",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1px",
              width: "100px",
              height: "42px",
            }}
          >
            <IconShoppingCart size={20} /> Carrinho
          </Button>
        </Indicator>
      )}
    </>
  );
}
