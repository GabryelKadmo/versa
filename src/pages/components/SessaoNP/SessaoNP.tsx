import "./SessaoNP.css"
import Pacote from "../images/SessaoNP/Rectangle 51.png"

export function SessaoNP(){
    return(
        <div className="container_np">
            <div className="texto_np">
                <h1> <span> ASSINE </span><br /> NOSSOS PACOTES </h1>
            </div>
            <div className="imagens_np">
                <div className="imagem_esquerda_np">
                    <img className="img_s_np" src={Pacote} alt="Imagem esquerda" />
                    <h2>PACOTE ESPORTIVO</h2>
                    <p>
                    Receba mensalmente em sua residência roupas esportivas de alta qualidade com nossa assinatura mensal exclusiva. Aproveite o conforto e o estilo que só encontrará em nossa loja.
                    </p>
                    <p>
                        $300
                    </p>
                </div>
                <div className="imagem_meio_np">
                    <img className="img_s_np" src={Pacote} alt="Imagem do meio" />
                    <h2>PACOTE MINIMALISTA</h2>
                    <p>
                    Receba mensalmente peças de roupa de design simples, cortes limpos e cores neutras, garantindo um estilo sofisticado e descomplicado, diretamente na sua porta.
                    </p>
                    <p>
                        $300
                    </p>
                </div>
                <div className="imagem_direita_np">
                    <img className="img_s_np" src={Pacote} alt="Imagem direita" />
                    <h2>PACOTE CASUAL</h2>
                    <p>
                    Receba todo mês roupas confortáveis e versáteis, perfeitas para o seu dia a dia, entregues diretamente à sua porta. Estilo sem esforço ao seu alcance.                    
                    </p>
                    <p>
                        $300
                    </p>
                </div>
            </div>
            <button className="mais_pacotes">MAIS PACOTES</button>
        </div>
    )
}