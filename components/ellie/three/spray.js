import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAuth } from '@/contexts/auth-context'

export function Spray(props) {
  const { nodes, materials } = useGLTF('/3Ddemo/props/spray_paint_can.glb')
  const ref = useRef()
  const { auth } = useAuth()

  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/game/ruins_final", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: auth.id,
          missionId: 6, // 更新 achieved_id 為 1 的資料ss
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
    <group {...props} dispose={null} scale={0.02} onClick={handleClick}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowRes1_lambert4_0.geometry}
        material={materials.lambert4}
      />
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/spray_paint_can.glb')
