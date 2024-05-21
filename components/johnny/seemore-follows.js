import React, { useEffect, useRef, useState } from 'react'
import {
  RiSearchLine,
  RiCloseLine,
  RiGroupLine,
  RiUserLine,
} from '@remixicon/react'
// import Image from 'next/image'
// import profileImg from './img/16.jpg'
import { useToggles } from '@/contexts/use-toggles'
import { SN_SHOW_FOLLOWS, SN_USER_INFO } from '../config/johnny-api-path'
import { IMG_SERVER } from '../config/api-path'
import { useRouter } from 'next/router'
import useOutsideClick from './utils/out-side-click'
import { useAuth } from '@/contexts/auth-context'

export default function SeeMoreFollows({ marginTop = `` }) {
  const { toggles, setToggles } = useToggles()
  const [userInfo, setUserinfo] = useState('')
  const [followsInfo, setFollowsInfo] = useState('')
  const [keyword, setKeyword] = useState('')
  const [showAllUsers, setShowAllUsers] = useState(false)

  const { auth } = useAuth()
  const router = useRouter()
  const query = { ...router.query, followsKeyword: keyword }
  const queryString = new URLSearchParams(query).toString()
  // console.log(query)
  console.log(queryString)

  const ref = useRef()
  useOutsideClick(ref, () => {
    fetchAllUsers()
    fetchAFollows()
  })

  const fetchAllUsers = () => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result)
        setUserinfo(result)
      })
  }

  const fetchAFollows = () => {
    fetch(`${SN_SHOW_FOLLOWS}${location.search}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result)
        result.follows && setFollowsInfo(result.follows)
      })
  }

  const allUsersSearchHandler = (e) => {
    // e.preventDefault()
    // router.push({ pathname: '/community/main-page', query: queryString })
    // 這行寫了在personal會有問題,因為跳回main-page
    fetch(`${SN_USER_INFO}?${queryString}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
        setUserinfo(result)
      })
  }
  const followsSearchHandler = (e) => {
    // e.preventDefault()
    // const controller = new AbortController()
    // const signal = controller.signal
    fetch(
      `${SN_SHOW_FOLLOWS}?${router.query.psUserId}&${queryString}`
      // , {signal,  }
    )
      .then((r) => r.json())
      .then((result) => {
        console.log(result)
        result.follows && setFollowsInfo(result.follows)
      })
  }

  useEffect(() => {
    fetchAllUsers()
    fetchAFollows()
  }, [router.query])

  useEffect(() => {
    if (showAllUsers) {
      allUsersSearchHandler()
    } else {
      followsSearchHandler()
    }
  }, [keyword])

  return (
    <span ref={ref}>
      <div
        className={`flex justify-end bg-neutral-300 ${marginTop} rounded-t-lg pt-5 px-5`}
      >
        <RiCloseLine
          className="cursor-pointer pc:mt-1 mt-10"
          onClick={() => {
            setToggles({ ...toggles, follows: false, notification: false })
          }}
        />
      </div>
      <div className="flex justify-center pb-5 px-10 mb-5 rounded-b-lg bg-neutral-300">
        <div className="flex-col items-center">
          <div className="text-center py-3 text-[20px]">
            {showAllUsers ? 'ALL USERS' : 'FOLLOWING'}
          </div>
          <div className="flex justify-center py-5">
            <input
              className="flex p-[6px] items-center outline-none h-[32px] pc:w-[250px] w-full pc:shadow1 rounded-l-lg pl-5"
              onChange={(e) => {
                setKeyword(e.target.value)
              }}
              value={keyword}
            />

            <span
              // onClick={allUsersSearchHandler}
              className="px-2 bg-white flex items-center h-[32px] p-[6px] translate-x-[-5px] pc:translate-x-0 pc:shadow1 rounded-r-lg"
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
            <span
              onClick={() => setShowAllUsers(!showAllUsers)}
              className="cursor-pointer ml-2"
            >
              {showAllUsers ? <RiUserLine /> : <RiGroupLine />}
            </span>
          </div>
          <div>
            <ul className="rounded-full pc:grid pc:grid-cols-2 pc:ml-20 gap-x-20">
              {showAllUsers &&
                userInfo &&
                userInfo
                  ?.filter((v) => v.id !== auth.id)
                  .map((v, i) => {
                    return (
                      <li
                        key={v.id}
                        className="flex items-center py-2 cursor-pointer w-[200px] "
                        onClick={() => {
                          // console.log(v.id)
                          if (v.id === auth.id) {
                            router.push({
                              pathname: '/community/main-personal',
                              query: { ...router.query, psUserId: v.id },
                            })
                          } else {
                            router.push({
                              // pathname: '/community/main-personal',
                              pathname: '/community/main-page',
                              query: { ...router.query, psUserId: v.id },
                            })
                          }

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
                          className="size-[80px] object-cover rounded-full mr-3 bg-575757"
                          src={
                            v.google_id
                              ? v.profile_pic_url ||
                                `${IMG_SERVER}/${v.profile_pic_url}`
                              : `${IMG_SERVER}/${v.profile_pic_url}`
                          }
                          alt=""
                        />
                        <div>{v.username}</div>
                      </li>
                    )
                  })}
              {!showAllUsers &&
                followsInfo &&
                followsInfo.map((v, i) => {
                  return (
                    <li
                      key={v.id}
                      className="flex items-center py-2 cursor-pointer w-[200px]"
                      onClick={() => {
                        // console.log(v.id)
                        if (v.id === auth.id) {
                          router.push({
                            pathname: '/community/main-personal',
                            query: { ...router.query, psUserId: v.id },
                          })
                        } else {
                          router.push({
                            pathname: '/community/main-page',
                            query: { ...router.query, psUserId: v.id },
                          })
                        }

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
                        className="size-[80px] object-cover rounded-full mr-3 bg-575757"
                        src={
                          v.google_id
                            ? v.profile_pic_url ||
                              `${IMG_SERVER}/${v.profile_pic_url}`
                            : `${IMG_SERVER}/${v.profile_pic_url}`
                        }
                        alt=""
                      />
                      <div>{v.username}</div>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </span>
  )
}
