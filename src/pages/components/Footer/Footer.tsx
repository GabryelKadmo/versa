import img from "./../images/Logo/logo.png";
import "./Footer.css";
import { useState } from "react";

export default function Footer() {
  const [infoInformacoesFooter, setInfoInformacoesFooter] = useState([
    "Assinaturas",
    "FAQ",
    "Política de Pagamento",
    "Política de entrega",
    "Trocas e devoluções",
    "Seja um revendedor",
  ]);

  const [infoMenuFooter, setInfoMenuFooter] = useState([
    "Atendimento",
    "Quem Somos",
    "Compra Segura",
  ]);

  return (
    <section className="sectionFooter">
      <img className="footerLogo" src={img} />

      <div className="footerLists">
        <div className="itemLeftFooter">
          <h2 className="informacoesFooter">INFORMAÇÕES</h2>
          {infoInformacoesFooter.map((item, index) => (
            <section key={item}>
              <span> {item} </span>
            </section>
          ))}
        </div>

        <div className="itemRightFooter">
          <h2 className="menuFooter">MENU</h2>
          {infoMenuFooter.map((item, index) => (
            <section key={item}>
              <span> {item} </span>
            </section>
          ))}
        </div>
        <section className="sectionFooterTwo"></section>
      </div>
    </section>
  );
}
