import React from 'react'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'

export default function Notification({
  src,
  postSrc,
  hour,
  name,
  text,
  highlight = '',
  notificationLink,
  userLink,
}) {
  const router = useRouter()
  return (
    <>
      {/* notification */}
      <div
        onClick={() => {
          router.push(notificationLink)
        }}
        className="flex gap-[12px] items-start p-[5px] hover:bg-[#2e2e2e] cursor-pointer hover:bg-[#2e2e2e]"
      >
        <div className="h-[50px] min-w-[50px] rounded-full overflow-y-hidden">
          <Image
            onClick={(e) => {
              e.stopPropagation()
              router.push(userLink)
            }}
            alt=""
            width={50}
            height={50}
            src={src}
            className="min-w-[50px] max-w-[50px] min-h-[50px] object-cover bg-cover"
          />
        </div>
        <div className="flex items-center h-full gap-[4px] flex-1">
          <div>
            <span
              className="font-semibold"
              onClick={(e) => {
                e.stopPropagation()
                router.push(userLink)
              }}
            >
              {name}
            </span>
            <span className='pl-[5px]'>{text}</span>
            <span className="font-bold pl-[5px]">{highlight}</span>
            <span className="text-[#ABABAB] pl-[5px]">{hour}</span>
          </div>
        </div>
        {postSrc ? (
          <div className="h-[50px] min-w-[50px] overflow-y-hidden">
            <Image
              alt=""
              width={50}
              height={50}
              src={postSrc}
              className="min-w-[50px] max-w-[50px] min-h-[50px] object-cover bg-cover"
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
