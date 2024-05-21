import React, { useRef, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import Swal from 'sweetalert2'
import { useGLTF, 

 } from '@react-three/drei'


export default function Salt(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/props/Salt.gltf')

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
          missionId: 9, // 更新 achieved_id 為 1 的資料ss
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
    <group ref={group} {...props} dispose={null} scale={2.4} onClick={handleClick}>
<mesh geometry={nodes.Mesh_shakerSalt.geometry} material={materials.greyDark} />
<mesh geometry={nodes.Mesh_shakerSalt_1.geometry} material={materials.brownDark} />
<mesh geometry={nodes.Mesh_shakerSalt_2.geometry} material={materials._defaultMat} />

    </group>
  )
}

useGLTF.preload('/3Ddemo/props/Salt.gltf')