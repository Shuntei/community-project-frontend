import React, { useRef, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import Swal from 'sweetalert2'
import { useGLTF, 

 } from '@react-three/drei'


export default function Sandwich(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/props/Sandwich.gltf')
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
          missionId: 2, // 更新 achieved_id 為 1 的資料ss
          newValue: 1, // 新的 activate 值

        }),
      });
      if (response.ok) {
        console.log("Achievement updated successfully.");
        click(!clicked); // 切換 clicked 狀態以更新 <mesh> 的狀態
        Swal.fire({
          toast: true,
          width: 280,
          position: 'top',
          icon: 'success',
          iconColor: 'black',
          title: 'You found something!',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        console.error("Failed to update achievement.");
      }
    } catch (error) {
      console.error("Error updating achievement:", error);
    }
  };
  return (
    <group onClick={handleClick}>
    <group ref={group} {...props} dispose={null} >
<group rotation={[0, Math.PI / 2, 0,]} >
<mesh geometry={nodes.Mesh_sandwich.geometry} material={materials.brown} />
<mesh geometry={nodes.Mesh_sandwich_1.geometry} material={materials.brownLight} />
<mesh geometry={nodes.Mesh_sandwich_2.geometry} material={nodes.Mesh_sandwich_2.material} />
<mesh geometry={nodes.meat.geometry} material={nodes.meat.material} position={[0, 0.08, 0,]} />
<mesh geometry={nodes.lettuce.geometry} material={materials.green} position={[0.01, 0.07, -0.01,]} scale={[1.12, 1, 1.12,]} />
</group>

    </group>
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/Sandwich.gltf')