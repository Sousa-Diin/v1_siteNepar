import React, { useEffect, useState } from "react"
import { Box, Flex, Stack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"

import arrowUp from "../assets/imgs/arrowUp.png"
import logo from "../assets/imgs/NEPAR-logo.svg"
import { MenuButton } from "./MenuButton"
import { Button } from "@chakra-ui/button"
import styled from "styled-components"
import { Drawer } from "./Drawer"
import { useDisclosure } from "@chakra-ui/hooks"
import { useToast } from "../Components/Toast"

export const AppBar = () => {
  const [navColor, setNavColor] = useState("#073154")
  const [display, setDisplay] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const listenScrollEvent = (event) => {
    // var height = document.getElementById("welcome").clientHeight
    if (window.scrollY >= 100) {
      setNavColor("#073154")
      setDisplay(true)
    } else {
      setNavColor("trasparent")
      setDisplay(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  const toast = useToast()

  return (
    <>
      <StyledHStack backgroundColor={navColor}>
        <StyledMenu>
          <Drawer
            onClose={onClose}
            onOpen={onOpen}
            isOpen={isOpen}
            body={
              <Stack spacing={6}>
                <StyledLink href='#about'>
                  <MenuButton>Quem Somos</MenuButton>
                </StyledLink>
                <StyledLink href='#project'>
                  <MenuButton>Projetos</MenuButton>
                </StyledLink>
                {/* <StyledLink>
                  <MenuButton>Nossa Equipe</MenuButton>
                </StyledLink> */}
                <StyledLink href='#partnes'>
                  <MenuButton>Parceiros</MenuButton>
                </StyledLink>
                <StyledLink href='#contact'>
                  <MenuButton>Contato</MenuButton>
                </StyledLink>
              </Stack>
            }
            footer={
              <Button
                borderRadius='25px'
                variant='outline'
                color='#C4C4C4'
                _hover={{
                  background: "white",
                  color: "  #073154",
                }}
                disabled
              >
                Para Membros
              </Button>
            }
          />
        </StyledMenu>
        <StyledLogo>
          <Image w='100px' src={logo} />
        </StyledLogo>
        <StyledAppBar>
          <StyledLink href='#about'>
            <MenuButton>Quem Somos</MenuButton>
          </StyledLink>
          <StyledLink href='#project'>
            <MenuButton>Projetos</MenuButton>
          </StyledLink>
          {/* <StyledLink>
            <MenuButton>Nossa Equipe</MenuButton>
          </StyledLink> */}
          <StyledLink href='#partnes'>
            <MenuButton>Parceiros</MenuButton>
          </StyledLink>
          <StyledLink href='#contact'>
            <MenuButton>Contato</MenuButton>
          </StyledLink>
          <Button
            borderRadius='25px'
            variant='outline'
            color='#C4C4C4'
            // _hover={{
            //   background: "white",
            //   color: "  #073154",
            // }}
            onClick={() =>
              toast({
                title: "An error occurred.",
                description: "Unable to create user account.",
                status: "error",
                duration: 9000,
                isClosable: true,
              })
            }
            disabled
          >
            Para Membros
          </Button>
        </StyledAppBar>
      </StyledHStack>
      {display ? (
        <FloatButton
          _hover={{
            background: "white",
          }}
          as='button'
          onClick={() => window.scroll(0, 0)}
        >
          <Image w='18px' src={arrowUp} />
        </FloatButton>
      ) : null}
    </>
  )
}

const FloatButton = styled(Box)`
  display: flex;
  background-color: #00677a;
  padding-bottom: 5px;
  border-radius: 100%;
  margin-bottom: 20px;
  margin-right: 20px;
  position: fixed;
  z-index: 9;
  width: 50px;
  height: 50px;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`

const StyledLogo = styled(Flex)`
  width: 200px;
  justify-content: center;
  @media (max-width: 1300px) {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`

const StyledHStack = styled(Flex)`
  position: fixed;
  width: 100%;
  color: white;
  align-items: center;
  height: 100px;
  top: 0;
  z-index: 998;
  justify-content: space-between;
  @media (max-width: 1300px) {
    height: 75px;
  }
`

const StyledAppBar = styled(Flex)`
  display: flex;
  width: 100%;
  align-items: "center";
  justify-content: space-between;
  margin-left: 150px;
  padding-inline: 50px;
  @media (max-width: 1366px) {
    padding-inline: 0px;
    margin-left: 110px;
  }
  @media (max-width: 1300px) {
    display: none;
  }
`

const StyledMenu = styled(Flex)`
  display: none;
  @media (max-width: 1300px) {
    display: flex;
  }
`

const StyledLink = styled.a`
  display: flex;
  height: unset;
`
