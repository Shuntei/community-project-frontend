import 'tailwindcss/tailwind.css'
import { RiSearchLine, RiListCheck, RiCloseLine } from '@remixicon/react'
import MainContent from '@/components/johnny/content-list'
import MainContentBd from '@/components/johnny/content-list-bd'
import SeeMoreFollows from '@/components/johnny/seemore-follows'
import SeeMoreNotification from '@/components/johnny/seemore-followers'
import { useToggles } from '@/contexts/use-toggles'
import { useEffect, useRef, useState } from 'react'
import { SN_POSTS } from '@/components/config/johnny-api-path'
import { useBoards } from '@/contexts/use-boards'
import { useRouter } from 'next/router'
import useOutsideClick from '@/components/johnny/utils/out-side-click'

export default function CentralContent() {
  const { toggles } = useToggles()
  const {
    render,
    setRender,
    postsShow,
    setPostsLists,
    selectedPosts,
    boards,
    isBoard,
    setIsBoard,
  } = useBoards()
  const [sortBy, setSortBy] = useState('time')
  const [searchTerm, setSearchTerm] = useState('')
  const [showBoards, setShowBoards] = useState(false)
  const ref = useRef()

  useOutsideClick(ref, () => {
    setShowBoards(false)
  })

  const router = useRouter()
  const query = { ...router.query, keyword: searchTerm }
  // console.log(query)

  const queryHandler = () => {
    const queryString = new URLSearchParams(query).toString()
    router.push({ pathname: '/community/main-page', query: queryString })
    console.log(queryString)

    const urlWithQuery = `${SN_POSTS}?${queryString}`

    fetch(urlWithQuery)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)

        setPostsLists(data)
      })
  }

  useEffect(() => {
    postsShow()

    // 發送後(刪除)會設成true用於重整,這裡設回false
    setRender(false)
  }, [render])

  useEffect(() => {
    queryHandler()
  }, [searchTerm])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setShowBoards(false) // 這裡可以根據窗大小設置showBoards的值
    })
  }, [])

  return (
    <>
      {/* 依據navbar  加mt-[88px] pc:mt-[113px] */}
      <div className="flex justify-center mt-[50px] pc:mt-[112px] overflow-scroll">
        <section className="w-full pc:w-[800px]">
          {toggles.follows || toggles.notification ? (
            ''
          ) : (
            <div className="w-full  pc:flex justify-between items-center h-[100px] mt-[50px] fixed pc:w-[800px] pc:px-20 px-10 bg-neutral-300 z-[997]">
              <div className=" text-[32px] flex justify-center items-center">
                {isBoard ? `[${isBoard}]` : '[COMMUNITY]'}
              </div>
              <div className="flex justify-center items-center py-2">
                <div
                  className="dropdown"
                  onClick={() => setShowBoards(!showBoards)}
                  ref={ref}
                >
                  <div className="relative">
                    <RiListCheck className="bargone:hidden cursor-pointer" />
                  </div>
                  {showBoards && (
                    <ul
                      className="absolute w-[120px] bg-zinc-100 h-[200px] px-2 py-1 mt-3 overflow-y-scroll 
                      scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200"
                    >
                      <li
                        className="py-1 cursor-pointer hover:bg-gray-200 text-center px-2"
                        onClick={() => {
                          setIsBoard()
                          router.push({
                            pathname: '/community/main-page',
                          })
                        }}
                      >
                        所有文章
                      </li>
                      {boards &&
                        boards.map((v, i) => {
                          return (
                            <li
                              className="py-1 cursor-pointer hover:bg-gray-200 text-center px-2"
                              key={i}
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
                            </li>
                          )
                        })}
                    </ul>
                  )}
                </div>
                <select
                  className="mx-3 p-1 outline-none text-center rounded-lg flex cursor-pointer"
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value)
                    router.push({
                      pathname: '/community/main-page',
                      query: { ...router.query, filter: e.target.value },
                    })
                  }}
                >
                  <option value="newTime">顯示較新貼文</option>
                  <option value="oldTime">顯示較舊貼文</option>
                  <option value="likes">依按讚數排序</option>
                  <option value="views">依觀看數排序</option>
                  <option value="comments">依評論數排序</option>
                </select>
                <div className="flex">
                  <input
                    className="flex p-[6px] items-center outline-none h-[32px] pc:w-[200px] w-full  pc:shadow1 rounded-l-lg pl-5"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                    }}
                    placeholder="關鍵字"
                  />
                  <span
                    className="px-2 bg-white flex items-center h-[32px] p-[6px] translate-x-[-5px] pc:translate-x-0  pc:shadow1 rounded-r-lg"
                    // onClick={queryHandler}
                  >
                    {searchTerm ? (
                      <RiCloseLine
                        onClick={() => setSearchTerm('')}
                        className="cursor-pointer"
                      />
                    ) : (
                      <RiSearchLine />
                    )}
                  </span>
                </div>{' '}
              </div>
            </div>
          )}

          {toggles.follows ? (
            <SeeMoreFollows marginTop={`mt-5`} />
          ) : toggles.notification ? (
            <SeeMoreNotification />
          ) : (
            <div className="pt-[100px] pc:pt-[60px] bg-neutral-300">
              {selectedPosts.selectedBdPostsRows ? (
                <MainContentBd />
              ) : (
                <MainContent />
              )}
            </div>
          )}
        </section>
      </div>
    </>
  )
}
