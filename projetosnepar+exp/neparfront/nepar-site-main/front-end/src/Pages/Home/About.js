import React from "react"
import { Flex, Heading, Image, Text, Accordion } from "@chakra-ui/react"
import { AccordionItem } from "./AccordionItem"
// import divider from "../../assets/imgs/transição.png"
import styled from "styled-components"

import about from "../../assets/imgs/about.png"
import missao from "../../assets/imgs/missao.svg"
import visao from "../../assets/imgs/visao.svg"
import valores from "../../assets/imgs/valores.svg"

import comunicacao from "../../assets/imgs/valores/comunicacao.png"
import consciencia from "../../assets/imgs/valores/consciencia.png"
import diligencia from "../../assets/imgs/valores/diligencia.png"
import disciplina from "../../assets/imgs/valores/disciplina.png"
import inovacao from "../../assets/imgs/valores/inovacao.png"
import proatividade from "../../assets/imgs/valores/proatividade.png"
import sinergia from "../../assets/imgs/valores/sinergia.png"

export const About = () => {
  return (
    <>
      <Flex
        color='black'
        flexDirection='column'
        id='about'
        paddingBottom='50px'
      >
        <Flex justifyContent='center' alignItems='center' p='2% 5%' wrap='wrap'>
          <Flex flexGrow='0.5' justifyContent='center'>
            <StyledImage src={about} />
          </Flex>
          <Flex flexDirection='column' flex='3'>
            <StyledHeading m='20px'>Quem somos</StyledHeading>
            <StyledText align='justify'>
              O Núcleo foi fundado a partir da inciativa dos alunos do curso de
              Engenharia de Controle e Automação da UFLA, que desejavam aplicar
              os conhecimentos adquiridos no curso na área residencial com o
              intuito de proporcionar um lar tecnológico, transformador e
              inclusivo, uma missão que nos une em prol da comunidade em que
              estamos inseridos. O NEPAR proporciona aos seus integrantes a
              oportunidade de colocar em prática os conhecimentos adquiridos na
              graduação em projetos reais. Ao longo do tempo, o Núcleo passou
              por diversas mudanças e a maior delas foi em 2018 com sua
              reformulação de identidade visual e participantes, tornando-se uma
              equipe ainda mais coesa e profissional.
            </StyledText>
          </Flex>
        </Flex>
        <StyledHeading mt='20px'>Nossos Valores</StyledHeading>
        <Flex padding='2% 5%' wrap='wrap' w='100%' justifyContent='center'>
          <StyledFlex left={true}>
            <Image src={missao} w='300px' mb='20px' />
            <StyledText w='100%' align='center'>
              Contribuir na formação pesoal e acadêmica dos membros com
              autonomia e multidisciplinaridade com objetivo de impactar a
              comunidade através da inovação e pesquisa em automação
              residencial, tendo como pilares a Acessibilidade, a Segurança e o
              Conforto
            </StyledText>
          </StyledFlex>
          <StyledFlex>
            <Image src={visao} w='300px' mb='20px' />
            <StyledText w='100%' align='center'>
              Ser referência como núcleo na área de automação com projetos de
              engenharia e computação prestados à comunidade interna e externa à
              UFLA, de forma a mudar a perspectiva e gerar interesse na área da
              automação residencial
            </StyledText>
          </StyledFlex>
        </Flex>
        <Flex padding='2% 5%' justifyContent='space-around' wrap='wrap'>
          <Image src={valores} w='300px' mb='20px' />
          <Accordion w='100%' color='white' defaultIndex={[0]}>
            <AccordionItem
              title={
                <Flex alignItems='center' h='30px'>
                  <Image src={comunicacao} w='35px' mr='35px' />
                  <Text>Comunicação</Text>
                </Flex>
              }
              iconText='Comunicação'
              icon={comunicacao}
              text='A boa comunicação fortalece a equipe e colabora com o desenvolvimento conjunto, proporcionando trasnparência.'
            />
            <AccordionItem
              title={
                <Flex alignItems='center' h='30px'>
                  <Image src={consciencia} w='35px' mr='35px' />
                  <Text>Consciência Moral</Text>
                </Flex>
              }
              icon={consciencia}
              iconText='Consciência Moral'
              text='A integração de ideias e pensamentos diversos faz-se presente na equipe, respeitando sempre a ética moral e o bom senso.'
            />
            <AccordionItem
              title={
                <Flex alignItems='center' h='30px'>
                  <Image src={diligencia} w='35px' mr='35px' />
                  <Text>Diligência</Text>
                </Flex>
              }
              iconText='Diligência'
              icon={diligencia}
              text='É realizado um trabalho com excelência, buscando sempre uma melhora contínua no conhecimento aplicado.'
            />
            <AccordionItem
              title={
                <Flex alignItems='center' h='30px'>
                  <Image src={disciplina} w='35px' mr='35px' />
                  <Text>Disciplina</Text>
                </Flex>
              }
              iconText='Disciplina'
              icon={disciplina}
              text='Estar em constante organização representa o cotidiano da equipe, que planeja todas as suas ações de antemão.'
            />
            <AccordionItem
              title={
                <Flex alignItems='center' h='30px'>
                  <Image src={inovacao} w='35px' mr='35px' />
                  <Text>Inovação</Text>
                </Flex>
              }
              iconText='Inovação'
              icon={inovacao}
              text='Este valor representa a essência do núcleo, sempre aspirando a busca pela ciência em prol do desenvolvimento.'
            />
            <AccordionItem
              title={
                <Flex alignItems='center' h='30px'>
                  <Image src={proatividade} w='35px' mr='35px' />
                  <Text>Proatividade</Text>
                </Flex>
              }
              iconText='Proatividade'
              icon={proatividade}
              text='Nossa equipe está sempre disposta a participar dos processos, solucionando desafios e evitando problemas, assim aumentando a nossa produtividade.'
            />
            <AccordionItem
              title={
                <Flex alignItems='center' h='30px'>
                  <Image src={sinergia} w='35px' mr='35px' />
                  <Text>Sinergia</Text>
                </Flex>
              }
              iconText='Sinergia'
              icon={sinergia}
              text='É a cooperação dos membros para que unidos consigam alcançar com êxito os objetivos finais.'
            />
          </Accordion>
        </Flex>
      </Flex>
    </>
  )
}

const StyledHeading = styled(Heading)`
  text-align: center;
  @media (max-width: 1366px) {
    font-size: 32px;
  }
`

const StyledImage = styled(Image)`
  width: 457px;
  /* h='464px' */
  @media (max-width: 1366px) {
    width: 320px;
  }
  @media (max-width: 600px) {
    width: 280px;
  }
`
const StyledText = styled(Text)`
  font-size: 23px;
  min-width: 450px;
  margin-left: 10px;
  @media (max-width: 1366px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    margin-left: 0px;
    font-size: 20px;
    min-width: 300px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`
const StyledFlex = styled(Flex)`
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 350px;
  height: 100%;
  border-right: ${(props) => (props.left ? "1px solid #000;" : "none")};
  @media (max-width: 1000px) {
    width: 100%;
    border-right: none;
  }
`
