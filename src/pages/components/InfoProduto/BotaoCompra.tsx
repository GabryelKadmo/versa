import "./BotaoCompra.css";
import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

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
};

export function BotaoCompra(props: Props) {
  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { cartItem, setCartItem } = context;

  const handleAddCart = () => {
    console.log(cartItem, props);

    if (props._id !== undefined) {
      setCartItem([...cartItem, props]);
      console.log(cartItem, props);
    }
  };
  localStorage.setItem("cart", JSON.stringify(cartItem));

  return (
    <div>
      <Button
        onClick={handleAddCart}
        fw={600}
        color="dark"
        radius={"xl"}
        leftIcon={<IconShoppingCart size="1rem" />}
        w={230}
        h={42}
      >
        Adicionar ao carrinho
      </Button>
    </div>
  );
}
