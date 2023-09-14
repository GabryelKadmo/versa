import "./SessaoAM.css"
import Fundo from "../images/SessaoAM/Rectangle 50.png"

export function SessaoAM(){
    return(
        <div className="container_am">
            <img className="img_fundo" src={Fundo} alt="Imagem de fundo" /><label className="am">APENAS O MELHOR.</label>
        </div>
    )
}