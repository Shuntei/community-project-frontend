import * as THREE from "three"
import { useTexture, Cylinder  } from "@react-three/drei"
import { CuboidCollider, RigidBody, CylinderCollider } from "@react-three/rapier"
// import grass from "/ruins-next/public/3Ddemo/assets/grass.png"

export function Ground(props) {
  // const texture = useTexture(grass)
  // texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <RigidBody {...props} type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial repeat={[24, 24]} color="white"/>
      </mesh>
      <CuboidCollider args={[100, 2, 100]} position={[0, -2, 0]} />
      {/* <CylinderCollider args={[0.5, 30]}/>
        <Cylinder scale={[30,0.5,30]} receiveShadow>
          <meshStandardMaterial color="white"/>
        </Cylinder> */}
    </RigidBody>
  )
}