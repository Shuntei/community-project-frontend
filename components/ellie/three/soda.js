import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAuth } from '@/contexts/auth-context'

export function Soda(props) {
  const { nodes, materials } = useGLTF('/3Ddemo/props/soda_cans.glb')

  const ref = useRef()
  const { auth } = useAuth()

  const [clicked, click] = useState(false)

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/game/ruins_final", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: auth.id,
          missionId: 8, // 更新 achieved_id 為 1 的資料ss
          newValue: 1, // 新的 activate 值
        }),
      });
      if (response.ok) {
        console.log("Achievement updated successfully.");
        click(!clicked); // 切換 clicked 狀態以更新 <mesh> 的狀態
      } else {
        console.error("Failed to update achievement.");
      }
    } catch (error) {
      console.error("Error updating achievement:", error);
    }
  };
  return (
    <group {...props} dispose={null} scale={0.001} onClick={handleClick}>
      <group
        position={[-138.345, 0, 0.242]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.819, 0.819, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can_01_-_Default_0'].geometry}
          material={materials['01_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
        />
      </group>
      <group
        position={[-46.537, 0, 0.242]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.819, 0.819, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can001_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can001_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
        />
      </group>
      <group
        position={[45.133, 0, 0.242]}
        rotation={[-Math.PI / 2, 0, 0.698]}
        scale={[0.819, 0.819, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can002_07_-_Default_0'].geometry}
          material={materials['07_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can002_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
        />
      </group>
      <group
        position={[140.983, 0, 0.242]}
        rotation={[-Math.PI / 2, 0, Math.PI / 4]}
        scale={[0.819, 0.819, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can003_08_-_Default_0'].geometry}
          material={materials['08_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Can003_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/soda_cans.glb')