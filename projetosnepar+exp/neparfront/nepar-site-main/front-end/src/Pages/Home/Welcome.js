import { Flex, Heading, Stack, Image, Button } from "@chakra-ui/react"
import divider from "../../assets/imgs/transição.png"
import styled from "styled-components"

import logoTeste from "../../assets/imgs/NEPAR-logo.svg"
import arrowDown from "../../assets/imgs/arrowDown.png"
import { FadeIn } from "../../Components"

export const Welcome = () => {
  return (
    <>
      <Flex
        width='100%'
        h='100vh'
        bg='#081d2e'
        justifyContent='center'
        color='#C4C4C4'
        id='welcome'
      >
        <Stack
          mt='100px'
          width='100%'
          d='flex'
          justifyContent='center'
          spacing={7}
          paddingInline='30px'
        >
          <FadeIn delay={300} duration={400}>
            <StyledHeading fontWeight='400' align='center'>
              Bem-vindo(a)! Nós Somos
            </StyledHeading>
          </FadeIn>
          <Flex justifyContent='center'>
            <FadeIn fade='top' delay={400} duration={750}>
              <StyledImage w='700px' src={logoTeste} />
            </FadeIn>
          </Flex>
          <FadeIn delay={300} duration={450}>
            <StyledHeading fontWeight='400' align='center'>
              Núcleo de estudos em práticas de automação residencial
            </StyledHeading>
          </FadeIn>
          <Flex alignItems='center' justifyContent='center' h='80px'>
            <FadeIn fade='bottom' delay={500} duration={500}>
              <Button variant='unstyled' mt='22px'>
                <a href='#about'>
                  <StyledArrow src={arrowDown} />
                </a>
              </Button>
            </FadeIn>
          </Flex>
        </Stack>
      </Flex>
      {/* <StyledImage src={divider} /> */}
    </>
  )
}

const StyledArrow = styled(Image)`
  width: 80px;
  @media (max-width: 1366px) {
    width: 70px;
  }
  @media (max-width: 600px) {
    width: 60px;
  }
`
const StyledImage = styled(Image)`
  width: 700px;
  @media (max-width: 1366px) {
    width: 575px;
  }
`

// const StyledImage = styled(Image)`
//   position: absolute;
//   margin-top: -5%;
//   width: 100%;
//   @media (max-width: 1024px) {
//     width: 100%;
//     margin-top: -6%;
//   }
//   @media (max-width: 600px) {
//     width: 100%;
//     margin-top: -5%;
//   }
// `

const StyledHeading = styled(Heading)`
  font-size: 35px;
  @media (max-width: 1366px) {
    font-size: 30px;
  }
  @media (max-width: 1024px) {
    font-size: 27px;
  }
  @media (max-width: 600px) {
    font-size: 23px;
  }
`
