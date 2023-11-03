import "./LandingPageNew.css";
import { Slide } from "../components/LandingPage/Slide";
import { SessaoCO } from "../components/LandingPage/SessaoCO";
import { SessaoAS } from "../components/LandingPage/SessaoAS";
import { SessaoNR } from "../components/LandingPage/SessaoNR";
import { SessaoMarcas } from "../components/LandingPage/SessaoMarcas";
import SessaoAM from "../components/LandingPage/SessaoAM";
import Header from "../components/Header/Header";
export default function LandingPage() {
  return (
    <div>
      <Header />
      <Slide />
      <SessaoCO />
      <SessaoAS />
      <SessaoNR />
      <SessaoMarcas />
      <SessaoAM />
    </div>
  );
}
