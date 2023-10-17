import { createContext } from "react";

interface AppContextType {
  produtos: {
    _id: string;
    titulo: string;
    preco: number;
    descricao: string;
    marca: string;
    categoria: string;
    rating: number;
    avaliacao: number;
    imgurl: string;
  }[];
  cartItem: {
    _id: string;
    titulo: string;
    preco: number;
    descricao: string;
    marca: string;
    categoria: string;
    rating: number;
    avaliacao: number;
    imgurl: string;
  }[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProdutos: React.Dispatch<React.SetStateAction<{
    _id: string;
    titulo: string;
    preco: number;
    descricao: string;
    marca: string;
    categoria: string;
    rating: number;
    avaliacao: number;
    imgurl: string;
  }[]>>;
  setCartItem: React.Dispatch<React.SetStateAction<{
    _id: string;
    titulo: string;
    preco: number;
    descricao: string;
    marca: string;
    categoria: string;
    rating: number;
    avaliacao: number;
    imgurl: string;
  }[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
