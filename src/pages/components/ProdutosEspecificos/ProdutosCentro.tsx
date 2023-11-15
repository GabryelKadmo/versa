import "./ProdutosCentro.css"
import { SimpleGrid } from "@mantine/core";
import ProdutosFiltrados from "../../SearchResult/ProdutosFiltrados";

type Props = {
  props: string
}

export function ProdutosCentro(props: Props) {

  return (
    <div>
        <SimpleGrid
          mb={1000000}  
          className="borda"
          cols={4}
          w={1300}
          spacing="lg"
          breakpoints={[
            { maxWidth: "xl", cols: 4, spacing: "lg" },
            { maxWidth: "lg", cols: 3, spacing: "md" },
            { maxWidth: "md", cols: 3, spacing: "sm" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
          ]}
        >
        
           <ProdutosFiltrados props={props.props} />
          
        </SimpleGrid>
    </div>
  );
}
