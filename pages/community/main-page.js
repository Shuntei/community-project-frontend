import React, { useEffect, useState } from 'react'
import PageSelect from '@/components/johnny/page-select'
import CentralMain from './central-main'
import Topics from '@/components/johnny/bar-home-topics'
import FollowsBar from '@/components/johnny/bar-follows-notify'
import Navbar from '@/components/linda/navbar/navbar'
import InfoBar from '@/components/johnny/bar-ps-intro'
import CentralPersonal from './central-personal'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'

export default function MainPage() {
  const { auth } = useAuth()
  const router = useRouter()
  const paddingBGPC = 'pc:bg-292929'

  // console.log('psUserId', router.query.psUserId)
  const psUserId = router.query.psUserId

  return (
    <>
      {psUserId ? (
        <div className="h-screen">
          <Navbar className="bg-gray-950" />
          <PageSelect />
          <InfoBar />
          <FollowsBar />
          <CentralPersonal />
        </div>
      ) : (
        <div className="h-screen ">
          <Navbar className="bg-gray-950" />
          <PageSelect />
          <div
            className={`mt-[40px] pc:h-[10px] h-[15px] fixed w-full z-10 ${paddingBGPC} bg-neutral-300`}
          ></div>
          <Topics />
          <FollowsBar />
          <CentralMain />
        </div>
      )}
    </>
  )
}
