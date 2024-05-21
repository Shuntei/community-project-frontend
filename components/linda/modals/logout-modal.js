import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import Image from 'next/image'
import { IMG_SERVER } from '@/components/config/api-path'

export default function LogoutModal({ isVisible, navColor }) {
  const { logout, auth } = useAuth()
  if (!isVisible) return null
  return (
    <>
      {/* mobile pop up logout */}
      <div className="logoutModal md:hidden w-full absolute top-[47px] left-0 bg-black flex-col items-center">
        <div className="flex flex-col py-[20px] gap-[10px] items-center justify-center">
          {auth.profileUrl ? (
            <Image
              width={50}
              className="rounded-full min-h-[50px] max-h-[50px] object-cover"
              height={50}
              src={
                auth.googlePhoto
                  ? auth.profileUrl
                  : `${IMG_SERVER}/${auth.profileUrl}`
              }
              alt=""
            />
          ) : ''}

          <div>{auth.username}</div>
        </div>
        <div className="flex-col text-xs items-center flex">
          <div className="text-neutral-300 px-[19px] py-3 border-b border-white flex-col justify-start items-center flex">
            ACCOUNT
          </div>
        </div>
        <div className="text-white py-[15px] flex-col justify-start items-center gap-1.5 flex">
          <Link href="/member/account-settings/account" className="text-base">
            PROFILE
          </Link>
          <Link
            href="/member/account-settings/email-and-password"
            className="text-base"
          >
            SETTINGS
          </Link>
          <button
            onClick={() => {
              console.log('Clicked')
              logout()
            }}
            className="text-rose-400 text-base"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </>
  )
}
