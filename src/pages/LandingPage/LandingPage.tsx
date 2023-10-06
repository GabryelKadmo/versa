import "./LandingPage.css";
import "./../components/Header/Header";
import { Slide } from "../components/slide_principal/Slide";
import { SessaoCO } from "../components/SessaoCompraO/SessaoCO";
import { SessaoAS } from "../components/SessaoAboutStyle/SessaoAS";
import { SessaoNR } from "../components/SessaoNR/SessaoNR";
import { SessaoMarcas } from "../components/SessaoMarcas/SessaoMarcas";
import { Demo } from "../components/SessaoAM/SessaoAM";
import { SessaoNP } from "../components/SessaoNP/SessaoNP";
// import { Header } from "@mantine/core";
import Header from "./../components/Header/Header";
export function LandingPage() {
  return (
    <div>
      <Header />
      <Slide />
      <SessaoCO />
      <SessaoAS />
      <SessaoNR />
      <SessaoMarcas />
      <Demo />
      <SessaoNP />
    </div>
  );
}
