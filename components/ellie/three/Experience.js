import React, { useState, useRef, useEffect } from 'react'
import {
  Box,
  OrbitControls,
  Cylinder,
  useKeyboardControls,
} from '@react-three/drei'
import { CylinderCollider, RigidBody } from '@react-three/rapier'
import BoyController from '../character/BoyController'
import { useFrame } from '@react-three/fiber'
import Ball from './ball'
import { LayerMaterial, Depth, Noise } from 'lamina'
import * as THREE from 'three'
import { GameLevel, useGameStore } from './newStore'
// import { treasure } from './Constents';
import { ObjSpots } from './objSpots'
import Box1 from './box'
import Box2 from './box2'
import Box3 from './box3'

import Headphones from './props/headphones.js'
import Nes from './props/nes'
import NesCon from './props/nesCon'
import Pear from './props/pear'
import Noodles from './props/noodles'
import Sandwich from './props/Sandwich'
import Pepper from './props/pepper'
import Salt from './props/salt'
import Soda from './props/soda'
import BeachBall from './props/ball'

export default function Experience() {
  const [hover, setHover] = useState(false)
  const cube = useRef();

  const ballRef = useRef()
  
  const jump = ()=> {
    cube.current.applyImpule({x:0,y:4,z:0});
  }
  //  console.log(GameLevel({thStages:3}));
  const startGame = useGameStore((state) => state.startGame)

  const random = useRef(Math.floor(Math.random() * (9 - 1) + 1))
  const posData = [
    [
      [5, 2, 5],
      [-1.2, 2, 9],
      [-18, 1.5, -9],
      [9.5, 1.2, -8],
      [-8, 2, -4],
      [-3, 2, 0],
      [-8, 2, 7.5],
      [3, 2, -11],
      [9, 2, -3],
    ],
    [
      [-18, 1.5, -9],
      [5, 2, 5],
      [-3, 2, 0],
      [3, 2, -11],
      [-8, 2, -4],
      [9, 2, -3],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [-1.2, 2, 9],
    ],
    [
      [3, 2, -11],
      [-18, 1.5, -9],
      [5, 2, 5],
      [9.5, 1.2, -8],
      [-8, 2, 7.5],
      [-1.2, 2, 9],
      [-8, 2, -4],
      [-3, 2, 0],
      [9, 2, -3],
    ],
    [
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [5, 2, 5],
      [-8, 2, 7.5],
      [9, 2, -3],
      [-8, 2, -4],
      [-3, 2, 0],
      [-1.2, 2, 9],
    ],
    [
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [5, 2, 5],
      [-3, 2, 0],
      [9, 2, -3],
      [-8, 2, -4],
      [-1.2, 2, 9],
    ],
    [
      [-8, 2, -4],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [5, 2, 5],
      [-1.2, 2, 9],
      [9, 2, -3],
      [-3, 2, 0],
    ],
    [
      [-1.2, 2, 9],
      [-8, 2, -4],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [5, 2, 5],
      [-3, 2, 0],
      [9, 2, -3],
    ],
    [
      [-1.2, 2, 9],
      [-3, 2, 0],
      [9, 2, -3],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [5, 2, 5],
      [-8, 2, -4],
    ],
    [
      [-3, 2, 0],
      [9, 2, -3],
      [-1.2, 2, 9],
      [-8, 2, -4],
      [-8, 2, 7.5],
      [9.5, 1.2, -8],
      [3, 2, -11],
      [-18, 1.5, -9],
      [5, 2, 5],
    ],
  ]

  // console.log(random.current)

  const posDisplay = posData[random.current - 1]

  return (
    <>
    {console.log(random.current)}
      <group>
        {/* LIGHT */}
        <OrbitControls />
        {/* <ambientLight intensity={1}/> */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          color={'#9e69da'}
        />
        <group>
          {/* STAGE */}
          <RigidBody colliders={false} type="fixed" position-y={1} friction={2}>
            <CylinderCollider args={[0.5, 30]} />
            <Cylinder scale={[30, 0.5, 30]} receiveShadow>
              <meshStandardMaterial color="white" />
            </Cylinder>
          </RigidBody>
          {/* <RigidBody position={[6, 5, 0]} ref={cube}>
            <Box
              onPointerEnter={() => setHover(true)}
              onPointerLeave={() => setHover(false)}
              // onClick={jump}
            >
              <meshStandardMaterial color={hover ? 'hotpink' : 'royalblue'} />
            </Box>
          </RigidBody> */}
          {/* <RigidBody position={posDisplay[0]} ref={cube}>
            <Box1 />
          </RigidBody> */}
          <RigidBody ref={cube}position={posDisplay[0]} 
          >
            {/* <Box2 /> */}
            <NesCon/>
          </RigidBody>
          {/* <RigidBody position={posDisplay[2]} ref={cube}>
            <Box3 />
          </RigidBody> */}
          {/* <OrbitControls target={[0, 1, 0]}/> */}
          <RigidBody position={posDisplay[1] } 
          >
            <Headphones scale={0.19}/>
          </RigidBody>
          

          <RigidBody
            position={posDisplay[2]}
          >
            <Soda/>
          </RigidBody>
          <RigidBody
            position={posDisplay[3]} 
          >

            <Nes/>
          </RigidBody>

          <RigidBody
            position={posDisplay[4]}
          >
            <Pear/>
          </RigidBody>

          <RigidBody
           mass={2}
           restitution={0.2}
           friction={10}
           linearDamping={1}
           angularDamping={1}>
           <Salt position={[3, 1.3, 5]}/>
          </RigidBody>
            


          <RigidBody
            ref={ballRef}
            colliders="ball"
            mass={2}
            restitution={0.2}
            friction={10}
            linearDamping={1}
            angularDamping={1}
            position={posDisplay[5]}>
          <BeachBall />
          </RigidBody>


          <RigidBody
            position={posDisplay[6]}
          >
            <Noodles />
          </RigidBody>

          <RigidBody
            position={posDisplay[7]}
            ref={cube}
          >
            <Sandwich />
          </RigidBody>

          <RigidBody 
          position={posDisplay[8]}
          ref={cube}
          >
            <Pepper/>
          </RigidBody>

          {/*   */}
        </group>
        {/* <Ball/> */}
        <BoyController onPointerEnter={() => setHover(true)} />
        <ObjSpots />
        {/* <Background/> */}
      </group>
    </>
  )
}
