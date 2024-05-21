import React, { useState } from 'react'
import { RiEyeFill } from '@remixicon/react'
import { SN_POSTS } from '@/components/config/johnny-api-path'
import { useRouter } from 'next/router'

export default function Views() {
  const router = useRouter()
  const postId = router.query.postId
  const [viewCount, setViewCount] = useState('')
  console.log('postId in views', postId)

  fetch(`${SN_POSTS}?postId=${postId}`)
    .then((r) => r.json())
    .then((data) => {
      // console.log(data[0].view_count)
      setViewCount(data[0]?.view_count)
    })

  return (
    <span className=" pr-2 flex">
      <RiEyeFill className="pr-1" />
      {viewCount}
      {/*原本前端寫法(無法儲存)
            {viewsCounter.map((v) => {
              if (v.postId == getPost[0].post_id) {
                return v.count
              }
            })} */}
    </span>
  )
}
