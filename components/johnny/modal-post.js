import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// import img from './img/90.jpg'
import { z } from 'zod'
import { useToggles } from '@/contexts/use-toggles'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast, { Toaster } from 'react-hot-toast'
import emotionHandler from './utils/emotionHandler'
import tagsHandler from './utils/tagsHandler'

import {
  RiImageFill,
  RiPriceTag3Fill,
  RiEqualizerLine,
  RiSendPlane2Fill,
  RiDraftLine,
  RiCloseCircleLine,
  RiCloseLine,
  RiCloseLargeLine,
  RiArrowDropDownLine,
} from '@remixicon/react'
import { SN_ADD_POST, SN_BOARDS } from '../config/johnny-api-path'
import { useBoards } from '@/contexts/use-boards'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'
import Emotion from './modal-post-options/emotion'
import Tags from './modal-post-options/tags'

export default function PostModal() {
  const { auth } = useAuth()
  const { postModal, setPostModal } = useToggles()
  const [postForm, setPostForm] = useState({
    title: '',
    content: '',
    photo: '',
    boardId: '',
    userId: '',
    emotion: '',
    tags: '',
  })
  const [isFormChanged, setIsFormChanged] = useState(false) //發文用不到,但編輯有用到,因同一個表情元件不傳遞發文會故障

  const [previewUrl, setPreviewUrl] = useState('')
  const { render, setRender, postsShow } = useBoards()

  const changeHandler = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setPostForm({ ...postForm, photo: file })
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)
    } else {
      setPreviewUrl('')
    }
  }

  //  { message: '使用toast代替' }
  const schemaTitle = z.string().min(1)
  const schemaContent = z.string().min(3)

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', postForm.title)
    formData.append('content', postForm.content)
    formData.append('photo', postForm.photo)
    formData.append('boardId', postForm.boardId)
    formData.append('userId', auth.id)
    formData.append('emotion', postForm.emotion)
    formData.append('tags', postForm.tags)
    // console.log(postForm)
    // http:localhost:3005/johnny/3a5a7ce6-ca08-4484-9de8-6c22d7448540.jpg
    const MySwal = withReactContent(Swal)
    const confirmNotify = () => {
      MySwal.fire({
        title: '發文成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        try {
          fetch(SN_ADD_POST, {
            method: 'POST',
            body: formData,
          })
            .then((rst) => rst.json())
            .then((result) => {
              if (result.success) {
                setRender(true)
                setPostModal(!postModal)
              } else {
                toast.error('發文失敗')
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
      title: '',
      content: '',
      photo: '',
      boardId: '',
    }

    const r1 = schemaTitle.safeParse(postForm.title)
    if (!r1.success) {
      initErrors = {
        ...initErrors,
        hasTitleErrors: true,
        title: r1.error.issues[0].message,
      }
    }
    const r2 = schemaContent.safeParse(postForm.content)
    if (!r2.success) {
      initErrors = {
        ...initErrors,
        hasContentErrors: true,
        content: r2.error.issues[0].message,
      }
    }
    if (initErrors.hasTitleErrors) {
      toast.error('請輸入標題')
      return
    } else if (initErrors.hasContentErrors) {
      toast.error('內容請輸入三個字以上')
      return
    }

    confirmNotify()
  }

  const [bdChoose, setBdChoose] = useState([])

  const bdChooseHandler = () => {
    try {
      fetch(`${SN_BOARDS}`)
        .then((r) => r.json())
        .then((data) => setBdChoose(data))
    } catch (err) {
      console.log('boards error')
    }
  }

  useEffect(() => {
    postsShow()
    setRender(false)
    console.log(auth)
  }, [render])

  return (
    <>
      {/* <!-- 發文框 --> */}
      <form
        name="form1"
        className=" bg-gray-400 bg-opacity-50 fixed backdrop-blur-sm inset-0 flex justify-center items-center z-[1003]"
        id="postModal"
        onSubmit={submitHandler}
      >
        <div className="bg-zinc-900 w-full pc:w-[700px] px-5 pc:px-10 pt-5 pb-10 rounded-3xl border-[1px] border-blue-100">
          <div className="flex justify-between pb-5 text-white">
            <div
              className="text-[25px] flex items-center"
              onClick={bdChooseHandler}
            >
              <select
                className="bg-zinc-900 cursor-pointer"
                onChange={changeHandler}
                name="boardId"
              >
                <option hidden>
                  Choose a Board <RiArrowDropDownLine />
                </option>
                {bdChoose.map((v, i) => {
                  return (
                    <option
                      key={v.board_id}
                      value={v.board_id}
                      className="text-[18px]"
                    >
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{v.board_name}{' '}
                    </option>
                  )
                })}
              </select>
            </div>
            <button>
              <RiCloseLargeLine onClick={() => setPostModal(!postModal)} />
            </button>
          </div>
          <div className="flex-col mb-5">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-5">
                <Image
                  className="size-[35px] rounded-full"
                  width={35}
                  height={35}
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
              <div className="flex justify-center mb-5">
                <input
                  className="justify-center w-full text-[20px] leading-10 px-10 py-1 rounded-lg outline-none"
                  placeholder="Title Here"
                  name="title"
                  onChange={changeHandler}
                  value={postForm.title}
                />
              </div>
              <div className="rounded-lg bg-slate-300">
                <div className="flex justify-center gap-2 pc:gap-5 py-3">
                  <div className="text-[14px] pc:text-[16px] flex">
                    {tagsHandler(postForm.tags)}
                    {postForm.tags && (
                      <span
                        onClick={() => {
                          setPostForm({ ...postForm, tags: '' })
                          setIsFormChanged(true)
                        }}
                      >
                        <RiCloseCircleLine className="size-4 ml-1 cursor-pointer" />
                      </span>
                    )}
                  </div>{' '}
                  <div className="text-[14px] pc:text-[16px] flex">
                    {emotionHandler(postForm.emotion)}
                    {postForm.emotion && (
                      <span
                        onClick={() => {
                          setPostForm({ ...postForm, emotion: '' })
                          setIsFormChanged(true)
                        }}
                      >
                        <RiCloseCircleLine className="size-4 ml-1 cursor-pointer" />
                      </span>
                    )}
                  </div>
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
                  {previewUrl
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
                    : 'Show your image'}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pc:gap-10 justify-center text-white ">
            {/* <button className="flex items-center">
              <RiVideoOnFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">VIDEO</span>
            </button> */}
            <label className="flex items-center cursor-pointer">
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                multiple
                accept="image/*"
                name="photo"
              />
              <RiImageFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">PHOTO</span>
            </label>
            <Tags
              postForm={postForm}
              setPostForm={setPostForm}
              setIsFormChanged={setIsFormChanged}
            />
            {/* <button className="flex items-center">
              <RiEmotionLaughFill className="mr-2 text-[24px]" />
              <span className="hidden pc:flex">FEELING</span>
            </button> */}
            <Emotion
              postForm={postForm}
              setPostForm={setPostForm}
              setIsFormChanged={setIsFormChanged}
            />
          </div>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
