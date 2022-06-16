import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { Card } from "./Card"
import Slider from "react-slick"
import styled from "styled-components"

import "../../assets/slick.css"
import prev from "../../assets/imgs/prevArrow.svg"
import next from "../../assets/imgs/nextArrow.svg"

import app from "../../assets/imgs/projetos/appNepar.png"
import iluminacao from "../../assets/imgs/projetos/iluminacao.png"
import plug from "../../assets/imgs/projetos/plug.png"
import umidade from "../../assets/imgs/projetos/umidade.png"
import bd from "../../assets/imgs/projetos/bd.png"

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow"
  className += " arrow"
  return (
    <div
      className={className}
      style={{
        display: "block",
      }}
      onClick={props.onClick}
    >
      <StyledImage src={props.img} />
    </div>
  )
}

export const Project = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <Arrow type='next' img={next} />,
    prevArrow: <Arrow type='prev' img={prev} />,
    dotsClass: "button__bar",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }
  return (
    <Box bg='#081d2e' id='project' p='20px'>
      <StyledHeading color='white' align='center' m='20px'>
        Projetos
      </StyledHeading>
      <Slider {...settings}>
        <StyledDiv>
          <Card
            image={app}
            name='App Nepar'
            text='Neste projeto será feita a integração de todos os projetos desenvolvidos pelo núcleo. Com uma utilização intuitiva, os usuários encontrarão facilidade no uso e acessibilidade das funcionalidades integradas no aplicativo. '
          />
        </StyledDiv>
        <StyledDiv>
          <Card
            image={iluminacao}
            name='Iluminação Automatizada'
            text='O objetivo principal é colocar em prática os conhecimentos e técnicas dos integrantes do Núcleo, automatizando as luzes do Laboratório de Instalações Elétricas do Depto. de Engenharia da UFLA.
            '
          />
        </StyledDiv>
        <StyledDiv>
          <Card
            image={plug}
            name='Plug Inteligente'
            text='Este plug inteligente monitora todas as variáveis elétricas como corrente, tensão e potência - para fins de controle financeiro - além de controlar a carga do aparelho ligado ao projeto.
            '
          />
        </StyledDiv>
        <StyledDiv>
          <Card
            image={umidade}
            name='Sensor de Temperatura e Umidade'
            text='Este sensor criado para um projeto de pesquisa da UFLA tem como objetivo o sensoriamento de temperatura e umidade no solo utilizando-se de aparelhos analógicos e digitais.
            '
          />
        </StyledDiv>
        <StyledDiv>
          <Card
            image={bd}
            name='Banco de dados'
            text='Como um complemento do App Nepar, o banco de dados agrupará as informações coletadas pelos sensores e dispositivos elaborados pelo núcleo, seja para análise de dados ou para testagem de novas funcionalidades.'
          />
        </StyledDiv>
      </Slider>
    </Box>
  )
}

const StyledDiv = styled(Flex)`
  display: flex !important;
  justify-content: center;
  width: 100%;
`

const StyledImage = styled(Image)`
  @media (max-width: 1366px) {
    width: 20px;
    height: 32px;
  }
  /* @media (max-width: 600px) {
    width: 100%;
    margin-top: -5%;
  } */
`

const StyledHeading = styled(Heading)`
  text-align: center;
  @media (max-width: 1366px) {
    font-size: 32px;
  }
`
