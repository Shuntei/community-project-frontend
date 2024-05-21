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
// import img from './img/1868140_screenshots_20240115034222_1.jpg'
import Link from 'next/link'
import { useBoards } from '@/contexts/use-boards'
import { useToggles } from '@/contexts/use-toggles'
import { SN_DELETE_POST, SN_PSPOSTS } from '../config/johnny-api-path'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { useAuth } from '@/contexts/auth-context'

export default function PersonalContent() {
  const router = useRouter()
  const { render, setRender } = useBoards()
  const { setEditModal } = useToggles()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [psPosts, setPsPosts] = useState('')
  const { auth } = useAuth()
  // console.log('my id:', auth.id)

  const psUserId = router.query.psUserId
  const query = { ...router.query, psUserId: psUserId }
  const queryString = new URLSearchParams(query).toString()
  // console.log(queryString)
  // console.log(location.search) undefined

  const allPsPostsShow = async () => {
    try {
      const r = await fetch(`${SN_PSPOSTS}?${queryString}`)
      const data = await r.json()
      setPsPosts(data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const removePost = async (postId) => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      icon: 'warning',
      title: '確認刪除貼文?',
      showCancelButton: true,
      showCancelButton: true,
      confirmButtonColor: '#292929',
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
            // console.log(result)
            if (result.success) {
              // router.reload();
              // router.push(location.search);
              setRender(true)
            } else {
              toast.error('刪除失敗')
            }
          })
      }
    })
  }
  useEffect(() => {
    if (router.isReady) {
      allPsPostsShow()
      setRender(false)
    }
  }, [router.query.pspage, router.isReady, psUserId, render])

  const startPage = Math.max(1, psPosts.page - 2) // 計算開始的頁碼，不能小於 1
  const endPage = Math.min(startPage + 3, psPosts.totalPages) // 計算結束的頁碼，不能大於總頁數

  return (
    <>
      {psPosts.totalPostsRows?.length === 0 ? (
        <ul className=" flex justify-center text-xl"></ul>
      ) : (
        <ul className="bg-neutral-300 flex justify-center text-xl py-2">
          <span
            className="border-s-2 px-3 py-3 flex items-center hover:hover1"
            onClick={() => {
              router.push(
                {
                  // pathname: '/community/main-personal',
                  query: { ...router.query, pspage: `${1}` },
                },
                undefined,
                { shallow: true }
              )
            }}
          >
            <RiArrowLeftDoubleLine />
          </span>
          {psPosts &&
            Array(endPage - startPage + 1)
              .fill(1)
              .map((v, i) => {
                // const p = psPosts.page - 5 + i
                const p = startPage + i
                if (p < 1 || p > psPosts.totalPages) return null
                return (
                  <li key={p}>
                    <span
                      onClick={() => {
                        router.push(
                          {
                            // pathname: '/community/main-personal',
                            query: { ...router.query, pspage: `${p}` },
                          },
                          undefined,
                          { shallow: true }
                        )
                      }}
                      className={`border-s-2 px-5 flex py-3 hover:hover1 cursor-pointer
                     active:bg-white ${p === psPosts.page ? 'bg-white' : ''} `}
                      // onClick={() => handlePsPage(router.query.page)} 已在useEffect依賴
                    >
                      {p}
                    </span>
                  </li>
                )
              })}
          <span
            className="border-x-2 px-3 py-3 flex items-center hover:hover1"
            onClick={() => {
              router.push(
                {
                  // pathname: '/community/main-personal',
                  query: { ...router.query, pspage: `${psPosts.totalPages}` },
                },
                undefined,
                { shallow: true }
              )
            }}
          >
            <RiArrowRightDoubleLine />
          </span>
        </ul>
      )}
      {psPosts.totalPostsRows?.length === 0 ? (
        <h1
          className="flex bg-neutral-300 leading border-b-slate-500 justify-center 
        text-[20px] font-semibold py-10 mb-10"
        >
          沒有任何貼文
        </h1>
      ) : (
        ''
      )}
      {psPosts.totalPostsRows &&
        psPosts.totalPostsRows.map((v, i) => {
          return (
            <main
              className="flex bg-neutral-300 border-b border-b-slate-500"
              key={v.post_id}
            >
              <div
                // onClick={() => handlePush(v.post_id)} // href={`/community/main-post`}
                className=" pc:px-20 px-10 py-3 flex transition-transform w-full
                          duration-300
                          shadow-md
                          hover:shadow-lg
                        hover:bg-neutral-200
                          hover:ring-opacity-15"
                // hover:ring-1 hover:ring-offset-2 hover:ring-offset-gray-300
              >
                <div className="w-[70%]">
                  {/* 改span或div用router push改 */}
                  <span
                    name="postId"
                    onClick={() => {
                      const href = {
                        pathname: `/community/main-post`,
                        query: { postId: `${v.post_id}` },
                      }
                      // handlePush(v.post_id)
                      router.push(href)
                    }}
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
                  </span>
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
                      <div className="relative">
                        <div
                          className="dropdown dropdown-right dropdown-end"
                          onClick={() => setToggleMenu(!toggleMenu)}
                        >
                          <div tabIndex={0} role="button">
                            <RiMoreFill className="pr-1 cursor-pointer" />
                          </div>
                          {toggleMenu && (
                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-24"
                            >
                              <li onClick={() => removePost(v.post_id)}>
                                <a>remove</a>
                              </li>
                              <li>
                                <Link
                                  href={`/community/edit/${v.post_id}`}
                                  onClick={() => setEditModal(true)}
                                >
                                  edit
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>
                        {/* {toggleMenu && (
                          <ul
                            tabIndex={0}
                            className="bg-white absolute bottom-0 left-[30px] rounded-lg"
                          >
                            <li
                              onClick={() => removePost(v.post_id)}
                              className="cursor-pointer p-2 hover:bg-slate-300"
                            >
                              <a>remove</a>
                            </li>
                            <li className="cursor-pointer p-2 hover:bg-slate-300">
                              <a>edit</a>
                            </li>
                          </ul>
                        )} */}
                      </div>
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
                      width={100}
                      height={100}
                      alt="上傳的無法顯示圖片"
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
