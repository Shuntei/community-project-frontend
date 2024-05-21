import React, { useState } from 'react'
import { RiStarFill } from '@remixicon/react'
import Image from 'next/image'
import { useCart } from '@/hooks/use-cart'
import CartList from '@/components/kevin/cart/cart-list'
import { RiAddFill } from '@remixicon/react'
import { RiSubtractFill } from '@remixicon/react'
import { RiCloseLargeLine } from '@remixicon/react'
import Link from 'next/link'

function CartModal() {
  const {
    items,
    onDecreaseItem,
    onIncreaseItem,
    onRemoveItem,
    totalItems,
    totalPrice,
  } = useCart()

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div>
      <button onClick={openModal}>CART</button>
      {isOpen && (
        <div className=" flex justify-end items-start fixed top-0 left-0 w-full h-full  bg-black/50 z-40 ">
          <div className="modal-content bg-white  rounded  z-50 md:w-[447px] w-[320px] h-[700px] me-2 mt-2 px-10 py-5 relative">
            <div className="flex flex-col">
              <div className="flex justify-end">
                <button
                  className="close text-[30px] text-black cursor-pointer"
                  onClick={closeModal}
                >
                  <RiCloseLargeLine />
                </button>
              </div>
              <div className="text-[13px] font-semibold font-['IBM Plex Mono'] text-black border-b border-black">
                cart
              </div>
              <div className="h-[500px] overflow-auto">
                {items.map((v, i) => {
                  return (
                    <div
                      key={v.pid}
                      className="flex w-full justify-between py-3"
                    >
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
                      <div className=" w-full md:px-5 px-2  space-y-5">
                        <div className="text-base font-semibold text-black font-['Noto Sans TC']">
                          {v.name}
                        </div>
                        <div className="flex justify-between">
                          <button
                            onClick={()=>{onRemoveItem(v.pid)}}
                            className="text-neutral-400 text-xs font-medium font-['Noto Sans']"
                          >
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
                                className="cursor-pointer"
                                onClick={() => {
                                  onDecreaseItem(v.pid)
                                }}
                              />
                              {/* The default size is 24 */}{' '}
                              <div className="text-[13px] text-black font-light font-['IBM Plex Mono']">
                                {v.qty}
                              </div>
                              {/* This sets the icon size to the current font size */}
                              <RiAddFill
                                color="black"
                                size="1em"
                                className="cursor-pointer"
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
              </div>
              <div className="flex  justify-between ">
                <div className="text-black text-[13px] font-semibold font-['IBM Plex Mono']">
                  合計 {totalItems}項(TWD)
                </div>
                <div className="text-black text-xl font-semibold font-['IBM Plex Mono']">
                  $ {totalPrice}
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="/shop/cart" className="py-3 ">
                  <div className=" px-[98px] py-[18px] bg-black border border-black justify-center items-center gap-2.5 inline-flex hover:bg-neutral-500 hover:border-white">
                    <div className="text-white text-[15px] font-normal font-['IBM Plex Mono'] ">
                      CHECKOUT{/* <Link href="/shop/cart">CART</Link> */}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartModal
