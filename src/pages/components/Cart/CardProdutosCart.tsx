import "./Carrinho.css";
import { IconX } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import AppContext from "../Context/AppContext";
import { useContext } from "react";

type Props = {
  _id: string;
  title: string;
  preco: number;
  cor: string;
  img: string;
  tamanho: string;
};

const CardProdutosCart = (props: Props) => {
  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { cartItem, setCartItem, setQuantidade } = context;
  const localStorageCart = JSON.parse(localStorage.getItem("cart") ?? "[]");

  const handleRemoveItem = () => {
    const updatedItems = cartItem.filter((item) => item._id !== props._id);
    const updatedStorage = localStorageCart.filter(
      (item: { _id: string }) => item._id !== props._id
    );
    setCartItem(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedStorage)); // Verifique o novo estado aqui
  };

  return (
    <div className="cardProdutosCart">
      <div className="imageLeft">
        <img className="imgProduto" src={props.img} />
      </div>

      <div className="w-100 infoProdutosRight">
        <h6>{props.title}</h6>
        <h6 className="precoProduto">R$ {props.preco}</h6>
        <p>
          {props.cor}
          <br></br>
          {props.tamanho}
        </p>
        <div className="inputQuantity">
          <NumberInput min={0} defaultValue={1} withAsterisk />
        </div>
      </div>

      <div className="removeItem">
        <ActionIcon onClick={handleRemoveItem} className=" action-iconX">
          <IconX />
        </ActionIcon>
        {/* <a className="tag_X" href="#">
          X
        </a> */}
      </div>
    </div>
  );
};

export default CardProdutosCart;
