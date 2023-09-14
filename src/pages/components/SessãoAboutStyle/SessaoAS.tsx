import "./SessaoAS.css"
import ImagemAS from "../images/SessãoAS/imagem AS.png"

export function SessaoAS(){
    return(
        <div className="container_as">
            <div>
                <img className="imagem_as" src={ImagemAS} alt="Imagem About Style" />
            </div>
            <div className="opcao_estilo">
                <p>
                Ter estilo com suas roupas é expressar sua personalidade, criatividade e confiança, usando peças que fazem você se sentir único e bem consigo mesmo.
                </p>
                <button>
                    ENCONTRE O SEU
                </button>
            </div>
        </div>
       
    )
}