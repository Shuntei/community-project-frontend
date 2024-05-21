import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { API_SERVER, TOUR_LIST } from '@/components/config/api-path'
import dayjs from 'dayjs'
import CategoryModal from '@/components/tony/modal-category'
import FilterModal from '@/components/tony/modal-filter'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/auth-context'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default function AllSearch() {
  const { auth } = useAuth()

  const router = useRouter() // 接收 mainsearch 搜尋 keyword
  const [tourList, setTourList] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [keyword, setKeyword] = useState('') // 搜尋關鍵字
  const [category, setCategory] = useState('') // 類別標籤
  const [totalRows, setTotalRows] = useState(0) // 呈現資料筆數
  const [selectedDifficulty, setSelectedDifficulty] = useState('') // 難易度
  const [eventPeriod, setEventPeriod] = useState('') // 選取活動時長
  const [area, setArea] = useState('') // 選取地區北中南東
  const [order, setOrder] = useState('') // 排序方式***還沒好

  const [likedTourIds, setLikedTourIds] = useState([]) // 收藏
  const toggleLike = (tourId) => {
    if (likedTourIds.includes(tourId)) {
      setLikedTourIds(likedTourIds.filter((id) => id !== tourId))
    } else {
      setLikedTourIds([...likedTourIds, tourId])
    }
  }

  // 取得全部貼文資料
  const fetchAllTourData = async (page) => {
    const response = await fetch(`${TOUR_LIST}?page=${page}`)
    const result = await response.json()
    // 若 result 或 result.rows undefined, 直接結束
    if (!result || !result.rows) {
      return
    }

    const newData = result.rows.map((item) => ({
      ...item,
      key: item.tour_id,
    }))
    console.log(newData);
    setTourList((prevList) => [...prevList, ...newData])
    setPageNumber(page + 1)
    setTotalRows(result.totalRows)
  }

  // 取得關鍵字,主題篩選,條件篩選結果
  const fetchFilteredTourData = async (
    page,
    keyword,
    category,
    level,
    eventPeriod,
    area
  ) => {
    const response = await fetch(
      `${TOUR_LIST}?page=${page}&category=${category}&keyword=${encodeURIComponent(keyword)}&level=${level}&ePeriod=${eventPeriod}&area=${area}&latest=${order}`
    )
    const result = await response.json()
    const newData = result.rows.map((item) => ({
      ...item,
      key: item.tour_id,
    }))
    setTourList((prevList) => [...prevList, ...newData])
    setPageNumber(page + 1)
    setTotalRows(result.totalRows)
  }

  // 頁面呈現
  useEffect(() => {
    const { keyword } = router.query
    // 如果有首頁關鍵字搜尋,使用並篩選結果
    if (keyword) {
      const decodedKeyword = decodeURIComponent(keyword)
      setKeyword(decodedKeyword)
      fetchFilteredTourData(
        1,
        decodedKeyword,
        category,
        selectedDifficulty,
        eventPeriod,
        area,
        order
      )
    } else {
      // 如果沒有,呈現全部結果
      fetchAllTourData(pageNumber)
    }
  }, [router.query])

  // 關鍵字搜尋
  const handleSearch = (e) => {
    e.preventDefault()
    setPageNumber(1)
    setTourList([])
    if (
      category !== '' ||
      selectedDifficulty !== '' ||
      eventPeriod !== '' ||
      area !== '' ||
      order !== ''
    ) {
      fetchFilteredTourData(
        1,
        keyword,
        category,
        selectedDifficulty,
        eventPeriod,
        area,
        order
      )
    } else {
      fetchFilteredTourData(1, keyword, category, '', '', '', '') // If no category or difficulty level, pass an empty string
    }
  }

  // 主題類別篩選
  const handleCategoryClick = (cat) => {
    const newCategory = category === cat ? '' : cat
    setCategory(newCategory)
    setPageNumber(1)
    setTourList([])
    if (
      keyword.trim() !== '' ||
      selectedDifficulty !== '' ||
      eventPeriod !== '' ||
      area !== '' ||
      order !== ''
    ) {
      fetchFilteredTourData(
        1,
        keyword,
        newCategory,
        selectedDifficulty,
        eventPeriod,
        area,
        order
      ) // Pass the selected category and difficulty level
    } else {
      fetchFilteredTourData(1, keyword, newCategory, '', '', '', '') // 無選取時,設定回空字串
    }
  }

  // 更多條件下拉選單
  const handleSubmit = (level, period, area) => {
    setSelectedDifficulty(level)
    setEventPeriod(period)
    setArea(area)
    setPageNumber(1) // 套用篩選條件,重置頁面至第1頁
    setTourList([]) // 清除舊文章列表資料

    // Fetch filtered data with the selected difficulty
    if (keyword.trim() !== '') {
      fetchFilteredTourData(1, keyword, category, level, period, area) // Pass the selected keyword, category, and difficulty level
    } else {
      fetchFilteredTourData(1, '', category, level, period, area) // If no keyword, pass an empty string
    }
  }

  const handleOrder = (selectedOrder) => {
    setPageNumber(1) // Reset page number
    setTourList([]) // Clear old tour list
    setOrder(selectedOrder)
    // Fetch filtered data with the selected order
    fetchFilteredTourData(
      1,
      keyword,
      category,
      selectedDifficulty,
      eventPeriod,
      area,
      selectedOrder
    )
  }

  // 載入更多結果
  const handleLoadMore = () => {
    if (tourList.length < totalRows) {
      if (category || keyword) {
        fetchFilteredTourData(pageNumber, keyword, category)
      } else {
        fetchAllTourData(pageNumber)
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-[url('/images/tempuse.jpg')] bg-cover bg-center">
        <div id="headerReplace" className="h-32"></div>
        <div className="space-y-2.5 pt-12 md:pb-12 pb-5 md:px-[150px] px-5">
          <h1 className="text-white text-[26px] font-semibold">
            找尋你的精彩冒險
          </h1>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                className="md:w-1/3 w-[87%] pl-8 pr-5 py-2.5 opacity-90 rounded"
                placeholder="想找什麼呢？"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <i className="ri-search-line ri-lg absolute left-2 top-[13px]"></i>
            </div>
          </form>
        </div>
      </div>
      <div className="md:px-[150px] px-5 py-5 space-y-5 relative">
        <div className="flex justify-between">
          <div className="md:flex md:space-x-3 font-['Noto Sans TC'] text-[13px] font-semibold">
            <CategoryModal onSubmit={handleSubmit} />
            <div className="md:space-x-3 space-x-2 flex flex-nowrap">
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 1 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(1)}
              >
                古厝洋樓
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 2 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(2)}
              >
                廢棄飯店
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 3 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(3)}
              >
                工廠
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 4 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(4)}
              >
                電影院
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 5 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(5)}
              >
                廢棄百貨
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 6 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(6)}
              >
                娛樂場所
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 7 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(7)}
              >
                醫院診所
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 8 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(8)}
              >
                公寓大樓
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 9 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(9)}
              >
                學校
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 10 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(10)}
              >
                旅館
              </button>
              <button
                className={`rounded  px-2.5 py-[5px] ${category === 11 ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => handleCategoryClick(11)}
              >
                歷史建築
              </button>
            </div>
          </div>
          <div className="md:relative absolute -top-[60px] right-4 md:top-0 md:right-0">
            <FilterModal onSubmitOrder={handleOrder} />
          </div>
        </div>
        <p className="text-white text-[13px]">{totalRows}個探險結果</p>
      </div>
      <div className="md:px-[150px] px-5 space-y-10 pb-[50px]">
        <div className="space-y-4 font-['Noto Sans TC']">
          {/* 揪團文章容器 */}
          <div
            id="cardbox"
            className="md:flex md:gap-8 md:space-y-0 space-y-5 flex-wrap"
          >
            {tourList &&
              tourList.map((v, i) => {
                return (
                  <div
                    className="bg-white md:w-[23%] rounded overflow-hidden pb-4"
                    key={v.tour_id}
                  >
                    <Link
                      href={`/tour/tourpost/${v.tour_id}`}
                      // {`/tour/tourpost/${v.tour_id}`}
                      className="space-y-5"
                    >
                      <img
                        className="h-[250px] w-full object-cover"
                        src={v.image_url && v.image_url.startsWith('/img') ? `${API_SERVER}${v.image_url}` : `/images/borou/${v.image_url}.jpg`}
                        alt=""
                      />
                      <div className="flex justify-between px-5">
                        <span className="text-[15px] content-center">
                          <i className="ri-star-fill ri-lg pr-1"></i>4.5
                        </span>
                        <span className="space-x-1">
                          <i
                            className={`ri-heart-3-${likedTourIds.includes(v.tour_id) ? 'fill' : 'line'} ri-lg`}
                            onClick={() => toggleLike(v.tour_id)}
                          ></i>
                          <i className="ri-share-forward-fill ri-lg"></i> 
                        </span>
                      </div>
                      <div className="px-5 space-y-1">
                        <div className="text-xl font-semibold">{v.title}</div>
                        <div className="text-[15px]">
                          出團時間 : {dayjs(v.event_date).format('YYYY/MM/DD')}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="border text-white px-5 py-[10px] rounded-lg hover:bg-black"
            onClick={handleLoadMore}
          >
            載入更多結果
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
