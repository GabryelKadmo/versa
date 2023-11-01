import { CardNovidades } from "../components/CardNovidades/CardNovidades";
import { useContext } from "react";
import AppContext from "../components/Context/AppContext";
import Loading from "../components/Loading/Loading";

function SearchResult() {
  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { loading, searchResults } = context;

  return loading ? (
    <Loading />
  ) : (
    <>
      {searchResults.map(
        (produto: {
          _id: string;
          titulo: string;
          preco: number;
          imgurl: string;
          rating: number;
          avaliacao: number;
          descricao: string;
        }) => (
          <CardNovidades
            key={produto._id}
            titulo={produto.titulo}
            preco={produto.preco}
            imgurl={produto.imgurl}
            rating={produto.rating}
            avaliacao={produto.avaliacao}
            descricao={produto.descricao}
            _id={produto._id}
            marca={""}
            categoria={""}
            quantidade_estoque={""}
            quantidade={0}
            total={0}
          />
        )
      )}
    </>
  );
}

export default SearchResult;
