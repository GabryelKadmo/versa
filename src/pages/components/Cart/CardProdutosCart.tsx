import { useContext, useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import AppContext from "../Context/AppContext";

type Props = {
  _id: string;
  title: string;
  preco: number;
  cor: string;
  img: string;
  tamanho: string;
  quantidade: number;
};

const CardProdutosCart = (props: Props) => {
  const context = useContext(AppContext);

  if (context === undefined) {
    // Handle undefined context here, if necessary
    return <div>Error: Context is undefined.</div>;
  }

  const { cartItem, setCartItem } = context;
  const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartProduct = cartItem.find((item) => item._id === props._id);

  const [quantidade, setQuantidade] = useState(() => {
    // Retrieve the value from localStorage, or use the cartProduct quantity, or 1 as the default
    const localStorageValue = localStorage.getItem(`quantidade_${props._id}`);
    return localStorageValue
      ? parseInt(localStorageValue, 10)
      : cartProduct
        ? cartProduct.quantidade
        : 1;
  });

  useEffect(() => {
    // Use useEffect to save the quantidade value to localStorage when it changes
    localStorage.setItem(`quantidade_${props._id}`, quantidade.toString());
  }, [props._id, quantidade]);

  const handleQuantityChange = (value: number) => {
    setQuantidade(value);

    // Update the quantity of this product in the cart state
    const updatedCart = cartItem.map((item) => {
      if (item._id === props._id) {
        return { ...item, quantidade: value };
      }
      return item;
    });
    setCartItem(updatedCart);
    // ...
  };

  const handleRemoveItem = () => {
    const updatedItems = cartItem.filter((item) => item._id !== props._id);
    const updatedStorage = localStorageCart.filter(
      (item: { _id: string }) => item._id !== props._id
    );

    // Remove the item from localStorage
    localStorage.removeItem(`quantidade_${props._id}`);

    setCartItem(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedStorage));
    // Verify the new state here
  };
  return (
    <div className="cardProdutosCart">
      <div className="imageLeft">
        <img className="imgProduto" src={props.img} alt={props.title} />
      </div>

      <div className="w-100 infoProdutosRight">
        <h6>{props.title}</h6>
        <h6 className="precoProduto">R$ {props.preco}</h6>
        <p>
          {props.cor}
          <br />
          {props.tamanho}
        </p>
        <div className="inputQuantity">
          <NumberInput
            min={1}
            value={quantidade}
            withAsterisk
            onChange={handleQuantityChange}
          />
        </div>
      </div>

      <div className="removeItem">
        <ActionIcon onClick={handleRemoveItem} className="action-iconX">
          <IconX />
        </ActionIcon>
      </div>
    </div>
  );
};

export default CardProdutosCart;
