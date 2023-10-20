import img2 from "./../components/images/RecuperarSenha/RecuperarImage2.png";
import Header from "./../components/Header/Header";
import "./Recuperar3.css";
export default function RecuperarSenha2() {
  return (
    <>
      <Header />
      <section className="row registerfont pb-3">
        <div className="col-md-6 fisrt-inf-index">
          <div id="registerInputs">
            <div id="Textos">
              <h1 id="registerText">Redefinir Senha</h1>
              <h3 className="registerText mt-3">
                Por favor, insira sua nova senha abaixo.
              </h3>
              <h2 className="inputsRegistro mt-5">Senha</h2>
              <input
                className="w-100"
                type="password"
                placeholder="Insira sua nova senha"
              />
              <h2 className="inputsRegistro mt-3">Repita a senha</h2>
              <input
                className="w-100"
                type="password"
                placeholder="Confirme a nova senha"
              />
              <button className="mt-4 w-100 " id="criarButton">
                Concluir
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
    </>
  );
}
