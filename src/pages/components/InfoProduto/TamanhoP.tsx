import "./TamanhoP.css"
import { Radio, Group, Flex } from '@mantine/core';

export function TamanhoP(){
    return(
        <div>
            <Radio.Group
                name="tamanhoProduto"
            >
            <Group mt="xs" mb="xs">
                <Flex className="fundoP" w={55} h={30} align={"center"} justify={"center"}>
                <Radio color="dark" value="P" label="P" fw={600}/>
                </Flex>
                <Flex className="fundoP" w={55} h={30} align={"center"} justify={"center"}>
                <Radio color="dark" value="M" label="M" fw={600}/>
                </Flex>
                <Flex className="fundoP" w={55} h={30} align={"center"} justify={"center"}>
                <Radio color="dark" value="G" label="G" fw={600} />
                </Flex>
                <Flex className="fundoP" w={60} h={30} align={"center"} justify={"center"}>
                <Radio color="dark" value="GG" label="GG" fw={600} disabled/>
                </Flex>
                <Flex className="fundoP" w={65} h={30} align={"center"} justify={"center"}>
                <Radio color="dark" value="XXL" label="XXL" fw={600} disabled/>
                </Flex>
            </Group>
            </Radio.Group>
        </div>
    )
}