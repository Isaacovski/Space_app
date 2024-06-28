import Titulo from "../Titulo"
import Tags from "./Tags"
import styled from "styled-components"
import Populares from "../Populares"

const GaleriaContainer = styled.div
`
display:flex;
`
const SessaoFluida = styled.section
`
flex-grow:1;
`

const Galeria = () => {
    return(
        <>
         
         <Tags/>
         <GaleriaContainer>
            <SessaoFluida>
                 <Titulo>Navegue Pela Galeria</Titulo>
            </SessaoFluida>
            <Populares/>
         </GaleriaContainer>
        </>
    )
}

export default Galeria