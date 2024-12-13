import { Canvas, useFrame } from "@react-three/fiber"
import styled from "styled-components"
import { Iphone } from "./Iphone"
import { OrbitControls, useTexture } from "@react-three/drei"

export default function Picture({pic}){
    return(
        <Layout>
            <Canvas>
                {/* <color attach={'background'} args={['#e91212']}/> */}
                <ambientLight intensity={1}/>
                <directionalLight position={[1,1,1]} intensity={5}/>
                <Iphone pic={pic}/>
                <OrbitControls/>
            </Canvas>
        </Layout>
    )
}
const Layout = styled.div`
    margin-top:80px;
    width:600px;
    height:800px
`