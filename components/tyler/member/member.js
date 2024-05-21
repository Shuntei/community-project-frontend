import React from 'react'

export default function Member({index, name,image}) {
  return (
    <div className="flex gap-3 mb-3 items-center">
      <img
      key={index}
        src={image}
        className="bg-white rounded-full p-0.5 h-[34px] w-[34px] object-cover" />
      <div>{name}</div>
    </div>
  )
}