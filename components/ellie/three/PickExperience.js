import React,{ useState, useRef, useEffect, Suspense, } from 'react'
import { Html } from '@react-three/drei';
import { Box, OrbitControls, useKeyboardControls } from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import { Cylinder } from '@react-three/drei';
// import {AvatarController1} from '/ruins-next/components/ellie/character/AvatarController1'
// import {AvatarController2} from '/ruins-next/components/ellie/character/AvatarController2'
// import {AvatarController3} from '/ruins-next/components/ellie/character/AvatarController3'
import GirlController  from '../character/GirlController';
import BoyController  from '../character/BoyController';
// import ArrorLeft from './ArrorLeft';
// import ArrorRight from './ArrorRight';
import Picker from './AvatarPicker';



export default function Experience() {
  const [hover, setHover ] = useState(false);
  const cube = useRef();
  const isOnFloor = useRef(true); 

  return (
    <>
    <group>
    <OrbitControls/>
    <directionalLight position={[5,5,5]} intensity={0.8} castShadow color={"#9e69da"}/>
    <RigidBody colliders={false} type="fixed" position-y={1}>
        <CylinderCollider args={[0.5, 28]}/>
        <Cylinder scale={[28,0.5,28]} receiveShadow>
          <meshStandardMaterial color="white"/>
        </Cylinder>
      </RigidBody>
      {/* <AvatarController1 onPointerEnter={() => setHover(true)}/>
      <AvatarController2 onPointerEnter={() => setHover(true)}/>
      <AvatarController3 onPointerEnter={() => setHover(true)}/> */}
      <GirlController />
      {/* <BoyController /> */}
      {/* <ArrorLeft />
      <ArrorRight /> */}
      {/* <Picker/> */}
    </group>
    </>
  )
}