import "./SessaoAS.css";
import ImagemAS from "../images/SessaoAS/imagem AS.png";
import { Flex, Image, Text, Button } from '@mantine/core';

export function SessaoAS() {
  function redirectProdutos(){
    window.location.href = '/produtos';
  }
  return (
    <div className="container_as">
      <Image src={ImagemAS} >
      </Image>
      <Flex maw={500} direction={"column"} gap={40} mt={40} align={"flex-start"}>
        <Text 
         sx={{ fontFamily: 'Roboto, sans-serif' }}
         fw={400}
         fz={21}
        >
          Ter estilo com suas roupas é expressar sua personalidade, criatividade e confiança, usando peças que fazem você se sentir único e bem consigo mesmo.
        </Text>

        <Button 
        onClick={redirectProdutos}
        variant="outline" 
        color="dark" 
        radius={"xl"} 
        w={300}
        sx={{ fontFamily: 'Poppins, sans-serif' }}
        fw={600}
        fz={20}
        >
          ENCONTRE O SEU
        </Button>
      </Flex> 
    </div>
  );
}
