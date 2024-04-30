import styled from 'styled-components'
import Header from "./components/Header"
import SearchSection from './components/SearchSection'
import LastReleases from './components/LastReleases'

const AppContainer = styled.div`
width: 100vw;
background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchSection />
      <LastReleases />
    </AppContainer>

  )
}

export default App
