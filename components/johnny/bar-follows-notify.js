import React, { useEffect, useRef, useState } from 'react'
import { RiSearchLine, RiCloseLine } from '@remixicon/react'
import Image from 'next/image'
import profileImg from './img/16.jpg'
import { useToggles } from '@/contexts/use-toggles'
import { SN_USER_INFO } from '../config/johnny-api-path'
import { IMG_SERVER } from '../config/api-path'
import { useRouter } from 'next/router'
import useOutsideClick from './utils/out-side-click'
import { useAuth } from '@/contexts/auth-context'

export default function FollowsBar() {
  const { toggles, setToggles } = useToggles()
  const [userInfo, setUserinfo] = useState('')
  const [keyword, setKeyword] = useState('')
  const { auth } = useAuth()
  // console.log(query)
  // console.log(queryString)
  const fetchAllFollows = () => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
        setUserinfo(result)
        console.log(result)
      })
  }

  const ref = useRef()
  useOutsideClick(ref, () => {
    fetchAllFollows()
  })

  const router = useRouter()
  const query = { ...router.query, followsKeyword: keyword }
  const queryString = new URLSearchParams(query).toString()

  const submitHandler = (e) => {
    // e.preventDefault()
    // router.push({ pathname: '/community/main-page', query: queryString })
    // 這行寫了在personal會有問題,因為跳回main-page

    fetch(`${SN_USER_INFO}?${queryString}`)
      .then((r) => r.json())
      .then((result) => {
        setUserinfo(result)
        console.log(result)
      })
      .catch((err) => {
        console.error('Error fetching user info:', err)
      })
  }

  useEffect(() => {
    fetchAllFollows()
  }, [])

  useEffect(() => {
    submitHandler()
  }, [keyword])

  return (
    <span ref={ref}>
      <section className="fixed right-0 mt-[40px] pt-[10px] w-[260px] hidden bargone:block h-[600px] overflow-scroll pb-20 mr-10 pl-5 rounded-b-3xl z-[998] bg-292929">
        <div className="mb-5">
          <div></div>
          <div className="text-white py-1 text-[20px] ">ALL USERS</div>
          <div className="border-b-2 mb-2 w-[200px]"></div>
          <div className="flex py-1">
            <input
              className="flex p-[6px] items-center outline-none h-[32px] w-[160px] rounded-l-lg pl-5 my-3 "
              onChange={(e) => {
                setKeyword(e.target.value)
                // submitHandler()
              }}
              value={keyword}
            />
            <span
              // onClick={submitHandler}
              className="iconBg px-2 bg-white flex items-center h-[32px] p-[6px] rounded-r-lg my-3"
            >
              {keyword ? (
                <RiCloseLine
                  className="cursor-pointer"
                  onClick={() => setKeyword('')}
                />
              ) : (
                <RiSearchLine />
              )}
            </span>
          </div>
          <ul className="h-[400px] overflow-auto hover:scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-700">
            {userInfo &&
              userInfo
                ?.filter((v) => v.id !== auth.id)
                .map((v, i) => {
                  return (
                    <li
                      key={v.id}
                      className="text-white py-2 flex items-center cursor-pointer"
                      onClick={() => {
                        console.log(v.id)
                        router.push({
                          pathname: '/community/main-page',
                          // query: { ...router.query, psUserId: v.id },
                          query: { psUserId: v.id },
                        })
                        //先確定v.id傳出後再關閉follows,免得先關了卻沒傳出會無法變更
                        setTimeout(() => {
                          setToggles({
                            ...toggles,
                            notification: false,
                            follows: false,
                          })
                        }, 10)
                      }}
                    >
                      <img
                        className="w-[35px] h-[35px] object-cover overflow-hidden rounded-full mr-5 bg-zinc-300"
                        src={
                          v.google_id
                            ? v.profile_pic_url.includes('https')
                              ? v.profile_pic_url
                              : `${IMG_SERVER}/${v.profile_pic_url}`
                            : `${IMG_SERVER}/${v.profile_pic_url}`
                        }
                        alt=""
                      />
                      {v.username.length > 15
                        ? `${v.username.substring(0, 15)}...`
                        : v.username}
                    </li>
                  )
                })}
          </ul>
          {/* <div
            className="text-white flex justify-end mr-5 text-[14px] font-semibold  hover:cursor-pointer "
            onClick={() => {
              setToggles({
                ...toggles,
                notification: false,
                follows: true,
              })
            }}
          >
            MORE...
          </div> */}
        </div>
      </section>
    </span>
  )
}
