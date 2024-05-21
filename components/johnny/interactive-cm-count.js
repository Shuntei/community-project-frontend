import React, { useState } from 'react'
import { RiChat4Fill, RiChat4Line } from '@remixicon/react'
import { SN_COMMENTS } from '@/components/config/johnny-api-path'

export default function CommentCount({ postId }) {
  const [commentCount, setCommentCount] = useState('')
  // 獲得評論數
  fetch(`${SN_COMMENTS}/${postId}`)
    .then((r) => r.json())
    .then((data) => {
      // console.log('評論數:', data.totalRows[0]['COUNT(1)'])
      setCommentCount(data.totalRows[0]['COUNT(1)'])
    })

  return (
    <span className=" pr-2 flex">
      {commentCount === 0 ? (
        <RiChat4Line className="pr-1" />
      ) : (
        <RiChat4Fill className="pr-1" />
      )}
      {commentCount}
    </span>
  )
}
