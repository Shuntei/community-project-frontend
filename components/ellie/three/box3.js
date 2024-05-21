import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useAuth } from '@/contexts/auth-context'

export default function Box3(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  const { auth } = useAuth()

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/game/ruins_final", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: auth.id,
          missionId: 3, // 更新 achieved_id 為 1 的資料ss
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
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      onClick={handleClick} // 點擊事件觸發 handleClick
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'lightgreen' : 'orange'} />
    </mesh>
  )
}
