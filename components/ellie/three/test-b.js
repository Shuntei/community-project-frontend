import { Canvas, useLoader, useFrame, useThree  } from '@react-three/fiber'
import { Physics } from "@react-three/rapier"
import Box from './box'
import Box2 from './box2'
import Box3 from './box3'
import * as THREE from 'three'
import { Stats, OrbitControls, Environment, Torus } from '@react-three/drei'
import { Model } from './model'
import { folder, useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import { useState, useRef, Suspense, useMemo } from "react"
import Experience from './Experience'
import { useMouseCapture } from './MouseCapture'
import { NavigationControls } from './NavigationControls'
import _JSXStyle from 'styled-jsx/style'
import { RiCloseLargeFill, RiCornerDownLeftLine } from "@remixicon/react";
import Link from 'next/link';

function ExampleTorus() {
  return (
    <Torus args={[2, 0.5, 8, 16]}>
      <meshBasicMaterial color={"#2fe4fc"}/>
    </Torus>
  );
}

function ThreeScene() {
  const {color} = useControls("Fog",{ color:"#000" });

  return (
    <Canvas>
      <ambientLight/>
      <pointLight position={[5,5,5]} intensity={1}/>
      <pointLight position={[-3,-3,2]}/>
      <OrbitControls/>

      <fog attach="fog" args={[color,2,10]} />
      <ExampleTorus/>
    </Canvas>
  );
}
export default function TestB() {
  const width = window.innerWidth, height = window.innerHeight;

// init

const Background = () => {
  // const ref = useRef();

  // useFrame((_state, delta) => {
  //   ref.current.rotation.x =
  //   ref.current.rotation.y =
  //   ref.current.rotation.z += delta * BG_SPEED;
  // });
  return (
    <mesh scale={100}>
      <shapeGeometry args={[1,64,64]}/>
      <meshBasicMaterial color={"red"} />
      {/* <LayerMaterial side={THREE.BackSide}>
        <Depth
        colarA="#f21a62"
        colorB="#0081fc"
        alpha={1}
        mode="normal"
        near={130}
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
        </LayerMaterial> */}
    </mesh>
  );
};

return(
  <div className='h-svh'>
    <ThreeScene/>
  </div>
);
}
