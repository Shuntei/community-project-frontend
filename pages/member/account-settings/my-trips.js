import React, { useState } from 'react'
import AccountLayout from '@/components/linda/accountLayout'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'
import dayjs from 'dayjs'

export default function MyTrips() {
  const { auth } = useAuth()
  const [myTour, setMyTour] = useState([])

  return (
    <>
      <div className="flex w-full flex-col md:p-0 p-[30px] gap-[37px]">
        <div className="pt-[50px] pb-5 md:px-[80px] flex w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="md:text-[30px] text-[24px] font-semibold">
              你的探險行程
            </div>
            {/* go to search */}
            {myTour.length === 0 && (
            <div
              id="gotoSearch"
              className=" flex rounded-lg md:bg-black bg-none md:border-none border border-white overflow-hidden justify-between"
            >
              <div className="md:w-fit w-full md:pl-[30px] px-5 py-5 md:space-y-7 space-y-4 md:content-center">
                <div>
                  <div className="md:text-xl pb-1">還沒報名任何探險行程</div>
                  <div className="md:text-[13px] text-[10px]">
                    廢墟的神秘在呼喚你，去看看有誰和你一樣渴望冒險吧！
                  </div>
                </div>
                <div>
                  <Link href="/tour/all-search" className="">
                    <button className="bg-white text-black font-semibold rounded md:w-fit w-full px-5 py-[10px]">
                      開始搜尋
                    </button>
                  </Link>
                </div>
              </div>
              <img
                src="/images/tempuse.jpg"
                alt=""
                className="w-3/5 h-[200px] md:block hidden object-cover"
              />
            </div>
            )}
            {/* ready to go */}
            {myTour.length > 0 && (
            <div id="tourBox" className="flex flex-col gap-[14px]">
              <div className="font-medium text-xl md:text-[26px]">已報名</div>
              <div className="md:flex flex-wrap gap-[53px]">
                <div id="tourCard" className="md:w-[30%]">
                  <Link
                    href=""
                    className="flex py-2.5 md:gap-8 gap-4 items-center"
                  >
                    <img
                      src="/images/tempuse.jpg"
                      className="md:w-[100px] w-20 aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="flex flex-col gap-2.5">
                      <span className="md:text-xl text-[13px]">大安飛碟屋</span>
                      <span className="md:text-[15px] text-[13px]">
                        探險達人
                      </span>
                      <span className="md:text-[15px] text-[13px]">
                        2024年10月25日
                      </span>
                    </div>
                  </Link>
                </div>
                {/* <div id="tourCard" className="md:w-[30%]">
                  <Link
                    href=""
                    className="flex py-2.5 md:gap-8 gap-4 items-center"
                  >
                    <img
                      src="/images/tempuse.jpg"
                      className="md:w-[100px] w-20 aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="flex flex-col gap-2.5">
                      <span className="md:text-xl text-[13px]">大安飛碟屋</span>
                      <span className="md:text-[15px] text-[13px]">
                        探險達人
                      </span>
                      <span className="md:text-[15px] text-[13px]">
                        2024年10月25日
                      </span>
                    </div>
                  </Link>
                </div>
                <div id="tourCard" className="md:w-[30%]">
                  <Link
                    href=""
                    className="flex py-2.5 md:gap-8 gap-4 items-center"
                  >
                    <img
                      src="/images/tempuse.jpg"
                      className="md:w-[100px] w-20 aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="flex flex-col gap-2.5">
                      <span className="md:text-xl text-[13px]">大安飛碟屋</span>
                      <span className="md:text-[15px] text-[13px]">
                        探險達人
                      </span>
                      <span className="md:text-[15px] text-[13px]">
                        2024年10月25日
                      </span>
                    </div>
                  </Link>
                </div> */}
              </div>
            </div>
            )}
            {/* finished tour */}
            <div id="tourBox" className="flex flex-col gap-[14px]">
              <div className="font-medium text-xl md:text-[26px]">
                去過的地方
              </div>
              <div className="md:flex flex-wrap gap-[53px]">
                <div id="tourCard" className="md:w-[30%]">
                  <Link
                    href=""
                    className="flex py-2.5 md:gap-8 gap-4 items-center"
                  >
                    <img
                      src="/images/tempuse.jpg"
                      className="md:w-[100px] w-20 aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="flex flex-col gap-2.5">
                      <span className="md:text-xl text-[13px]">大安飛碟屋</span>
                      <span className="md:text-[15px] text-[13px]">
                        探險達人
                      </span>
                      <span className="md:text-[15px] text-[13px]">
                        2024年10月25日
                      </span>
                    </div>
                  </Link>
                </div>
                <div id="tourCard" className="md:w-[30%]">
                  <Link
                    href=""
                    className="flex py-2.5 md:gap-8 gap-4 items-center"
                  >
                    <img
                      src="/images/tempuse.jpg"
                      className="md:w-[100px] w-20 aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="flex flex-col gap-2.5">
                      <span className="md:text-xl text-[13px]">大安飛碟屋</span>
                      <span className="md:text-[15px] text-[13px]">
                        探險達人
                      </span>
                      <span className="md:text-[15px] text-[13px]">
                        2024年10月25日
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* cancelled tour */}
            <div id="tourBox" className="flex flex-col gap-[14px]">
              <div className="font-medium text-xl md:text-[26px]">
                已取消的行程
              </div>
              <div className="md:flex flex-wrap gap-[53px]">
                <div id="tourCard" className="md:w-[30%]">
                  <Link
                    href=""
                    className="flex py-2.5 md:gap-8 gap-4 items-center"
                  >
                    <img
                      src="/images/tempuse.jpg"
                      className="md:w-[100px] w-20 aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="flex flex-col gap-2.5">
                      <span className="md:text-xl text-[13px]">大安飛碟屋</span>
                      <span className="md:text-[15px] text-[13px]">
                        探險達人
                      </span>
                      <span className="md:text-[15px] text-[13px]">
                        2024年10月25日
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  )
}

MyTrips.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
