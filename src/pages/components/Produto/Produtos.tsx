import { Key, useContext, useEffect } from "react";
import { CardNovidades } from "../CardNovidades/CardNovidades";
import fetchProduct from "../../../api/fetchProduct";
import Loading from "../Loading/Loading";
import AppContext from "../Context/AppContext";

export default function Produtos() {

  const context = useContext(AppContext);

    if (context === undefined) {
        // Trate o contexto indefinido aqui, se necessário
        return <div>Erro: Contexto não definido.</div>;
    }
  const { produtos, setProdutos, loading, setLoading } = context

  useEffect(() => {
    fetchProduct('').then((response) => {
      setProdutos(response);
      setLoading(false);
    });
  }, [setProdutos, setLoading]);

  return (
    (loading ? <Loading /> :
      <>
        {produtos.map((produto: { id: Key | null | undefined; titulo: string; preco: number; imgurl: string; rating: number; avaliacao: number; descricao: string; }) =>
          <CardNovidades
            key={produto.id}
            titulo={produto.titulo}
            preco={produto.preco}
            imgurl={produto.imgurl}
            rating={produto.rating}
            avaliacao={produto.avaliacao}
            descricao={produto.descricao} 
            id={""}
            marca={""} 
            categoria={""}          />
        )}
      </>
    )
  )
}

