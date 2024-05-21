import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function FilterModal({ onSubmitOrder }) {
  const [isOpen, setIsOpen] = useState(false)
  const [order, setOrder] = useState()

  // 點擊控制開關選單
  const togglemodal = () => {
    setIsOpen(!isOpen)
  }

  // const handleLatest = (latest)=>{
  //   setLatest(latest)
  // }
  // const handleStartSoon = (startSoon)=>{
  //   setStartSoon(startSoon)
  // }
  const handleOrder = (order) => {
    setOrder(order) // Set the selected order
    // Pass the selected order to the parent component
    onSubmitOrder(order)
  }

  useEffect(() => {
    // Add event listener to detect clicks on the document body
    document.body.addEventListener('click', handleOutsideClick)

    // Remove event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleOutsideClick = (event) => {
    // Check if the click occurred outside the dropdown menu
    if (!event.target.closest('.bg-white')) {
      setIsOpen(false) // Close the menu
    }
  }

  return (
    <>
      <div className="md:relative absolute -top-[60px] right-4 md:top-0 md:right-0">
        <button
          className="font-['Noto Sans TC'] md:text-[13px] text-xl me:font-semibold md:rounded rounded-full bg-white md:opacity-100 opacity-90 px-2.5 py-[5px]"
          onClick={togglemodal}
        >
          <i className="ri-equalizer-line"></i>
          <span className="md:inline hidden">排序</span>
        </button>
      </div>
      {isOpen && (
        <div className="w-[98px] bg-white absolute top-11 right-0 border rounded text-black drop-shadow-lg">
          <div className="px-2 py-1 ">
            <div
              className={`hover:bg-blue-100 px-2 py-1 ${order === '最新' ? 'text-red-700' : ''}`}
              onClick={() => {
                handleOrder('最新')
              }}
            >
              最新上架
            </div>
            <div
              className={`hover:bg-blue-100 px-2 py-1 ${order === '最愛' ? 'text-red-700' : ''}`}
              onClick={() => {
                handleOrder('最愛')
              }}
            >
              最受歡迎
            </div>
            <div
              className={`hover:bg-blue-100 px-2 py-1 ${order === '最快' ? 'text-red-700' : ''}`}
              onClick={() => {
                handleOrder('最快')
              }}
            >
              最快出發
            </div>
          </div>
          <hr />
        </div>
      )}
    </>
  )
}

export default FilterModal
