import "./InfoProduto.css";
import { Flex } from "@mantine/core";
import Header from "./../components/Header/Header";
import { SlideProduto } from "../components/InfoProduto/SlideP";
import { InfoP } from "../components/InfoProduto/InfoP";
import { useParams } from "react-router-dom";
import { getProductById } from "../../../Utils/config";
import { useContext, useEffect, useState } from "react";
import AppContext from "../components/Context/AppContext";
import Loading from "../components/Loading/Loading";

export default function InfoProduto() {
  type Produto = {
    _id: string;
    titulo: string;
    preco: number;
    imgurl: string;
    rating: number;
    avaliacao: number;
    descricao: string;
  };

  const [produto, setProduto] = useState<Produto>();

  const { _id } = useParams();

  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { loading, setLoading } = context;

  useEffect(() => {
    getProductById(_id)
      .then((response) => {
        setProduto(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [_id]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : produto ? (
        <Flex
          className="layoutP"
          align={"center"}
          justify={"center"}
          gap={{ base: 50, sm: 100, md: 150, lg: 200, xl: 250 }}
          wrap={"wrap"}
          pb={100}
        >
          <SlideProduto imgUrl={produto.imgurl} />
          <InfoP
            titulo={produto.titulo}
            preco={produto.preco}
            descricao={produto.descricao}
            _id={produto._id}
            imgurl={produto.imgurl}
            rating={0}
            avaliacao={0}
            marca={""}
            categoria={""}
          />
        </Flex>
      ) : (
        <p>Não foi possível carregar os detalhes do produto.</p>
      )}
    </div>
  );
}
