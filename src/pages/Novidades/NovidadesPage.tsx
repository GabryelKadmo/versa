import "./Novidades.css";
import { Novidade } from "../components/SessaoN/SessaoN";
import { FiltroCima } from "../components/SessaoFc/SessaoFC";
import { MeioFiltroProduto } from "../components/SessaoFP/SessaoFP";
import Header from "./../components/Header/Header";

export default function NovidadesPage() {
  return (
    <div>

      <h2 className="titleCart-h1 text-center pt-5 pb-1">Recém chegados</h2>

      <Header />
      <Novidade />
      <FiltroCima />
      <MeioFiltroProduto />
    </div>
  );
}
