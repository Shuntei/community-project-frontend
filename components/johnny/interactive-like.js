import React, { useEffect, useState } from 'react'
import { RiHeartLine, RiHeartFill } from '@remixicon/react'
import {
  SN_LIKES_CHANGE,
  SN_LIKES_STATE,
  SN_POSTS,
} from '@/components/config/johnny-api-path'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'
import { useBoards } from '@/contexts/use-boards'

export default function LikeButton() {
  const [likesChange, setLikesChange] = useState(false)
  const [isUserLike, setIsUserLike] = useState(false)
  const { getPost, setGetPost } = useBoards()
  const { auth } = useAuth()
  const router = useRouter()
  // console.log('the postId', postId)
  const postId = router.query.postId

  const query = { ...router.query, postId: postId, userId: auth.id }
  const queryString = new URLSearchParams(query).toString()

  const toggleLike = async () => {
    const r = await fetch(`${SN_LIKES_CHANGE}?${queryString}`)
    const data = await r.json()
    console.log(auth.id)
    // console.log(!data.rows.map((v) => v.user_id).includes(auth.id))
    const userLikeState = !data.rows.map((v) => v.user_id).includes(auth.id) //狀態為已變更的資料庫上一棟,使用!
    setIsUserLike(userLikeState)
    setLikesChange(!likesChange)
  }

  useEffect(() => {
    fetch(`${SN_POSTS}?postId=${postId}`)
      .then((r) => r.json())
      .then((result) => setGetPost(result))
  }, [likesChange])

  useEffect(() => {
    fetch(`${SN_LIKES_STATE}/${postId}`)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        const userLikeState = data.rows.map((v) => v.user_id).includes(auth.id)
        // console.log(userLikeState)
        setIsUserLike(userLikeState)
      })
  }, [])

  return (
    <span
      className=" flex cursor-pointer"
      onClick={() => {
        toggleLike()
      }}
    >
      {isUserLike ? (
        <RiHeartFill className="pr-1 text-red-400" />
      ) : (
        <RiHeartLine className="pr-1" />
      )}

      {getPost[0].likes}
    </span>
  )
}
