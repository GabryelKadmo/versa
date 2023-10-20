import "./Novidades.css";
import { Image } from "@mantine/core";
import ImagemNovidade from "../components/images/Novidades/novidade_def_f.png";
import { Novidade } from "../components/SessaoN/SessaoN";
import { FiltroCima } from "../components/SessaoFc/SessaoFC";
import { MeioFiltroProduto } from "../components/SessaoFP/SessaoFP";
import Header from "./../components/Header/Header";

export default function NovidadesPage() {
  return (
    <div>
      <Header />
      <Novidade />
      <FiltroCima />
      <MeioFiltroProduto />
    </div>
  );
}
