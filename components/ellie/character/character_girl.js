import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export default function Girl(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/gltf/model.gltf')
  return (
    <group ref={group} {...props} dispose={null} >
<group scale={0.64} >
<primitive object={nodes.LeftFootCtrl} />
<primitive object={nodes.RightFootCtrl} />
<primitive object={nodes.HipsCtrl} />
<skinnedMesh geometry={nodes.characterMedium.geometry} material={materials['skin.001']} skeleton={nodes.characterMedium.skeleton} />
</group>

    </group>
  )
}

useGLTF.preload('3Ddemo/gltf/model.gltf')