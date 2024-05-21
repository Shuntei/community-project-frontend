import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function List() {
  const [products, setProuducts] = useState([])
  const getProducts = async () => {
    const url =
      'http://localhost:3005/product/api'

    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰
      if (Array.isArray(data.rows)) {
        setProuducts(data.rows)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <h1 className="bg-black">列表頁</h1>
      <div className="grid md:grid-cols-4  grid-cols-2 md:gap-[36px]  gap-[20px] w-full  justify-between md:px-24 px-4">
        {' '}
        {products.map((v, i) => {
          return (
            <Link
                href={`/shop/product/${v.pid}`} className=" flex-col  gap-5 flex " key={v.pid}>
              <img
                className="w-full aspect-square  rounded-xl"
                src={v.img}
                alt="pic"
              />
              <div
                className="md:px-10 w-full items-center md:items-start flex-col  gap-1 flex"
              >
                <div className="text-black md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  {v.name}
                </div>
                <div className="text-zinc-500 md:text-sm text-xs font-medium font-['IBM Plex Mono']">
                  {v.price}
                </div>
              </div>
            </Link>
          )
        })}

      </div>
    </>
  )
}
