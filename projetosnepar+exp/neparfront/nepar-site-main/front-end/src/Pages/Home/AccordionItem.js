import React from "react"
import {
  Box,
  AccordionItem as Item,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react"

import styled from "styled-components"

export const AccordionItem = ({ title, iconText, icon, text }) => {
  return (
    <Item bg='#00677A'>
      <h2>
        <AccordionButton bg='#001D2E' _expanded={{ bg: "#00677A" }}>
          <Box flex='1' textAlign='left'>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel paddingBottom={6}>
        <Flex wrap='wrap' justifyContent='center'>
          <Flex
            flexDirection='column'
            w='300px'
            justifyContent='center'
            alignItems='center'
          >
            <Image src={icon} w='100px' />
            <StyledTextJ align='center'>{iconText}</StyledTextJ>
          </Flex>
          <StyledFlex>
            <Text w='100%' align='center'>
              {text}
            </Text>
          </StyledFlex>
        </Flex>
      </AccordionPanel>
    </Item>
  )
}

const StyledFlex = styled(Flex)`
  width: 70%;
  justify-content: center;
  align-items: center;
  @media (max-width: 1182px) {
    width: 100%;
  }
`
const StyledTextJ = styled(Text)`
  width: 100%;
  font-family: "Josefin Sans";
  font-size: 24px;
`
