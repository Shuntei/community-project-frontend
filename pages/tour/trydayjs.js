import React from 'react'
import { API_SERVER, TOUR_POST } from '@/components/config/api-path'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Trydayjs() {
  const [tourImage, setTourImage] = useState('')

  // 抓取照片資料
  const postFrontPic = () => {
    fetch(`${API_SERVER}/tour/img`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
        setTourImage(result)
      })
      .catch((error) => console.error('Error fetching tour image:', error))
  }

  // 呈現照片資料
  useEffect(() => {
    postFrontPic()
  }, [])

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {tourImage &&
          tourImage.rows.map((image, i) => {
            return (
              <div className="bg-white md:w-[24%] rounded overflow-hidden pb-4">
                <Link href="/tour/tour-post" className="space-y-5">
                  <img
                    className="h-[444px] max-w-full object-cover"
                    src={image.image_url}
                    alt=""
                  />
                  <div className="flex justify-between px-5">
                    <span className="text-[15px] content-center">
                      <i className="ri-star-fill ri-lg pr-1"></i>4.51
                    </span>
                    <span className="space-x-1">
                      <i className="ri-heart-3-line ri-lg"></i>
                      <i className="ri-share-forward-fill ri-lg"></i>
                    </span>
                  </div>
                  <div className="px-5 space-y-1">
                    <div className="text-xl font-semibold">AAAAAA</div>
                    <div className="text-[15px]">出團時間 : 123</div>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    </>
  )
}
