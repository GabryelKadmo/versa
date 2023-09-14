import "./SessaoMarcas.css"
import naosei from "../images/SessaoM/naosei.png"
import Adidas from "../images/SessaoM/adidas.jpg"
import Nike from "../images/SessaoM/nike.jpg"
import Keneth from "../images/SessaoM/kenneth cole.png"

export function SessaoMarcas(){
    return(
        <div className="container_marcas">
            <div>
                <h2>
                    MARCAS
                </h2>
            </div>
        <div>
            <img className="kenneth_marca" src={Keneth} alt="Kenneth cole" />
            <img className="nike_marca" src={Nike} alt="Kenneth cole" />
            <img className="naosei_marca" src={naosei} alt="Kenneth cole" />
            <img className="adidas_marca" src={Adidas} alt="Kenneth cole" />
        </div>
        </div>
    )
}
