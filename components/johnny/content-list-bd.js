import React, { useEffect, useState } from 'react'
import { SN_COMMUNITY } from '../config/johnny-api-path'
import {
  RiChat4Fill,
  RiEyeFill,
  RiDeleteBinLine,
  RiMoreFill,
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
  RiHeartFill,
} from '@remixicon/react'
import Image from 'next/image'
import Link from 'next/link'
import { useBoards } from '@/contexts/use-boards'
import { SN_BOARDS, SN_DELETE_POST } from '../config/johnny-api-path'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { useAuth } from '@/contexts/auth-context'

export default function MainContentBd() {
  const { selectedPosts, setSelectedPosts, setRender, render } = useBoards()

  const router = useRouter()
  // const [toggleMenu, setToggleMenu] = useState(false)
  const { auth } = useAuth()

  const removePost = async (postId) => {
    const MySwal = withReactContent(Swal)
    await MySwal.fire({
      icon: 'warning',
      title: '確認刪除貼文?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#292929', //'#006400'
      cancelButtonColor: '#8B0000',
      confirmButtonText: '是',
      cancelButtonText: '否',
      timer: 3000,
    }).then((rst) => {
      if (rst.isConfirmed) {
        MySwal.fire({
          title: '刪除成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })
        fetch(`${SN_DELETE_POST}/${postId}`, {
          method: 'DELETE',
          body: JSON.stringify(postId),
        })
          .then((r) => r.json())
          .then((result) => {
            console.log(result)
            if (result.success) {
              setRender(true)
            } else {
              toast.error('刪除失敗')
            }
          })
      }
    })
  }

  useEffect(() => {
    if (!router.isReady) return
    if (!router.query.bdpage || !router.query.boardId) return

    console.log('測試location', location.search)
    fetch(`${SN_BOARDS}${location.search}`)
      .then((r) => r.json())
      .then((result) => {
        setSelectedPosts(result)
      })
  }, [
    router.query.bdpage,
    router.query.boardId,
    router.query.keyword,
    router.query.filter,
    render,
  ])

  const startPage = Math.max(1, selectedPosts.page - 2) // 計算開始的頁碼，不能小於 1
  const endPage = Math.min(startPage + 3, selectedPosts.totalPages) // 計算結束的頁碼，不能大於總頁數

  return (
    <>
      {selectedPosts.selectedBdPostsRows?.length === 0 ? (
        <ul className=" flex justify-center mt-[90px] text-xl"></ul>
      ) : (
        <ul className=" flex justify-center mt-[90px] text-xl">
          <span
            className="border-s-2 px-3 py-3 flex items-center hover:hover1"
            onClick={() =>
              router.push({
                pathname: '/community/main-page',
                query: { ...router.query, bdpage: 1 },
              })
            }
          >
            <RiArrowLeftDoubleLine />
          </span>
          {Array(endPage - startPage + 1)
            .fill(1)
            .map((v, i) => {
              // const p = selectedPosts.page - 5 + i
              const p = startPage + i
              if (p < 1 || p > selectedPosts.totalPages) return null
              return (
                <li key={p}>
                  <span
                    onClick={() => {
                      router.push({
                        pathname: '/community/main-page',
                        query: { ...router.query, bdpage: p },
                      })
                    }}
                    className={`border-s-2 px-5 flex py-3 hover:hover1 active:bg-white ${p === selectedPosts.page ? 'bg-white' : ''}`}
                  >
                    {p}
                  </span>
                </li>
              )
            })}
          <span
            className="border-x-2 px-3 py-3 flex items-center hover:hover1"
            onClick={() =>
              router.push({
                pathname: '/community/main-page',
                query: { ...router.query, bdpage: selectedPosts.totalPages },
              })
            }
          >
            <RiArrowRightDoubleLine />
          </span>
        </ul>
      )}
      {selectedPosts.selectedBdPostsRows?.length === 0 ? (
        <h1
          className="flex bg-neutral-300 leading border-b-slate-500 justify-center 
        text-[20px] font-semibold py-10"
        >
          沒有任何貼文
        </h1>
      ) : (
        ''
      )}
      {selectedPosts.selectedBdPostsRows?.map((v, i) => {
        return (
          <main
            className="flex bg-neutral-300 border-b border-b-slate-500"
            key={v.post_id}
          >
            <div
              className=" pc:px-20 px-10 py-3 flex transition-transform w-full
                          duration-300
                          shadow-md
                          hover:shadow-lg
                        hover:bg-neutral-200
                          hover:ring-opacity-15"
            >
              <div className="w-[70%]">
                <Link
                  name="postId"
                  href={`/community/main-post?postId=${v.post_id}`}
                  className="cursor-pointer"
                >
                  <div className="text-[20px] font-semibold flex items-center justify-between">
                    <span>{v.title}</span>
                    <span className="hidden pc:flex text-[12px]">
                      {dayjs(v.posts_timestamp).format('MMM DD, YYYY')}
                    </span>
                  </div>
                  <div className="text-[14px] underline">{v.username}</div>
                  <span>
                    {v.content.length > 50
                      ? `${v.content.substring(0, 50)}...`
                      : v.content}
                  </span>
                  <div className="text-[12px] pc:hidden">
                    {dayjs(v.posts_timestamp).format('MMM DD, YYYY')}
                  </div>
                </Link>

                <div className="text-[14px] text-292929">
                  <div className="flex gap-2">
                    <span className="text-575757 flex pc:w-[55px]">
                      <RiEyeFill className="pr-1" />
                      {v.view_count}
                    </span>
                    <span className="text-575757 flex pc:w-[55px]">
                      <RiChat4Fill className="pr-1" />
                      {v.comment_count}
                    </span>
                    <span className="text-575757 flex pc:w-[55px]">
                      <RiHeartFill className="pr-1" />
                      {v.likes}
                    </span>
                    {auth.id === v.user_id && (
                      <div className="dropdown dropdown-right dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          // onClick={() => setToggleMenu(!toggleMenu)}
                          onClick={() => removePost(v.post_id)}
                        >
                          <RiDeleteBinLine className="pr-1 text-575757" />
                        </div>
                        {/* {toggleMenu && (
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg w-24"
                          >
                            <li onClick={() => removePost(v.post_id)}>
                              <a>remove</a>
                            </li>
                          </ul>
                        )} */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Link
                className="ml-6 w-[100px] pc:w-[150px] flex items-center justify-end flex-shrink-0 cursor-pointer"
                // onClick={() => handlePush(v.post_id)}
                href={`/community/main-post?postId=${v.post_id}`}
              >
                {v.image_url && (
                  <Image
                    className="size-[100px] object-cover rounded-xl"
                    src={`${SN_COMMUNITY}/${v.image_url}`}
                    alt="上傳的無法顯示圖片"
                    width={100}
                    height={100}
                  />
                )}
              </Link>
            </div>
          </main>
        )
      })}
    </>
  )
}
