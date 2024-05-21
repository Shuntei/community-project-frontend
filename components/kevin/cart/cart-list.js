import React, { useState } from 'react'
import { RiAddFill } from '@remixicon/react'
import { RiSubtractFill } from '@remixicon/react'
import Image from 'next/image'
import { useCart } from '@/hooks/use-cart'

export default function CartList() {
  const { items, onDecreaseItem, onIncreaseItem, onRemoveItem } = useCart()

  return (
    <>
      {/* <button onClick={()=>{console.log(items)}}>log</button> */}
      {items.map((v, i) => {
        return (
          <div key={v.pid} className="flex md:w-10/12 w-full justify-between">
            <div className="md:w-1/5  ">
              <Image
                src={`/images/product/${v.img.split(',')[0]}`}
                alt="Picture of camp"
                width={100}
                height={100}
                className="aspect-square rounded-sm"
                unoptimized={true}
              />
            </div>
            <div className="md:w-4/5 w-full md:px-5 px-2  space-y-5">
              <div className="text-black text-base font-semibold font-['Noto Sans TC']">
                {v.name}
              </div>
              <div className="flex justify-between">
                <button onClick={()=>{onRemoveItem(v.pid)}} className="text-neutral-400 text-xs font-medium font-['Noto Sans']">
                  移除商品
                </button>
                <div className="t text-neutral-300 text-xs font-extralight font-['IBM Plex Mono']">
                  {v.price}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex justify-center items-center space-x-4">
                    {/* The default color is the current text color (currentColor) */}
                    <RiSubtractFill
                      color="black"
                      size="1em"
                      className='cursor-pointer'
                      onClick={() => {
                        onDecreaseItem(v.pid)
                      }}
                    />
                    {/* The default size is 24 */}{' '}
                    <div className="text-black text-[13px] font-light font-['IBM Plex Mono']">
                      {v.qty}
                    </div>
                    {/* This sets the icon size to the current font size */}
                    <RiAddFill
                      color="black"
                      size="1em"
                      className='cursor-pointer'
                      onClick={() => {
                        onIncreaseItem(v.pid)
                      }}
                    />
                  </div>
                </div>
                <div className="text-black text-base font-normal font-['IBM Plex Mono']">
                  $ {v.price * v.qty}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
