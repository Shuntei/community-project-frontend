import { Cylinder } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { useGameStore } from "./newStore";
import { useEffect } from "react";

export const ObjSpots = ()=>{

  const gs = useGameStore((state)=>({
    level: state.level,
    currentObj: state.currentObj,
  }));

  // console.log(gs)

  const {level, currentObj} = gs

  // useEffect(()=>{
  //   startGame()
  // },[])

  if (!level){
    return null;
  }

  // console.log(level)

  return <group key={obj.name}>
     <group 
      position-x={3.5} position-z={-3.5}
      >
        <RigidBody colliders={false} type="fixed">
          <CylinderCollider args={[0.25/2,1]}/>
          <Cylinder scale={[1,0.25,1]}/>
        </RigidBody>
      </group>
  </group>

  return level[current.stage].map((obj,index) =>(
    <group key={obj.name} 
    // rotation-y={(index / level[currentStage].length) * Math.PI *2} 
    >
      <group 
      position-x={3.5} position-z={-3.5}
      >
        <RigidBody colliders={false} type="fixed">
          <CylinderCollider args={[0.25/2,1]}/>
          <Cylinder scale={[1,0.25,1]}/>
        </RigidBody>
      </group>
    </group>
  ))
}