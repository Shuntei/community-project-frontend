import React from 'react'
import { RiSearchLine } from '@remixicon/react'
import Image from 'next/image'
import profileImg from './img/72.jpg'

export default function MessengerFollows() {
  return (
    <>
      <section className="fixed right-0 mr-10 pl-5 mt-[50px] w-[260px] hidden bargone:block h-[600px] overflow-scroll pb-20 z-[998] rounded-b-3xl bg-292929">
        <div className="mb-5">
          <div className="text-white py-1 text-[20px] ">FOLLOWS</div>
          <div className="border-b-2 mb-2 w-[200px]"></div>
          <div className="flex py-1">
            <input className="flex p-[6px] items-center outline-none h-[32px] w-[160px] rounded-l-lg pl-5" />
            <button className="iconBg px-2 bg-white flex items-center h-[32px] p-[6px] rounded-r-lg">
              <RiSearchLine />
            </button>
          </div>
          <ul>
            {Array(10)
              .fill(1)
              .map((v, i) => {
                return (
                  <li className="  text-white py-2 flex items-center">
                    <Image
                      className="w-[35px] rounded-full mr-5"
                      src={profileImg}
                      alt=""
                    />
                    Name
                  </li>
                )
              })}
          </ul>
          <div className="text-white flex justify-end mr-5 text-[14px] font-semibold ">
            SEE ALL
          </div>
        </div>
      </section>
    </>
  )
}
