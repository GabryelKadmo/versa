// import img from "../components/images/Logo/VERSA.png";
import { TextInput } from "@mantine/core";
// import img2 from "../components/images/Register/RegisterImage2.png";
import Header from "./../components/Header/Header";
import "./EndereçoEntrega.css";
import { Select } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { pedido } from "../../../Utils/config";

export default function RegisterPage2() {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

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
    validate: {
      nome: isNotEmpty(""),
    },
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
  const handlePaymentMethod = (event: any) => {
    if (event && event.target) {
      const tipo_pagamento = event.target.value;
      localStorage.setItem("tipo_pagamento", tipo_pagamento);
    } else {
      console.error("Event or event.target is not defined.");
    }
  };
  async function handleSubmit() {
    if (isChecked) {
      setIsLoading(true);
      localStorage.removeItem("cart");
      localStorage.removeItem("valor_total");

      // event.preventDefault();
      const produtos =
        cart &&
        cart.map((item: any) => ({
          id: item._id,
          nome: item.titulo,
          quantidade: item.quantidade,
          preco_unitario: item.preco,
        }));

      const metodoPagamento = localStorage.getItem("tipo_pagamento");

      const object = {
        ...form.values,
        cep: searchCep,
      };
      const order = {
        nome: form.values.nome,
        endereco: `${form.values.logradouro}, ${form.values.bairro}, ${form.values.complemento}, ${form.values.numero}`,
        produtos: [...produtos],
        telefone: form.values.celular,
        tipo_pagamento: metodoPagamento,
      };
      try {
        await pedido(order); // Fazer a chamada à API
        // Se a chamada for bem-sucedida, continue com o resto do código
      } catch (error) {
        // Se ocorrer um erro na chamada à API, você pode tratar o erro aqui
        console.error("Erro na chamada à API:", error);
      }

      setIsLoading(false);
      const produtosStr = produtos
        .map((produtos: any) => {
          return `⠀⠀⠀⠀● ${produtos.nome} - R$ ${produtos.preco_unitario} - *x ${produtos.quantidade}*`;
        })
        .join("%0A");

      const total = produtos.reduce((accumulator: any, produtos: any) => {
        return accumulator + produtos.preco_unitario * produtos.quantidade;
      }, 0);
      const totalComTresDecimais = parseFloat(total.toFixed(3));

      const whatsapp = `*DETALHES%20DO%20PEDIDO*%3A%0A*NOME*%3A ${form.values.nome}%0A%0A*TELEFONE:* ${form.values.celular} %0A%0A*ENDEREÇO* ${form.values.logradouro}. ${form.values.bairro}, ${form.values.complemento}, Nº ${form.values.numero} %0A%0A*REFERÊNCIA:* ${form.values.pontoReferencia}%0A%0A*PRODUTOS:*%0A${produtosStr}%0A%0A *TOTAL:* R$ ${totalComTresDecimais}%0A%0A*FORMA DE PAGAMENTO:*%0A${metodoPagamento}`;

      window.open(`https://wa.me/557391163838/?text=${whatsapp}`);

      const deleteProdutos = localStorage.getItem("produtos");
      for (let key in localStorage) {
        if (key.startsWith("quantidade_")) {
          localStorage.removeItem(key);
        }
      }
      if (deleteProdutos) {
        localStorage.setItem("produtos", deleteProdutos);
      }
      window.location.reload();

      localStorage.setItem("endereço", JSON.stringify(object));
    } else {
      // event.preventDefault();
      document.getElementById("checkbox-shake")?.classList.add("shakeit");
      setTimeout(() => {
        document.getElementById("checkbox-shake")?.classList.remove("shakeit");
      }, 1000);
    }
  }

  return (
    <>
      <Header />

      <section className="row registerfont">
        <div className="fisrt-inf-index">
          {/* <a href="/">
          <img className="logoregistro2" src={img} />
        </a> */}

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <div id="registerInputs">
              <div id="TextosEndereço">
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
                      pattern="\d{8}"
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
                  data={["PIX", "Cartão de crédito", "Cartão de débito"]}
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
                  onBlur={handlePaymentMethod} // Add onChange event handler
                />
                {isLoading ? (
                  <button
                    type="submit"
                    className="mt-3 mb-3 w-100"
                    id="criarButton"
                  >
                    Encaminhando para o WhatsApp...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="mt-3 mb-3 w-100"
                    id="criarButton"
                  >
                    Continuar no WhatsApp
                  </button>
                )}
              </div>
            </div>
            <div id="checkbox-shake">
              <Checkbox
                className="custom-checkbox"
                label={
                  <>
                    Eu aceito os{" "}
                    <a
                      href="https://www.instagram.com/vixenp_/"
                      target="_blank"
                    >
                      termos e condições
                    </a>
                  </>
                }
                onChange={handleCheckboxChange}
              />
            </div>
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
