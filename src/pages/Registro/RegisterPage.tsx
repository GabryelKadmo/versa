import img from "../components/images/Logo/VERSA.png";
import img2 from "../components/images/Register/RegisterImage.png";
import "./RegisterPage.css";
export default function RegisterPage() {
  return (
    <section id="container">
      <img id="versaLogo" src={img} />

      <div id="Textos">
        <h1 id="h1Text">Crie sua conta</h1>
        <h3 id="loginText">
          Para começar a aproveitar todos os benefícios e recursos disponíveis,
          por favor, crie uma conta gratuita. É simples e rápido.
        </h3>
      </div>

      <div id="loginInputs">
        <div>
          <h2 id="nomesInputs">Nome</h2>
          <input type="text" placeholder="Digite seu nome" />
        </div>

        <div>
          <h2 id="nomesInputs">Sobrenome</h2>
          <input type="text" placeholder="Digite seu sobrenome" />
        </div>

        <div>
          <h2 id="nomesInputs">Email</h2>
          <input type="email" placeholder="Digite seu email" />
        </div>

        <div>
          <h2 id="nomesInputs">Senha</h2>
          <input type="password" placeholder="Digite sua senha" />
        </div>
      </div>

      <button id="criarButton">Criar</button>

      <div>
        <img id="loginImage" src={img2} />
      </div>

      <div id="tagLogin">
        <span>
          Já tem uma conta? <a href="./LoginPage">Faça o login.</a>
        </span>
      </div>
    </section>
  );
}
