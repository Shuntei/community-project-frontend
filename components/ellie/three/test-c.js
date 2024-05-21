import React,{ useState, useRef, useEffect, Suspense, useMemo } from 'react'
import { Html } from '@react-three/drei';
import { Canvas, useLoader, useFrame, useThree, extend  } from '@react-three/fiber'
import { Physics } from "@react-three/rapier"
import { Sky, PointerLockControls, KeyboardControls, Stats, OrbitControls, Environment } from "@react-three/drei"
import { Model } from './model'
import { folder, useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import Experience from './PickExperience'
import { useMouseCapture } from './MouseCapture'
import { NavigationControls } from './NavigationControls'
import _JSXStyle from 'styled-jsx/style'
import { RiCloseLargeFill, RiCornerDownLeftLine } from "@remixicon/react";
import Link from 'next/link';
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from 'three';
// import { OrbitControls, TransformControls } from 'three-stdlib'
// extend({ OrbitControls, TransformControls })


const BG_SPEED = 0.1; 
const Background = () => {
  const ref = useRef();

  useFrame((_state, delta) => {
      ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z += delta * BG_SPEED;
    });

  return (
    <mesh scale={50} ref={ref} >
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
         <Depth
         colarA="#f21a62"
         colorB="#0081fc"
         alpha={1}
         mode="normal"
         near={120}
         far={200}
         origin={[100,100,-100]}
         />
         <Noise
         mapping="local"
         type="white"
         scale={100}
         colorA="white"
         colorB="black"
         mode="subtract"
         alpha={0.42}
         />
         </LayerMaterial>
    </mesh>
  );
};

export const Controls ={
  forward: "forward",
  back:"back",
  left:"left",
  right:"right",
  jump:"jump",
}




export default function TestC() {

//   const map = useMemo(() => [
//   { name: Controls.forward, keys: ["ArrowUp", "KeyW"]},
//   { name: Controls.back, keys: ["ArrowDown", "KeyS"]},
//   { name: Controls.left, keys: ["ArrowLeft", "KeyA"]},
//   { name: Controls.right, keys: ["ArrowRight", "KeyD"]},
//   { name: Controls.jump, keys: ["Space"]},
// ], []);


  return (
    <>
    <div className='h-svh'>
      <div>
        <Link href="/game"><RiCornerDownLeftLine className='text-white w-8 h-8'/></Link>
      </div>
      {/* <NavigationControls> */}
      <KeyboardControls map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      <Canvas className='bg-neutral-100' shadowmap="true" camera={{ position: [30, 2.8, -1.5], fov:48 }} >
      <Sky sunPosition={[100, 20, 100]} />
      {/* <OrbitControls/> */}
        {/* <color attach="background" args={["#dbecfb"]}/> */}
        {/* <fog attach="fog" args={["#dbecfb",30,40]}/> */}
        <Suspense>
          <Physics 
          // debug
          gravity={[0, -15, 0]}
          >
            <Experience/>
          </Physics>
          
          <Model position={[0, 6, 0]} rotation={[0,230,0]}/>
            <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
          <ambientLight intensity={1} />
          <Background/>
        </Suspense>
        <PointerLockControls />
      </Canvas>
      </KeyboardControls>
      {/* </NavigationControls> */}
    </div>
    <style jsx>{`
    *
{
    margin: 0;
    padding: 0;
}
.webgl
{
  position: fixed;
    top: 0;
    left: 0;
    outline: none;
}
      `}</style>
    
</>
  )
}
