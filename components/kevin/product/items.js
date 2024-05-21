import { PRODUCT_LIST } from '@/components/config/api-path'
import { useCart } from '@/hooks/use-cart'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Items() {
  const router = useRouter()
  const { onAddItem } = useCart()
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const url = `${PRODUCT_LIST}${location.search}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProducts()
  }, [router])
  return (
    <>
      {products.rows &&
        products.rows.map((v, i) => {
          return (
            <div
              className=" flex-col  gap-5 flex transition duration-200 hover:scale-105 hover:skew-y-2"
              key={v.pid}
            >
              <Link
                href={`/shop/product/${v.pid}`}
                className="flex justify-center items-center"
              >
                <img
                  className="w-full aspect-square  rounded-xl "
                  src={`/images/product/${v.img.split(',')[0]}`}
                  alt="pic"
                />
              </Link>
              <div className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex">
                <Link
                  href={`/shop/product/${v.pid}`}
                  className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']"
                >
                  {v.name}
                </Link>
                <div className="text-zinc-500 md:w-full md:text-sm text-xs font-medium font-['IBM Plex Mono'] flex justify-between">
                  <div>{v.price}</div>
                  <button
                    onClick={() => {
                      onAddItem(v)
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}
