import Fundo from "../images/SessaoAM/Imagem AM.png";
import { Image } from "@mantine/core";

export function Demo() {
  return (
    <Image className="imagemAM" height={879} src={Fundo} alt="Random image" />
  );
}
