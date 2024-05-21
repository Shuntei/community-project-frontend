import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import { RiAddLine } from '@remixicon/react'
import { useAuth } from '@/contexts/auth-context'
import { SN_USER_INFO } from '../config/johnny-api-path'
import { useRouter } from 'next/router'

export default function InfoMobile() {
  const { auth } = useAuth()
  const router = useRouter()
  const [userInfo, setUserinfo] = useState('')

  const psUserId = router.query.psUserId
  // console.log(psUserId)

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
    fetchAllFollows()
  }, [psUserId])

  return (
    <>
      <section>
        <div className="text-white pt-3 pl-10 pr-5 pb-1 text-[20px]  flex items-center">
          ABOUT ME
          <RiAddLine />
        </div>
        <div className="border-b-2 w-[50%] ml-10"></div>
        {userInfo?.about_me ? (
          <div className=" pl-10 pr-5 text-white py-3 ">
            {userInfo?.about_me}
          </div>
        ) : (
          <div className=" pl-10 pr-5 text-white py-3 ">NO INTRO TO SHOW</div>
        )}

        {userInfo?.allow_contact_info_visibility &&
        (userInfo?.youtube_link ||
          userInfo?.facebook_link ||
          userInfo?.instagram_link ||
          userInfo?.gmail_link) ? (
          <div className="pl-10 pr-5 text-white py-3 flex gap-x-3">
            {userInfo?.youtube_link && (
              <a href={userInfo.youtube_link}>
                <FaYoutube className="text-[24px] cursor-pointer hover:text-red-500" />
              </a>
            )}
            {userInfo?.facebook_link && (
              <a href={userInfo.facebook_link}>
                <FaFacebook className="text-[24px] cursor-pointer hover:text-sky-600" />
              </a>
            )}
            {userInfo?.instagram_link && (
              <a href={userInfo.instagram_link}>
                <AiFillInstagram className="text-[24px] cursor-pointer hover:text-pink-400" />
              </a>
            )}
            {userInfo?.gmail_link && (
              <a href={userInfo.gmailLink}>
                <MdEmail className="text-[24px] cursor-pointer hover:text-amber-400" />
              </a>
            )}
          </div>
        ) : (
          <span className="pl-10 pr-5 text-white py-3 flex"></span>
        )}
        {/* <div class="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45"></div>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-300  via-pink-400 via-purple-400 to-blue-400">
            Nothing short <br /> of amazing.
          </span> */}
        {/* 除了學習和探索，我還喜歡與人交流和建立連結。我相信每個人都有獨特的故事和觀點，我希望能夠與您分享我的故事，並聆聽您的故事。
          我相信通過互相交流和分享，我們可以共同成長和學習。最後，我想再次感謝您與我進行對話。
          無論您有任何問題或需求，我都會盡力幫助您，讓我們一起創造有意義的交流和連結！ */}
      </section>
    </>
  )
}
