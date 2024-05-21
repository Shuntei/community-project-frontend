import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'
import { SN_USER_INFO } from '../config/johnny-api-path'
import { useRouter } from 'next/router'
import { useBoards } from '@/contexts/use-boards'
import SeeMoreFollows from '@/components/johnny/seemore-follows'
import { useToggles } from '@/contexts/use-toggles'

export default function PersonalBackground() {
  // const { auth } = useAuth()
  const { render } = useBoards()
  const router = useRouter()
  const [userInfo, setUserinfo] = useState('')

  const psUserId = router.query.psUserId

  const fetchAllFollows = () => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result)
        if (!psUserId) return
        let selectedUser = result.find((v, i) => v.id == psUserId)
        // console.log(selectedUser)
        setUserinfo(selectedUser)
      })
  }

  useEffect(() => {
    if (psUserId) {
      fetchAllFollows()
    }
  }, [render, psUserId])
  return (
    <>
      <div>
        <img
          className="h-[256px] w-full object-cover rounded-lg overflow-hidden bg-zinc-500"
          // width={1000}
          // height={256}
          objectFit="cover"
          // src={
          //   userInfo?.cover_pic_url
          //     ? userInfo?.google_photo
          //       ? userInfo?.cover_pic_url
          //       : `${IMG_SERVER}/${userInfo?.cover_pic_url}`
          //     : ''
          // }
          src={
            userInfo?.cover_pic_url
              ? `${IMG_SERVER}/${userInfo?.cover_pic_url}`
              : userInfo?.google_photo
                ? userInfo?.google_photo
                : ''
          }
          alt="背景圖片"
        />
      </div>
    </>
  )
}
