import "./SlideP.css"
// import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core'; 

type Props = {
    imgUrl: string | undefined;
}

export function SlideProduto(props: Props){
    return(
        <div>
            <Image className="configImagemP" src={props.imgUrl} fit="contain" mx="auto" h={{base: 550, sm: 650, md: 650, lg: 650, xl: 750}}  radius={"xl"}  alt="Imagem exibida" />

            {/* <Pagination total={4} position="center" radius="md" size="xl"  className="imagem_teste"/> */}
        
        </div>
    )
}