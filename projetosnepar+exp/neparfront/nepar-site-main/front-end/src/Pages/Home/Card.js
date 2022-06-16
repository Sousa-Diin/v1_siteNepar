import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react"
import styled from "styled-components"

import project from "../../assets/imgs/project.png"

export const Card = ({ name, text, image }) => {
  return (
    <StyledFlex>
      <Flex h='250px' w='100%' border='1px'>
        <Image src={image || project} />
      </Flex>
      <Flex
        bg='white'
        h='320px'
        p='13px 30px'
        flexDirection='column'
        alignItems='center'
      >
        <Flex height='90px' alignItems='center'>
          <Heading
            textAlign='center'
            color='black'
            fontSize='25px'
            mb='10px'
            alignItems='center'
          >
            {name}
          </Heading>
        </Flex>
        <Text h='100%' color='black' textAlign='center' fontSize='105%'>
          {text}
        </Text>
        {/* <Text w='100%' color='grey' textAlign='right' as='ins' cursor='no-drop'>
          Saiba Mais
        </Text> */}
      </Flex>
    </StyledFlex>
  )
}

const StyledFlex = styled.div`
  display: flex;
  background-color: #167284;
  flex-direction: column;
  width: 350px;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 10px;
  @media (max-width: 900px) {
    /* width: 300px; */
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`
