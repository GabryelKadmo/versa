import "./BotaoCompra.css";
import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { toast } from "react-toastify";

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
  tamanho: string;
};

const idNotifyBad = "id-notify-bad-yes";
const idNotifySize = "id-notify-size-yes";
const idNotify = "id-notify-yes";

export function BotaoCompra(props: Props) {
  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { cartItem, setCartItem } = context;

  const notify = () => {
    toast.success('Produto adicionado ao carrinho', {
      toastId: idNotify,
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const notifyBad = () => {
    toast.error('Produto já no carrinho', {
      toastId: idNotifyBad,
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const notifySize = () => {
    toast.error('Selecione um tamanho', {
      toastId: idNotifySize,
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  const handleAddCart = () => {
      if (!props.tamanho) {
        // If selectedSize is empty, show an error or prevent adding to cart
        notifySize();
        return;
      }
    if (cartItem.some(item => item._id === props._id)) {
      notifyBad();
    } else {
      setCartItem([...cartItem, props]);
      notify();
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
