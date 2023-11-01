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
    quantidade_estoque: string;
    quantidade: number;
    total: number;
  }[];
  cartItem: {
    total: number;
    _id: string;
    titulo: string;
    preco: number;
    descricao: string;
    marca: string;
    categoria: string;
    rating: number;
    avaliacao: number;
    imgurl: string;
    quantidade_estoque: string;
    quantidade: number;
  }[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProdutos: React.Dispatch<
    React.SetStateAction<
      {
        _id: string;
        titulo: string;
        preco: number;
        descricao: string;
        marca: string;
        categoria: string;
        rating: number;
        avaliacao: number;
        imgurl: string;
        quantidade_estoque: string;
        quantidade: number;
        total: number;
      }[]
    >
  >;
  setCartItem: React.Dispatch<
    React.SetStateAction<
      {
        _id: string;
        titulo: string;
        preco: number;
        descricao: string;
        marca: string;
        categoria: string;
        rating: number;
        avaliacao: number;
        imgurl: string;
        quantidade_estoque: string;
        quantidade: number;
        total: number;
      }[]
    >
  >;
  quantidade: number;
  setQuantidade: React.Dispatch<React.SetStateAction<number>>;
  query: string | undefined;
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchResults: {
    _id: string;
    titulo: string;
    preco: number;
    descricao: string;
    marca: string;
    categoria: string;
    rating: number;
    avaliacao: number;
    imgurl: string;
    quantidade_estoque: string;
    quantidade: number;
  }[];
  setSearchResults: React.Dispatch<
    React.SetStateAction<
      {
        _id: string;
        titulo: string;
        preco: number;
        descricao: string;
        marca: string;
        categoria: string;
        rating: number;
        avaliacao: number;
        imgurl: string;
        quantidade_estoque: string;
        quantidade: number;
        total: number;
      }[]
    >
  >;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
