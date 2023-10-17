import React, { ReactNode, useState } from 'react'
import AppContext from './AppContext'

function Provider({ children }: { children: ReactNode }) {

    type product = {
        id: string;
        titulo: string;
        preco: number;
        descricao: string;
        marca: string;
        categoria: string;
        rating: number;
        avaliacao: number;
        imgurl: string;
      };

    const [produtos, setProdutos] = useState<product[]>([]);
    const [cartItem, setCartItem] = useState<product[]>([]);
    const [loading, setLoading] = useState(true);


    const value = {
        produtos,
        setProdutos,
        loading, 
        setLoading,
        cartItem, 
        setCartItem
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;