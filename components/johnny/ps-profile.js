import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
// import img from './img/90.jpg'
import { RiDraftLine, RiBookmarkFill } from '@remixicon/react'
import { useToggles } from '@/contexts/use-toggles'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '../config/api-path'
import {
  SN_HANDLE_STATUS,
  SN_PSPOSTS,
  SN_SHOW_FOLLOWS,
  SN_USER_INFO,
} from '../config/johnny-api-path'
import { useRouter } from 'next/router'
import { useBoards } from '@/contexts/use-boards'
import relationHandler from './utils/relationHandler'
import useOutsideClick from './utils/out-side-click'
// import SeeMoreFollows from '@/components/johnny/seemore-follows'

export default function Profile() {
  const { toggles, setToggles } = useToggles()
  const { render, setRender } = useBoards()
  const { auth } = useAuth()
  const router = useRouter()
  // console.log(router)
  // console.log(auth.id)
  const [postsTable, setPostsTable] = useState('')
  const [userInfo, setUserinfo] = useState('')
  const [showRelation, setShowRelation] = useState(false)
  const [followStatus, setFollowStatus] = useState('')
  const [sendStatus, setSendStatus] = useState(false)
  const [followsCount, setFollowsCount] = useState('')
  const [followersCount, setFollowersCount] = useState('')

  // console.log('有?', userInfo.id)
  // console.log('followStatus', followStatus)

  const ref = useRef()
  useOutsideClick(ref, () => {
    setShowRelation(false)
  })

  const psUserId = router.query.psUserId
  const query = { ...router.query, psUserId: psUserId }
  const queryString = new URLSearchParams(query).toString()
  // console.log(query)
  // console.log(queryString)

  const fetchAllFollows = () => {
    fetch(`${SN_USER_INFO}`)
      .then((r) => r.json())
      .then((result) => {
        // console.log(result)
        if (!psUserId) return
        let selectedUser = result.find((v, i) => v.id == psUserId)
        // console.log(selectedUser)
        setUserinfo(selectedUser)
        // if (!selectedUser?.user_id || selectedUser?.user_id !== auth.id) {
        //   // 判斷是否為user的朋友,沒有user_id或id不等於使用者就不是當登入者朋友
        //   // setFollowStatus('unfollow')
        //   setFollowStatus({ ...followStatus, status: 'unfollow' })
        // } else if (selectedUser?.user_id && selectedUser?.user_id === auth.id) {
        //   // setFollowStatus('follow')
        //   setFollowStatus({ ...followStatus, status: 'follow' })
        // }
      })
  }

  const fetchSnPostsTable = async () => {
    try {
      const r = await fetch(`${SN_PSPOSTS}?${queryString}`)
      const data = await r.json()
      setPostsTable(data)
      // console.log(data)
      // console.log(data.postsAmount[0]['COUNT(1)'])
    } catch (err) {
      console.log(err)
    }
  }

  const followsAmount = () => {
    fetch(`${SN_SHOW_FOLLOWS}${location.search}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result)

        if (auth.id !== psUserId) {
          const following = result.followers.find((v) => v.user_id === auth.id)
          // console.log(result.followers)
          // console.log(following)
          if (following) {
            setFollowStatus({ ...followStatus, status: 'follow' })
          } else {
            setFollowStatus({ ...followStatus, status: 'unfollow' })
          }
        }

        // console.log(result.follows?.length)
        // console.log(result.followers?.length)
        setFollowsCount(result.follows?.length)
        setFollowersCount(result.followers?.length)
      })
  }

  const statusQuery = new URLSearchParams(followStatus).toString()
  console.log(statusQuery)
  const relationChange = () => {
    fetch(`${SN_HANDLE_STATUS}?${statusQuery}`)
      .then((r) => r.json())
      .then((result) => console.log(result))
    // console.log(`http://localhost:3001/community/followedstatus?${statusQuery}`)
  }

  useEffect(() => {
    fetchSnPostsTable()
    followsAmount()
    if (psUserId) {
      fetchAllFollows()
    }
  }, [render, psUserId, queryString, statusQuery])

  useEffect(() => {
    if (!router.isReady) return
    relationChange()
    // 手機板電腦版兩個地方有,如使用!showSendStatus會負負得正
    setSendStatus(false)
  }, [sendStatus, queryString])

  return (
    <>
      <div className="flex justify-center mr-[10%] w-full ">
        <div className="flex items-center pc:gap-10">
          <div className="overflow-hidden size-[100px] pc:size-[128px] translate-x-[20%] translate-y-[-10%] pc:translate-x-[40%] pc:translate-y-[-40%] PcImagePosition">
            {/* <Image
              src={
                auth.profileUrl
                  ? auth.googlePhoto
                    ? auth.profileUrl
                    : `${IMG_SERVER}/${auth.profileUrl}`
                  : ''
              }
              參考用來源
            /> */}
            {/* <img src="./img/0da44d263f64186851d88be18f8d36f78a4f7d5f.jpg" alt="" /> */}
            <img
              src={
                userInfo?.profile_pic_url
                  ? userInfo?.google_photo
                    ? userInfo?.profile_pic_url
                    : `${IMG_SERVER}/${userInfo?.profile_pic_url}`
                  : ''
              }
              // fill={true}
              // objectFit="cover"
              alt=""
              className="rounded-full bg-zinc-300 object-cover size-full"
            />
          </div>

          <div className="text-white pc:ml-56 ml-[140px] mt-2 pc:my-3">
            <div className="text-[24px]">{userInfo?.username}&nbsp;</div>
            <div className="flex pc:gap-16 items-end mt-2">
              <ul className="flex gap-4 pc:gap-6">
                <li className="text-[12px] pc:text-[16px]">
                  POSTS
                  <div className="text-center">
                    {postsTable?.postsAmount
                      ? postsTable?.postsAmount[0]['COUNT(1)']
                      : 0}
                  </div>
                </li>
                <li
                  className="text-[12px] pc:text-[16px] cursor-pointer"
                  onClick={() => {
                    setToggles({
                      ...toggles,
                      notification: false,
                      follows: true,
                    })
                  }}
                >
                  FOLLOWING{' '}
                  <div className="text-center">
                    {followsCount ? followsCount : 0}
                  </div>
                </li>
                <li
                  className="text-[12px] pc:text-[16px] cursor-pointer"
                  onClick={() => {
                    setToggles({
                      ...toggles,
                      notification: true,
                      follows: false,
                    })
                  }}
                >
                  FOLLOWERS{' '}
                  <div className="text-center">
                    {followersCount ? followersCount : 0}
                  </div>
                </li>
              </ul>
              <ul className="hidden pc:flex w-[120px]">
                {/* 電腦螢幕收藏功能取消 */}
                {/* {router.pathname.includes('/main-personal') && (
                  <ul className="hidden pc:flex">
                    <li>
                      <RiDraftLine className="text-[24px]" />
                    </li>
                    <li>
                      <RiBookmarkFill className="text-[24px]" />
                    </li>
                  </ul>
                )} */}
                {router.pathname.includes('/main-page') && (
                  <li className="relative">
                    <div className="cursor-pointer relative">
                      <div
                        className="flex items-center  "
                        onClick={() => setShowRelation(!showRelation)}
                      >
                        {followStatus.status && auth.id
                          ? relationHandler(followStatus.status)
                          : ''}
                      </div>
                      {showRelation && (
                        <ul className="menu bg-base-100 rounded-lg w-32 text-black absolute mt-2">
                          <li>
                            <a
                              onClick={() => {
                                setFollowStatus({
                                  ...followStatus,
                                  psUserId: userInfo.id,
                                  authId: auth.id,
                                  status: 'follow',
                                })
                                setSendStatus(true)
                                // setIsFormChanged(true)
                              }}
                            >
                              FOLLOW
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                setFollowStatus({
                                  ...followStatus,
                                  psUserId: userInfo.id,
                                  authId: auth.id,
                                  status: 'unfollow',
                                })
                                setSendStatus(true)
                                // setIsFormChanged(true)
                              }}
                            >
                              UNFOLLOW
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex justify-end pc:hidden pr-5 gap-3 mt-1">
              {/* 手機尺寸收藏功能取消 */}
              {/* {router.pathname.includes('/main-personal') && (
                <>
                  <RiDraftLine className="text=[24px]" />
                  <RiBookmarkFill className="text-[24px]" />
                </>
              )} */}
              <ul>
                {router.pathname.includes('/main-page') && (
                  <li className="relative">
                    <div className="cursor-pointer relative">
                      <div
                        className="flex items-center  "
                        onClick={() => setShowRelation(!showRelation)}
                      >
                        {relationHandler(followStatus.status)}
                      </div>
                      {showRelation && (
                        <span className="menu bg-base-100 rounded-lg w-24 text-black absolute mt-2 right-0 ">
                          <span>
                            <a
                              onClick={() => {
                                setFollowStatus({
                                  ...followStatus,
                                  psUserId: userInfo.id,
                                  authId: auth.id,
                                  status: 'follow',
                                })
                                setSendStatus(true)
                                // setIsFormChanged(true)
                              }}
                            >
                              FOLLOW
                            </a>
                          </span>
                          <span>
                            <a
                              onClick={() => {
                                setFollowStatus({
                                  ...followStatus,
                                  psUserId: userInfo.id,
                                  authId: auth.id,
                                  status: 'unfollow',
                                })
                                setSendStatus(true)
                                // setIsFormChanged(true)
                              }}
                            >
                              UNFOLLOW
                            </a>
                          </span>
                        </span>
                      )}
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
