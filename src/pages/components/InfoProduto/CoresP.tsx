import "./CoresP.css"
import { ColorSwatch, Group, useMantineTheme, CheckIcon, rem } from "@mantine/core";
import { useState } from 'react';

export function CoresP(){

    const theme = useMantineTheme();
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);

    return(
        <div>
            <Group position="left" spacing="xs" mt="xs" mb="xs">

                <ColorSwatch
                component="button"
                color={theme.colors.dark[9]}
                onClick={() => setChecked((c) => !c)}
                sx={{ color: '#fff', cursor: 'pointer' }}               
                >
                {checked && <CheckIcon width={rem(10)} />}
                </ColorSwatch>

                <ColorSwatch
                component="button"
                color={theme.colors.dark[9]}
                onClick={() => setChecked2((c) => !c)}
                sx={{ color: '#fff', cursor: 'pointer' }}
                >
                {checked2 && <CheckIcon width={rem(10)} />}
                </ColorSwatch>

                <ColorSwatch
                component="button"
                color={theme.colors.dark[9]}
                onClick={() => setChecked3((c) => !c)}
                sx={{ color: '#fff', cursor: 'pointer' }}
                >
                {checked3 && <CheckIcon width={rem(10)} />}
                </ColorSwatch>

                <ColorSwatch
                component="button"
                color={theme.colors.dark[9]}
                onClick={(() => setChecked4((c) => !c))}
                sx={{ color: '#fff', cursor: 'pointer' }}
                >
                {checked4 && <CheckIcon width={rem(10)} />}
                </ColorSwatch>

                <ColorSwatch                   
                component="button"
                color={theme.colors.dark[9]}
                onClick={() => setChecked5((c) => !c)}
                sx={{ color: '#fff', cursor: 'pointer' }}
                >
                {checked5 && <CheckIcon width={rem(10)} />}
                </ColorSwatch>

            </Group>
        </div>
    )
}