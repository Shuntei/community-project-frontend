import React, { useState } from 'react'
import { RiStarFill, RiCloseLargeLine } from '@remixicon/react'
import Image from 'next/image'
import { PRODUCT_COMMENT_ADD } from '@/components/config/api-path'
import Swal from 'sweetalert2'

function CommentModal({ p, getdetailPo }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isComposing, setIsComposing] = useState(false)
  const maxLength = 100
  // 評分改變
  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  // 評論內容改變
  const handleCommentChange = (e) => {
    if (!e.nativeEvent.isComposing) {
      const newComment = e.target.value

      if (newComment !== '') {
        setComment(newComment)
      } else {
        setComment('')
      }
    }
  }
  // 新增商品評論
  const addProductComment = async () => {
    if (rating === 0 || comment.trim() === '') {
      Swal.fire({
        icon: 'warning',
        iconColor: '#ff804a',
        title: '請評分並填寫商品評價',
        confirmButtonText: 'OK',
        confirmButtonColor: 'black',
        timer: 2000,
      })
      return
    }
    const newPoProduct = {
      ...p,
      score: rating,
      comment: comment,
    }
    // console.log(newPoProduct)

    try {
      const r = await fetch(PRODUCT_COMMENT_ADD, {
        method: 'POST',
        body: JSON.stringify(newPoProduct),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const d = await r.json()
      console.log(d)
      if (d.success) {
        setIsOpen(false)
        getdetailPo(p.purchase_order_id)
        Swal.fire({
          icon: 'success',
          title: '已成功評論',
          iconColor: 'black',
          confirmButtonText: 'OK',
          confirmButtonColor: 'black',
          timer: 2000,
        })
      } else {
        setIsOpen(false)
        Swal.fire({
          icon: 'warning',
          title: '評論失敗',
          iconColor: 'black',
          confirmButtonText: 'OK',
          confirmButtonColor: 'black',
          timer: 2000,
        })
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div>
      <button
        className="py-2 px-7 bg-white border border-black justify-center items-center flex absolute bottom-0 md:static hover:bg-black hover:border-white group"
        onClick={openModal}
      >
        <div className="text-black group-hover:text-white text-xs  font-['Noto Sans TC']">
          評價商品
        </div>
      </button>
      {isOpen && (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full  bg-black/50 z-40 ">
          <div className=" bg-white  p-5 rounded  z-50 md:w-[700px] w-[330px] md:h-[420px] md:px-20 md:py-10">
            <div className="flex flex-col">
              <div className="flex justify-end">
                <button
                  className="close text-[30px] text-black"
                  onClick={closeModal}
                >
                  <RiCloseLargeLine />
                </button>
              </div>
              <div className="text-black text-xl font-['IBM Plex Mono']">
                {p.name}
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4">
                {/* 左 */}
                <div className="md:w-2/5 flex flex-col gap-3 py-3">
                  <div className="flex w-full gap-x-3">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <RiStarFill
                        key={index}
                        className={
                          index <= rating ? 'text-black cursor-pointer' : 'text-gray-300 cursor-pointer'
                        }
                        onClick={() => handleRatingChange(index)}
                      />
                    ))}
                  </div>

                  <div className="w-8/12 ">
                    <Image
                      src={`/images/product/${typeof p.img === 'string' ? p.img.split(',')[0] : ''}`}
                      alt="Picture of camp"
                      width={200}
                      height={200}
                      className="aspect-square rounded"
                    />
                  </div>
                </div>
                {/* 右 */}
                <div className="w-3/5 flex flex-col gap-2">
                  <div className="text-neutral-500 text-[15px] font-bold font-['Noto Sans']">
                    評論
                  </div>
                  <div>
                    {/* <textarea
                      name=""
                      id=""
                      cols="28"
                      rows="5"
                      className="border border-dashed md:px-4 py-4"
                    ></textarea> */}
                    <textarea
                      name="comment"
                      id="comment"
                      cols="30"
                      rows="5"
                      defaultValue={comment}
                      className="text-black"
                      onKeyUp={handleCommentChange}
                      maxLength={maxLength}
                    ></textarea>
                    <p className="text-end text-xs text-gray-300">
                      字數: {comment.length}/{maxLength}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="py-3"
                  onClick={(e) => {
                    e.preventDefault()
                    addProductComment()
                  }}
                >
                  <div className=" px-[98px] py-[18px] bg-black border border-black justify-center items-center gap-2.5 inline-flex hover:bg-neutral-500 hover:border-white">
                    <div className="text-white text-[15px] font-normal font-['Noto Sans']">
                      評價商品
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommentModal
