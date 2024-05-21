import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function SortBy() {
  const [sortBy, setSortBy] = useState('')
  const router = useRouter()

  const handleChange = (e) => {
    const sortByValue = e.target.value
    setSortBy(sortByValue)
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, sortBy: sortByValue },
      },

      undefined,
      { scroll: false }
    )
  }

  return (
    <>
      <select
        className="bg-gray-100"
        name="sortBy"
        id="sortBy"
        value={sortBy}
        onChange={handleChange}
      >
        <option value="">請選擇排序方式</option>
        <option value="latest">上架時間</option>
        <option value="priceFromHighToLow">價格由高到低</option>
        <option value="priceFromLowToHigh">價格由低到高</option>
      </select>
    </>
  )
}
