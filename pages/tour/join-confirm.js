import Image from 'next/image'
import React from 'react'
import Process2 from '@/components/common/process2'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { useCart } from '@/hooks/use-cart'

export default function JoinConfirm() {
  const { items, onDecreaseItem, onIncreaseItem, totalPrice } = useCart()

  return (
    <>
      <div className=" bg-zinc-800 flex flex-col justify-center items-center pt-28">
        <Navbar />

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process2 name1={'選擇活動'} name2={'填寫資料'} name3={'報名成功'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <form
            action=""
            className="md:w-5/12 w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12"
          >
            {/* title */}
            <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b border-b-black ">
              確認報名資料
            </div>
            {/* 填寫資料 */}
            <div className="w-full space-y-5">
              <div className="space-y-5">
                <div className="md:text-xl font-semibold">
                  行程資訊
                </div>
                <div className="space-y-2 px-7 font-semibold">
                  <div>目前參加人數：10/15 人</div>
                  <div>出發時間：2024/06/09, 上午 11 點</div>
                  <div>時長：6小時</div>
                  <div>探索難易度：中等</div>
                  <div>交通方式：開車</div>
                  <div>集合地點：松山捷運站</div>
                </div>
                <hr />
              </div>
              <div className="space-y-5 ">
                <div className="flex items-center gap-5 justify-between">
                  <div className="md:text-xl font-semibold font-['IBM Plex Mono']">
                    聯絡資料
                  </div>
                </div>
                <div className="md:flex flex-wrap space-y-5">
                  <div className="md:w-full space-y-4">
                    <div className="flex flex-col px-7 py-3 space-y-4 bg-zinc-200 rounded">
                      <div className="space-y-1">
                        <div className=" text-[15px] font-normal font-['IBM Plex Mono']">
                          參加者姓名
                        </div>
                        <div className="border-b border-black">陳正和</div>
                      </div>
                      <div className="space-y-1">
                        <div className=" text-[15px] font-normal font-['IBM Plex Mono']">
                          電子信箱
                        </div>
                        <div className="border-b border-black">test123@gmail.com</div>
                      </div>
                      <div className="space-y-1">
                        <div className=" text-[15px] font-normal font-['IBM Plex Mono']">
                          手機號碼
                        </div>
                        <div className="border-b border-black">0977693123</div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-full space-y-4 bg-zinc-200 py-3 rounded">
                    <div className="flex flex-col px-7 space-y-4">
                      <div className="space-y-1">
                        <div className=" text-[15px] font-normal font-['IBM Plex Mono']">
                          參加者姓名
                        </div>
                        <div className="border-b border-black">陳正和</div>
                      </div>
                      <div className="space-y-1">
                        <div className=" text-[15px] font-normal font-['IBM Plex Mono']">
                          電子信箱
                        </div>
                        <div className="border-b border-black">test123@gmail.com</div>
                      </div>
                      <div className="space-y-1">
                        <div className=" text-[15px] font-normal font-['IBM Plex Mono']">
                          手機號碼
                        </div>
                        <div className="border-b border-black">0977693123</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/tour/join-result"
              className="w-[280px] h-[75px] bg-black border justify-center items-center gap-2.5 flex "
            >
              <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                CONFIRM
              </div>
            </Link>
          </form>
          {/* 內頁結束 */}
        </div>
        <Footer />
      </div>
    </>
  )
}
