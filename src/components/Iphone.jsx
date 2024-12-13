/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/phone.glb -o ./src/components/Iphone.jsx 
*/

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Iphone(props) {
  const { nodes, materials } = useGLTF('/phone.glb')
  const PicTexture = useTexture('./public/pictures/pic1.jpeg')
  return (
    <group scale={0.12} position={[0,-1,0]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.151}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[21.771, 52.704, 0]} rotation={[-Math.PI / 2, 0.004, 0]} scale={[100, 7.423, 100]}>
            <mesh geometry={nodes.iphone_x_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.iphone_x_Material002_0.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.iphone_x_Material003_0.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.iphone_x_Material004_0.geometry}>
              <meshStandardMaterial map={PicTexture}/>
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/phone.glb')