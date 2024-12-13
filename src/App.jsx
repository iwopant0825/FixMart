import styled from "styled-components"
import Header from "./components/Header"
import Picture from "./components/Picture"

function App() {
  return (
    <Layout>
      <Model>
        <Picture/>
      </Model>
      <Pictures>

      </Pictures>
    </Layout>
  )
}

const Layout = styled.div`
  width:100%;
  height: 100vh;
  background-color:#f2f3f7;
  display: flex;
  flex-direction: row;
`
const Model = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:auto;
`
const Pictures = styled.div`
  width:50%;
  height:auto;
`
export default App
