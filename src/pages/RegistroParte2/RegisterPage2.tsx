import img from "../components/images/Logo/VERSA.png";
import img2 from "../components/images/Register/RegisterImage2.png";
import "./RegisterPage2.css";
export default function RegisterPage2() {
  return (
    <section className="row registerfont pb-3">
      <div className="col-md-6 fisrt-inf-index">
        <img className="logoregistro2" src={img} />

        <div id="registerInputs">
          <div id="Textos">
            <h1 id="registerText">Crie sua conta</h1>
            <h3 className="registerText">
              Para começar a aproveitar todos os benefícios e recursos
              disponíveis, por favor, crie uma conta gratuita. É simples e
              rápido.
            </h3>

            <h2 className="inputsRegistro mt-5">Nome de usuário</h2>
            <input
              className="w-100"
              type="text"
              placeholder="Digite seu email"
            />

            <h2 className="inputsRegistro">Celular</h2>
            <input
              className="w-100"
              type="tel"
              placeholder="Digite sua senha"
            />

            <h2 className="inputsRegistro">Endereço</h2>
            <input
              className="w-100"
              type="text"
              placeholder="Insira seu endereço"
            />

            <h2 className="inputsRegistro">Cidade</h2>
            <input
              className="w-100"
              type="text"
              placeholder="Digite sua cidade   "
            />

            <div className="row mt-2">
              <div className="col-md-6">
                <h2 className="inputsRegistro">CEP</h2>
                <input className="w-100" type="text" placeholder="00000-000" />
              </div>
              <div className="col-md-6">
                <h2 className="inputsRegistro">Número</h2>
                <input className="w-100" type="text" placeholder="123" />
              </div>
            </div>

            <button className="mt-5 w-100 " id="criarButton">
              Criar
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          Já tem uma conta? <a href="./Login">Faça o login.</a>
        </div>
      </div>
      <div className="col-md-6 pe-0">
        <img className="d-none d-md-block registerImage2" src={img2} />
      </div>
    </section>
  );
}
