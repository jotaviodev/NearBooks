import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Header from "./components/Header"
function App() {
  const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #232F3E;
  `
  const GlobalStyle = createGlobalStyle`
  *{
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
  }
  `

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
    </AppContainer>

  )
}

export default App
