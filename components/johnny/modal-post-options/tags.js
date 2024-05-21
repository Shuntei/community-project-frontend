import React, { useEffect, useRef, useState } from 'react'
import { RiCloseLine, RiPriceTag3Fill } from '@remixicon/react'
import useOutsideClick from '../utils/out-side-click'
import { SN_USER_INFO } from '@/components/config/johnny-api-path'
import { useAuth } from '@/contexts/auth-context'
import { useToggles } from '@/contexts/use-toggles'
import { useRouter } from 'next/router'

export default function Tags({ postForm, setPostForm, setIsFormChanged }) {
  const [showTags, setShowTags] = useState(false)
  const ref = useRef()

  useOutsideClick(ref, () => {
    setShowTags(false)
  })

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
      })
  }

  // const ref = useRef()
  // useOutsideClick(ref, () => {
  //   fetchAllFollows()
  // })

  const router = useRouter()
  const query = { ...router.query, followsKeyword: keyword }
  const queryString = new URLSearchParams(query).toString()

  const submitHandler = (e) => {
    e.preventDefault()
    // router.push({ pathname: '/community/main-page', query: queryString })
    // 這行寫了在personal會有問題,因為跳回main-page

    fetch(`${SN_USER_INFO}?${queryString}`)
      .then((r) => r.json())
      .then((result) => {
        setUserinfo(result)
      })
  }

  useEffect(() => {
    fetchAllFollows()
  }, [])

  return (
    <>
      <div className="cursor-pointer relative" ref={ref}>
        <div
          className="flex items-center"
          onClick={() => setShowTags(!showTags)}
        >
          <RiPriceTag3Fill className="mr-2 text-[24px]" />
          <span className="hidden pc:flex">Tags</span>
        </div>
        {showTags && (
          <ul
            className="menu rounded-lg w-40 text-black absolute bottom-[2rem] 
                      pc:left-[-1rem] left-[-4rem] h-[216px] grid grid-cols-1 overflow-x-hidden overflow-y-auto bg-base-200 "
          >
            {userInfo &&
              userInfo
                ?.filter((v) => v.id !== auth.id)
                .map((v, i) => {
                  return (
                    <>
                      <li key={i}>
                        <a
                          onClick={() => {
                            setPostForm({ ...postForm, tags: v.username })
                            setIsFormChanged(true)
                          }}
                        >
                          @{v.username}
                        </a>
                      </li>
                    </>
                  )
                })}
          </ul>
        )}
      </div>
    </>
  )
}
