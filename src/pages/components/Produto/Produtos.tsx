import { useContext, useEffect } from "react";
import { CardNovidades } from "../CardNovidades/CardNovidades";
import fetchProduct from "../../../api/fetchProduct";
import Loading from "../Loading/Loading";
import AppContext from "../Context/AppContext";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, rem } from "@mantine/core";
import "./Produtos.css";
export default function Produtos() {
  const [scroll, scrollTo] = useWindowScroll();
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
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button className="affixProdutos"
              leftIcon={<IconArrowUp size="20px" />}
              style={transitionStyles}
              styles={(theme) => ({
                root: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.dark[6],
                },
                
              })}
              onClick={() => scrollTo({ y: 0 })}>
              Ir ao topo
            </Button>
          )}
        </Transition>
      </Affix>

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
