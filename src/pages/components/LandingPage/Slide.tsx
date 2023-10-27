import "./Slide.css";
import SlideCentro from "../images/LandingPage/SlideCentro.jpeg";

export function Slide() {
  return (
    <div className="caixa_slide">
      <div className="slide_centro">
        <img className="img_slide" src={SlideCentro} alt="Slide do centro" />
      </div>
      <div className="texto_versa">
        <h1>VISTA-SE COM CONFIANÇA, ESCOLHA VERSA.</h1>
      </div>
    </div>
  );
}
