import img2 from "./../components/images/RecuperarSenha/RecuperarImage1.png";
import Header from "../components/Header/Header";
import "./Recuperar2.css";
export default function RecuperarSenha2() {
  return (
    <>
      <Header />
      <section className="row registerfont pb-3">
        <div className="col-md-6 fisrt-inf-index">
          <div id="registerInputs">
            <div id="Textos">
              <h1 id="registerText">Recuperação de senha</h1>
              <h3 className="registerText mt-3">
                Digite o código que enviamos ao seu email para a recuperação de
                sua conta.
              </h3>
              <h2 className="inputsRegistro mt-5"></h2>
              <input
                className="w-100"
                type="email"
                placeholder="Insira o código"
              />

              <button className="mt-4 w-100 " id="criarButton">
                Continuar
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            Retornar ao <a href="./Login">login.</a>
          </div>
        </div>
        <div className="col-md-6 pe-0">
          <img className="d-none d-md-block registerImage" src={img2} />
        </div>
      </section>
    </>
  );
}
