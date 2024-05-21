import React from 'react'
import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls, Environment } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from './ground'
import { Player } from "./Player"
import { RiCloseLargeFill, RiCornerDownLeftLine } from "@remixicon/react";
import Link from 'next/link';
import { Camera } from './Camera'
import { NavigationControls } from './NavigationControls'

export default function App() {
  return (
    <>
    <div className='h-svh'>
      <div>
        <Link href="/game"><RiCornerDownLeftLine className='text-white w-8 h-8'/></Link>
      </div>
      <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      {/* <NavigationControls> */}
      <Canvas shadows camera={{ fov: 45 }}>
        {/* <Camera fov={42} /> */}
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>
          <Ground />
          <Player />
          {/* <Cube position={[0, 0.5, -10]} /> */}
          {/* <Environment files="/3Ddemo/hdr/150_hdrmaps_com_free_10K.exr" background blur={0.5} /> */}
          {/* <Cubes /> */}
        </Physics>
        <PointerLockControls />
      </Canvas>
      {/* </NavigationControls> */}
    </KeyboardControls>
    </div>
    </>
  )
}
