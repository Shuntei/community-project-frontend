import React, { useState } from 'react'
import { RiCloseLine } from '@remixicon/react'

function CategoryModal({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState('') //選取難易度
  const [eventPeriod, setEventPeriod] = useState('') //選取活動時長
  const [area, setArea] = useState('') //選取地區北中南東

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // 難度變化
  const handleDifficultySelect = (level) => {
    // 反覆點擊可取消選取
    setSelectedDifficulty((prevDifficulty) =>
      prevDifficulty === level ? '' : level
    )
  }
  // 活動時長變化
  const handlePeriodSelect = (period) => {
    setEventPeriod((prevPeriod) => (prevPeriod === period ? '' : period))
  }
  // 地區變化
  const handleAreaSelect = (area) => {
    setArea((prevArea) => (prevArea === area ? '' : area))
  }

  const handleSubmit = () => {
    onSubmit(selectedDifficulty, eventPeriod, area) // 將選取的條件傳給搜尋頁的 onSubmit 功能
    closeModal()
  }

  const handleClearAll = () => {
    // 清除選項
    setSelectedDifficulty('')
    setEventPeriod('')
    setArea('')
    // onSubmit('') // 按下清除時同時傳遞條件為空字串給搜尋頁
  }

  return (
    <>
      <div className="relative">
        <div className="md:flex md:space-x-3 font-['Noto Sans TC'] text-[13px] font-semibold">
          <button
            className="rounded bg-white px-2.5 py-[11px]"
            onClick={openModal}
          >
            更多條件<i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
        {isOpen && (
          <div className=" bg-white absolute top-11 left-0 w-[280px] border rounded text-black drop-shadow-lg">
            <div className="py-4">
              <div className="text-xl text-center">篩選條件</div>
              <button
                className="close absolute top-4 right-4 text-black"
                onClick={closeModal}
              >
                <RiCloseLine />
              </button>
            </div>
            <hr />
            <div className="px-5 py-5 space-y-5 text-[15px]">
              <div className="space-y-2">
                <div className="">地區</div>
                <div className="space-x-2">
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${area == 1 ? 'bg-black text-white' : ''}`}
                    onClick={() => handleAreaSelect(1)}
                  >
                    北部
                  </button>
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${area == 2 ? 'bg-black text-white' : ''}`}
                    onClick={() => handleAreaSelect(2)}
                  >
                    中部
                  </button>
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${area == 3 ? 'bg-black text-white' : ''}`}
                    onClick={() => handleAreaSelect(3)}
                  >
                    南部
                  </button>
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${area == 4 ? 'bg-black text-white' : ''}`}
                    onClick={() => handleAreaSelect(4)}
                  >
                    東部
                  </button>
                </div>
              </div>
              {/* <div className="space-y-2">
                <div>城市</div>
                <select name="" id="" className="border border-black">
                  <option value="">台北市</option>
                </select>
              </div> */}
              <div className="space-y-2">
                <div>探險難度</div>
                <div className="space-x-2">
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${selectedDifficulty === 1 ? 'bg-black text-white' : ''}`}
                    onClick={() => handleDifficultySelect(1)}
                  >
                    簡單
                  </button>
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${selectedDifficulty === 2 ? 'bg-black text-white' : ''}`}
                    onClick={() => handleDifficultySelect(2)}
                  >
                    中等
                  </button>
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${selectedDifficulty === 3 ? 'bg-black text-white' : ''}`}
                    onClick={() => handleDifficultySelect(3)}
                  >
                    困難
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div>探險時長</div>
                <div className="space-x-2">
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${eventPeriod === '一日' ? 'bg-black text-white' : ''}`}
                    onClick={() => handlePeriodSelect('一日')}
                  >
                    一日
                  </button>
                  <button
                    className={`border border-black px-2 py-1 rounded hover:bg-black hover:text-white ${eventPeriod === '半日' ? 'bg-black text-white' : ''}`}
                    onClick={() => handlePeriodSelect('半日')}
                  >
                    半日
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="px-5 py-4 flex justify-between">
              <button
                className="border px-2 py-1 rounded hover:bg-gray-100 text-[15px]"
                onClick={handleClearAll}
              >
                清除全部
              </button>
              <button
                className="border border-zinc-800 px-2 py-1 text-white bg-zinc-800 rounded hover:bg-black text-[15px]"
                onClick={handleSubmit}
              >
                顯示結果
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CategoryModal
