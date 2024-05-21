import { Canvas, useLoader, useFrame, useThree  } from '@react-three/fiber'
import { Physics } from "@react-three/rapier"
import Box from './box'
import Box2 from './box2'
import Box3 from './box3'
// import * as dat from 'dat.gui'
import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Model } from './model'
import { folder, useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import { useState, useRef, Suspense, useMemo, useEffect } from "react"
import Experience from './Experience'
import { useMouseCapture } from './MouseCapture'
import { NavigationControls } from './NavigationControls'
import _JSXStyle from 'styled-jsx/style'
import { RiCloseLargeFill, RiCornerDownLeftLine } from "@remixicon/react";
import Link from 'next/link';
import { LayerMaterial, Depth, Noise } from "lamina";
import * as THREE from 'three';

// Function to get player input from keyboard and mouse
// function getInput(keyboard, mouse) {
//   let [x, y, z] = [0, 0, 0];
//   // Checking keyboard inputs to determine movement direction
//   if (keyboard["s"]) z += 1.0; // Move backward
//   if (keyboard["w"]) z -= 1.0; // Move forward
//   if (keyboard["d"]) x += 1.0; // Move right
//   if (keyboard["a"]) x -= 1.0; // Move left
//   if (keyboard[" "]) y += 1.0; // Jump

//   // Returning an object with the movement and look direction
//   return {
//     move: [x, y, z],
//     look: [mouse.x / window.innerWidth, mouse.y / window.innerHeight], // Mouse look direction
//     running: keyboard["Shift"], // Boolean to determine if the player is running (Shift key pressed)
//   };
// }

const BG_SPEED = 0.1; 
const Background = () => {
  const ref = useRef();

  useFrame((_state, delta) => {
      ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z += delta * BG_SPEED;
    });

  //   // 使用 requestAnimationFrame 替代 useFrame 以避免在伺服器端出現問題
  //   const handle = requestAnimationFrame(rotationUpdate);

  //   return () => cancelAnimationFrame(handle);
  // }, []);
  return (
    <mesh scale={50} ref={ref} >
      <sphereGeometry args={[1, 64, 64]} />
      {/* <meshBasicMaterial color={"red"} side={THREE.BackSide}/> */}
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

export default function TestA() {

  const random = useRef(Math.floor(Math.random()*(3-1)+1))

//   const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

    // const posData = [
    //   [[-8, 2,-4], [-1.2, 2, 9],[9, 2, -3]],
    //   [[-1.2, 2, 9],[-8, 2,-4],[9, 2, -3]],
    //   [[-1.2, 2, 9],[9, 2, -3],[-8, 2,-4]],
    // ]

    // console.log(random.current)

    // const posDisplay = posData[random.current-1]

  return (
    <>
    <div className='h-svh'>
      <div>
        <Link href="/game"><RiCornerDownLeftLine className='text-white w-8 h-8'/></Link>
      </div>
      <NavigationControls>
      <Canvas className='bg-neutral-100' shadowmap="true" camera={{ position: [24, 4, 1.5], fov:42 }} >
        {/* <color attach="background" args={["#dbecfb"]}/> */}
        {/* <fog attach="fog" args={["#dbecfb",30,40]}/> */}
        <Suspense 
        fallback={null} 
        // gravity={[0, -30, 0]}
        >
          <Physics debug>
            <Experience/>
          </Physics>
          
          <Model position={[0, 6, 0]} rotation={[0,230,0]}/>
          {/* <Environment files="/3Ddemo/hdr/150_hdrmaps_com_free_10K.exr" background blur={0.5} /> */}
            <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
            {/* <Box position={posDisplay[0]}/>
            <Box2 position={posDisplay[1]}/>
            <Box3 position={posDisplay[2]} /> */}
          {/* <OrbitControls target={[0, 1, 0]}/> */}
          <ambientLight intensity={1} />
          <Background/>
        </Suspense>
        {/* <OrbitControls/> */}
      </Canvas>
      </NavigationControls>
      {/* <Stats /> */}
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
