import React, { useEffect, useState } from 'react'
import { RiAddLine } from '@remixicon/react'
import { useAuth } from '@/contexts/auth-context'
// import { FaCamera } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'
import { SN_USER_INFO } from '../config/johnny-api-path'
import { useRouter } from 'next/router'

export default function InfoBar() {
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
        console.log('selectedUser', selectedUser)
        setUserinfo(selectedUser)
      })
  }

  useEffect(() => {
    fetchAllFollows()
  }, [psUserId])

  return (
    <>
      {/* bg-gray-50 bg-opacity-25 backdrop-blur-sm */}
      <section className="fixed mt-[40px] hidden bargone:block w-[300px] h-[600px] overflow-scroll pb-20 rounded-b-3xl z-[998] bg-292929">
        {/* <div className="text-white flex justify-end px-10">
          <button>X</button>
        </div> */}
        <div className="text-white pt-3 pl-10 pr-5 pb-1 text-[20px]  flex items-center">
          ABOUT ME
          {/* <RiAddLine /> */}
        </div>
        <div className="border-b-2 w-[200px] ml-10 mr-5"></div>
        {userInfo?.about_me ? (
          <div className=" pl-10 pr-5 text-white py-3 ">
            {userInfo?.about_me}
          </div>
        ) : (
          <div className=" pl-10 pr-5 text-white py-3 ">NO INTRO TO SHOW</div>
        )}
        <div className="text-white pl-10 pr-5 pt-3 pb-1 text-[20px]  flex items-center">
          CONTACT ME
          {/* <RiAddLine /> */}
        </div>
        <div className="border-b-2 w-[200px] ml-10 mr-5"></div>
        {/* {auth.showContactInfo ? (
          <> */}
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
          <span className="pl-10 pr-5 text-white py-3 flex">
            NO LINK TO SHOW
          </span>
        )}
        {/* </>
        ) : (
          <span className="pl-10 pr-5 text-white py-3 flex">
            NO LINK TO SHOW
          </span>
        )} */}
      </section>
    </>
  )
}
