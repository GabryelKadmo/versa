import "./SessaoN.css"
import { Title } from '@mantine/core';

export function Novidade(){
    return(
        <div className="texto_pagina">
            <Title 
                order={1} 
                size={48}
                ta="center"
                tt="uppercase"
                fw={600}
                ff={"Poppins"}
            >
                produtos
            </Title>
        </div>
    )
}
