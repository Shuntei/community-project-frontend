import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  // const { nodes, materials } = useGLTF('/3Ddemo/gltf/nicetry.glb')
  return (
    <></>
    // <group {...props} dispose={null} scale={5}>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_11.geometry}
    //     material={nodes.Tube_11.material}
    //     position={[0, 0.755, 0.567]}
    //     rotation={[Math.PI / 2, 0, Math.PI / 4]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_14.geometry}
    //     material={nodes.Cube_14.material}
    //     position={[-2.64, -0.613, 1.004]}
    //     rotation={[Math.PI / 2, 0, Math.PI / 2]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_5.geometry}
    //     material={nodes.Cube_5.material}
    //     position={[-2.646, -0.636, 0.549]}
    //     rotation={[Math.PI / 2, 0, -Math.PI / 2]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_10.geometry}
    //     material={nodes.Tube_10.material}
    //     position={[-1.243, -0.09, 0.024]}
    //     rotation={[-Math.PI / 2, 0, 2.344]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_6.geometry}
    //     material={nodes.Tube_6.material}
    //     position={[-1.535, 0.376, 0.293]}
    //     rotation={[-Math.PI / 2, 0, 2.182]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Plane.geometry}
    //     material={nodes.Plane.material}
    //     position={[0.005, 0.757, 2.068]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube.geometry}
    //     material={nodes.Cube.material}
    //     position={[2.64, -0.613, 1.004]}
    //     rotation={[Math.PI / 2, 0, Math.PI / 2]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_14_0.geometry}
    //     material={nodes.Cube_14_0.material}
    //     position={[0.003, 0.75, 2.072]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_63.geometry}
    //     material={nodes.Cube_63.material}
    //     position={[-1.413, -0.251, 2.056]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_4.geometry}
    //     material={nodes.Cube_4.material}
    //     position={[-0.55, -0.5, 1.266]}
    //     rotation={[Math.PI / 2, 0, -Math.PI]}
    //     scale={0.01}
    //   />
    //   <group
    //     position={[0, -0.722, 0]}
    //     rotation={[Math.PI / 2, -Math.PI / 2, 0]}
    //     scale={0.01}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_0.geometry}
    //       material={nodes.Cube_3_0.material}
    //       position={[0, 0, -268]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_1.geometry}
    //       material={nodes.Cube_3_1.material}
    //       position={[0, -82.817, -254.883]}
    //       rotation={[-Math.PI / 10, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_10.geometry}
    //       material={nodes.Cube_3_10.material}
    //       position={[0, 0, 268]}
    //       rotation={[Math.PI, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_2.geometry}
    //       material={nodes.Cube_3_2.material}
    //       position={[0, -157.526, -216.817]}
    //       rotation={[-Math.PI / 5, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_3.geometry}
    //       material={nodes.Cube_3_3.material}
    //       position={[0, -216.817, -157.526]}
    //       rotation={[-0.942, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_4.geometry}
    //       material={nodes.Cube_3_4.material}
    //       position={[0, -254.883, -82.817]}
    //       rotation={[-1.257, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_5.geometry}
    //       material={nodes.Cube_3_5.material}
    //       position={[0, -268, 0]}
    //       rotation={[-Math.PI / 2, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_6.geometry}
    //       material={nodes.Cube_3_6.material}
    //       position={[0, -254.883, 82.817]}
    //       rotation={[-1.885, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_7.geometry}
    //       material={nodes.Cube_3_7.material}
    //       position={[0, -216.817, 157.526]}
    //       rotation={[-2.199, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_8.geometry}
    //       material={nodes.Cube_3_8.material}
    //       position={[0, -157.526, 216.817]}
    //       rotation={[-2.513, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_3_9.geometry}
    //       material={nodes.Cube_3_9.material}
    //       position={[0, -82.817, 254.883]}
    //       rotation={[-2.827, 0, 0]}
    //     />
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_3.geometry}
    //     material={nodes.Cube_3.material}
    //     position={[2.625, -0.636, 0.549]}
    //     rotation={[Math.PI / 2, 0, -Math.PI / 2]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_2.geometry}
    //     material={nodes.Cube_2.material}
    //     position={[2.728, -0.109, 1.202]}
    //     rotation={[Math.PI / 2, Math.PI / 2, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_2.geometry}
    //     material={nodes.Tube_2.material}
    //     position={[0, 0.82, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_1.geometry}
    //     material={nodes.Tube_1.material}
    //     position={[0, -0.05, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <group
    //     position={[0, -0.451, 0]}
    //     rotation={[Math.PI / 2, 0, -0.192]}
    //     scale={0.01}
    //   >
    //     <group position={[0, -262, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10.geometry}
    //         material={nodes.Cube_10.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11.geometry}
    //         material={nodes.Cube_11.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12.geometry}
    //         material={nodes.Cube_12.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_2_2.geometry}
    //         material={nodes.Cube_3_2_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9.geometry}
    //         material={nodes.Cube_9.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[80.962, -249.177, 0]} rotation={[0, 0, Math.PI / 10]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_2.geometry}
    //         material={nodes.Cube_10_2.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_2.geometry}
    //         material={nodes.Cube_11_2.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_2.geometry}
    //         material={nodes.Cube_12_2.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_3_2.geometry}
    //         material={nodes.Cube_3_3_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_2.geometry}
    //         material={nodes.Cube_9_2.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[-249.177, -80.962, 0]} rotation={[0, 0, -1.257]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_9.geometry}
    //         material={nodes.Cube_10_9.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_9.geometry}
    //         material={nodes.Cube_11_9.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_9.geometry}
    //         material={nodes.Cube_12_9.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_10_2.geometry}
    //         material={nodes.Cube_3_10_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_9.geometry}
    //         material={nodes.Cube_9_9.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[-211.962, -154, 0]} rotation={[0, 0, -0.942]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_10.geometry}
    //         material={nodes.Cube_10_10.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_10.geometry}
    //         material={nodes.Cube_11_10.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_10.geometry}
    //         material={nodes.Cube_12_10.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_11_2.geometry}
    //         material={nodes.Cube_3_11_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_10.geometry}
    //         material={nodes.Cube_9_10.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[-154, -211.962, 0]} rotation={[0, 0, -Math.PI / 5]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_11.geometry}
    //         material={nodes.Cube_10_11.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_11.geometry}
    //         material={nodes.Cube_11_11.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_11.geometry}
    //         material={nodes.Cube_12_11.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_12.geometry}
    //         material={nodes.Cube_3_12.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_11.geometry}
    //         material={nodes.Cube_9_11.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group
    //       position={[-80.962, -249.177, 0]}
    //       rotation={[0, 0, -Math.PI / 10]}
    //     >
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_12.geometry}
    //         material={nodes.Cube_10_12.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_12.geometry}
    //         material={nodes.Cube_11_12.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_12.geometry}
    //         material={nodes.Cube_12_12.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_13.geometry}
    //         material={nodes.Cube_3_13.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_12.geometry}
    //         material={nodes.Cube_9_12.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[154, -211.962, 0]} rotation={[0, 0, Math.PI / 5]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_3.geometry}
    //         material={nodes.Cube_10_3.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_3.geometry}
    //         material={nodes.Cube_11_3.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_3.geometry}
    //         material={nodes.Cube_12_3.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_4_2.geometry}
    //         material={nodes.Cube_3_4_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_3.geometry}
    //         material={nodes.Cube_9_3.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[211.962, -154, 0]} rotation={[0, 0, 0.942]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_4.geometry}
    //         material={nodes.Cube_10_4.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_4.geometry}
    //         material={nodes.Cube_11_4.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_4.geometry}
    //         material={nodes.Cube_12_4.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_5_2.geometry}
    //         material={nodes.Cube_3_5_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_4.geometry}
    //         material={nodes.Cube_9_4.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[249.177, -80.962, 0]} rotation={[0, 0, 1.257]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_5.geometry}
    //         material={nodes.Cube_10_5.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_5.geometry}
    //         material={nodes.Cube_11_5.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_5.geometry}
    //         material={nodes.Cube_12_5.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_6_2.geometry}
    //         material={nodes.Cube_3_6_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_5.geometry}
    //         material={nodes.Cube_9_5.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //     <group position={[262, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_6.geometry}
    //         material={nodes.Cube_10_6.material}
    //         position={[-35.478, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_11_6.geometry}
    //         material={nodes.Cube_11_6.material}
    //         position={[12.703, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_12_6.geometry}
    //         material={nodes.Cube_12_6.material}
    //         position={[-12.45, -3, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_3_7_2.geometry}
    //         material={nodes.Cube_3_7_2.material}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_9_6.geometry}
    //         material={nodes.Cube_9_6.material}
    //         position={[36.374, 0, -1.288]}
    //         rotation={[0, 1.571, 0]}
    //       />
    //     </group>
    //   </group>
    //   <group
    //     position={[0, -0.311, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_0.geometry}
    //       material={nodes.nameCard_0.material}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_15.geometry}
    //       material={nodes.nameCard_15.material}
    //       rotation={[0, 0, -Math.PI / 2]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_16.geometry}
    //       material={nodes.nameCard_16.material}
    //       rotation={[0, 0, -1.257]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_17.geometry}
    //       material={nodes.nameCard_17.material}
    //       rotation={[0, 0, -0.942]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_18.geometry}
    //       material={nodes.nameCard_18.material}
    //       rotation={[0, 0, -Math.PI / 5]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_19.geometry}
    //       material={nodes.nameCard_19.material}
    //       rotation={[0, 0, -Math.PI / 10]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_1_2.geometry}
    //       material={nodes.nameCard_1_2.material}
    //       rotation={[0, 0, Math.PI / 10]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_2.geometry}
    //       material={nodes.nameCard_2.material}
    //       rotation={[0, 0, Math.PI / 5]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_3.geometry}
    //       material={nodes.nameCard_3.material}
    //       rotation={[0, 0, 0.942]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_4.geometry}
    //       material={nodes.nameCard_4.material}
    //       rotation={[0, 0, 1.257]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.nameCard_5.geometry}
    //       material={nodes.nameCard_5.material}
    //       rotation={[0, 0, Math.PI / 2]}
    //     />
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_1.geometry}
    //     material={nodes.Cube_1.material}
    //     position={[-0.005, -0.105, 1.091]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube.geometry}
    //     material={nodes.Tube.material}
    //     position={[1.243, -0.09, 0.024]}
    //     rotation={[Math.PI / 2, 0, -0.797]}
    //     scale={0.01}
    //   />
    //   <group
    //     position={[0, -1.83, 0]}
    //     rotation={[Math.PI / 2, 0, -0.91]}
    //     scale={0.01}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_10_2.geometry}
    //       material={nodes.Cylinder_2_10_2.material}
    //       position={[0, 0, -49.128]}
    //       rotation={[0, 0, 1.036]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_11_2.geometry}
    //       material={nodes.Cylinder_2_11_2.material}
    //       position={[0, 0, -44.96]}
    //       rotation={[0, 0, 1.156]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_12_2.geometry}
    //       material={nodes.Cylinder_2_12_2.material}
    //       position={[0, 0, -39.539]}
    //       rotation={[0, 0, 1.275]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_13_2.geometry}
    //       material={nodes.Cylinder_2_13_2.material}
    //       position={[-0.397, -0.958, -35.011]}
    //       rotation={[0, 0, 1.401]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_14_2.geometry}
    //       material={nodes.Cylinder_2_14_2.material}
    //       position={[0, 0, -31.234]}
    //       rotation={[0, 0, 1.486]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_15_2.geometry}
    //       material={nodes.Cylinder_2_15_2.material}
    //       position={[0, 0, -25.948]}
    //       rotation={[0, 0, 1.604]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_16_2.geometry}
    //       material={nodes.Cylinder_2_16_2.material}
    //       position={[0, 0, -21.453]}
    //       rotation={[0, 0, 1.707]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_17_2.geometry}
    //       material={nodes.Cylinder_2_17_2.material}
    //       position={[0, 0, -16.584]}
    //       rotation={[0, 0, 1.824]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_18_2.geometry}
    //       material={nodes.Cylinder_2_18_2.material}
    //       position={[0, 0, -12.06]}
    //       rotation={[0, 0, 1.922]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_19_1.geometry}
    //       material={nodes.Cylinder_2_19_1.material}
    //       position={[0, 0, -7.439]}
    //       rotation={[0, 0, 2.03]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_19_2.geometry}
    //       material={nodes.Cylinder_2_19_2.material}
    //       position={[0, 0, -1.968]}
    //       rotation={[0, 0, 2.155]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_1_2.geometry}
    //       material={nodes.Cylinder_2_1_2.material}
    //       position={[0, 0, -89]}
    //       rotation={[0, 0, 0.075]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_2_2.geometry}
    //       material={nodes.Cylinder_2_2_2.material}
    //       position={[0, 0, -85]}
    //       rotation={[0, 0, 0.186]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_3_2.geometry}
    //       material={nodes.Cylinder_2_3_2.material}
    //       position={[0, 0, -80]}
    //       rotation={[0, 0, 0.296]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_4_2.geometry}
    //       material={nodes.Cylinder_2_4_2.material}
    //       position={[0, 0, -75]}
    //       rotation={[0, 0, 0.402]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_5_2.geometry}
    //       material={nodes.Cylinder_2_5_2.material}
    //       position={[0, 0, -70.948]}
    //       rotation={[0, 0, 0.501]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_6_2.geometry}
    //       material={nodes.Cylinder_2_6_2.material}
    //       position={[0, 0, -66.051]}
    //       rotation={[0, 0, 0.618]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_7_2.geometry}
    //       material={nodes.Cylinder_2_7_2.material}
    //       position={[0, 0, -62.223]}
    //       rotation={[0, 0, 0.731]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_8_2.geometry}
    //       material={nodes.Cylinder_2_8_2.material}
    //       position={[0, 0, -57.336]}
    //       rotation={[0, 0, 0.838]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cylinder_2_9_2.geometry}
    //       material={nodes.Cylinder_2_9_2.material}
    //       position={[0, 0, -53.439]}
    //       rotation={[0, 0, 0.944]}
    //     />
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Torus.geometry}
    //     material={nodes.Torus.material}
    //     position={[0, -0.841, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <group
    //     position={[0, -1.02, 0]}
    //     rotation={[Math.PI / 2, 0, -0.908]}
    //     scale={0.01}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_0.geometry}
    //       material={nodes.Cube_30_0.material}
    //       position={[-7.5, -83.363, -3.5]}
    //       rotation={[0, 0, 0.89]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_1.geometry}
    //       material={nodes.Cube_30_1.material}
    //       position={[-64.009, -53.931, 130.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_10.geometry}
    //       material={nodes.Cube_30_10.material}
    //       position={[-64.009, -53.931, 175.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_11.geometry}
    //       material={nodes.Cube_30_11.material}
    //       position={[-64.009, -53.931, 180.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_12.geometry}
    //       material={nodes.Cube_30_12.material}
    //       position={[-64.009, -53.931, 185.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_13.geometry}
    //       material={nodes.Cube_30_13.material}
    //       position={[-64.009, -53.931, 190.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_14.geometry}
    //       material={nodes.Cube_30_14.material}
    //       position={[-64.009, -53.931, 195.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_15.geometry}
    //       material={nodes.Cube_30_15.material}
    //       position={[-64.009, -53.931, 200.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_16.geometry}
    //       material={nodes.Cube_30_16.material}
    //       position={[-64.009, -53.931, 205.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_17.geometry}
    //       material={nodes.Cube_30_17.material}
    //       position={[-64.009, -53.931, 210.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_18.geometry}
    //       material={nodes.Cube_30_18.material}
    //       position={[-64.009, -53.931, 215.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_19.geometry}
    //       material={nodes.Cube_30_19.material}
    //       position={[-64.009, -53.931, 220.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_2.geometry}
    //       material={nodes.Cube_30_2.material}
    //       position={[-64.009, -53.931, 135.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_3.geometry}
    //       material={nodes.Cube_30_3.material}
    //       position={[-64.009, -53.931, 140.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_4.geometry}
    //       material={nodes.Cube_30_4.material}
    //       position={[-64.009, -53.931, 145.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_5.geometry}
    //       material={nodes.Cube_30_5.material}
    //       position={[-64.009, -53.931, 150.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_6.geometry}
    //       material={nodes.Cube_30_6.material}
    //       position={[-64.009, -53.931, 155.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_7.geometry}
    //       material={nodes.Cube_30_7.material}
    //       position={[-64.009, -53.931, 160.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_8.geometry}
    //       material={nodes.Cube_30_8.material}
    //       position={[-64.009, -53.931, 165.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_30_9.geometry}
    //       material={nodes.Cube_30_9.material}
    //       position={[-64.009, -53.931, 170.93]}
    //       rotation={[0.613, 0.526, -2.522]}
    //     />
    //   </group>
    //   <group
    //     position={[0, 1.164, 0]}
    //     rotation={[Math.PI / 2, 0, -1.257]}
    //     scale={0.01}
    //   >
    //     <group rotation={[0, 0, Math.PI / 5]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_37_2.geometry}
    //         material={nodes.Cube_37_2.material}
    //         position={[0.044, -128.587, -1.256]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_38_2.geometry}
    //         material={nodes.Cube_38_2.material}
    //         position={[-0.004, -104.737, -1.642]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_39_2.geometry}
    //         material={nodes.Cube_39_2.material}
    //         position={[-0.004, -80.737, -1.599]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_40_2.geometry}
    //         material={nodes.Cube_40_2.material}
    //         position={[-0.015, -52.236, -0.85]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_47_2.geometry}
    //         material={nodes.Cube_47_2.material}
    //         position={[-0.012, -90.607, -7.888]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_62_2.geometry}
    //         material={nodes.Cube_62_2.material}
    //         position={[-0.01, -90.761, 13.235]}
    //       />
    //     </group>
    //     <group rotation={[0, 0, 1.257]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_37_3.geometry}
    //         material={nodes.Cube_37_3.material}
    //         position={[0.044, -128.587, -1.256]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_38_3.geometry}
    //         material={nodes.Cube_38_3.material}
    //         position={[-0.004, -104.737, -1.642]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_39_3.geometry}
    //         material={nodes.Cube_39_3.material}
    //         position={[-0.004, -80.737, -1.599]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_40_3.geometry}
    //         material={nodes.Cube_40_3.material}
    //         position={[-0.015, -52.236, -0.85]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_47_3.geometry}
    //         material={nodes.Cube_47_3.material}
    //         position={[-0.012, -90.607, -7.888]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_62_3.geometry}
    //         material={nodes.Cube_62_3.material}
    //         position={[-0.01, -90.761, 13.235]}
    //       />
    //     </group>
    //     <group rotation={[0, 0, 1.885]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_37_4.geometry}
    //         material={nodes.Cube_37_4.material}
    //         position={[0.044, -128.587, -1.256]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_38_4.geometry}
    //         material={nodes.Cube_38_4.material}
    //         position={[-0.004, -104.737, -1.642]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_39_4.geometry}
    //         material={nodes.Cube_39_4.material}
    //         position={[-0.004, -80.737, -1.599]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_40_4.geometry}
    //         material={nodes.Cube_40_4.material}
    //         position={[-0.015, -52.236, -0.85]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_47_4.geometry}
    //         material={nodes.Cube_47_4.material}
    //         position={[-0.012, -90.607, -7.888]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_62_4.geometry}
    //         material={nodes.Cube_62_4.material}
    //         position={[-0.01, -90.761, 13.235]}
    //       />
    //     </group>
    //     <group rotation={[0, 0, 2.513]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_37_5.geometry}
    //         material={nodes.Cube_37_5.material}
    //         position={[0.044, -128.587, -1.256]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_38_5.geometry}
    //         material={nodes.Cube_38_5.material}
    //         position={[-0.004, -104.737, -1.642]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_39_5.geometry}
    //         material={nodes.Cube_39_5.material}
    //         position={[-0.004, -80.737, -1.599]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_40_5.geometry}
    //         material={nodes.Cube_40_5.material}
    //         position={[-0.015, -52.236, -0.85]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_47_5.geometry}
    //         material={nodes.Cube_47_5.material}
    //         position={[-0.012, -90.607, -7.888]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_62_5.geometry}
    //         material={nodes.Cube_62_5.material}
    //         position={[-0.01, -90.761, 13.235]}
    //       />
    //     </group>
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_37.geometry}
    //       material={nodes.Cube_37.material}
    //       position={[0.044, -128.587, -1.256]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_38.geometry}
    //       material={nodes.Cube_38.material}
    //       position={[-0.004, -104.737, -1.642]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_39.geometry}
    //       material={nodes.Cube_39.material}
    //       position={[-0.004, -80.737, -1.599]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_40.geometry}
    //       material={nodes.Cube_40.material}
    //       position={[-0.015, -52.236, -0.85]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_47.geometry}
    //       material={nodes.Cube_47.material}
    //       position={[-0.012, -90.607, -7.888]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_62.geometry}
    //       material={nodes.Cube_62.material}
    //       position={[-0.01, -90.761, 13.235]}
    //     />
    //   </group>
    //   <group
    //     position={[0, -0.05, 0]}
    //     rotation={[Math.PI, -1.366, Math.PI / 2]}
    //     scale={0.01}
    //   >
    //     <group position={[0, 0, 253]} rotation={[Math.PI, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_10.geometry}
    //         material={nodes.Cylinder_10.material}
    //         position={[0, -18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_10.geometry}
    //         material={nodes.Cylinder_1_10.material}
    //         position={[0, 18.798, 0]}
    //       />
    //     </group>
    //     <group position={[0, 78.181, 240.617]} rotation={[2.827, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_11.geometry}
    //         material={nodes.Cylinder_11.material}
    //         position={[0, -18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_11.geometry}
    //         material={nodes.Cylinder_1_11.material}
    //         position={[0, 18.798, 0]}
    //       />
    //     </group>
    //     <group
    //       position={[0, -78.181, -240.617]}
    //       rotation={[-Math.PI / 10, 0, 0]}
    //     >
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder.geometry}
    //         material={nodes.Cylinder.material}
    //         position={[0, -18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1.geometry}
    //         material={nodes.Cylinder_1.material}
    //         position={[0, 18.798, 0]}
    //       />
    //     </group>
    //     <group
    //       position={[0, -148.71, -204.681]}
    //       rotation={[-Math.PI / 5, 0, 0]}
    //     >
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_2.geometry}
    //         material={nodes.Cylinder_1_2.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_2_2_3.geometry}
    //         material={nodes.Cylinder_2_2_3.material}
    //         position={[0, -18.798, 0]}
    //       />
    //     </group>
    //     <group position={[0, -204.681, -148.71]} rotation={[-0.942, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_3.geometry}
    //         material={nodes.Cylinder_1_3.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_3.geometry}
    //         material={nodes.Cylinder_3.material}
    //         position={[0, -18.798, 0]}
    //       />
    //     </group>
    //     <group position={[0, -240.617, -78.181]} rotation={[-1.257, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_4.geometry}
    //         material={nodes.Cylinder_1_4.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_4.geometry}
    //         material={nodes.Cylinder_4.material}
    //         position={[0, -18.799, 0]}
    //       />
    //     </group>
    //     <group position={[0, -253, 0]} rotation={[-Math.PI / 2, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_5.geometry}
    //         material={nodes.Cylinder_1_5.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_5.geometry}
    //         material={nodes.Cylinder_5.material}
    //         position={[0, -18.798, 0]}
    //       />
    //     </group>
    //     <group position={[0, -240.617, 78.181]} rotation={[-1.885, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_6.geometry}
    //         material={nodes.Cylinder_1_6.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_6.geometry}
    //         material={nodes.Cylinder_6.material}
    //         position={[0, -18.798, 0]}
    //       />
    //     </group>
    //     <group position={[0, -204.681, 148.71]} rotation={[-2.199, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_7.geometry}
    //         material={nodes.Cylinder_1_7.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_7.geometry}
    //         material={nodes.Cylinder_7.material}
    //         position={[0, -18.799, 0]}
    //       />
    //     </group>
    //     <group position={[0, -148.71, 204.681]} rotation={[-2.513, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_8.geometry}
    //         material={nodes.Cylinder_1_8.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_8.geometry}
    //         material={nodes.Cylinder_8.material}
    //         position={[0, -18.798, 0]}
    //       />
    //     </group>
    //     <group position={[0, -78.181, 240.617]} rotation={[-2.827, 0, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_1_9.geometry}
    //         material={nodes.Cylinder_1_9.material}
    //         position={[0, 18.798, 0]}
    //       />
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cylinder_9.geometry}
    //         material={nodes.Cylinder_9.material}
    //         position={[0, -18.798, 0]}
    //       />
    //     </group>
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.outTube_1.geometry}
    //     material={nodes.outTube_1.material}
    //     position={[0, 0.837, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_28.geometry}
    //     material={nodes.Cube_28.material}
    //     position={[-0.67, 0.76, 0.579]}
    //     rotation={[Math.PI / 2, 0, -0.698]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_27.geometry}
    //     material={nodes.Cube_27.material}
    //     position={[0.67, 0.76, 0.579]}
    //     rotation={[Math.PI / 2, 0, -2.443]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cylinder_1_12.geometry}
    //     material={nodes.Cylinder_1_12.material}
    //     position={[0, 0.746, 0.052]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.middleTube_1.geometry}
    //     material={nodes.middleTube_1.material}
    //     position={[0, 0.837, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <group
    //     position={[0, 0.788, 0]}
    //     rotation={[Math.PI / 2, 0, -0.175]}
    //     scale={0.01}
    //   >
    //     <group position={[0, -198, 0]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_13.geometry}
    //         material={nodes.Cube_10_13.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_3.geometry}
    //           material={nodes.Cylinder_3_3.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_3.geometry}
    //           material={nodes.Tube_10_3.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_3.geometry}
    //           material={nodes.Tube_11_3.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_2.geometry}
    //           material={nodes.Tube_12_2.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_2.geometry}
    //           material={nodes.Tube_13_2.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_2.geometry}
    //           material={nodes.Tube_14_2.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_2.geometry}
    //           material={nodes.Tube_4_2.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_2.geometry}
    //           material={nodes.Tube_5_2.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_2.geometry}
    //           material={nodes.Tube_7_2.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_2.geometry}
    //           material={nodes.Tube_8_2.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_2.geometry}
    //           material={nodes.Tube_9_2.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_2.geometry}
    //           material={nodes.Cylinder_3_2.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_2.geometry}
    //           material={nodes.Tube_10_2.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_2.geometry}
    //           material={nodes.Tube_11_2.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12.geometry}
    //           material={nodes.Tube_12.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13.geometry}
    //           material={nodes.Tube_13.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14.geometry}
    //           material={nodes.Tube_14.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4.geometry}
    //           material={nodes.Tube_4.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5.geometry}
    //           material={nodes.Tube_5.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7.geometry}
    //           material={nodes.Tube_7.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8.geometry}
    //           material={nodes.Tube_8.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9.geometry}
    //           material={nodes.Tube_9.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //     </group>
    //     <group position={[-188.309, -61.185, 0]} rotation={[0, 0, -1.257]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_19.geometry}
    //         material={nodes.Cube_10_19.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_14.geometry}
    //           material={nodes.Cylinder_3_14.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_14.geometry}
    //           material={nodes.Tube_10_14.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_14.geometry}
    //           material={nodes.Tube_11_14.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_13.geometry}
    //           material={nodes.Tube_12_13.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_13.geometry}
    //           material={nodes.Tube_13_13.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_13.geometry}
    //           material={nodes.Tube_14_13.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_13.geometry}
    //           material={nodes.Tube_4_13.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_13.geometry}
    //           material={nodes.Tube_5_13.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_13.geometry}
    //           material={nodes.Tube_7_13.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_13.geometry}
    //           material={nodes.Tube_8_13.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_13.geometry}
    //           material={nodes.Tube_9_13.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_15.geometry}
    //           material={nodes.Cylinder_3_15.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_15.geometry}
    //           material={nodes.Tube_10_15.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_15.geometry}
    //           material={nodes.Tube_11_15.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_14.geometry}
    //           material={nodes.Tube_12_14.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_14.geometry}
    //           material={nodes.Tube_13_14.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_14.geometry}
    //           material={nodes.Tube_14_14.material}
    //           position={[0, 0, 45.32]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_14.geometry}
    //           material={nodes.Tube_4_14.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_14.geometry}
    //           material={nodes.Tube_5_14.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_14.geometry}
    //           material={nodes.Tube_7_14.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_14.geometry}
    //           material={nodes.Tube_8_14.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_14.geometry}
    //           material={nodes.Tube_9_14.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //     <group position={[-160.185, -116.381, 0]} rotation={[0, 0, -0.942]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_20.geometry}
    //         material={nodes.Cube_10_20.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_16.geometry}
    //           material={nodes.Cylinder_3_16.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_16.geometry}
    //           material={nodes.Tube_10_16.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_16.geometry}
    //           material={nodes.Tube_11_16.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_15.geometry}
    //           material={nodes.Tube_12_15.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_15.geometry}
    //           material={nodes.Tube_13_15.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_15.geometry}
    //           material={nodes.Tube_14_15.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_15.geometry}
    //           material={nodes.Tube_4_15.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_15.geometry}
    //           material={nodes.Tube_5_15.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_15.geometry}
    //           material={nodes.Tube_7_15.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_15.geometry}
    //           material={nodes.Tube_8_15.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_15.geometry}
    //           material={nodes.Tube_9_15.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_17.geometry}
    //           material={nodes.Cylinder_3_17.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_17.geometry}
    //           material={nodes.Tube_10_17.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_17.geometry}
    //           material={nodes.Tube_11_17.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_16.geometry}
    //           material={nodes.Tube_12_16.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_16.geometry}
    //           material={nodes.Tube_13_16.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_16.geometry}
    //           material={nodes.Tube_14_16.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_16.geometry}
    //           material={nodes.Tube_4_16.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_16.geometry}
    //           material={nodes.Tube_5_16.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_16.geometry}
    //           material={nodes.Tube_7_16.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_16.geometry}
    //           material={nodes.Tube_8_16.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_16.geometry}
    //           material={nodes.Tube_9_16.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //     <group
    //       position={[-116.381, -160.185, 0]}
    //       rotation={[0, 0, -Math.PI / 5]}
    //     >
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_21.geometry}
    //         material={nodes.Cube_10_21.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_18.geometry}
    //           material={nodes.Cylinder_3_18.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_18.geometry}
    //           material={nodes.Tube_10_18.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_18.geometry}
    //           material={nodes.Tube_11_18.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_17.geometry}
    //           material={nodes.Tube_12_17.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_17.geometry}
    //           material={nodes.Tube_13_17.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_17.geometry}
    //           material={nodes.Tube_14_17.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_17.geometry}
    //           material={nodes.Tube_4_17.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_17.geometry}
    //           material={nodes.Tube_5_17.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_17.geometry}
    //           material={nodes.Tube_7_17.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_17.geometry}
    //           material={nodes.Tube_8_17.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_17.geometry}
    //           material={nodes.Tube_9_17.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_19.geometry}
    //           material={nodes.Cylinder_3_19.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_19.geometry}
    //           material={nodes.Tube_10_19.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_19.geometry}
    //           material={nodes.Tube_11_19.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_18.geometry}
    //           material={nodes.Tube_12_18.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_18.geometry}
    //           material={nodes.Tube_13_18.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_18.geometry}
    //           material={nodes.Tube_14_18.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_18.geometry}
    //           material={nodes.Tube_4_18.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_18.geometry}
    //           material={nodes.Tube_5_18.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_18.geometry}
    //           material={nodes.Tube_7_18.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_18.geometry}
    //           material={nodes.Tube_8_18.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_18.geometry}
    //           material={nodes.Tube_9_18.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //     <group
    //       position={[-61.185, -188.309, 0]}
    //       rotation={[0, 0, -Math.PI / 10]}
    //     >
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_22.geometry}
    //         material={nodes.Cube_10_22.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_21.geometry}
    //           material={nodes.Cylinder_3_21.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_21.geometry}
    //           material={nodes.Tube_10_21.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_21.geometry}
    //           material={nodes.Tube_11_21.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_20.geometry}
    //           material={nodes.Tube_12_20.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_20.geometry}
    //           material={nodes.Tube_13_20.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_20.geometry}
    //           material={nodes.Tube_14_20.material}
    //           position={[0, 0, 45.32]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_20.geometry}
    //           material={nodes.Tube_4_20.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_20.geometry}
    //           material={nodes.Tube_5_20.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_20.geometry}
    //           material={nodes.Tube_7_20.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_20.geometry}
    //           material={nodes.Tube_8_20.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_20.geometry}
    //           material={nodes.Tube_9_20.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_20.geometry}
    //           material={nodes.Cylinder_3_20.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_20.geometry}
    //           material={nodes.Tube_10_20.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_20.geometry}
    //           material={nodes.Tube_11_20.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_19.geometry}
    //           material={nodes.Tube_12_19.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_19.geometry}
    //           material={nodes.Tube_13_19.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_19.geometry}
    //           material={nodes.Tube_14_19.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_19.geometry}
    //           material={nodes.Tube_4_19.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_19.geometry}
    //           material={nodes.Tube_5_19.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_19.geometry}
    //           material={nodes.Tube_7_19.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_19.geometry}
    //           material={nodes.Tube_8_19.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_19.geometry}
    //           material={nodes.Tube_9_19.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //     </group>
    //     <group position={[61.185, -188.309, 0]} rotation={[0, 0, Math.PI / 10]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_14.geometry}
    //         material={nodes.Cube_10_14.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_4.geometry}
    //           material={nodes.Cylinder_3_4.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_4.geometry}
    //           material={nodes.Tube_10_4.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_4.geometry}
    //           material={nodes.Tube_11_4.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_3.geometry}
    //           material={nodes.Tube_12_3.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_3.geometry}
    //           material={nodes.Tube_13_3.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_3.geometry}
    //           material={nodes.Tube_14_3.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_3.geometry}
    //           material={nodes.Tube_4_3.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_3.geometry}
    //           material={nodes.Tube_5_3.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_3.geometry}
    //           material={nodes.Tube_7_3.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_3.geometry}
    //           material={nodes.Tube_8_3.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_3.geometry}
    //           material={nodes.Tube_9_3.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_5.geometry}
    //           material={nodes.Cylinder_3_5.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_5.geometry}
    //           material={nodes.Tube_10_5.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_5.geometry}
    //           material={nodes.Tube_11_5.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_4.geometry}
    //           material={nodes.Tube_12_4.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_4.geometry}
    //           material={nodes.Tube_13_4.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_4.geometry}
    //           material={nodes.Tube_14_4.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_4.geometry}
    //           material={nodes.Tube_4_4.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_4.geometry}
    //           material={nodes.Tube_5_4.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_4.geometry}
    //           material={nodes.Tube_7_4.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_4.geometry}
    //           material={nodes.Tube_8_4.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_4.geometry}
    //           material={nodes.Tube_9_4.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //     <group position={[116.381, -160.185, 0]} rotation={[0, 0, Math.PI / 5]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_15.geometry}
    //         material={nodes.Cube_10_15.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_6.geometry}
    //           material={nodes.Cylinder_3_6.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_6.geometry}
    //           material={nodes.Tube_10_6.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_6.geometry}
    //           material={nodes.Tube_11_6.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_5.geometry}
    //           material={nodes.Tube_12_5.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_5.geometry}
    //           material={nodes.Tube_13_5.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_5.geometry}
    //           material={nodes.Tube_14_5.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_5.geometry}
    //           material={nodes.Tube_4_5.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_5.geometry}
    //           material={nodes.Tube_5_5.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_5.geometry}
    //           material={nodes.Tube_7_5.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_5.geometry}
    //           material={nodes.Tube_8_5.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_5.geometry}
    //           material={nodes.Tube_9_5.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_7.geometry}
    //           material={nodes.Cylinder_3_7.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_7.geometry}
    //           material={nodes.Tube_10_7.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_7.geometry}
    //           material={nodes.Tube_11_7.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_6.geometry}
    //           material={nodes.Tube_12_6.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_6.geometry}
    //           material={nodes.Tube_13_6.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_6.geometry}
    //           material={nodes.Tube_14_6.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_6.geometry}
    //           material={nodes.Tube_4_6.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_6.geometry}
    //           material={nodes.Tube_5_6.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_6.geometry}
    //           material={nodes.Tube_7_6.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_6.geometry}
    //           material={nodes.Tube_8_6.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_6.geometry}
    //           material={nodes.Tube_9_6.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //     <group position={[160.185, -116.381, 0]} rotation={[0, 0, 0.942]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_16.geometry}
    //         material={nodes.Cube_10_16.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_8.geometry}
    //           material={nodes.Cylinder_3_8.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_8.geometry}
    //           material={nodes.Tube_10_8.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_8.geometry}
    //           material={nodes.Tube_11_8.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_7.geometry}
    //           material={nodes.Tube_12_7.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_7.geometry}
    //           material={nodes.Tube_13_7.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_7.geometry}
    //           material={nodes.Tube_14_7.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_7.geometry}
    //           material={nodes.Tube_4_7.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_7.geometry}
    //           material={nodes.Tube_5_7.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_7.geometry}
    //           material={nodes.Tube_7_7.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_7.geometry}
    //           material={nodes.Tube_8_7.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_7.geometry}
    //           material={nodes.Tube_9_7.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_9.geometry}
    //           material={nodes.Cylinder_3_9.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_9.geometry}
    //           material={nodes.Tube_10_9.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_9.geometry}
    //           material={nodes.Tube_11_9.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_8.geometry}
    //           material={nodes.Tube_12_8.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_8.geometry}
    //           material={nodes.Tube_13_8.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_8.geometry}
    //           material={nodes.Tube_14_8.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_8.geometry}
    //           material={nodes.Tube_4_8.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_8.geometry}
    //           material={nodes.Tube_5_8.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_8.geometry}
    //           material={nodes.Tube_7_8.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_8.geometry}
    //           material={nodes.Tube_8_8.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_8.geometry}
    //           material={nodes.Tube_9_8.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //     <group position={[188.309, -61.185, 0]} rotation={[0, 0, 1.257]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_17.geometry}
    //         material={nodes.Cube_10_17.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_10.geometry}
    //           material={nodes.Cylinder_3_10.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_10.geometry}
    //           material={nodes.Tube_10_10.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_10.geometry}
    //           material={nodes.Tube_11_10.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_9.geometry}
    //           material={nodes.Tube_12_9.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_9.geometry}
    //           material={nodes.Tube_13_9.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_9.geometry}
    //           material={nodes.Tube_14_9.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_9.geometry}
    //           material={nodes.Tube_4_9.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_9.geometry}
    //           material={nodes.Tube_5_9.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_9.geometry}
    //           material={nodes.Tube_7_9.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_9.geometry}
    //           material={nodes.Tube_8_9.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_9.geometry}
    //           material={nodes.Tube_9_9.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_11.geometry}
    //           material={nodes.Cylinder_3_11.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_11.geometry}
    //           material={nodes.Tube_10_11.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_11.geometry}
    //           material={nodes.Tube_11_11.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_10.geometry}
    //           material={nodes.Tube_12_10.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_10.geometry}
    //           material={nodes.Tube_13_10.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_10.geometry}
    //           material={nodes.Tube_14_10.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_10.geometry}
    //           material={nodes.Tube_4_10.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_10.geometry}
    //           material={nodes.Tube_5_10.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_10.geometry}
    //           material={nodes.Tube_7_10.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_10.geometry}
    //           material={nodes.Tube_8_10.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_10.geometry}
    //           material={nodes.Tube_9_10.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //     <group position={[198, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
    //       <mesh
    //         castShadow
    //         receiveShadow
    //         geometry={nodes.Cube_10_18.geometry}
    //         material={nodes.Cube_10_18.material}
    //         position={[0, -0.013, 0]}
    //       />
    //       <group position={[2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_12.geometry}
    //           material={nodes.Cylinder_3_12.material}
    //           position={[0, 0, 0.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_12.geometry}
    //           material={nodes.Tube_10_12.material}
    //           position={[0, 0, 0.058]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_12.geometry}
    //           material={nodes.Tube_11_12.material}
    //           position={[0, 0, 22.739]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_11.geometry}
    //           material={nodes.Tube_12_11.material}
    //           position={[0, 0, 22.447]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_11.geometry}
    //           material={nodes.Tube_13_11.material}
    //           position={[0, 0, 45.015]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_11.geometry}
    //           material={nodes.Tube_14_11.material}
    //           position={[0, 0, 45.307]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_11.geometry}
    //           material={nodes.Tube_4_11.material}
    //           position={[0, 0, -22.477]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_11.geometry}
    //           material={nodes.Tube_5_11.material}
    //           position={[0, 0, -22.769]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_11.geometry}
    //           material={nodes.Tube_7_11.material}
    //           position={[0, 0, -45.196]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_11.geometry}
    //           material={nodes.Tube_8_11.material}
    //           position={[0, 0, -44.904]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_11.geometry}
    //           material={nodes.Tube_9_11.material}
    //           position={[0, 0, -0.234]}
    //         />
    //       </group>
    //       <group position={[-2, 0.006, 0]} rotation={[Math.PI / 2, 0, 0]}>
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Cylinder_3_13.geometry}
    //           material={nodes.Cylinder_3_13.material}
    //           position={[0, 0, 0.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_10_13.geometry}
    //           material={nodes.Tube_10_13.material}
    //           position={[0, 0, 0.072]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_11_13.geometry}
    //           material={nodes.Tube_11_13.material}
    //           position={[0, 0, 22.753]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_12_12.geometry}
    //           material={nodes.Tube_12_12.material}
    //           position={[0, 0, 22.461]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_13_12.geometry}
    //           material={nodes.Tube_13_12.material}
    //           position={[0, 0, 45.029]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_14_12.geometry}
    //           material={nodes.Tube_14_12.material}
    //           position={[0, 0, 45.321]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_4_12.geometry}
    //           material={nodes.Tube_4_12.material}
    //           position={[0, 0, -22.463]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_5_12.geometry}
    //           material={nodes.Tube_5_12.material}
    //           position={[0, 0, -22.755]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_7_12.geometry}
    //           material={nodes.Tube_7_12.material}
    //           position={[0, 0, -45.182]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_8_12.geometry}
    //           material={nodes.Tube_8_12.material}
    //           position={[0, 0, -44.89]}
    //         />
    //         <mesh
    //           castShadow
    //           receiveShadow
    //           geometry={nodes.Tube_9_12.geometry}
    //           material={nodes.Tube_9_12.material}
    //           position={[0, 0, -0.22]}
    //         />
    //       </group>
    //     </group>
    //   </group>
    //   <group
    //     position={[0, -1.008, 0]}
    //     rotation={[Math.PI / 2, -Math.PI / 2, 0]}
    //     scale={0.01}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_0.geometry}
    //       material={nodes.Cube_2_0.material}
    //       position={[0, 0, -172]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_1.geometry}
    //       material={nodes.Cube_2_1.material}
    //       position={[0, -101.099, -139.151]}
    //       rotation={[-Math.PI / 5, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_2.geometry}
    //       material={nodes.Cube_2_2.material}
    //       position={[0, -163.582, -53.151]}
    //       rotation={[-1.257, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_3.geometry}
    //       material={nodes.Cube_2_3.material}
    //       position={[0, -163.582, 53.151]}
    //       rotation={[-1.885, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_4.geometry}
    //       material={nodes.Cube_2_4.material}
    //       position={[0, -101.099, 139.151]}
    //       rotation={[-2.513, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_5.geometry}
    //       material={nodes.Cube_2_5.material}
    //       position={[0, 0, 172]}
    //       rotation={[-Math.PI, 0, 0]}
    //     />
    //   </group>
    //   <group
    //     position={[0, -1.008, 0]}
    //     rotation={[0, -1.257, -Math.PI / 2]}
    //     scale={0.01}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_0_2.geometry}
    //       material={nodes.Cube_2_0_2.material}
    //       position={[0, 0, -172]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_1_2.geometry}
    //       material={nodes.Cube_2_1_2.material}
    //       position={[0, -101.099, -139.151]}
    //       rotation={[-Math.PI / 5, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_2_2.geometry}
    //       material={nodes.Cube_2_2_2.material}
    //       position={[0, -163.582, -53.151]}
    //       rotation={[-1.257, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_3_2.geometry}
    //       material={nodes.Cube_2_3_2.material}
    //       position={[0, -163.582, 53.151]}
    //       rotation={[-1.885, 0, 0]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_2_4_2.geometry}
    //       material={nodes.Cube_2_4_2.material}
    //       position={[0, -101.099, 139.151]}
    //       rotation={[-2.513, 0, 0]}
    //     />
    //   </group>
    //   <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_0.geometry}
    //       material={nodes.out_0.material}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_10.geometry}
    //       material={nodes.out_10.material}
    //       rotation={[0, 0, -Math.PI]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_11.geometry}
    //       material={nodes.out_11.material}
    //       rotation={[0, 0, -2.827]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_12.geometry}
    //       material={nodes.out_12.material}
    //       rotation={[0, 0, -2.513]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_13.geometry}
    //       material={nodes.out_13.material}
    //       rotation={[0, 0, -2.199]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_14.geometry}
    //       material={nodes.out_14.material}
    //       rotation={[0, 0, -1.885]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_15.geometry}
    //       material={nodes.out_15.material}
    //       rotation={[0, 0, -Math.PI / 2]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_16.geometry}
    //       material={nodes.out_16.material}
    //       rotation={[0, 0, -1.257]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_17.geometry}
    //       material={nodes.out_17.material}
    //       rotation={[0, 0, -0.942]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_18.geometry}
    //       material={nodes.out_18.material}
    //       rotation={[0, 0, -Math.PI / 5]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.out_19.geometry}
    //       material={nodes.out_19.material}
    //       rotation={[0, 0, -Math.PI / 10]}
    //     />
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_6.geometry}
    //     material={nodes.Cube_6.material}
    //     position={[-2.72, -0.109, 1.259]}
    //     rotation={[Math.PI / 2, Math.PI / 2, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cylinder_12.geometry}
    //     material={nodes.Cylinder_12.material}
    //     position={[0, 0.972, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_23.geometry}
    //     material={nodes.Cube_23.material}
    //     position={[0, 0.735, 1.134]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_22.geometry}
    //     material={nodes.Cube_22.material}
    //     position={[0, 0.3, 1.25]}
    //     rotation={[Math.PI / 2, Math.PI / 2, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_8_21.geometry}
    //     material={nodes.Tube_8_21.material}
    //     position={[1.535, 0.376, 0.293]}
    //     rotation={[Math.PI / 2, 0, -0.96]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_17.geometry}
    //     material={nodes.Cube_17.material}
    //     position={[2.156, -0.613, 1.266]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_16.geometry}
    //     material={nodes.Cube_16.material}
    //     position={[0, 0.368, 1.855]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_12_13.geometry}
    //     material={nodes.Cube_12_13.material}
    //     position={[0, -0.589, 1.998]}
    //     rotation={[Math.PI / 2, 0, -Math.PI / 2]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_11_13.geometry}
    //     material={nodes.Cube_11_13.material}
    //     position={[0.55, -0.5, 1.266]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <group
    //     position={[0, -1.082, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   >
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube_12_14.geometry}
    //       material={nodes.Cube_12_14.material}
    //       position={[0, 0, -22.909]}
    //       rotation={[0, 0, -0.615]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Tube_8_22.geometry}
    //       material={nodes.Tube_8_22.material}
    //       position={[0, 0, 22.254]}
    //     />
    //     <mesh
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Tube_9_22.geometry}
    //       material={nodes.Tube_9_22.material}
    //       position={[0, 0, -23.014]}
    //     />
    //   </group>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_7_21.geometry}
    //     material={nodes.Tube_7_21.material}
    //     position={[0, 0.818, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Tube_4_21.geometry}
    //     material={materials['Material.001']}
    //     position={[0, 0.927, 0]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_10_23.geometry}
    //     material={nodes.Cube_10_23.material}
    //     position={[0, 0.956, 0.742]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_8.geometry}
    //     material={nodes.Cube_8.material}
    //     position={[0, -0.152, 1.964]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={[0.01, 0.01, 0.02]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_9_13.geometry}
    //     material={nodes.Cube_9_13.material}
    //     position={[1.09, -0.022, 1.25]}
    //     rotation={[Math.PI / 2, Math.PI / 2, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_13.geometry}
    //     material={nodes.Cube_13.material}
    //     position={[0, -0.194, 0.028]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_7.geometry}
    //     material={nodes.Cube_7.material}
    //     position={[-1.09, -0.022, 1.25]}
    //     rotation={[Math.PI / 2, Math.PI / 2, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_16001.geometry}
    //     material={nodes.Cube_16001.material}
    //     position={[0, -0.545, 1.855]}
    //     rotation={[Math.PI / 2, 0, 0]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_3001.geometry}
    //     material={nodes.Cube_3001.material}
    //     position={[2.76, 0.361, 0.549]}
    //     rotation={[Math.PI / 2, 0, -Math.PI / 2]}
    //     scale={0.01}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube_5001.geometry}
    //     material={nodes.Cube_5001.material}
    //     position={[-2.796, 0.339, 0.549]}
    //     rotation={[Math.PI / 2, 0, -Math.PI / 2]}
    //     scale={0.01}
    //   />
    // </group>
  )
}

useGLTF.preload('/nicetry.glb')
