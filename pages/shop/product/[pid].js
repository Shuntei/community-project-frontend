import Image from 'next/image'
import {
  PRODUCT_ONE,
  PRODUCT_COMMENT,
  PRODUCT_RELATED,
} from '@/components/config/api-path'
import { RiStarFill } from 'react-icons/ri'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { useRouter } from 'next/router'
import { useCart } from '@/hooks/use-cart'

export default function Pid() {
  const router = useRouter()
  const { onAddMutiItem, onAddItem, items } = useCart()
  const [comment, setComment] = useState([])
  // 一載入頁面顯示幾筆評論
  const [visibleComments, setVisibleComments] = useState(3)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [product, setProduct] = useState({
    pid: '',
    img: '',
    name: '',
    price: 0,
  })
  const getProductById = async (pid) => {
    const url = `${PRODUCT_ONE}/${pid}`
    // 用 try...catch語法來作例外處理
    try {
      const res = await fetch(url)
      const data = await res.json()
      // 設定到狀態中 ===> 觸發重新渲染(re-render)
      // 要設定到狀態前，最好先檢查資料類型是否一致
      if (typeof data === 'object' && data !== null) {
        setProduct(data.row)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const getProductComment = async (pid) => {
    const url = `${PRODUCT_COMMENT}/${pid}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      // 設定到狀態中 ===> 觸發重新渲染(re-render)
      // 要設定到狀態前，最好先檢查資料類型是否一致
      if (typeof data === 'object' && data !== null) {
        setComment(data.rows)
      }
    } catch (e) {
      console.log(e)
    }
  }
  // 顯示更多評論一次增加幾筆
  const handleLoadMore = () => {
    setVisibleComments(visibleComments + 3)
  }
  // 取得相關商品
  const getRelatedProduct = async () => {
    const url = `${PRODUCT_RELATED}/?sub_category=${product.sub_category_id}&pid=${product.pid}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      setRelatedProducts(data.rows)
    } catch (ex) {
      console.log(ex)
    }
  }

  // 2. 在useEffet中監聽isReady值為true時，才能得到網址上的pid和伺服器獲取資料
  useEffect(() => {
    if (router.isReady) {
      //確保能得到pid
      const { pid } = router.query
      // console.log(pid)
      // 有pid後，向伺服器要求資料
      getProductById(pid)
      getProductComment(pid)
      setVisibleComments(3)
    }
  }, [router.isReady, router.query.pid])
  useEffect(() => {
    if (product.pid) {
      getRelatedProduct()
    }
  }, [product.pid])
  return (
    <>
      <div className=" bg-gray-100 flex flex-col justify-center items-center relative pt-28">
        {/* header開始 */}
        <Navbar navColor={''} />
        {/* header結束 */}
        {/* 標題&首圖開始 */}
        <div className="w-full flex flex-col md:flex-row justify-between md:px-24 px-4 py-5">
          <div className="flex items-start flex-col justify-end md:order-1 order-2">
            <div className="text-black  md:text-6xl text-[36px] font-semibold font-['Noto Sans TC']">
              {product.name}
            </div>
            <div className="text-black text-[20px] md:text-[32px] font-normal font-['IBM Plex Mono']">
              ${product.price}
            </div>
          </div>
          <div className="md:order-2 order-1 ">
            <Image
              src={`/images/product/${product.img.split(',')[0]}`}
              alt="Picture of camp"
              width={500}
              height={500}
              className="rounded-xl"
              unoptimized={true}
            />
          </div>
        </div>
        {/* 標題&首圖 */}
        {/* 商品內容開始 */}
        <div className="flex flex-col md:flex-row w-full  justify-between px-4 md:px-24 py-5 gap-5 md:gap-0">
          {/* 左-商品敘述 */}
          <div className="md:w-1/5 md:space-y-7 space-y-2 md:sticky top-16 h-min">
            <div className="w-full text-black border-b-2 border-black  text-[13px] font-semibold font-['Noto Sans TC']">
              商品敘述
            </div>
            <div className="w-full text-black text-[15px] font-normal">
              {product.description}
            </div>
          </div>
          {/* 右-商品數量&moreInfo&addToCart&圖片 */}
          <div className="flex  flex-col md:w-4/5">
            {/* 右-商品數量&moreInfo&addToCart */}
            <div className="flex flex-col md:flex-row ">
              <div className="md:w-1/3 w-11/12  md:ms-6 md:space-y-7 fixed bottom-[73px] md:static bg-gray-100">
                <div className=" text-black bg-gray-100 border-black border-b-2 text-[13px] font-semibold font-['Noto Sans TC'] ">
                  數量
                </div>
                <div className="w-full flex gap-6 md:gap-0 md:justify-between">
                  {/* <div className="text-black md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    1{' '}
                  </div>
                  <div className="text-neutral-400 md:text-[26px] text-sm font-semibold font-['IBM Plex Mono']">
                    */}
                  {Array(9)
                    .fill(1)
                    .map((v, i) => {
                      const n = i + 1
                      return (
                        <li key={n} className="flex justify-between w-full">
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              setProduct({ ...product, qty: n || 1 })
                              console.log(product.qty)
                            }}
                            className={
                              product.qty === n
                                ? `md:text-[26px] text-[20px] text-black font-semibold font-['IBM Plex Mono'] border-black border-b`
                                : `text-neutral-400 md:text-[26px] text-[18px] font-semibold font-['IBM Plex Mono'] ` // 條件式的 className
                            }
                          >
                            {n}
                          </button>
                        </li>
                      )
                    })}
                </div>
              </div>
              <div className="md:w-1/3  md:ms-6  md:space-y-7 space-y-2 ">
                <div className=" text-black  border-black border-b-2 text-[13px] font-semibold font-['Noto Sans TC'] ">
                  more info
                </div>
                <div className="w-full text-black text-[15px] font-normal">
                  任意購買兩件商品即享免運！
                  <br />
                  穩固、安全的品質
                  <br />
                  如有商品詳細問題,請洽客服
                </div>
              </div>
              <div className="md:w-1/3  md:ms-6 md:space-y-7  fixed bottom-1 md:static">
                <button
                  onClick={() => {
                    const quantityToAdd = product.qty || 1
                    // Add the selected quantity of items to the cart
                    console.log(quantityToAdd)
                    onAddMutiItem({ ...product, qty: quantityToAdd })
                  }}
                  className="px-[80px] md:px-[46px] md:py-[43px] py-[18px] border border-black bg-black justify-center items-center flex hover:bg-neutral-500 hover:border-white"
                >
                  <div className="text-white italic text-[26px] font-semibold font-['IBM Plex Mono']">
                    ADD TO CART
                  </div>
                </button>
              </div>
            </div>
            {/* 右-圖片 */}
            <div className="md:px-5 md:py-10 py-5 space-y-3">
              <Image
                src={`/images/product/${product.img.split(',')[1]}`}
                alt="Picture of camp"
                width={1000}
                height={1000}
                className="rounded-xl"
                unoptimized={true}
              />
              <Image
                src={`/images/product/${product.img.split(',')[2]}`}
                alt="Picture of camp"
                width={1000}
                height={1000}
                className="rounded-xl"
                unoptimized={true}
              />
              <Image
                src={`/images/product/${product.img.split(',')[3]}`}
                alt="Picture of camp"
                width={1000}
                height={1000}
                className="rounded-xl"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
        {/* 商品內容結束 */}
        {/* 評論開始 */}
        <div className="w-full flex flex-col items-center md:px-24  md:py-5 ">
          <div className=" w-full text-black text-[26px] text-center font-medium font-['IBM Plex Mono']">
            Reviews
          </div>
          {/* 第一則評論 */}
          {/* 評論範本開始 */}
         
          {/* 評論範本結束 */}
          {comment &&
            comment.slice(0, visibleComments).map((v, i) => {
              return (
                <div
                  key={v.comment_id}
                  className="flex flex-col md:flex-row w-11/12 md:w-full px-[40px] md:px-0 border-black border-b py-[20px] md:py-[40px] gap-3"
                >
                  {/* 評論左側 */}
                  <div className="flex flex-col md:mx-6 md:w-1/5 space-y-3">
                    <div className="flex md:border-b md:border-black md:text-black">
                      <div className="w-full text-[15px] font-['IBM Plex Mono']">
                        {v.name}
                      </div>
                      <div className="text-black text-[12px] font-['IBM Plex Mono']">
                        {/* 01/03/24 */}
                      </div>
                    </div>
                    <div className="flex space-x-1 justify-between">
                      {Array(5)
                        .fill(1)
                        .map((_, i2) => {
                          const filled = i2 < v.score // 判斷該星星是否填充
                          return (
                            <RiStarFill
                              key={i2}
                              color={filled ? 'black' : 'gray'} // 填充為黑色，不填充為灰色
                              size="32px"
                            />
                          )
                        })}
                    </div>
                  </div>
                  {/* 評論右側 */}
                  <div className="flex flex-col md:w-3/5 md:mx-6 mx-0 space-y-3">
                    <div className="md:w-1/3 border-b text-[15px]  font-['IBM Plex Mono'] border-black text-black">
                      {v.create_at.split('T')[0]}
                    </div>

                    <div className="text-black text-[15px] font-normal font-['notosans tc']">
                      {v.comment}
                    </div>
                  </div>
                </div>
              )
            })}

          {/* 載入按鈕 */}
          <button
            onClick={handleLoadMore}
            className={
              //可見評論大於商品評論時,隱藏按鈕
              visibleComments >= comment.length
                ? 'hidden'
                : 'md:w-[196px] md:h-[108px]   py-[25px] w-[138px] h-[35px] border border-black justify-center items-center flex my-[20px] md:my-[40px] hover:bg-black hover:border-white hover:text-white group'
            }
          >
            <div className="text-black font-semibold text-xs md:text-[15px] font-['Noto Sans Tc'] group-hover:text-white">
              載入更多留言
            </div>
          </button>
        </div>

        {/* 評論結束 */}

        {/* 更多推薦商品開始 */}
        <div className="flex w-full justify-between  md:px-24 px-4 py-5 flex-col space-y-5">
          <div className="text-black  text-[16px] font-semibold font-['IBM Plex Mono']">
            MORE RECOMMENDED PRODUCTS
          </div>
          <div className="flex md:gap-10 gap-5  overflow-auto">
            {console.log(relatedProducts)}
            {relatedProducts &&
              relatedProducts.map((v, i) => {
                return (
                  <Link
                    key={v.pid}
                    href={`/shop/product/${v.pid}`}
                    className="md:w-1/5  flex-col  gap-5 flex transition duration-200 hover:skew-y-2"
                    style={{ minWidth: '20%' }}
                  >
                    <img
                      className="w-full aspect-square  rounded-xl"
                      src={`/images/product/${v.img.split(',')[0]}`}
                      alt="pic"
                    />
                    <div className="md:px-10 flex-col  gap-1 flex">
                      <div className="text-black text-sm font-medium font-['IBM Plex Mono']">
                        {v.name}
                      </div>
                      <div className="text-zinc-500 text-[15px] font-medium font-['IBM Plex Mono']">
                        {v.price}
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>

        {/* 更多推薦商品結束 */}
        <div className=" h-20"></div>
        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  )
}
