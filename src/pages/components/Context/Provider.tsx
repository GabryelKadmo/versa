import { ReactNode, useState } from "react";
import AppContext from "./AppContext";

interface Product {
  id: string;
  titulo: string;
  preco: number;
  descricao: string;
  marca: string;
  categoria: string;
  rating: number;
  avaliacao: number;
  imgurl: string;
}

function Provider({ children }: { children: ReactNode }) {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [cartItem, setCartItem] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        produtos,
        setProdutos,
        cartItem,
        setCartItem,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
