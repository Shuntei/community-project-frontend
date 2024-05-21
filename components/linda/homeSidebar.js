import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HomeSidebar() {
  const [activeLink, setActiveLink] = useState(null)
  const router = useRouter()

  useEffect(()=>{
    let path = (router.pathname.split('/').pop());
    setActiveLink(path)
  }, [router])

  return (
    <>
      {/* --------- Sidebar start ------------ */}
      <div className="overflow-auto md:inline-flex hidden w-[277px] h-full fixed z-10 px-[23px] pb-[200px] py-10 bg-[#343434] flex-col gap-8 flex">
        <div className="flex-col w-full justify-start items-start gap-2.5 flex">
          <div className="self-stretch pb-2.5 border-b-2 border-white font-semibold">
            Settings
          </div>
          <div className="self-stretch h-auto py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">GENERAL</div>
            <Link
              href="/member/account-settings/account"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'account' ? 'bg-white text-black' : ''
              }`}
            >
              Profile
            </Link>
            <Link
              href="/member/account-settings/email-and-password"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'email-and-password' ? 'bg-white text-black' : ''
              }`}
            >
              Email & Password
            </Link>
          </div>
          <div className="self-stretch h-auto py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">SYSTEM</div>
            <Link
              href="/member/account-settings/notifications"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'notifications' ? 'bg-white text-black' : ''
              }`}
            >
              Notifications
            </Link>
            <Link
              href="/member/account-settings/preference"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'preference' ? 'bg-white text-black' : ''
              }`}
            >
              Preference
            </Link>
          </div>
        </div>
        <div className="flex-col w-full justify-start items-start gap-2.5 flex">
          <div className="self-stretch pb-2.5 border-b-2 border-white font-semibold">
            Account
          </div>
          <div className="self-stretch h-full py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">SHOP</div>
            <Link
              href="/shop/product/my-order"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'my-order' ? 'bg-white text-black' : ''
              }`}
            >
              Order History
            </Link>
            <div className="self-stretch pl-5 text-sm font-medium">
              Favorite Products
            </div>
          </div>
          <div className="self-stretch h-auto py-[11px] flex-col justify-start items-start gap-[11px] flex">
            <div className="text-xs font-bold">TOUR</div>
            <Link
              href="/member/account-settings/my-trips"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'my-trips' ? 'bg-white text-black' : ''
              }`}
            >
              My Trips
            </Link>
            <Link
              href="/member/account-settings/fav-tour-lists"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'fav-tour-lists' ? 'bg-white text-black' : ''
              }`}
            >
              Favorite Tours
            </Link>
            <Link
              href="/member/account-settings/my-posts"
              className={`self-stretch pl-5 text-sm font-medium ${
                activeLink === 'my-posts' ? 'bg-white text-black' : ''
              }`}
            >
              My Posts
            </Link>
          </div>

        </div>
      </div>
      {/* --------- Sidebar end -------------  */}
    </>
  )
}
