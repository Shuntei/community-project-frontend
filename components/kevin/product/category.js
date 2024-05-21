import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Category() {
  const [cate, setCate] = useState('')
  const router = useRouter()
  const handleChange = (e) => {
    const cateValue = e.currentTarget.getAttribute('data-value')
    setCate(cateValue)
    router.push(
      {
        pathname: '/shop/product/list',
        query: { main_category: cateValue },
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <>
      <div className="w-full md:gap-[36px]  gap-[20px]  justify-between   md:px-24 px-4 items-center  flex ">
        <div
          onClick={() => {
            router.push(
              {
                pathname: '/shop/product/list',
              },
              undefined,
              { scroll: false }
            )
          }}
          className="w-full aspect-square bg-black md:rounded-[20px] rounded-[7px] justify-center items-center flex cursor-pointer transition duration-200 hover:scale-110 "
        >
          <div className="text-center text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans'] tracking-[2.80px]">
            All
          </div>
        </div>

        <div
          className="w-full aspect-square md:rounded-[20px] rounded-[7px] flex-col justify-center items-center  flex   bg-cover bg-center bg-no-repeat bg-rock relative cursor-pointer transition duration-200 hover:scale-110 "
          name="main_category"
          data-value="2"
          onClick={handleChange}
        >
          <Image
            src="/images/rock.jpg"
            alt="Picture of camp"
            width={500}
            height={500}
            className="aspect-square rounded-xl"
          />
          <div className=" text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans Tc'] tracking-[2.80px] absolute">
            手作
          </div>
        </div>
        <div
          className="w-full aspect-square md:rounded-[20px] rounded-[7px] flex-col justify-center items-center  flex bg-cover bg-center bg-no-repeat bg-camp relative cursor-pointer transition duration-200 hover:scale-110 "
          name="main_category"
          data-value="3"
          onClick={handleChange}
        >
          <Image
            src="/images/camp.jpg"
            alt="Picture of camp"
            width={500}
            height={500}
            className="aspect-square rounded-xl"
          />
          <div className=" text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans TC'] tracking-[2.80px] absolute">
            戶外
          </div>
        </div>
        <div className="w-full aspect-square md:rounded-[20px] rounded-[7px] flex-col justify-center items-center  flex bg-black cursor-pointer transition duration-200 hover:scale-110 " name="main_category"
          data-value="4"
          onClick={handleChange}>
          <div className="text-center text-white text-[12px] md:text-[28px] font-bold font-['Noto Sans TC'] tracking-[2.80px]"
          >
            直播
          </div>
        </div>
      </div>
    </>
  )
}
