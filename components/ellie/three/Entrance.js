import { Canvas, useLoader, useFrame, useThree  } from '@react-three/fiber'
import { Physics } from "@react-three/rapier"
import Box from './box'
import Box2 from './box2'
import Box3 from './box3'
import * as THREE from 'three'
import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Model } from './model'
import { folder, useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import { useState, useRef, Suspense, useMemo } from "react"

import { useMouseCapture } from './MouseCapture'
import { NavigationControls } from './NavigationControls'

// Function to get player input from keyboard and mouse


export default function Entrance() {

  return (
    <>
    <div className="h-svh w-full">
      <NavigationControls>
      <Canvas className='bg-neutral-100' shadows camera={{ position: [34, 5, 1.4], fov:54 }}>
        <color attach="background" args={["#dbecfb"]}/>
          <Model position={[0, 6, 0]} rotation={[0,230,0]}/>
            <Environment files="./3Ddemo/hdr/150_hdrmaps_com_free_10K.exr" background blur={0.5} />
            <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
            {/* <Box position={[-8, 2,-4]} />
            <Box2 position={[-1.2, 2, 9]} />
            <Box3 position={[9, 2, -3]} /> */}
          <OrbitControls target={[0, -0.5, 0]}/>
          <ambientLight intensity={1} />
        </Canvas>
      </NavigationControls>
      {/* <Stats /> */}
    </div>

</>
  )
}
