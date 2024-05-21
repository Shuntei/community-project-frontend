import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function OrderState() {
  const [pathname, setPathname] = useState('')
  const router = useRouter()
  useEffect(() => {
    setPathname(router.pathname)
  }, [router.pathname])
  
  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-5">
        <div className="flex gap-7 items-end order-2 md:order-1">
          <button
            onClick={(e) => {
              e.preventDefault()
              router.push(
                {
                  pathname: '/shop/product/my-order',
                },
                undefined,
                { scroll: false }
              )
            }}
            className={
              pathname === '/shop/product/my-order'
                ? "text-white md:text-4xl text-base  font-['Noto Sans TC']"
                : "text-neutral-400 md:text-4xl text-base font-['Noto Sans TC']"
            }
          >
            全 部
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              router.push(
                {
                  pathname: '/shop/product/my-order-ongoing',
                },
                undefined,
                { scroll: false }
              )
            }}
            className={
              pathname === '/shop/product/my-order-ongoing'
                ? "text-white md:text-xl text-sm  font-['Noto Sans TC']"
                : "text-neutral-400 md:text-xl text-sm font-['Noto Sans TC']"
            }
          >
            未完成
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              router.push(
                {
                  pathname: '/shop/product/my-order-finish',
                },
                undefined,
                { scroll: false }
              )
            }}
            className={
              pathname === '/shop/product/my-order-finish'
                ? "text-white md:text-xl text-sm  font-['Noto Sans TC']"
                : "text-neutral-400 md:text-xl text-sm font-['Noto Sans TC']"
            }
          >
            已完成
          </button>
        </div>
        <div className="flex text-white md:text-xl text-base font-['Noto Sans TC'] order-1 md:order-2 justify-center items-end ">
          我的訂單
        </div>
      </div>
    </>
  )
}
