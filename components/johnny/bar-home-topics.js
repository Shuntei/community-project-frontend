import React, { useContext, useEffect, useState } from 'react'
import { useBoards } from '@/contexts/use-boards'
import { RiArrowDropDownLine, RiListCheck } from '@remixicon/react'
import { SN_BOARDS } from '../config/johnny-api-path'
import { useRouter } from 'next/router'

export default function Topics() {
  const router = useRouter()
  const { boards, setBoards, setSelectedPosts, isBoard, setIsBoard } =
    useBoards()
  // const [isBoard, setIsBoard] = useState('')

  useEffect(() => {
    fetch(`${SN_BOARDS}`)
      .then((r) => r.json())
      .then((data) => setBoards(data))
  }, [])

  // console.log('第一步拿到boardId', router.query.boardId)

  useEffect(() => {
    if (!router.isReady) return
    // console.log('第二步進入抓取資料')
    fetch(`${SN_BOARDS}/${location.search}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log('第三步抓到資料', result)
        setSelectedPosts(result)
      })
      .catch((ex) => console.log({ ex }))
  }, [router.query.boardId])
  // console.log(router.query.boardId)
  return (
    <>
      <section className="fixed mt-[40px] hidden bargone:block ml-10 h-[600px] pb-20 overflow-y-scroll z-[998] bg-292929 rounded-b-3xl hover:scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-700">
        <div className="text-white px-10 pt-3 pb-1 text-[20px]  cursor-pointer">
          TOPICS
        </div>
        <div className="border-b-2 mx-10 w-[200px]"></div>
        <ul>
          <li
            className={` text-white px-10 py-3 flex cursor-pointer duration-200 hover:text-2xl`}
            onClick={() => {
              setIsBoard()
              router.push({
                pathname: '/community/main-page',
              })
            }}
          >
            所有文章
            {/* <RiArrowDropDownLine /> */}
          </li>
          {boards &&
            boards.map((v, i) => {
              return (
                <li
                  className={`text-white px-10 py-3 flex cursor-pointer duration-200 hover:text-2xl `}
                  key={v.board_id}
                  onClick={() => {
                    setIsBoard(v.board_name)
                    router.push({
                      query: {
                        ...router.query,
                        boardId: v.board_id,
                        bdpage: 1,
                        keyword: '',
                      },
                    })
                  }}
                >
                  {v.board_name}
                  {/* <RiArrowDropDownLine /> */}
                </li>
              )
            })}
        </ul>
      </section>
    </>
  )
}
