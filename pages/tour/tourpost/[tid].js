import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { FaUserCheck } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { API_SERVER, TOUR_POST } from '@/components/config/api-path'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAuth } from '@/contexts/auth-context'
import dayjs from 'dayjs'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper/modules'

export default function TourPost() {
  const router = useRouter()
  const { auth } = useAuth()
  console.log(auth.id);
  const [tourPost, setTourPost] = useState({
    tour_id: 0,
    title: '',
    content: '',
    image_url: '',
    area: 0,
    city: 0,
  })
  const [imgs, setImgs] = useState([])
  const [fullscreenVisible, setFullscreenVisible] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  // Function to open the full-screen photo display
  const openFullscreen = (index) => {
    setCurrentPhotoIndex(index)
    setFullscreenVisible(true)
  }

  // Function to close the full-screen photo display
  const closeFullscreen = () => {
    setFullscreenVisible(false)
  }

  const tagConfigs = [
    {
      condition: tourPost.event_period <= 6,
      trueValue: '半日',
      falseValue: '一日',
    },
    { condition: tourPost.level_id === 1, value: '簡單' },
    { condition: tourPost.level_id === 2, value: '中等' },
    { condition: tourPost.level_id === 3, value: '困難' },
    { condition: tourPost.area === 1, value: '北部' },
    { condition: tourPost.area === 2, value: '中部' },
    { condition: tourPost.area === 3, value: '南部' },
    { condition: tourPost.area === 4, value: '東部' },
    { condition: true, value: tourPost.category_name }, // Default condition
  ]

  // 用條件陣列產生標籤
  const tags = tagConfigs.map((config, index) => {
    const { condition, trueValue, falseValue, value } = config

    // 檢查條件是否為真
    if (condition) {
      const displayValue = condition ? trueValue || value : falseValue || value

      return (
        <button
          key={index}
          className="rounded bg-white md:px-2.5 px-2 md:py-[5px] py-1"
        >
          {displayValue}
        </button>
      )
    } else {
      return null // 若條件為false不產生標籤
    }
  })

  /* ==控制swiper在桌機手機切換呈現數量== */
  const [slidesPerView, setSlidesPerView] = useState(3)

  // 改變呈現數量的function
  const updateSlidesPerView = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1) // 手機螢幕1張
    } else {
      setSlidesPerView(4) // 桌機畫面4張
    }
  }

  // 載入畫面,螢幕縮放時呼叫功能
  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])
  /* ==控制swiper結束== */

  // 抓取資料
  const fetchTourPost = async (tid) => {
    const url = `${TOUR_POST}/${tid}`

    try {
      const res = await fetch(url)
      const data = await res.json()
      // 抓出來為row物件陣列,因為文章相關內容都一樣,故取第一個即可
      setTourPost(data.row[0])
      console.log(tourPost)
      // 照片另外處理,要使用map 欲呈現前三張的話可用filter或是索引值寫死
      setImgs(
        data.row.map((v) => ({
          tour_img_id: v.tour_img_id,
          image_url: v.image_url,
          image_descrip: v.image_descrip,
        }))
      )
      const test = data.row.map((v) => ({
        tour_img_id: v.tour_img_id,
        image_url: v.image_url,
        image_descrip: v.image_descrip,
      }))
      console.log(test)
    } catch (e) {
      console.log(e)
    }
  }

  // 呈現後端文章資料
  useEffect(() => {
    if (router.isReady) {
      const { tid } = router.query
      console.log(tid)
      fetchTourPost(tid)
    }
  }, [router.isReady, router.query.tid])

  return (
    <>
      <Navbar />
      <div className="md:flex-none md:flex-col flex flex-col-reverse bg-zinc-800">
        <div className="md:px-[150px] px-5 md:py-2.5 md:pt-32 md:space-y-5 space-y-2">
          <h1 className="font-['Noto Sans TC'] text-white md:text-6xl">
            {/* Grace Hill麗庭莊園 */}
            {/* {tourPost?.find(v=>v.tour_id==router.query.tid)?.title} */}
            {tourPost.title}
          </h1>
          <div className="flex justify-between items-center md:pb-0 pb-5">
            <div className="md:space-x-3 space-x-1 font-['Noto Sans TC'] text-[13px] font-semibold">
              {tags}
              {/* <button className="rounded bg-white md:px-2.5 px-2 md:py-[5px] py-1">
                {tourPost.event_period <= 6 ? '半日' : '一日'}
              </button>
              <button className="rounded bg-white md:px-2.5 px-2 md:py-[5px] py-1">
                中等
              </button>
              <button className="rounded bg-white md:px-2.5 px-2 md:py-[5px] py-1">
                廢棄社區
              </button> */}
            </div>
            <div className="text-white md:space-x-4 space-x-2 md:block hidden">
              <span className="font-['Noto Sans TC'] md:text-[15px] text-[13px]">
                <a href="#">
                  <i className="ri-heart-3-line md:ri-lg md:pr-1 pr-[2px]"></i>
                </a>
                收藏
              </span>
              <span className="font-['Noto Sans TC'] md:text-[15px] text-[13px]">
                <a href="#">
                  <i className="ri-share-forward-fill md:ri-lg md:pr-1 pr-[2px]"></i>
                </a>
                分享
              </span>
            </div>
          </div>
          <hr className="md:hidden" />
        </div>
        {/* Photo section */}
        <div className="w-full md:h-[600px] overflow-clip md:px-[150px] py-5 md:pt-5 pt-12 flex items-center gap-2.5">
          {imgs.length > 0 && (
            <img
              className="md:w-[60%] h-fit grow shrink"
              src={imgs[0].image_url.startsWith('/img') ? `${API_SERVER}${imgs[0].image_url}` : `/images/borou/${imgs[0].image_url}.jpg`}
            />
          )}
          <div className="relative w-[33%] flex-col justify-start items-start gap-2.5 md:inline-flex hidden">
            {imgs.slice(1, 3).map((img, index) => (
              <img
                key={index}
                className="w-auto h-1/2 object-cover"
                src={img.image_url.startsWith('/img') ? `${API_SERVER}${img.image_url}` : `/images/borou/${img.image_url}.jpg`}
              />
            ))}
            <button
              className="absolute right-5 bottom-5 px-5 py-2.5 text-white bg-zinc-800 bg-opacity-80 rounded text-[13px] hover:bg-zinc-700"
              onClick={openFullscreen}
            >
              查看照片
            </button>
          </div>
          
            {/* Full-screen photo display */}
            {fullscreenVisible && (
              <div
                className="fixed inset-0 z-50 flex bg-black bg-opacity-80 px-[150px]"
                onClick={closeFullscreen}
              >
                <Swiper
                  slidesPerView={1}
                  initialSlide={currentPhotoIndex}
                  onSlideChange={(swiper) =>
                    setCurrentPhotoIndex(swiper.realIndex)
                  }
                  className='mt-[100px] w-4/5'
                >
                  {imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img.image_url.startsWith('/img') ? `${API_SERVER}${img.image_url}` : `/images/borou/${img.image_url}.jpg`}
                        alt={`Photo ${index}`}
                        className="object-cover w-auto h-[600px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {/* Full-screen photo end */}
        </div>
        {/* Photo section end */}
      </div>
      <div className="md:px-[150px] px-5 md:py-5 text-white md:grid md:grid-cols-3 flex flex-col-reverse gap-8">
        <div className="space-y-5 col-span-2">
          {/* article content start */}
          <h2 className="md:text-[26px] text-[15px] font-semibold">活動介紹</h2>
          <div className="md:text-xl text-[13px] space-y-5">
            <p>{tourPost?.content}</p>
          </div>
          <div className="space-y-5 md:block hidden">
            {imgs.slice(0, 3).map((img, index) => (
              <div key={index}>
                <img
                  className="w-full"
                  src={img.image_url.startsWith('/img') ? `${API_SERVER}${img.image_url}` : `/images/borou/${img.image_url}.jpg`}
                  alt={img.image_descrip}
                />
                <span>{img.image_descrip}</span>
              </div>
            ))}
            {/* <div>
              <img src="/images/borou/grass03.jpg" className="h-auto" alt="" />
              <span className="text-[15px]">
                那天的太陽很強，室內的空氣悶熱有種置身沙漠的錯覺
              </span>
            </div> */}
          </div>
          {/* article content end */}
          <div id="hostinfo" className="space-y-5">
            <hr />
            <div className="flex items-center space-x-2.5 ">
              <Link href="">
                <img
                  src="/images/temphead.jpg"
                  alt="user profile pic"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </Link>
              <h3 className="md:text-xl text-[15px]">
                認識你的探險達人 {auth.username}
              </h3>
            </div>
            <div className="flex space-x-5 md:text-[15px] text-[13px]">
              <a href="#">
                <i className="ri-star-fill ri-lg mr-1"></i>71則評價
              </a>
              <div className="flex items-center">
                <FaUserCheck className="text-xl mr-1" />
                身分已驗證
              </div>
            </div>
            <div className="md:text-xl text-[13px] font-['Noto Sans TC'] font-['IBM Plex Mono'] space-y-5">
              <p>{tourPost.description}</p>
            </div>
            {/* <div>
              <Link href="">
                <button className="md:w-fit md:text-xl px-5 py-3 border rounded-md hover:bg-black">
                  聯絡主揪
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="w-full">
          <div className="sticky top-14">
            <div className=" w-full md:px-[60px] md:py-10 pt-5 pb-5 md:bg-black rounded-lg md:space-y-10 flex flex-col items-start">
              <div className="md:flex w-full justify-center hidden">
                <button className="flex items-center space-x-2 px-5 py-2.5 border rounded-md relative">
                  <div>
                    <div className="">參加人數</div>
                    <div className=" text-gray-300">1位參加者</div>
                  </div>
                  <i className="ri-arrow-down-s-line"></i>
                </button>
              </div>
              <div className="space-y-5">
                <h2 className="md:text-[26px] text-[15px] font-semibold">
                  活動詳情
                </h2>
                <div className="md:space-y-[15px] space-y-2 md:text-base text-[13px]">
                  <p>目前參加人數：{tourPost.member_count}/{tourPost.max_groupsize} 人</p>
                  <p>
                    出發時間：{dayjs(tourPost.event_date).format('YYYY/MM/DD')},{' '}
                    {dayjs(tourPost.event_date).format('A') === 'AM'
                      ? '上午 '
                      : '下午'}
                    {dayjs(tourPost.event_date).format('HH:mm')}
                  </p>
                  <p>時長：{tourPost.event_period}小時</p>
                  <p>探索難易度：{tagConfigs.find(config => config.condition && config.value)?.value}</p>
                  <p>集合地點：{tourPost.ruin_address}</p>
                </div>
              </div>
              <div className="w-full justify-center flex">
                <Link href="/tour/join-tour">
                  <button className="px-5 py-2.5 border rounded-md md:text-base text-[13px] md:block hidden hover:bg-white hover:text-black">
                    立即報名
                  </button>
                </Link>
              </div>
            </div>
            <hr className="md:hidden" />
          </div>
        </div>
      </div>

      {/* 評價區 */}
      <div
        id="rateComment"
        className="md:px-[150px] px-5 py-2.5 text-white space-y-[30px]"
      >
        <hr />
        <div className="text-[26px] space-x-5 md:block hidden">
          <a href="#">
            <i className="ri-star-fill ri-lg pr-1"></i>4.90
          </a>
          <span>71則評價</span>
        </div>
        <div
          id="commentBox"
          className="md:text-base text-[13px] flex md:flex-wrap justify-between overflow-hidden"
        >
          <Swiper slidesPerView={slidesPerView} spaceBetween={30}>
            <SwiperSlide>
              <div className="w-full h-full px-2 py-6 space-y-5 border rounded">
                <div className="flex space-x-3 items-center">
                  <Link href="">
                    <img
                      src="/images/usertemp01.jpeg"
                      alt="user profile pic"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <span>Tony</span>
                    <span>2024年3月</span>
                  </div>
                </div>
                <p>
                  Johnny 非常友善和友好，我們學到了許多有趣的事情。
                  無論如何，這次體驗讓我和我的妻子度過了一個美好而愉快的時光。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full px-2 py-6 space-y-5 border rounded">
                <div className="flex space-x-3 items-center">
                  <Link href="">
                    <img
                      src="/images/usertemp02.webp"
                      alt="user profile pic"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <span>Henry</span>
                    <span>2024年3月</span>
                  </div>
                </div>
                <p>
                  如果你正在尋找與他人或你自己共度美好時光的小事，這是一個獨特、可愛的體驗。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full px-2 py-6 space-y-5 border rounded">
                <div className="flex space-x-3 items-center">
                  <Link href="">
                    <img
                      src="/images/usertemp03.webp"
                      alt="user profile pic"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <span>Charon</span>
                    <span>2024年3月</span>
                  </div>
                </div>
                <p>
                  很棒的經驗！主揪幽默風趣，還身懷一些真正令人驚
                  嘆且難以置信的跑庫技巧！
                  強烈推薦這個，如果你是第一次參加也完全沒有問題。
                </p>
                <button>
                  {/* 顯示更多內容<i className="ri-arrow-right-s-line"></i> */}
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full px-2 py-6 space-y-5 border rounded">
                <div className="flex space-x-3 items-center">
                  <Link href="">
                    <img
                      src="/images/usertemp04.jpg"
                      alt="user profile pic"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <span>Koji</span>
                    <span>2024年3月</span>
                  </div>
                </div>
                <p>
                  如果你正在尋找與他人或你自己共度美好時光的小事，這是一個獨特、可愛的體驗。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full px-2 py-6 space-y-5 border rounded">
                <div className="flex space-x-3 items-center">
                  <Link href="">
                    <img
                      src="/images/usertemp05.webp"
                      alt="user profile pic"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <span>Winston</span>
                    <span>2024年3月</span>
                  </div>
                </div>
                <p>
                  如果你會跑酷的話，這個地方真的是最完美的場地讓你盡情探索。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full px-2 py-6 space-y-5 border rounded">
                <div className="flex space-x-3 items-center">
                  <Link href="">
                    <img
                      src="/images/usertemp06.webp"
                      alt="user profile pic"
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <span>Akira</span>
                    <span>2024年3月</span>
                  </div>
                </div>
                <p>
                  如果你正在尋找與他人或你自己共度美好時光的小事，這是一個獨特、可愛的體驗。
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="md:w-fit w-full text-xl px-5 py-4 border rounded-md  hover:bg-black">
          顯示全部評價
        </button>
      </div>
      {/* Recommendation */}
      <div className="md:px-[150px] px-5 md:pt-10 pt-5 md:pb-20 pb-5 md:space-y-10 space-y-5">
        <hr />
        <h1 className="md:text-[40px] text-xl text-white font-semibold text-center">
          相似推薦
        </h1>
        <div id="cardbox" className="md:px-16">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-white w-full rounded overflow-hidden space-y-5 pb-4">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.51
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間：3月29日</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white w-full rounded overflow-hidden space-y-5 pb-4">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white w-full rounded overflow-hidden space-y-5 pb-4">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white w-full rounded overflow-hidden space-y-5 pb-4">
                <img
                  className="h-auto max-w-full"
                  src="/images/tempuse.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.69
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北監獄圍牆</div>
                  <div className="text-[15px]">出團時間 : 3月29日</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  )
}

// 用來sql更新參加人數
// UPDATE tony_tour_post
// SET tour_member_count = (
//     SELECT COUNT(CASE WHEN tour_id = tony_tour_post.tour_id THEN 1 END)
//     FROM tony_tour_members
//     WHERE tour_id = tony_tour_post.tour_id
// );