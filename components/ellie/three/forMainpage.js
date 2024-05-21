import React from 'react'
import { Box, OrbitControls, useKeyboardControls } from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import { Cylinder } from '@react-three/drei';




export default function Experience() {

  return (
    <>
    <group>
    {/* <OrbitControls/> */}
    <directionalLight position={[5,5,5]} intensity={0.8} castShadow color={"#9e69da"}/>
    {/* <RigidBody colliders={false} type="fixed" position-y={1}> */}
        <CylinderCollider args={[0.5, 28]}/>
        <Cylinder scale={[28,0.5,28]} receiveShadow>
          <meshStandardMaterial color="white"/>
        </Cylinder>
      {/* </RigidBody> */}
    </group>
    </>
  )
}