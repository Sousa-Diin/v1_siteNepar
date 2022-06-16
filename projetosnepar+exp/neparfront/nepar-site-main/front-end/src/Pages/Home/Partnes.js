import { Flex, Heading, Image } from "@chakra-ui/react"
import styled from "@emotion/styled"

import parc1 from "../../assets/imgs/parc1.png"
import parc2 from "../../assets/imgs/parc2.png"
import parc3 from "../../assets/imgs/parc3.png"
import parc4 from "../../assets/imgs/parc4.png"

export const Partnes = () => {
  return (
    <Flex bg='#167284' flexDirection='column' alignItems='center' id='partnes'>
      <StyledHeading color='white' align='center' m='20px' mb='0'>
        Parceiros
      </StyledHeading>
      <Flex
        justifyContent='space-around'
        width='100%'
        alignItems='center'
        p='2% 5%'
        wrap='wrap'
      >
        <Flex w='350px' justifyContent='center' mb='10px'>
          <Image src={parc4} />
        </Flex>
        <Flex w='350px' justifyContent='center' mb='10px'>
          <Image src={parc3} />
        </Flex>
        <Flex w='350px' justifyContent='center' mb='10px'>
          <Image src={parc2} />
        </Flex>
        <Flex w='350px' justifyContent='center'>
          <Image src={parc1} />
        </Flex>
      </Flex>
    </Flex>
  )
}

const StyledHeading = styled(Heading)`
  text-align: center;
  @media (max-width: 1366px) {
    font-size: 32px;
  }
`
