import React from 'react'
import { RiCloseLine } from "@remixicon/react";

export default function Deletenote() {
  return (
    <>
      <div className='w-5/12 bg-gray-200 px-14 pt-3 pb-10 border-1 rounded-sm border-solid border-white flex flex-col'>
        <div className='p-2 flex flex-col items-end'>
          <RiCloseLine className='w-10 h-10'/>
        </div>
        <div className='h-1/6 flex flex-col gap-6'>
          <div className="text-black text-lg font-medium font-['IBM Plex Mono'] ">
        Delete Note
          </div>
          <div className='flex items-stretch justify-center'>
            <div className=" text-black text-sm font-light font-['IBM Plex Mono'] ">
          Are you shure you want to delete this note?
            </div>
          </div>
          
          <div className='flex items-stretch justify-center gap-12 pt-8'>
            <div className='w-52 h-11 flex items-center justify-center  bg-white border-solid border border-black'>
              <div className="font-regular font-['IBM Plex Mono']">CANCEL</div>
            </div>
            <div className='w-52 h-11 flex items-center justify-center  bg-black border-solid border border-white'>
              <div className="text-white font-regular font-['IBM Plex Mono']">DELETE</div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
