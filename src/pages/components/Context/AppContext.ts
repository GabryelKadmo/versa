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
  quantidade: number;
  setQuantidade: React.Dispatch<React.SetStateAction<number>>;
  query: string | undefined;
  setQuery: React.Dispatch<React.SetStateAction<string | undefined>>
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
  }[];
  setSearchResults: React.Dispatch<React.SetStateAction<{
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
