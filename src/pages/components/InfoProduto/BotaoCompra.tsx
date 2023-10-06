import "./BotaoCompra.css"
import { Button } from '@mantine/core';
import { IconShoppingCart } from "@tabler/icons-react";

export function BotaoCompra(){
    return(
        <div>
            <Button fw={600} color="dark" radius={"xl"} leftIcon={<IconShoppingCart size="1rem" />} w={230} h={42}>
                Adicionar ao carrinho
            </Button>
        </div>
    )
}