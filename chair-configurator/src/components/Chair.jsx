
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE  from "three";

const Chair = (props) => {
  const { nodes, materials } = useGLTF('./models/chair.gltf')

  const leatherTextureProps = useTexture({
    map: './textures/leather/Leather_008_Base Color.jpg',
    normalMap: './textures/leather/Leather_008_Normal.jpg',
    roughnessMap: './textures/leather/Leather_008_Roughness.jpg',
    aoMap: './textures/leather/Leather_008_Ambient Occlusion.jpg',
  })

  leatherTextureProps.map.repeat.set(2,2);
  leatherTextureProps.normalMap.repeat.set(2,2);
  leatherTextureProps.roughnessMap.repeat.set(2,2);
  leatherTextureProps.aoMap.repeat.set(2,2);

  leatherTextureProps.map.wrapS=leatherTextureProps.map.wrapT=THREE.RepeatWrapping;
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair}>
        <meshStandardMaterial {...leatherTextureProps}/>
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.06, 0.04]} />
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={false} />
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')
export default Chair;
