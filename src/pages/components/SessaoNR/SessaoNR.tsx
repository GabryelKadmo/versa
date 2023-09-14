import "./SessaoNR.css"
import ImagemEsquerda from "../images/SessaoNR/Esquerda.png"
import ImagemMeio from "../images/SessaoNR/Meio.png"
import ImagemDireita from "../images/SessaoNR/Direita.png"

export function SessaoNR(){
    return(
        <div className="container_nr">
            <div className="texto_novas">
                <h1> <span> NOVAS </span><br /> NA LOJA </h1>
            </div>
            <div className="imagens_nova">
                <div className="imagem_esquerda_nr">
                    <img className="img_s_nr" src={ImagemEsquerda} alt="Imagem esquerda" />
                    <h2>MOLETOM CREST</h2>
                    <p>
                    Ideal para treinos ou estilo de academia. Interior quente e macio, capuz ajustável e design minimalista, tornando-o um item indispensável.                    
                    </p>
                    <p>
                        $300
                    </p>
                </div>
                <div className="imagem_meio_nr">
                    <img className="img_s_nr" src={ImagemMeio} alt="Imagem do meio" />
                    <h2>HENLEY LEGACY</h2>
                    <p>
                    Estilos clássicos, funcionalidades modernas, cortes tradicionais e tecidos novos, com uma estampa que homenageia a tradição da Versa. Agora, é sua vez de construir seu próprio legado.
                    </p>
                    <p>
                        $300
                    </p>
                </div>
                <div className="imagem_direita_nr">
                    <img className="img_s_nr" src={ImagemDireita} alt="Imagem direita" />
                    <h2>LEGACY RAG TOP</h2>
                    <p>
                    Estilos clássicos, funcionalidades modernas, cortes tradicionais e tecidos novos, com uma estampa que homenageia a tradição da Versa. Agora, é sua vez de construir seu próprio legado.                    </p>
                    <p>
                        $300
                    </p>
                </div>
            </div>
            <button className="novidades">VEJA TODAS NOVIDADES</button>
        </div>
    )
}