import "./Carrinho.css";
import { IconX } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { NumberInput } from "@mantine/core";

type Props = {
  title: string;
  preco: number;
  cor: string;
  img: string;
  tamanho: string;
};

const CardProdutosCart = (props: Props) => {

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
        <ActionIcon className=" action-iconX">
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
