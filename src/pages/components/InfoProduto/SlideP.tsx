import "./SlideP.css"
// import { Carousel } from '@mantine/carousel';
import ImagemE from "../images/InfoProduto/Pcrop.png"

import { Image } from '@mantine/core'; 

export function SlideProduto(){
    return(
        <div>
            <Image className="configImagemP" src={ImagemE} fit="contain" mx="auto" h={{base: 550, sm: 650, md: 650, lg: 650, xl: 750}}  radius={"xl"}  alt="Imagem exibida" />

            {/* <Pagination total={4} position="center" radius="md" size="xl"  className="imagem_teste"/> */}
        
        </div>
    )
}