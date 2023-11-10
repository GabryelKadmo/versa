import "./ProdutosCentro.css"
import { SimpleGrid } from "@mantine/core";
import SearchResult from "../../SearchResult/SearchResult";

export function ProdutosCentro() {


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
        
           <SearchResult />
          
        </SimpleGrid>
    </div>
  );
}
