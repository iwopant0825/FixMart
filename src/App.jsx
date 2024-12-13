import styled from "styled-components"
import Header from "./components/Header"
import Picture from "./components/Picture"
import ExamplePic from "./components/ExamplePic"
import { useState } from "react"

function App() {
  const [pic,setPic] = useState(1)
  return (
    <Layout>
      <Model>
        <Picture pic={pic}/>
      </Model>
      <Pictures>
        <ExamplePic setPic={setPic} num={1}/>
        <ExamplePic setPic={setPic} num={2}/>
        <ExamplePic setPic={setPic} num={3}/>
        <ExamplePic setPic={setPic} num={4}/>
        <ExamplePic setPic={setPic} num={5}/>
        <ExamplePic setPic={setPic} num={6}/>
        <ExamplePic setPic={setPic} num={7}/>
        <ExamplePic setPic={setPic} num={8}/>
        <ExamplePic setPic={setPic} num={9}/>
        <ExamplePic setPic={setPic} num={10}/>
      </Pictures>
    </Layout>
  )
}

const Layout = styled.div`
  width:100%;
  height: 100vh;
  background-color:#ffffff;
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
  margin-top:170px;
  gap:20px;
  width:50%;
  height:auto;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  max-height: 100vh;
  & > * {
    width: 20.33%;
  }
`
export default App
