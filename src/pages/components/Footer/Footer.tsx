import img from "./../images/Logo/logo.png";
import img2 from "./../images/Footer/whatsappFooter.png";
import img3 from "./../images/Footer/telegramFooter.png";
import img4 from "./../images/Footer/2023Footer.png";

import "./Footer.css";
import { useState } from "react";

export default function Footer() {
  const [infoInformacoesFooter] = useState([
    "Assinaturas",
    "FAQ",
    "Política de Pagamento",
    "Política de entrega",
    "Trocas e devoluções",
    "Seja um revendedor",
  ]);

  const [infoMenuFooter] = useState([
    "Atendimento",
    "Quem Somos",
    "Compra Segura",
  ]);

  return (
    <>
      <footer className="py-5">
        <div className="footerUp d-flex justify-content-between px-md-5 px-2">
          <div className="d-block d-md-flex ">
            <img
              width="117px"
              height="116px"
              className="footerLogo d-none d-md-block"
              src={img}
            />
            <ul className="navigation-footer">
              <h5>Informações</h5>
              <li>
                <a href="#">{infoInformacoesFooter[0]}</a>
              </li>
              <li>
                <a href="#">{infoInformacoesFooter[1]}</a>
              </li>
              <li>
                <a href="#">{infoInformacoesFooter[2]}</a>
              </li>
              <li>
                <a href="#">{infoInformacoesFooter[3]}</a>
              </li>
              <li>
                <a href="#">{infoInformacoesFooter[4]}</a>
              </li>
              <li>
                <a href="#">{infoInformacoesFooter[5]}</a>
              </li>
            </ul>
            <ul className="ps-md-5 ps-2">
              <h5>Menu</h5>

              <li>
                <a href="#">{infoMenuFooter[0]}</a>
              </li>
              <li>
                <a href="#">{infoMenuFooter[1]}</a>
              </li>
              <li>
                <a href="#">{infoMenuFooter[2]}</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn text-white mb-3">Entre em Contato</button>
            <p className="text-white mb-0">+55 (75) 99999-9999</p>
            <p className="text-white">versa@example.com</p>
          </div>
        </div>

        <div className="footerDown d-flex justify-content-between px-5">
          <div className="redes-sociais">
            <img className="me-3" src={img2} alt="Whatsapp icon" />
            <img src={img3} alt="Telegram icon" />
          </div>
          <img src={img4} alt="Year icon" />
        </div>
      </footer>
    </>
  );
}
