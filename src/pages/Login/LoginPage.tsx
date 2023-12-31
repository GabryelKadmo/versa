import { useState } from "react";
import img from "./../components/images/Logo/VERSA.png";
import img2 from "./../components/images/Login/LoginImage.png";
import { login } from "./../../../Utils/config";
import "./LoginPage.css";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoad(true);
    e.preventDefault();
    const loginForm = {
      email,
      senha,
    };
    const data = await login(loginForm);
    setLoad(false);

    if (data.detail === "Login bem-sucedido") {
      window.location.href = "/";
    } else {
      setError(data.detail);
    }
    localStorage.setItem("token", data.access_token);
  };

  return (
    <section className="row registerfont pb-3">
      <div className="col-md-6 fisrt-inf-indexLogin">
        <a className="registerTagA" href="/">
          <img className="logologin" src={img} />
        </a>

        <div id="registerInputs">
          <div id="Textos">
            <h1 className="mt-5" id="registerText">
              Bem vindo de volta!
            </h1>
            <h3 className="registerText mt-3 mb-5">
              Insira suas credenciais para acessar sua conta.
            </h3>
            <form onSubmit={handleSubmit}>
              <h5 className={`text-danger text-center`}>
                {error ? error : ""}
              </h5>
              <h2 className="inputsRegistro">Email</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="w-100"
                type="email"
                placeholder="Digite seu nome de usuário"
              />
              <h2 className="inputsRegistro">Senha</h2>
              <div>
              <a className="forgotPass" href="./recuperar">Esqueci a senha</a>
              </div>
              <input
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
                required
                className="w-100"
                type="password"
                placeholder="Digite sua senha"
              />

              <button
                type="submit"
                className={` mt-4  w-100 ${load && "disabled"}`}
                id="criarButton"
              >
                {load ? "Carregando..." : "Entrar"}
              </button>
              <div className="mt-3 text-center">
                Deseja <a href="./Register">criar uma conta?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6 pe-0">
        <img className="d-none d-md-block registerImage" src={img2} />
      </div>
    </section>
  );
}
