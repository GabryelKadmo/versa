import "./SessaoMarcas.css"
import naosei from "../images/SessaoM/naosei.png"
import Adidas from "../images/SessaoM/adidas.jpg"
import Nike from "../images/SessaoM/nike.jpg"
import Keneth from "../images/SessaoM/kenneth cole.png"
import { Grid, Image } from '@mantine/core';

export function SessaoMarcas(){
    return(
        <div className="container_marcas">
            <div>
                <h2>
                    MARCAS
                </h2>
            </div>
            <Grid align="center" justify="center" >

            <Grid.Col span={3} >
                <Image src={Keneth}></Image>
            </Grid.Col>

            <Grid.Col span={3} >
                <Image src={Nike}></Image>
            </Grid.Col>

            <Grid.Col span={3} >
                <Image src={naosei}></Image>
            </Grid.Col>

            <Grid.Col span={3} >
                <Image src={Adidas}></Image>
            </Grid.Col>

            </Grid>

               
               
                
                
                
            
        </div>
    )
}
