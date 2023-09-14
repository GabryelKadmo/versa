import "./SessaoCO.css"
import ImagemEsquerda from "../images/SessãoCO/Esquerda.png"
import ImagemMeio from "../images/SessãoCO/Meio.png"
import ImagemDireita from "../images/SessãoCO/direita.png"

export function SessaoCO(){
    return(
        <div className="container">
            <div className="texto_compre">
                <h1> <span> COMPRE </span><br /> POR OCASIÃO </h1>
            </div>
            <div className="imagens_compre">
                <div className="imagem_esquerda">
                    <img className="img_s" src={ImagemEsquerda} alt="Imagem esquerda" />
                    <h2>STREETWEAR</h2>
                    <p>Estilo urbano e despojado, inspirado pela cultura hip-hop e skate, com roupas confortáveis e expressivas.</p>
                </div>
                <div className="imagem_meio">
                    <img className="img_s" src={ImagemMeio} alt="Imagem do meio" />
                    <h2>FORMAL</h2>
                    <p>Estilo elegante e sofisticado, geralmente composto por trajes como terno,<br /> gravata e camisa social, adequado para ocasiões especiais.</p>
                </div>
                <div className="imagem_direita">
                    <img className="img_s" src={ImagemDireita} alt="Imagem direita" />
                    <h2>FLORAL</h2>
                    <p>Estampa de flores em roupas, muitas vezes usada para criar um visual vibrante e primaveril.
                    </p>
                </div>
            </div>
            <button className="mais_estilos">MAIS ESTILOS</button>
        </div>
    )
}