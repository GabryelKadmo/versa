import "./Affix.css"
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix as MantineAffix, Button, Transition, rem } from "@mantine/core";

export function Affix(){

    const [scroll, scrollTo] = useWindowScroll();

    return(
        <MantineAffix className="affix_fix" position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button className="affixProdutos"
              leftIcon={<IconArrowUp size="20px" />}
              style={transitionStyles}
              styles={(theme) => ({
                root: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.dark[6],
                },
                
              })}
              onClick={() => scrollTo({ y: 0 })}>
              Ir ao topo
            </Button>
          )}
        </Transition>
      </MantineAffix>
    )
}
