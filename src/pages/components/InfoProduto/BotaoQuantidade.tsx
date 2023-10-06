import "./BotaoQuantidade.css"
import { useState, useRef } from 'react';
import { Flex, NumberInput, Group, ActionIcon, NumberInputHandlers, rem } from '@mantine/core';

export function BotaoQuantidade(){

    const [value, setValue] = useState<number | ''>(0);
    const handlers = useRef<NumberInputHandlers>();

    return(
        <div>
            <Flex className="botao_estilo" w={138}>

                <Group spacing={0}>

                    <ActionIcon fw={700} className="borda_botao" size={42} variant="transparent" onClick={() => handlers.current.decrement()}>
                        –
                    </ActionIcon>

                    <NumberInput
                        hideControls
                        value={value}
                        onChange={(val) => setValue(val)}
                        handlersRef={handlers}
                        max={10}
                        min={0}
                        step={1}
                        styles={{ input: { width: rem(54), textAlign: 'center', border: 'none', backgroundColor: "#F3F3F3", fontWeight: 700 } }}
                    />

                    <ActionIcon fw={700} className="borda_botao" size={42} variant="transparent" onClick={() => handlers.current.increment()}>
                        +
                    </ActionIcon>
                    
                </Group>

            </Flex>
        </div>
    )
}