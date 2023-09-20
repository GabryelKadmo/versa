import img from "./../components/images/Logo/VERSA.png";
import img2 from "./../components/images/RecuperarSenha/RecuperarImage.png";
import "./Recuperar.css";
export default function RecuperarSenha() {
  return (
    <section className="row registerfont pb-3">
      <div className="col-md-6 fisrt-inf-index">
        <img className="logologin" src={img} />

        <div id="registerInputs">
          <div id="Textos">
            <h1 id="registerText">Esqueci a senha</h1>
            <h3 className="registerText mt-3">
              Digite seu e-mail, nós enviaremos um código de recuperação para o
              seu e-mail.
            </h3>
            <h2 className="inputsRegistro mt-5"></h2>
            <input
              className="w-100"
              type="email"
              placeholder="Insira seu email cadastrado"
            />

            <button className="mt-4 w-100 " id="criarButton">
              Continuar
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          Já tem uma conta? <a href="./Login">Faça o login.</a>
        </div>
      </div>
      <div className="col-md-6 pe-0">
        <img className="d-none d-md-block registerImage" src={img2} />
      </div>
    </section>
  );
}
