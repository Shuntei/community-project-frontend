import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbarPopup.module.css'
import { useAuth } from '@/contexts/auth-context'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from 'next/router'

export default function NavbarPopup() {
  const { auth } = useAuth()

  const router = useRouter()
  const notify = () => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: '請先登入會員',
      icon: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `<a href="http://localhost:3000/member/account/login">點擊登入</a>`,
      cancelButtonText: `取消登入`,
      confirmButtonColor: '#292929', //#006400
      cancelButtonColor: '#8B0000',
      timer: 5000,
    })
  }

  return (
    <nav
      className={` navbarPopup fixed z-[999] top-0 left-0 bg-black w-full flex-col items-center py-9`}
    >
      <div className={styles['nav']}>
        <div id="headerReplace" className={styles['headerReplace']}></div>
        <div id="catalogueBox" className={styles['catalogueBox']}>
          <div className={`${styles['title']} space-y-1 mb-[50px] md:mb-0`}>
            <p className="border-b mb-5 font-['IBM Plex Mono']">
              <a href="/shop">SHOP</a>
            </p>
            <p className="font-['IBM Plex Mono'] ">
              <Link href="/shop">ALL GOODS</Link>
            </p>
            <p className="font-['IBM Plex Mono'] ">
              <Link href="/shop/product/my-order">ORDER LIST</Link>
            </p>
          </div>
          <div className={`${styles['title']} space-y-1`}>
            <p className="border-b mb-5 font-['IBM Plex Mono']">
              <a href="/community/main-page">COMMUNITY</a>
            </p>
            <div className="font-['IBM Plex Mono']">
              {/* <a href={`/community/main-personal?psUserId=${auth.id}`}>
                PERSONAL
              </a> 用a會有順序問題導致跳回來*/}
              <p
                className="cursor-pointer"
                onClick={() => {
                  if (!auth.id) {
                    notify()
                    return
                  } else {
                    router.push({
                      pathname: '/community/main-personal',
                      query: { ...router.query, psUserId: auth.id },
                    })
                  }
                }}
              >
                PERSONAL
              </p>
            </div>
            {/* <p className="font-['IBM Plex Mono']">
              <a href="/community/main-messenger">MESSENGER</a>
            </p> */}
          </div>
          <div className={`${styles['title']} space-y-1`}>
            <p className="border-b mb-5 font-['IBM Plex Mono']">
              <a href="/chat">CHATROOM</a>
            </p>
            <p className="font-['IBM Plex Mono']">
              <a href="/chat">START NOW</a>
            </p>
          </div>
          <div className={`${styles['title']} space-y-1 mb-[50px] md:mb-0`}>
            <p className="border-b mb-5 font-['IBM Plex Mono']">
              <a href="/tour/main-search">TOUR</a>
            </p>
            <p className="font-['IBM Plex Mono']">
              <a href="/member/account-settings/my-trips">MY TRIPS</a>
            </p>
            <p className="font-['IBM Plex Mono']">
              <a href="/member/account-settings/fav-tour-lists">
                FAVORITE TOURS
              </a>
            </p>
            <p className="font-['IBM Plex Mono']">
              <a href="/member/account-settings/my-posts">MY POSTS</a>
            </p>
          </div>
          <div className={`${styles['title']} space-y-1`}>
            <p className="border-b mb-5 font-['IBM Plex Mono']">
              <a href="/game">GAME</a>
            </p>
            <p className="font-['IBM Plex Mono']">
              <a href="/game/three">JOIN GAME</a>
            </p>
          </div>
        </div>
        {/* <div className={`${styles['pics']} space-x-12`}>
          <div className="w-auto">
            <a href="#" className="aspect-video">
              <img
                src="https://via.placeholder.com/600x400"
                alt="pic"
                className="w-full"
              ></img>
              <p>GIFTS UNDER $380</p>
            </a>
          </div>
          <div className="w-auto">
            <a href="#" className="aspect-video">
              <img
                src="https://via.placeholder.com/600x400"
                alt="pic"
                className="w-full"
              ></img>
              <p>COLLECTION</p>
            </a>
          </div>
          <div className="w-auto">
            <a href="#" className="aspect-video">
              <img
                src="https://via.placeholder.com/600x400"
                alt="pic"
                className="w-full"
              ></img>
              <p>FOR KIDS</p>
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  )
}
