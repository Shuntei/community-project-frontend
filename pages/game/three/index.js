import React, { useEffect } from 'react'
import TestA from '@/components/ellie/three/test-a'
import TestB from '@/components/ellie/three/test-b'
import TestD from '@/components/ellie/three/test-d'
import TestF from '@/components/ellie/three/test-f'
import TestC from '@/components/ellie/three/test-c'
import { useAuth } from '@/contexts/auth-context'
import Router from 'next/router'
import { GameLevel } from '@/components/ellie/three/newStore'
import App from '@/components/ellie/three/App'
export default function ThreeIndex() {
  // const {auth} = useAuth()
  // const memberid = auth.id
  // useEffect(() => {
  //   if (memberid) {
  //   } else {
  //     Router.push('/member/account/login')
  //   }
  // }, [memberid])

  // console.log(GameLevel({thStages}))
  return (
    <>
      <TestA />
      {/* <TestC/> */}
    </>
  )
}
