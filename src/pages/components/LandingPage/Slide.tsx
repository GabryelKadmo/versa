import "./Slide.css";
import SlideCentro from "../images/LandingPage/SlideCentro.jpg";

export function Slide() {
  return (
    <div className="caixa_slide">
      <div className="slide_centro">
        <img className="img_slide" src={SlideCentro} alt="Slide do centro" />
      </div>
    </div>
  );
}
