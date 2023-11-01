// import img from "../components/images/Logo/VERSA.png";
import { Button } from "@mantine/core";
import { TextInput } from "@mantine/core";
// import img2 from "../components/images/Register/RegisterImage2.png";
import Header from "./../components/Header/Header";
import "./EndereçoEntrega.css";
import { Select } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { pedido } from "../../../Utils/config";
export default function RegisterPage2() {

  const [dados] = useState(JSON.parse(localStorage.getItem("endereço") as any));
  useEffect(() => {
    setSearchCep(
      dados.cep === "None" || dados.cep === undefined ? "" : dados.cep
    );
  }, [dados]);

  const [searchCep, setSearchCep] = useState("");

  const [cart] = useState(JSON.parse(localStorage.getItem("cart") ?? "[]"));

  const form = useForm({
    initialValues: {
      nome: dados === "None" ? "" : dados.nome,
      celular: dados === "None" ? "" : dados.celular,
      CEP: dados === "None" ? "" : dados.cep,
      numero: dados === "None" ? "" : dados.numero,
      cidade: dados === "None" ? "" : dados.cidade,
      estado: dados === "None" ? "" : dados.estado,
      bairro: dados === "None" ? "" : dados.bairro,
      complemento: dados === "None" ? "" : dados.complemento,
      logradouro: dados === "None" ? "" : dados.logradouro,
      pontoReferencia: dados === "None" ? "" : dados.pontoReferencia,
    },
    validate: {},
  });

  useEffect(() => {
    if (searchCep && searchCep.length === 8) {
      fetch(`https://viacep.com.br/ws/${searchCep}/json/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na requisição do CEP");
          }
          return response.json();
        })
        .then((data) => {
          if (data.erro) {
            throw new Error("CEP não encontrado");
          }
          form.setFieldValue("nome", data.nome);
          form.setFieldValue("logradouro", data.logradouro);
          form.setFieldValue("bairro", data.bairro);
          form.setFieldValue("cidade", data.localidade);
          form.setFieldValue("estado", data.uf);
          form.setFieldValue("complemento", data.complemento);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchCep]);

  async function handleSubmit(event: any) {
    console.log(form.values);
    event.preventDefault();
    const produtos =
      cart &&
      cart.map((item: any) => ({
        id: item._id,
        nome: item.titulo,
        // quantidade: item.quantidade_estoque,
        quantidade: 1,
        preco_unitario: item.preco,
      }));

    const object = {
      ...form.values,
      cep: searchCep,
    };
    const order = {
      nome: form.values.nome,
      endereco: `${form.values.logradouro}, ${form.values.bairro}, ${form.values.complemento}, ${form.values.numero}`,
      produtos: [...produtos],
      telefone: form.values.celular,
      tipo_pagamento: "PIX",
    };

    await pedido(order);
    const produtosStr = produtos.map((produtos:any) => {
      return `${produtos.nome} - R$ ${produtos.preco_unitario}`;
    }).join("%0A");
    const total = produtos.reduce((accumulator:any, produtos:any) => {
      return accumulator + produtos.preco_unitario;
    }, 0);
    
    const whatsapp = `*DETALHES%20DO%20PEDIDO*%3A%0A%0A*INFORMA%C3%87%C3%95ES%20DO%20CLIENTE*%3A%0A*NOME*%3A ${form.values.nome}%0A%0A*TELEFONE:* ${form.values.celular} %0A%0A*ENDEREÇO* ${form.values.logradouro}. ${form.values.bairro}, ${form.values.complemento}, Nº ${form.values.numero} %0A%0A*REFERÊNCIA:* ${form.values.pontoReferencia}%0A%0A*PRODUTOS:*%0A${produtosStr}%0A%0A *TOTAL:* R$ ${total}%0A%0A*FORMA DE PAGAMENTO:*%0A${"PIX"}`;

    window.open(`https://wa.me/557391163838/?text=${whatsapp}`);

    localStorage.setItem("endereço", JSON.stringify(object));
  }

  return (
    <>
      <Header />

      <section className="row registerfont">
        <div className="fisrt-inf-index">
          {/* <a href="/">
          <img className="logoregistro2" src={img} />
        </a> */}

          <form>
            <div id="registerInputs">
              <div id="Textos">
                <h1 id="registerText">Endereço de entrega</h1>
                <h3 className="registerText">
                  Preencha os campos abaixo com seu endereço.
                </h3>

                <h2 className="inputsRegistro mt-5">Nome do destinatário</h2>
                <TextInput
                  className="w-100"
                  type="text"
                  placeholder="Digite seu nome"
                  {...form.getInputProps("nome")}
                />
                <div className="row mt-2">
                  <div className="col-md-4">
                    <h2 className="inputsRegistro">CEP</h2>
                    <TextInput
                      className="w-100"
                      type="text"
                      placeholder="00000-000"
                      value={searchCep}
                      onChange={(event) => setSearchCep(event.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <h2 className="inputsRegistro">Número</h2>
                    <TextInput
                      className="w-100"
                      type="text"
                      placeholder="123"
                      {...form.getInputProps("numero")}
                    />
                  </div>
                  <div className="col-md-4">
                    <h2 className="inputsRegistro">UF</h2>
                    <TextInput
                      className="w-100"
                      type="text"
                      placeholder="Digite seu estado"
                      {...form.getInputProps("estado")}
                    />
                  </div>
                </div>

                <h2 className="inputsRegistro">Cidade</h2>
                <TextInput
                  className="w-100"
                  type="text"
                  placeholder="Digite sua cidade"
                  {...form.getInputProps("cidade")}
                />
                <h2 className="inputsRegistro">Logradouro</h2>
                <TextInput
                  className="w-100"
                  type="text"
                  placeholder="Digite o logradouro"
                  {...form.getInputProps("logradouro")}
                />
                <h2 className="inputsRegistro">Complemento</h2>
                <TextInput
                  className="w-100"
                  type="text"
                  placeholder="Digite o complemento"
                  {...form.getInputProps("complemento")}
                />
                <div className="row mt-2">
                  <div className="col-md-6">
                    <h2 className="inputsRegistro">Bairro</h2>
                    <TextInput
                      className="w-100"
                      type="text"
                      placeholder="Digite o bairro"
                      {...form.getInputProps("bairro")}
                    />
                  </div>
                  <div className="col-md-6">
                    <h2 className="inputsRegistro">Celular</h2>
                    <TextInput
                      className="w-100"
                      type="tel"
                      placeholder="Digite seu número de telefone"
                      {...form.getInputProps("celular")}
                    />
                  </div>
                </div>
                <h2 className="inputsRegistro">
                  Ponto de referência (opcional)
                </h2>
                <TextInput
                  className="w-100"
                  type="text"
                  placeholder="Digite o ponto de referência"
                  {...form.getInputProps("pontoReferencia")}
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
                  styles={(theme) => ({
                    input: {
                      "&:focus-within": {
                        borderColor: theme.colors.green[7],
                      },
                    },
                    item: {
                      "&[data-selected]": {
                        "&, &:hover": {
                          backgroundColor:
                            theme.colorScheme === "dark"
                              ? theme.colors.dark[6]
                              : theme.colors.dark[6],
                          color:
                            theme.colorScheme === "dark"
                              ? theme.white
                              : theme.colors.gray[0],
                        },
                      },
                      "&[data-hovered]": {},
                    },
                  })}
                />
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="mt-3 mb-3 w-100 "
                  id="criarButton"
                >
                  Continuar no whatsapp
                </Button>
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
    </>
  );
}
