import Image from 'next/image'
import React from 'react'
import Process0 from '@/components/common/process0'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import CartList from '@/components/kevin/cart/cart-list'
import { useCart } from '@/hooks/use-cart'

export default function Cart() {
  const { totalItems, totalPrice } = useCart()
  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center pt-8 md:pt-28">
        {/* header開始 */}
        <Navbar navColor={''} />
        {/* header結束 */}

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process0 name1={'購物車　'} name2={'填寫資料'} name3={'確認訂單'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          {totalItems ? (
            <div className="md:w-9/12 w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12">
              {/* title */}
              <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b-2 border-b-black ">
                SHOPPING CART
              </div>
              {/* 購物細項 */}

              <CartList></CartList>

              {/* 分隔線 */}
              <div className="w-10/12 border-dotted border-black border-b border-t h-1"></div>

              <div className="flex w-10/12 justify-between">
                <div className="text-black text-[13px] font-semibold font-['IBM Plex Mono']">
                  合計 {totalItems}項(TWD)
                </div>
                <div className="text-black text-xl font-semibold font-['IBM Plex Mono']">
                  $ {totalPrice}
                </div>
              </div>
              <Link
                href="/shop/cart/fill-doc"
                className="md:w-[280px] md:h-[75px] w-[315px] h-[47px] bg-black border justify-center items-center gap-2.5 flex hover:bg-neutral-500 hover:border-white"
              >
                <div className="text-white text:[15px] md:text-2xl font-semibold font-['IBM Plex Mono']">
                  CONFIRM
                </div>
              </Link>
            </div>
          ) : (
            <div>
              {' '}
              
              <div className="flex w-full h-80 justify-between items-center">
                <div className="text-black text-[80px] font-semibold font-['IBM Plex Mono']">
                  空空如也
                </div>
               
              </div>
              
            </div>
          )}

          {/* 內頁結束 */}
        </div>

        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  )
}
