// import React from "react";
import { useContext, useEffect } from "react";
import { CardNovidades } from "../CardNovidades/CardNovidades";
import fetchProduct from "../../../api/fetchProduct";
import Loading from "../Loading/Loading";
import AppContext from "../Context/AppContext";

export default function Produtos() {

    const { produtos, setProdutos, loading, setLoading } = useContext(AppContext);
    

    useEffect(() => {
        fetchProduct('').then((response) => {
            setProdutos(response);
            setLoading(false);
        });
    }, []);

    return (
        (loading ? <Loading /> :
        <>
            {produtos.map((produto) => (
              <CardNovidades
                key={produto.id}
                img={produto.imgurl}
                descricao={produto.descricao}
                title={produto.titulo}
                preco={produto.preco}
                rating={produto.avaliacao}
                avaliacoes={50}
              />
            ))}
          </>
        )
    )
}

