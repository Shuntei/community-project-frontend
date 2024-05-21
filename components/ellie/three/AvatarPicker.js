import React, { useRef, useState, Suspense, } from 'react';
import { useFrame } from '@react-three/fiber';
import { Physics } from "@react-three/rapier"
import { Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GirlController  from '../character/GirlController';
import BoyController  from '../character/BoyController';



// const Picker = ({ avatars }) => {
//   const carouselRef = useRef();
//   const avatarComponents = [<GirlController />, <BoyController />];

//   const handleClickPrevious = () => {
//     // 移動到上一個頭像
//     carouselRef.current.position.x -= 2;
//   };

//   const handleClickNext = () => {
//     // 移動到下一個頭像
//     carouselRef.current.position.x += 2;
//   };

//   // const controls = new OrbitControls();

//   return (
    
//     <Canvas>
//       <Suspense>
//           <Physics debug>
//           <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />

//       <group ref={carouselRef}>
//         <avatarComponents/>
//       </group>

//       {/* <OrbitControls /> */}
//           </Physics>
//           </Suspense>
      
//       <Html>
//         <div>
//           <button onClick={handleClickPrevious}>Previous</button>
//           <button onClick={handleClickNext}>Next</button>
//           <button>Confirm Selection</button>
//         </div>
//       </Html>
//     </Canvas>
//   );
// };

// const AvatarModel = ({ modelPath }) => {
//   const gltf = useLoader(GLTFLoader, modelPath);

//   return <primitive object={gltf.scene} />;
// };

const AvatarModel = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);

  return <primitive object={gltf.scene} />;
};

const Picker = ({ avatars }) => {
  const carouselRef = useRef();
  const avatarComponents = [<GirlController />, <BoyController />];

  const handleClickPrevious = () => {
    // 移動到上一個頭像
    carouselRef.current.position.x -= 2;
  };

  const handleClickNext = () => {
    // 移動到下一個頭像
    carouselRef.current.position.x += 2;
  };

  return (
    <group>
      <Suspense fallback={null}>
          <group ref={carouselRef}>
            {avatarComponents.map((AvatarComponent, index) => (
              <Suspense key={index} fallback={null}>
                <AvatarComponent />
              </Suspense>
            ))}
          </group>
      </Suspense>

      <Html>
        <div>
          <button onClick={handleClickPrevious}>Previous</button>
          <button onClick={handleClickNext}>Next</button>
          <button>Confirm Selection</button>
        </div>
      </Html>
    </group>
  );
};

export default Picker;