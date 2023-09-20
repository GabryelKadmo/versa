import img from "./../components/images/Logo/VERSA.png";
import img2 from "./../components/images/Login/LoginImage.png";
import "./LoginPage.css";
export default function LoginPage() {
  const handleCheckboxChange = () => {};

  return (
    <section className="row registerfont pb-3">
      <div className="col-md-6 fisrt-inf-index">
        <img className="logologin" src={img} />

        <div id="registerInputs">
          <div id="Textos">
            <h1 id="registerText">Bem vindo de volta!</h1>
            <h3 className="registerText mt-3">
              Insira suas credenciais para acessar sua conta.
            </h3>
            <h2 className="inputsRegistro mt-5">Email</h2>
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

            <button className="mt-4 w-100 " id="criarButton">
              Entrar
            </button>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="./Recuperar">Esqueci a senha.</a>
        </div>
      </div>
      <div className="col-md-6 pe-0">
        <img className="d-none d-md-block registerImage" src={img2} />
      </div>
    </section>
  );
}
