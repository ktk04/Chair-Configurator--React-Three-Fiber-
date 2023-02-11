
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
  
  const fabricTextureProps = useTexture({
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  // leatherTextureProps.map.repeat.set(3, 3);
  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);
  // leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT =
  //   THREE.MirroredRepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  // fabricTextureProps.map.repeat.set(3, 3);
  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);
  // fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
  //   THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair}>
        <meshStandardMaterial {...leatherTextureProps}/>
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.06, 0.04]} >
      <meshStandardMaterial
          {...fabricTextureProps}
        />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={false} />
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')
export default Chair;
