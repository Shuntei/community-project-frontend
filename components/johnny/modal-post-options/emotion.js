import React, { useRef, useState } from 'react'
import {
  RiEmotionLaughLine,
  RiEmotionLaughFill,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
  RiEmotionNormalLine,
  RiEmotionLine,
  RiCloseLine,
} from '@remixicon/react'
import useOutsideClick from '../utils/out-side-click'

export default function Emotion({ postForm, setPostForm, setIsFormChanged }) {
  const [showEmotion, setShowEmotion] = useState(false)
  const ref = useRef()

  useOutsideClick(ref, () => {
    setShowEmotion(false)
  })

  return (
    <>
      <div className="cursor-pointer relative" ref={ref}>
        <div
          className="flex items-center"
          onClick={() => setShowEmotion(!showEmotion)}
        >
          <RiEmotionLaughFill className="mr-2 text-[24px]" />
          <span className="hidden pc:flex">EMOTION</span>
        </div>
        {showEmotion && (
          <ul className="menu rounded-lg w-40 text-black absolute bottom-[2rem] pc:left-[-1rem] left-[-4rem] bg-base-200 ">
            <li>
              <a
                onClick={() => {
                  setPostForm({ ...postForm, emotion: 'laugh' })
                  setIsFormChanged(true)
                }}
              >
                <RiEmotionLaughLine />
                覺得笑死
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setPostForm({ ...postForm, emotion: 'happy' })
                  setIsFormChanged(true)
                }}
              >
                <RiEmotionLine />
                覺得開心
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setPostForm({ ...postForm, emotion: 'unhappy' })
                  setIsFormChanged(true)
                }}
              >
                <RiEmotionUnhappyLine />
                覺得不開心
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setPostForm({ ...postForm, emotion: 'sad' })
                  setIsFormChanged(true)
                }}
              >
                <RiEmotionSadLine />
                覺得傷心
              </a>
            </li>
            <li
              onClick={() => {
                setPostForm({ ...postForm, emotion: 'boring' })
                setIsFormChanged(true)
              }}
            >
              <a>
                <RiEmotionNormalLine />
                覺得無聊
              </a>
            </li>
            {/* <li
              onClick={() => {
                setPostForm({ ...postForm, emotion: '' })
                setIsFormChanged(true)
              }}
            >
              <a>
                <RiCloseLine />
                取消
              </a>
            </li> */}
          </ul>
        )}
      </div>
    </>
  )
}
