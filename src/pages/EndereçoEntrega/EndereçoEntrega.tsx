import img from "../components/images/Logo/VERSA.png";
// import img2 from "../components/images/Register/RegisterImage2.png";
import "./EndereçoEntrega.css";
import { Select } from "@mantine/core";
import { Checkbox } from "@mantine/core";
export default function RegisterPage2() {
  const customStyles = {
    fontFamily: "Poppins, sans-serif", // Define a fonte Poppins
  };
  return (
    <section className="row registerfont">
      <div className="fisrt-inf-index">
        <a href="https://versa-blond.vercel.app/">
          <img className="logoregistro2" src={img} />
        </a>

        <form>
          <div id="registerInputs">
            <div id="Textos">
              <h1 id="registerText">Endereço de entrega</h1>
              <h3 className="registerText">
                Preencha os campos abaixo com seu endereço.
              </h3>

              <h2 className="inputsRegistro mt-5">Nome do destinatário</h2>
              <input
                className="w-100"
                type="text"
                placeholder="Digite seu email"
              />

              <h2 className="inputsRegistro">Celular</h2>
              <input
                className="w-100"
                type="tel"
                placeholder="Digite seu número de telefone"
              />

              <h2 className="inputsRegistro">Endereço</h2>
              <input
                className="w-100"
                type="text"
                placeholder="Digite seu endereço"
              />

              <h2 className="inputsRegistro">Cidade</h2>
              <input
                className="w-100"
                type="text"
                placeholder="Digite sua cidade"
              />

              <div className="row mt-2">
                <div className="col-md-6">
                  <h2 className="inputsRegistro">CEP</h2>
                  <input
                    className="w-100"
                    type="text"
                    placeholder="00000-000"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="inputsRegistro">Número</h2>
                  <input className="w-100" type="text" placeholder="123" />
                </div>
              </div>
              <h2 className="inputsRegistro">Ponto de referência</h2>
              <input
                className="w-100"
                type="text"
                placeholder="Digite o ponto de referência"
              />
              <h2 className="mt-3 inputsRegistro">Forma de pagamento</h2>
              <Select
                className="mt-3 formaPagamento"
                placeholder="Escolha uma forma de pagamento"
                data={[
                  "PIX",
                  "Cartão de crédito",
                  "Cartão de débito",
                  "Xerecard",
                ]}
                style={customStyles} // Aplica os estilos personalizados
              />
              <button className="mt-3 mb-3 w-100 " id="criarButton">
                Continuar no whatsapp
              </button>
            </div>
          </div>
          <Checkbox
            color="blue" // Define a cor principal do checkbox
            className="custom-checkbox"
            label={
              <>
                Eu aceito os{" "}
                <a
                  href="https://www.instagram.com/grazimourao/"
                  target="_blank"
                >
                  termos e condições
                </a>
              </>
            }
          />
        </form>

        {/* <div className="text-center mt-4">
          Já tem uma conta? <a href="./Login">Faça o login.</a>
        </div> */}
      </div>
      {/* <div className="col-md-6 pe-0">
        <img className="d-none d-md-block registerImage2" src={img2} />
      </div> */}
    </section>
  );
}
