import "./ProdutosEspecificos.css"
import { ProdutosCentro } from "../components/ProdutosEspecificos/ProdutosCentro";
import versaBF from "./../components/images/Novidades/VERSABLACKFRIDAY.png";
import Header from "../components/Header/Header";
import {Affix} from "../components/Affix/Affix"
import { Space } from '@mantine/core';

export default function ProdutosEspecificos() {
  return (
    <div>

      <img src={versaBF} alt="versa black friday" style={{ width: "100%", height: "230px" }}/>

      <Space h={50} ></Space>
      <Header />  
      <ProdutosCentro props="camisa" />
      <Affix />
      <Space h={100} ></Space>

    </div>
  );
}
