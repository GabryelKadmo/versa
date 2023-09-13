import "./Slide.css";
import SlideCentro from "../images/LandingPage/SlideCentro.png";

export function Slide() {
  return (
    <div className="caixa_slide">
      <div className="slide_centro">
        <img src={SlideCentro} alt="Slide do centro" />
      </div>
    </div>
  );
}
