import "./Novidades.css";
import { Novidade } from "../components/SessaoN/SessaoN";
import { FiltroCima } from "../components/SessaoFc/SessaoFC";
import { MeioFiltroProduto } from "../components/SessaoFP/SessaoFP";
import versaBF from "./../components/images/Novidades/VERSABLACKFRIDAY.png";
import Header from "./../components/Header/Header";

export default function NovidadesPage() {
  return (
    <div>

      <img src={versaBF} alt="versa black friday" style={{ width: "100%", height: "230px" }}/>

      <Header />
      <Novidade />
      <FiltroCima />
      <MeioFiltroProduto />
    </div>
  );
}
