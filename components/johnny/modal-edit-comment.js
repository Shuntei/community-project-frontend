import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import img from './img/90.jpg'
import { z } from 'zod'
import { useToggles } from '@/contexts/use-toggles'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast, { Toaster } from 'react-hot-toast'

import {
  RiEqualizerLine,
  RiSendPlane2Fill,
  RiDraftLine,
  RiCloseLargeLine,
} from '@remixicon/react'
import { SN_EDIT_COMMENT, SN_SELECTED_COMMENT } from '../config/johnny-api-path'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'

export default function CommentEditModal({
  commentId,
  renderAfterCm,
  setRenderAfterCm,
  commentsInit,
}) {
  console.log('commentId in comment edit modal', commentId) //有抓到了
  const { auth } = useAuth()
  const [isFormChanged, setIsFormChanged] = useState(false)
  const { commentEditModal, setCommentEditModal } = useToggles()

  const [postForm, setPostForm] = useState({
    content: '',
    commentId: commentId,
    // photo: '',
  })
  // 目前沒還要圖片
  // const [previewUrl, setPreviewUrl] = useState('')

  const changeHandler = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value })
    setIsFormChanged(true)
  }

  //  { message: '使用toast代替' }
  const schemaContent = z.string().min(3)

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('content', postForm.content)
    // formData.append('commentId', postForm.commentId)
    // formData.append('photo', postForm.photo)

    const MySwal = withReactContent(Swal)
    const confirmNotify = () => {
      MySwal.fire({
        title: '留言編輯成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        try {
          fetch(`${SN_EDIT_COMMENT}/${commentId}`, {
            method: 'PUT',
            body: formData,
          })
            .then((rst) => rst.json())
            .then((result) => {
              if (result.success) {
                setRenderAfterCm(!renderAfterCm)
                setCommentEditModal(!commentEditModal)
              } else {
                toast.error('留言編輯失敗')
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
    if (!isFormChanged) {
      toast.error('內容沒有變更，請繼續編輯或離開')
      return
    }

    confirmNotify()
  }

  // 先獲取原本留言資料
  useEffect(() => {
    fetch(`${SN_SELECTED_COMMENT}/${commentId}`)
      .then((r) => r.json())
      .then((data) => {
        const { comment_id, user_id, post_id, content, comment_timestamp } =
          data[0]
        setPostForm({
          comment_id,
          user_id,
          post_id,
          content,
          comment_timestamp,
        })
      })
  }, [])

  useEffect(() => {
    commentsInit()
  }, [renderAfterCm])

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
            <div className="text-[25px] flex items-center">
              Edit your Comment
            </div>
            <button>
              <RiCloseLargeLine
                onClick={() => setCommentEditModal(!commentEditModal)}
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
              {/* <div className="flex justify-center mb-5">
                <input
                  className="justify-center w-full text-[20px] leading-10 px-10 py-1 rounded-lg outline-none text-black"
                  placeholder="Title Here"
                  name="title"
                  onChange={changeHandler}
                  value={postForm.title}
                />
              </div> */}
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
