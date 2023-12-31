import { useContext, useEffect } from "react";
import { CardNovidades } from "../CardNovidades/CardNovidades";
import fetchProduct from "../../../api/fetchProduct";
import Loading from "../Loading/Loading";
import AppContext from "../Context/AppContext";
import "./Produtos.css";

export default function Produtos() {
  
  const context = useContext(AppContext);

  if (context === undefined) {
    // Trate o contexto indefinido aqui, se necessário
    return <div>Erro: Contexto não definido.</div>;
  }

  const { produtos, setProdutos, loading, setLoading } = context;

  useEffect(() => {
    fetchProduct("").then((response) => {
      setProdutos(response);
      setLoading(false);
    });
  }, [setProdutos, setLoading]);

  return loading ? (
    <Loading />
  ) : (
    <>
      

      {produtos.map(
        (produto: {
          _id: string;
          titulo: string;
          preco: number;
          imgurl: string;
          rating: number;
          avaliacao: number;
          descricao: string;
          marca: string;
          categoria: string;
          quantidade_estoque: string;
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
            marca={produto.marca}
            categoria={produto.categoria}
            quantidade_estoque={produto.quantidade_estoque}
            quantidade={1}
            total={produto.preco}
          />
        )
      )}
    </>
  );
}
