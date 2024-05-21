import React, { useRef, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import Swal from 'sweetalert2'
import { useGLTF, 

 } from '@react-three/drei'


export default function Pear(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3Ddemo/props/Pear.gltf')

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
          missionId: 6, // 更新 achieved_id 為 1 的資料ss
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
    <group ref={group} {...props} dispose={null} scale={1} >
<mesh geometry={nodes.Mesh_pearHalf.geometry} material={materials.green} />
<mesh geometry={nodes.Mesh_pearHalf_1.geometry} material={materials.brown} />
<mesh geometry={nodes.Mesh_pearHalf_2.geometry} material={materials.brownDark} />
<mesh geometry={nodes.Mesh_pearHalf_3.geometry} material={materials.brownLight} />
<mesh geometry={nodes.Mesh_pearHalf_4.geometry} material={materials._defaultMat} />

    </group>
    </group>
  )
}

useGLTF.preload('/3Ddemo/props/Pear.gltf')