import Image from 'next/image'
import React from 'react'
import Process3 from '@/components/common/process3'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { useCart } from '@/hooks/use-cart'

export default function JoinResult() {
  const { items, onDecreaseItem, onIncreaseItem, totalPrice } = useCart()

  return (
    <>
      <div className=" bg-zinc-800 flex flex-col justify-center items-center pt-28">
        <Navbar />
        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process3 name1={'選擇活動'} name2={'填寫資料'} name3={'報名成功'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <form
            action=""
            className=" w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12"
          >
            {/* title */}
            <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b border-b-black ">
              報名成功
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
              </div>
            </div>

            <Link
              href="/tour/all-search"
              className="w-[280px] h-[75px] bg-black border justify-center items-center gap-2.5 flex "
            >
              <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                繼續探索
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
