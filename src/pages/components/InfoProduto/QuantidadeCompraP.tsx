import "./QuantidadeCompraP.css"
import { Flex } from '@mantine/core';
import {BotaoCompra} from "./BotaoCompra"
import {BotaoQuantidade} from "./BotaoQuantidade"

export function QuantidadeCompraP(){
    return(
        <div>
            <Flex mt="xs" mb="xs" gap={20} direction={{base: "column", md: "row"}}>

                <BotaoQuantidade />

                <BotaoCompra />

            </Flex>
        </div>
    )
}