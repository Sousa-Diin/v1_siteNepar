import { useState } from "react"
import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react"
import styled from "@emotion/styled"
import ReCaptchaV2 from "react-google-recaptcha"
import { Formik } from "formik"

import logo from "../../assets/imgs/logoFundoClaro.svg"
import facebook from "../../assets/imgs/facebook.png"
import instagram from "../../assets/imgs/instagram.png"
import linkedin from "../../assets/imgs/linkedin.png"
import gmail from "../../assets/imgs/gmail.png"

import emailjs from "emailjs-com"
export const Contact = () => {
  const [verified, setVerified] = useState(false)
  function onChange() {
    setVerified(true)
  }
  return (
    <Flex color='black' flexDirection='column' alignItems='center' id='contact'>
      <StyledHeading align='center' m='20px' mb='0'>
        Contato
      </StyledHeading>
      <Flex
        justifyContent='space-around'
        width='100%'
        alignItems='center'
        p='2% 5%'
        wrap='wrap'
      >
        <Flex
          flexDirection='column'
          alignItems='center'
          width='30%'
          m='10px 0px'
          wrap='wrap'
          minWidth='350px'
        >
          <Flex flexDirection='column' justifyContent='center'>
            <Flex w='100%' justifyContent='center' alignItems='center'>
              <Image w='200px' src={logo} />
            </Flex>
            <Text textAlign='center' fontSize='15px'>
              Núcleo de Estudos em Práticas de Atutomação Residencial
            </Text>
          </Flex>
          <Flex
            flexDirection='column'
            alignItems='center'
            width='300px'
            m='10px 0px'
          >
            <Text textAlign='center' fontWeight='600' fontSize='20px' mb='10px'>
              Endereço
            </Text>
            <Text textAlign='center' fontSize='15px'>
              UFLA - Universidade Federeal de Lavras Depto. de Engenharia 3º
              Andar, Laboratório de Eletrônica 37200-000
            </Text>
          </Flex>
          <Flex
            flexDirection='column'
            alignItems='center'
            width='300px'
            m='10px 0px'
          >
            <Text textAlign='center' fontWeight='600' fontSize='20px' mb='10px'>
              Redes Sociais
            </Text>
            <Flex w='70%' justifyContent='space-between'>
              <a href='https://www.facebook.com/neparufla' target='_blank'>
                <Image
                  w='40px'
                  h='40px'
                  _hover={{
                    "-webkit-transform": "scale(1.1)",
                    "-ms-transform": "scale(1.1)",
                    transform: "scale(1.1)",
                  }}
                  src={facebook}
                />
              </a>
              <a href='https://www.instagram.com/neparufla/' target='_blank'>
                <Image
                  w='40px'
                  h='40px'
                  _hover={{
                    "-webkit-transform": "scale(1.1)",
                    "-ms-transform": "scale(1.1)",
                    transform: "scale(1.1)",
                  }}
                  src={instagram}
                />
              </a>
              <a href='https://www.linkedin.com/in/neparufla/' target='_blank'>
                <Image
                  w='40px'
                  h='40px'
                  _hover={{
                    "-webkit-transform": "scale(1.1)",
                    "-ms-transform": "scale(1.1)",
                    transform: "scale(1.1)",
                  }}
                  src={linkedin}
                />
              </a>
              <a href='mailto:nucleo.nepar@gmail.com' target='_blank'>
                <Image
                  w='41px'
                  h='41px'
                  _hover={{
                    "-webkit-transform": "scale(1.1)",
                    "-ms-transform": "scale(1.1)",
                    transform: "scale(1.1)",
                  }}
                  src={gmail}
                />
              </a>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          alignItems='center'
          width='55%'
          m='10px 0px'
          minWidth='350px'
        >
          <Text textAlign='center' fontWeight='600' fontSize='27px' mb='10px'>
            Fale conosco por aqui!
          </Text>
          <Formik
            initialValues={{ mensagem: "", email: "", name: "" }}
            // validate={}
            onSubmit={(values, { setSubmitting }) => {
              const params = {
                nome: values.name,
                email: values.email,
                mensagem: values.mensagem,
              }
              emailjs.send("service_jh3wm3k", "template_s3xcf6t", params).then(
                function (response) {
                  console.log("SUCCESS!", response.status, response.text)
                },
                function (error) {
                  console.log("FAILED...", error)
                }
              )
            }}
          >
            {({ values, handleSubmit, isSubmitting, field, setFieldValue }) => {
              return (
                <Flex
                  flexDirection='column'
                  alignItems='center'
                  width='100%'
                  bg='#C4C4C4'
                  padding='30px'
                  borderRadius='20px'
                >
                  <Input
                    bg='white'
                    h='50px'
                    placeholder='Seu nome completo'
                    id='name'
                    value={values.name}
                    name='name'
                    onChange={(e) =>
                      setFieldValue("name", e.target.value, false)
                    }
                    {...field}
                  />
                  <Input
                    mt='20px'
                    h='50px'
                    bg='white'
                    id='email'
                    name='email'
                    placeholder='Seu e-mail'
                    onChange={(e) =>
                      setFieldValue("email", e.target.value, false)
                    }
                    value={values.email}
                    {...field}
                  />
                  <Textarea
                    mt='20px'
                    h='150px'
                    bg='white'
                    id='mensagem'
                    name='mensagem'
                    placeholder='Escreva aqui sua mensagem...'
                    value={values.mensagem}
                    onChange={(e) =>
                      setFieldValue("mensagem", e.target.value, false)
                    }
                    {...field}
                  />
                  <Flex
                    w='100%'
                    justifyContent='space-around'
                    wrap='wrap'
                    p='5px'
                    pb='0px'
                    mt='10px'
                    alignItems='center'
                  >
                    <ReCaptchaV2
                      sitekey={process.env.REACT_APP_SITE_KEY}
                      onChange={onChange}
                    />
                    <Button
                      bg='#5C99A5'
                      isDisabled={!verified || isSubmitting}
                      mt='10px'
                      color='white'
                      onClick={() => handleSubmit()}
                    >
                      Enviar
                    </Button>
                  </Flex>
                </Flex>
              )
            }}
          </Formik>
        </Flex>
      </Flex>
      <Flex bg='#081E2E' w='100%' justifyContent='center' alignItems='center'>
        <Text color='white' fontWeight='700' m='20px'>
          Desenvolvido por NEPAR © 2021
        </Text>
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
