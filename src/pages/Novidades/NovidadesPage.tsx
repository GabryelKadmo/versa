import "./Novidades.css";
import { Image } from "@mantine/core";
import ImagemNovidade from "../components/images/Novidades/novidade_def_f.png";
import { Novidade } from "../components/SessaoN/SessaoN";
import { FiltroCima } from "../components/SessaoFc/SessaoFC"
import {MeioFiltroProduto} from "../components/SessaoFP/SessaoFP"

export default function NovidadesPage() {
  return (
    <div>
      <Image
        className="imagem_novidade"
        radius="xl"
        h={{base: 200, md: 304, lg: 404, xl: 504}}
        src={ImagemNovidade}
      />
      <Novidade />
      <FiltroCima />
      <MeioFiltroProduto />
    </div>
  );
}
