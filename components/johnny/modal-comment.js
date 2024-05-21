import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img from './img/90.jpg'
import { z } from 'zod'
import { useToggles } from '@/contexts/use-toggles'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast, { Toaster } from 'react-hot-toast'

import {
  RiVideoOnFill,
  RiImageFill,
  RiMapPinFill,
  RiPriceTag3Fill,
  RiEmotionLaughFill,
  RiEqualizerLine,
  RiSendPlane2Fill,
  RiDraftLine,
  RiCloseLargeLine,
} from '@remixicon/react'
import { SN_ADD_COMMENT } from '../config/johnny-api-path'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'

export default function CommentModal({
  postId,
  renderAfterCm,
  setRenderAfterCm,
}) {
  console.log('postIdInCommentModal', postId)
  const { auth } = useAuth()
  const { commentModal, setCommentModal } = useToggles()

  const [postForm, setPostForm] = useState({
    content: '',
    postId: postId,
    // photo: '',
  })
  // 目前沒還要圖片
  // const [previewUrl, setPreviewUrl] = useState('')

  const changeHandler = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value })
  }

  // 目前沒還要圖片
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]
  //   setPostForm({ ...postForm, photo: file })
  //   if (file) {
  //     const fileUrl = URL.createObjectURL(file)
  //     setPreviewUrl(fileUrl)
  //   } else {
  //     setPreviewUrl('')
  //   }
  // }

  //  { message: '使用toast代替' }
  const schemaContent = z.string().min(3)

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('content', postForm.content)
    formData.append('postId', postForm.postId)
    formData.append('userId', auth.id)
    // formData.append('photo', postForm.photo)

    const MySwal = withReactContent(Swal)
    const confirmNotify = () => {
      MySwal.fire({
        title: '留言成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        try {
          fetch(SN_ADD_COMMENT, {
            method: 'POST',
            body: formData,
          })
            .then((rst) => rst.json())
            .then((result) => {
              if (result.success) {
                setRenderAfterCm(!renderAfterCm)
                setCommentModal(!commentModal)
              } else {
                toast.error('留言失敗')
              }
            })
        } catch (err) {
          console.error('Error submitting form:', err)
        }
      })
    }
    let initErrors = {
      hasTitleErrors: false,
      hasContentErrors: false,
      // title: '',
      content: '',
      // photo: '',
    }

    const r1 = schemaContent.safeParse(postForm.content)
    if (!r1.success) {
      initErrors = {
        ...initErrors,
        hasContentErrors: true,
        content: r1.error.issues[0].message,
      }
    }

    if (initErrors.hasContentErrors) {
      toast.error('內容請輸入三個字以上')
      return
    }

    confirmNotify()
  }

  return (
    <>
      {' '}
      {/* <!-- 發文框 --> */}
      <form
        name="form1"
        className=" bg-gray-400 bg-opacity-50 fixed backdrop-blur-sm inset-0 flex justify-center items-center z-[1003]"
        id="postModal"
        onSubmit={submitHandler}
      >
        <div className="bg-292929 w-full pc:w-[700px] px-5 pc:px-10 pt-5 pb-10 rounded-3xl border-[1px] border-blue-100">
          <div className="flex justify-between pb-5 text-white">
            <div className="text-[25px] flex items-center">Comment</div>
            <button>
              <RiCloseLargeLine
                onClick={() => setCommentModal(!commentModal)}
              />
            </button>
          </div>
          <div className="flex-col mb-5">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <Image
                  className="size-[35px] rounded-full"
                  height={35}
                  width={35}
                  src={
                    auth.profileUrl
                      ? auth.googlePhoto
                        ? auth.profileUrl
                        : `${IMG_SERVER}/${auth.profileUrl}`
                      : ''
                  }
                  alt=""
                />
                <span className="text-white text-[20px]">{auth.username}</span>
              </div>
              {/* 操作按鈕區 */}
              <div className="text-white flex gap-10">
                {/* <button type="button">
                  <RiEqualizerLine />
                </button>
                <button type="button">
                  <RiDraftLine />
                </button> */}
                <button type="submit">
                  <RiSendPlane2Fill />
                </button>
              </div>
            </div>

            <div className="w-full h-full">
              {/* <!-- title --> */}
              <div className="rounded-lg bg-slate-300 text-black">
                <div className="flex justify-center gap-2 pc:gap-5 py-3">
                  {/* <div className="text-[14px] pc:text-[16px] flex">
                    <RiPriceTag3Fill className="mr-2" />
                    黃曉桂
                  </div>
                  <div className="text-[14px pc:text-[16px] flex">
                    <RiEmotionLaughFill className="mr-2" />
                    覺得興奮
                  </div> */}
                  {/* <div className="text-[14px] pc:text-[16px] flex">
                    <RiMapPinFill className="mr-2" />
                    光華商場
                  </div> */}
                </div>
                {/* <!-- 輸入區域 --> */}
                <textarea
                  type="text"
                  className="w-full h-[150px] outline-none p-10"
                  placeholder="What are you thinking ??"
                  name="content"
                  onChange={changeHandler}
                  value={postForm.content}
                ></textarea>{' '}
                <div className="flex justify-center py-2 overflow-hidden gap-5">
                  {/* {previewUrl
                    ? Array(1)
                        .fill(1)
                        .map((v, i) => {
                          return (
                            <Image
                              className="size-[150px] object-cover rounded-lg"
                              src={previewUrl}
                              width={150}
                              height={150}
                              alt=""
                              key={i}
                            />
                          )
                        })
                    : 'Show your image'} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
