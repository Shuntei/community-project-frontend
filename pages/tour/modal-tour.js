import React, { useState } from 'react'
import { RiCloseLargeLine } from '@remixicon/react'
import Image from 'next/image'

function TourJoinModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div className=" w-full md:px-[60px] md:py-10 pt-5 pb-5 md:bg-black rounded-lg md:space-y-10 flex flex-col items-start">
      <div className="md:flex w-full justify-center hidden">
        <button
          className="flex items-center space-x-2 px-5 py-2.5 border rounded-md relative text-white hover:bg-white hover:text-black"
          onClick={openModal}
        >
          <div>
            <div className="">參加人數</div>
            <div className=" text-gray-400">1位參加者</div>
          </div>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        {isOpen && (
          <div
            className="flex justify-center items-center fixed top-0 left-0 w-full h-full"
            onClick={closeModal}
          >
            <div className=" bg-white absolute text-center px-5 py-2.5 md:w-[160px] h-[150px] border rounded text-black">
              <div className="">1位參加者</div>
              <div className="">2位參加者</div>
              <div className="">3位參加者</div>
              <div className="">4位參加者</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TourJoinModal


{/* <div className="absolute text-center px-5 py-2.5 w-[160px] h-[150px] -top-2.5 -left-2.5 border rounded">
                    打開來
                  </div> */}