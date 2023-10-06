import "./InfoP.css"
import { Flex, Title, Text, Divider, ActionIcon } from "@mantine/core";
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';

import {TamanhoP} from "./TamanhoP"
import {CoresP} from "./CoresP"
import {QuantidadeCompraP} from "./QuantidadeCompraP"

export function InfoP(){
    return(
        <div>
            <Flex className="configP" direction={"column"}  w={{base: 250, sm: 300, md: 350, lg: 450, xl: 500}}> 
                <Flex className="configP">
                    <Flex className="configP" direction={"column"}>

                        <Title>item</Title>

                        <Text color="dimmed" mb="xs">Brand</Text>

                    </Flex>

                    <Flex gap={10} className="configP" w={422} justify={"end"}>

                        <ActionIcon w={60} color="red" radius="md" variant="light">

                            <IconHeart size="1.225rem" />

                            <Text ml={11} fw={600} lh={-90} fz={21}>0</Text>

                        </ActionIcon>

                        <ActionIcon color="dark" radius="md" variant="light">

                            <IconBookmark size="1.125rem" />

                        </ActionIcon>

                        <ActionIcon color="dark" radius="md" variant="light">

                            <IconShare size="1.125rem" />

                        </ActionIcon>

                    </Flex>

                </Flex>

                <Divider my="sm" />

                <Title mt="xs">R$ 99,99</Title>

                <Text color="dimmed" td="line-through" mb="xs">R$ 100,00</Text>

                <Divider my="sm" />

                <Text color="dimmed" mt="xs">Escolha a cor:</Text>

                <CoresP />

                <Divider my="sm" />

                <Text color="dimmed" mt="xs">Escolha o tamanho:</Text>

                <TamanhoP />

                <Divider my="sm" />

                <QuantidadeCompraP />

            </Flex>
        </div>
    )
}