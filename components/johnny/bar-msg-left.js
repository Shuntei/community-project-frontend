import React from 'react'
import { RiArrowDropDownLine, RiCloseLine } from '@remixicon/react'
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import profileImg from './img/90.jpg'

export default function ChannelAndMsg() {
  return (
    <>
      <section className="fixed mt-[40px] ml-5 hidden bargone:block h-[600px] overflow-scroll pb-20 z-[998] rounded-b-3xl bg-292929">
        <div className="text-white mx-10 pt-3 pb-1 text-[20px] ">CHANNELS</div>
        <div className="border-b-2 mx-10 w-[200px] mb-5"></div>
        <ul>
          {Array(6)
            .fill(1)
            .map((v, i) => {
              return (
                <li className=" text-white mx-10 py-1 flex" key={i}>
                  Channel name here <RiArrowDropDownLine />
                </li>
              )
            })}
        </ul>
        <div className="text-white mx-10 pt-3 pb-1 text-[20px] ">MESSAGES</div>
        <div className="border-b-2 mx-10 w-[200px] mb-5"></div>
        <ul>
          {Array(6)
            .fill(1)
            .map((v, i) => {
              return (
                <li
                  className="  text-white  mx-10 py-2 flex items-center justify-between "
                  key={i}
                >
                  <div className="flex items-center">
                    <Image
                      className="w-[35px] rounded-full mr-5"
                      src={profileImg}
                      alt=""
                    />
                    <span>Louisa</span>
                  </div>
                  <RiCloseLine />
                </li>
              )
            })}
        </ul>
      </section>
    </>
  )
}
