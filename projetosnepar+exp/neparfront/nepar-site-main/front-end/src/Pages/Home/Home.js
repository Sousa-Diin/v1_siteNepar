import { Box } from "@chakra-ui/react"
import { AppBar } from "../../Components"
import { Welcome, About, Project, Contact, Partnes } from "./"

export const Home = () => {
  return (
    <Box bg='#E5E5E5' w='100%'>
      <AppBar />
      <Welcome />
      <About />
      <Project />
      <Partnes />
      <Contact />
    </Box>
  )
}
