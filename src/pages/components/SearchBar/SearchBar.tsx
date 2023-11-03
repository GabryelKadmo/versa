import { Flex, Input, createStyles, rem } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { ChangeEvent, useContext } from "react";
import AppContext from "../Context/AppContext";

function SearchBar() {    

    const context = useContext(AppContext);

    if (context === undefined) {
        // Trate o contexto indefinido aqui, se necessário
        return <div>Erro: Contexto não definido.</div>;
    }

    const { produtos, setSearchResults} = context
    

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredProducts = produtos.filter((product) =>
            product.titulo.toLowerCase().includes(searchValue)
        );

        setSearchResults(filteredProducts);
    
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const useStyles = createStyles((theme) => ({
        link: {
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            textDecoration: "none",
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            fontWeight: 500,
            fontSize: theme.fontSizes.sm,

            [theme.fn.smallerThan("sm")]: {
                height: rem(42),
                display: "flex",
                alignItems: "center",
                width: "100%",
            },

            ...theme.fn.hover({
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
            }),
        },

        subLink: {
            width: "100%",
            padding: `${theme.spacing.xs} ${theme.spacing.md}`,
            borderRadius: theme.radius.md,

            ...theme.fn.hover({
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[7]
                        : theme.colors.gray[0],
            }),

            "&:active": theme.activeStyles,
        },

        dropdownFooter: {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
            margin: `calc(${theme.spacing.md} * -1)`,
            marginTop: theme.spacing.sm,
            padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
            paddingBottom: theme.spacing.xl,
            borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
                }`,
        },

        hiddenMobile: {
            [theme.fn.smallerThan("sm")]: {
                display: "none",
            },
        },

        hiddenDesktop: {
            [theme.fn.largerThan("sm")]: {
                display: "none",
            },
        },
    }));

    const { classes } = useStyles();

    return (
        <Flex
            className="teste_borda"
            // className="bordinha_teste_header" 
            ml={{ base: 10, sm: 180, md: 50, lg: 140, xl: 80 }}
            // ml={100}
            w={{ base: 180, sm: 180, md: 50, lg: 140, xl: 600 }}
            // w={600}
            justify={"end"}>
            <form className="search-bar" onSubmit={handleSubmit}>
                <Input onChange={handleInputChange}
                    // value={searchValue}
                    // w={332}
                    w={{ base: 180, sm: 180, md: 120, lg: 270, xl: 332 }}
                    placeholder={"Pesquisar"}
                    // className="input-iconeLupa"
                    icon={<IconSearch size={16} />}
                    // onChange={({ target }) => setSearchValue(target.value)}
                    className={classes.hiddenMobile}
                ></Input>
            </form>
        </Flex>
    )
}

export default SearchBar