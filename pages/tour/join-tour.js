import Image from 'next/image'
import React from 'react'
import Process1 from '@/components/common/process1'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { useCart } from '@/hooks/use-cart'

export default function JoinTour() {
  const { items, onDecreaseItem, onIncreaseItem, totalPrice } = useCart()

  return (
    <>
      <div className=" bg-zinc-800 flex flex-col justify-center items-center pt-28">
        <Navbar />

        <div className="md:w-10/12 w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process1 name1={'選擇活動'} name2={'填寫資料'} name3={'報名成功'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <form
            action=""
            className=" w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12"
          >
            {/* title */}
            <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b border-b-black ">
              填寫資料
            </div>
            {/* 填寫資料 */}
            <div className="w-full space-y-5">
              <div className="space-y-5">
                <div id="articleCard" className="w-fit">
                  <Link
                    href="/tour/tour-post"
                    className="md:flex md:space-x-8 md:space-y-0 space-y-3"
                  >
                    <img
                      src="/images/gracehill0.jpg"
                      className="md:w-[150px] w-full md:h-[150px] rounded object-cover"
                      alt=""
                    />
                    <div className="space-y-2.5 text-neutral-400">
                      <div className="md:text-[15px] font-semibold">Grace Hill麗庭莊園</div>
                      <div className="md:text-[15px]">
                        探險達人：Constantine
                      </div>
                      <div className="md:text-[15px]">
                        出團時間：2024年10月25日
                      </div>
                      <p className="md:text-[15px] text-ellipsis overflow-hidden">
                        麗庭莊園位於台北內湖的工業園區，前身為婚禮場地。
                        該酒店於 2005
                        年開業，由長興婚禮事業有限公司管理，該公司熱衷於為婚禮和其他活動提供更大、更奢華的空間，顛覆當地市場。
                        這項業務起初舉步維艱，但在電視連續劇、音樂錄影帶和新聞中出現後變得更加廣為人知。
                        2007年，該空間被租給迪詩，這是一家希望進入台灣豪華婚禮市場的日本婚禮公司。
                        原所有者退了一步，將日常營運的控制權交給了日本管理層，業務在接下來的幾年中持續成長。
                      </p>
                    </div>
                  </Link>
                </div>
                <hr />
                <div className="md:text-xl font-semibold text-neutral-500">
                  行程資訊
                </div>
                <div className="space-y-2 px-7 font-semibold text-neutral-500">
                  <div>目前參加人數：10/15 人</div>
                  <div>出發時間：2024/06/09, 上午 11 點</div>
                  <div>時長：6小時</div>
                  <div>探索難易度：中等</div>
                  <div>集合地點：松山捷運站</div>
                </div>
                <hr />
              </div>
              <div className="space-y-5 text-neutral-500">
                <div className="flex items-center gap-5 justify-between">
                  <div className="md:text-xl font-semibold font-['IBM Plex Mono']">
                    聯絡資料
                  </div>
                  <button>
                    <i class="ri-add-line ri-xl"></i>
                    <span className="pl-1">新增報名人數</span>
                  </button>
                </div>
                <div className="md:flex flex-wrap md:space-y-0 space-y-5">
                  <div className="md:w-1/2 w-full space-y-4">
                    <div className="flex flex-col px-7 space-y-5">
                      <div className="flex flex-wrap">
                        {' '}
                        <input type="checkbox" name="" id="" />
                        <div className=" pl-2 text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          同會員資料
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          參加者姓名
                        </div>
                        <input
                          type="text"
                          name="name"
                          className="w-full bg-zinc-100 rounded"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          電子信箱
                        </div>
                        <input
                          type="text"
                          name="email"
                          className="w-full bg-zinc-100 rounded"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          手機號碼
                        </div>
                        <input
                          type="text"
                          name="mobile"
                          className="w-full bg-zinc-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full space-y-4">
                    <div className="flex flex-col px-7 space-y-5">
                      <div className="flex">
                        {' '}
                        
                        <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          ◆ 額外參加者：
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          參加者姓名
                        </div>
                        <input
                          type="text"
                          name="name"
                          className="w-full bg-zinc-100 rounded"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          電子信箱
                        </div>
                        <input
                          type="text"
                          name="email"
                          className="w-full bg-zinc-100 rounded"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                          手機號碼
                        </div>
                        <input
                          type="text"
                          name="mobile"
                          className="w-full bg-zinc-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="space-y-5 text-neutral-500">
                <div>
                  <Link href="" className="md:text-xl font-semibold">
                    探險禮儀
                  </Link>
                </div>
                <div className="px-7">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="pl-2">
                    已詳細閱讀並同意遵守
                  </label>
                </div>
              </div>
            </div>

            <Link
              href="/tour/join-confirm"
              className="w-[280px] h-[75px] bg-black justify-center items-center gap-2.5 flex "
            >
              <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                NEXT
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
