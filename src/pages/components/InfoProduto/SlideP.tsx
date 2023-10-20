import "./SlideP.css"
// import { Carousel } from '@mantine/carousel';
// import { Image } from '@mantine/core'; 

type Props = {
    imgUrl: string | undefined;
}

export function SlideProduto(props: Props){
    return(
        <div>
            <img className="configImagemP" src={props.imgUrl} alt="Imagem exibida" />

            {/* <Pagination total={4} position="center" radius="md" size="xl"  className="imagem_teste"/> */}
        
        </div>
    )
}