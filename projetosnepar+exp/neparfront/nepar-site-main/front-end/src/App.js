import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import { Routes } from "./Routes"
import "./app.css"

export const App = () => (
  <ChakraProvider
    theme={extendTheme({
      fonts: {
        body: "Spartan, sans-serif",
        heading: "Spartan, sans-serif",
      },
    })}
  >
    <Routes />
  </ChakraProvider>
)

export default App
