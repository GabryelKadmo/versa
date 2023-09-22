import img from "./../components/images/Logo/VERSA.png";
import img2 from "./../components/images/Register/RegisterImage.png";
import "./RegisterPage1.css";
export default function RegisterPage1() {
  return (
    <section className="row registerfont pb-3">
      <div className="col-md-6 fisrt-inf-index">
        <img className="logoregistro1" src={img} />

        <div id="registerInputs">
          <div id="Textos">
            <h1 id="registerText">Crie sua conta</h1>
            <h3 className="registerText">
              Para começar a aproveitar todos os benefícios e recursos
              disponíveis, por favor, crie uma conta gratuita. É simples e
              rápido.
            </h3>
            <form></form>
            <div className="row mt-5">
              <div className="col-md-6">
                <h2 className="inputsRegistro">Nome</h2>
                <input
                  className="w-100"
                  type="text"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="col-md-6">
                <h2 className="inputsRegistro">Sobrenome</h2>
                <input
                  className="w-100"
                  type="text"
                  placeholder="Digite seu sobrenome"
                />
              </div>
            </div>

            <h2 className="inputsRegistro">Email</h2>
            <input
              className="w-100"
              type="email"
              placeholder="Digite seu email"
            />

            <h2 className="inputsRegistro">Senha</h2>
            <input
              className="w-100"
              type="password"
              placeholder="Digite sua senha"
            />

            <button className="mt-5 w-100 " id="criarButton">
              Continue
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
