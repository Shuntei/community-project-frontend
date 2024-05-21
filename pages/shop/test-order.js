import Image from 'next/image'
import React from 'react'
import Process3 from '@/components/common/process3'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
export default function Order() {
  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center pt-8 md:pt-28">
        {/* header開始 */}
        <Navbar navColor={''} />
        {/* header結束 */}

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {' '}
          {/* 進度條開始 */}
          <Process3 name1={'購物車　'} name2={'填寫資料'} name3={'確認訂單'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <div className="md:w-9/12 w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12">
            {/* title */}
            <div className="text-black text-xl font-semibold font-['Noto Sans TC'] border-b border-b-black ">
              訂單明細
            </div>
            {/* 購物細項 */}
            <div className="flex md:w-8/12 flex-col items-center space-y-2">
              {/* 訂單編號 */}
              <div className="border-b-black border-b-2 w-full text-[15xp] font-semibold font-['Noto Sans TC']">
                訂單編號:20241014421
              </div>
              {/* 分隔線 */}
              <div className=" border-black border-b border-dotted   w-full text-[15xp] font-semibold font-['Noto Sans TC'] h-px"></div>
              {/* 訂單內容 */}
              <div className="flex flex-col  md:w-8/12 space-y-6 py-2">
                <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                  訂單金額:$2,999
                </div>
                <div className="text-black text-[15px] font-normal font-['IBM Plex Mono']">
                  訂單日期:2024-04-24 13:48
                </div>{' '}
                <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                  物流方式:7-11店到店
                </div>
                <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                  收件人:Kevin
                </div>
                <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                  付款方式:LINE PAY
                </div>
                <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                  付款狀態:已付款
                </div>
                <div className=" text-black text-[15px] font-normal font-['IBM Plex Mono']">
                  訂單狀態:準備出貨中
                </div>
              </div>
            </div>

            {/* 分隔線 */}
            <div className="w-10/12 border-dotted border-black border-b border-t h-1"></div>
            <div
              className="flex w-full
             justify-center items-center gap-2 flex-col md:flex-row "
            >
              <div className="w-[280px] h-[75px]  bg-white border border-black justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-2xl font-semibold font-['IBM Plex Mono']">
                  商品列表
                </div>
              </div>

              <div className="w-[280px] h-[75px] bg-black border justify-center items-center gap-2.5 flex ">
                <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                  我的訂單
                </div>
              </div>
            </div>
          </div>
          {/* 內頁結束 */}
        </div>

        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  )
}
