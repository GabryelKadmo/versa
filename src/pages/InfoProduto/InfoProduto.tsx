import './InfoProduto.css'
import { Flex } from "@mantine/core";
import Header from "./../components/Header/Header";
import {SlideProduto} from "../components/InfoProduto/SlideP"
import {InfoP} from "../components/InfoProduto/InfoP"

export default function InfoProduto(){
    return(
        <div>
            <Header />
            <Flex className="layoutP" align={'center'} justify={'center'} gap={{base: 50, sm: 100, md: 150, lg: 200, xl: 250}} wrap={'wrap'} pb={100}>
                <SlideProduto />
                <InfoP />
            </Flex>
             

        </div>
    )
}