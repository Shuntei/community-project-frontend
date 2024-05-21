import React, { useRef } from 'react'
import { useGLTF, 

 } from '@react-three/drei'


export default function Boy(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/gltf/model2.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<primitive object={nodes.LeftFootCtrl} />
<primitive object={nodes.RightFootCtrl} />
<primitive object={nodes.HipsCtrl} />
<skinnedMesh geometry={nodes.characterMedium.geometry} material={materials['skin.001']} skeleton={nodes.characterMedium.skeleton} />

    </group>
  )
}

useGLTF.preload('/3Ddemo/gltf/model2.gltf')