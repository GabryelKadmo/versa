import "./LandingPage.css";
import "./../components/Header/Header";
import { Slide } from "../components/slide_principal/Slide";
import {SessaoCO} from "../components/SessãoCompraO/SessaoCO"
import { SessaoAS } from "../components/SessãoAboutStyle/SessaoAS";
import { SessaoNR } from "../components/SessaoNR/SessaoNR";
import { SessaoMarcas } from "../components/SessaoMarcas/SessaoMarcas";
import { Demo } from "../components/SessaoAM/SessaoAM";
import { SessaoNP } from "../components/SessaoNP/SessaoNP";

export function LandingPage() {
  return (
    <div>
      <Slide />
      <SessaoCO />
      <SessaoAS />
      <SessaoNR />
      <SessaoMarcas />
      <Demo/>
      <SessaoNP />
    </div>
  );
}
