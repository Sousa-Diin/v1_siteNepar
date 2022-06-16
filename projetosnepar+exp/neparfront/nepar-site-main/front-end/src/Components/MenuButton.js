import { Button } from "@chakra-ui/button"
import styled from "styled-components"

export const MenuButton = ({ children }) => {
  return <StyledButton variant='link'>{children}</StyledButton>
}

const StyledButton = styled(Button)`
  height: 100%;
  color: #c4c4c4;
  transition: opacity 4s ease;
  font-size: 20px;
  @media (max-width: 1366px) {
    font-size: 17px;
  }
`
