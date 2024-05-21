import { RiSearchLine } from '@remixicon/react'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

export default function Search() {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [showSer, setSer] = useState(true)
  const searchRef = useRef(null)

  const toggleSer = () => {
    setSer(!showSer)
  }
  const toggleForm = () => {
    setShowForm(!showForm)
  }
  // 添加事件處理函数，用於關閉搜索表單
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowForm(false)
      setSer(true)
    }
  }

  // 添加事件監聽器，在组件掛載時間聽事件
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={searchRef}>
      <RiSearchLine
        onClick={() => {
          toggleForm()
          toggleSer()
        }}
        className={showSer ? 'flex text-black' : 'hidden'}
      />
      <form
        className={showForm ? 'flex text-black' : 'hidden'}
        role="search"
        onSubmit={(e) => {
          e.preventDefault()
          router.push(`?keyword=` + e.currentTarget.keyword.value, undefined, {
            scroll: false,
          })
        }}
      >
        <input
          className="form-control me-2 p-2 bg-transparent w-40"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="keyword"
        />
        <button className="" type="submit">
          <RiSearchLine />
        </button>
      </form>
    </div>
  )
}
