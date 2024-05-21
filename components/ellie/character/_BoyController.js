import React, { useCallback, useRef, useState } from 'react'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';
import Boy from './character_boy'
import { useKeyboardControls } from '@react-three/drei'


export default function BoyController(props) {

  const boyRef = useRef()
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const resetHandler = useCallback(() => {
    boyRef.current.setTranslation({ x: 0, y: 4, z: 0 })
    boyRef.current.setLinvel({ x: 0, y: 0, z: 0 })
    boyRef.current.setAngvel({ x: 0, y: 0, z: 0 })
}, [boyRef])


useFrame((_, delta) => {
    const { forward, backward, left, right } = getKeys()

    // if (gamePhase === 'ready' && (forward || backward || left || right)) startGame()

    const impulse = { x: 0, y: 0, z: 0 }
    const torque = { x: 0, y: 0, z: 0 }

    const impulseStrength = 20 * delta
    const torqueStrength = 1 * delta

    if (forward) {
        impulse.z -= impulseStrength
        torque.x -= torqueStrength
    }
    if (backward) {
        impulse.z += impulseStrength
        torque.x += torqueStrength
    }
    if (left) {
        impulse.x -= impulseStrength
        torque.z -= torqueStrength
    }
    if (right) {
        impulse.x += impulseStrength
        torque.z += torqueStrength
    }

    if (boyRef.current) {
        boyRef.current.applyImpulse(impulse)
        boyRef.current.applyTorqueImpulse(torque)
      }
})

  return (
    <group 
    position={[0, 3, -2]} 
    // position={[24, 3, -2]} 
    // rotation={[0, Math.PI / 2, 0]}
    >
      <RigidBody 
      ref={boyRef}
      // mass={2}
      restitution={0.2}
      friction={10}
      linearDamping={4}
      angularDamping={4}
      {...props}
      // position-y={0.1}  
      colliders={false} 
      scale={[0.5,0.5,0.5]}
      enabledRotations={[false,false,false]}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]}/>
        <Boy/>
      </RigidBody>
    </group>
  );
};

