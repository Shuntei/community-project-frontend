import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './homeContent.module.css'
import home1 from '@/public/images/home1.jpg'
import home2 from '@/public/images/home2.jpg'
import home3 from '@/public/images/home3.jpg'
import arrowPng from '@/public/images/arrow.png'
import product1 from '@/public/images/product1.jpeg'
import {
  PRODUCT_ALL,
  MB_GET_TOUR_INFO,
  MB_GET_POST,
} from '@/components/config/api-path'
import { useRouter } from 'next/router'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'
import EmblaCarousel from '../emblaCarousel/EmblaCarousel'
import { SN_COMMUNITY } from '@/components/config/johnny-api-path'
import TestF from '@/components/ellie/three/test-f'
import { RiArrowRightDoubleFill } from 'react-icons/ri'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { FaEye } from 'react-icons/fa'

export default function HomeContent() {
  const router = useRouter()

  const [products, setProducts] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slides, setSlides] = useState([])
  const [post, setPost] = useState([])
  const [counterOn, setCounterOn] = useState(false)
  const card3Ref = useRef(null)
  const card2Ref = useRef(null)

  const OPTIONS = { loop: true }

  const getTourInfo = async () => {
    try {
      const r = await fetch(MB_GET_TOUR_INFO)
      const result = await r.json()
      setSlides(result.data)
    } catch (error) {
      console.log('Failed to fetch tour info:', error)
    }
  }

  const getPost = async () => {
    try {
      const r = await fetch(MB_GET_POST)
      const result = await r.json()
      setPost(result.data[0])
    } catch (error) {
      console.log('Failed to fetch post info:', error)
    }
  }

  const limitContent = (content) => {
    const maxLength = 50
    if (content?.length > maxLength) {
      return content.slice(0, maxLength) + '...'
    }
    return content
  }

  const getProducts = async () => {
    const url = `${PRODUCT_ALL}${location.search}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getProducts()
    getTourInfo()
    getPost()
  }, [router])

  const sec1Ref = useRef(null)
  const sec2Ref = useRef(null)
  const sec3Ref = useRef(null)
  const sec4Ref = useRef(null)

  useEffect(() => {

    const handleScroll = () => {
      const section1 = sec1Ref.current
      const section2 = sec2Ref.current
      const section3 = sec3Ref.current
      const section4 = sec4Ref.current

      if(section2){
        const rect = section2.getBoundingClientRect()
        if (rect.top > 0) {
          section1.classList.add('sticky')
        } else {
          section1.classList.remove('sticky')
        }
      }

      if(section3){
        const rect = section3.getBoundingClientRect()
        if (rect.top > 0) {
          section2.classList.add('sticky')
        } else {
          section2.classList.remove('sticky')
        }
      }

      if (section4) {
        const rect = section4.getBoundingClientRect()
        if (rect.top > 0) {
          section3.classList.add('sticky')
        } else {
          section3.classList.remove('sticky')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['slide-in-from-right'])
          } else {
            entry.target.classList.remove(styles['slide-in-from-right'])
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(card3Ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const container = document.querySelector(`.${styles['containerP']}`)

    const slide = () => {
      container.scrollLeft += 0.5 // 控制滑動速度

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0
      }
    }

    const sliderInterval = setInterval(slide, 20) //  調整滑動間隔

    return () => clearInterval(sliderInterval)
  }, [])

  return (
    <>
      {/* ------- Section 1 / Tour Start ---------- */}
      <div 
      ref={sec1Ref}
      className='top-0'>
        <EmblaCarousel
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          className="absolute md:left-1/2 md:top-1/3 bottom-0 p-[20px] md:p-0"
          slides={slides}
          options={OPTIONS}
        />
        <div
          style={{
            backgroundImage:
              currentIndex > 0
                ? `url('/images/borou/${slides[currentIndex - 1]?.image_url}.jpg')`
                : `url('/images/borou/${slides[slides?.length - 1]?.image_url}.jpg')`,
            width: '100%',
          }}
          className={`z-[-1] relative w-full h-lvh bg-center bg-cover brightness-50 ${styles['bg-transition']}`}
        ></div>
      </div>
      {/* ------- Section 1 / Tour End ---------- */}

      {/* ------- Section 2 /Community Start ---------- */}
      <div
      ref={sec2Ref}
        className={`${styles.homeSectionTwo} top-0`}
        style={{
          backgroundImage: `url(${SN_COMMUNITY}/${post?.image_url})`,
          width: '100%',
        }}
      >
        {/* card start */}

        <div className={styles.card2} ref={card2Ref}>
          <div
            className={`${styles['card-info']} flex flex-col md:gap-[10px] md:max-w-[300px] max-w-[250px]`}
          >
            <div className="flex w-full">
              <span className="flex-1">MOST VIEWED POST!</span>
              <div className="flex gap-1 items-center">
                <FaEye className="md:text-[22px] text-[18px]" />
                <ScrollTrigger
                  onEnter={() => {
                    setCounterOn(true)
                  }}
                  onExit={() => {
                    setCounterOn(false)
                  }}
                >
                  {counterOn ? (
                    <CountUp
                      start={0}
                      end={post.view_count}
                      duration={2}
                      delay={0}
                    />
                  ) : (
                    0
                  )}
                </ScrollTrigger>
              </div>
            </div>
            <span className={styles.text}>
              <div className="pb-2">{post.title} :</div>
              {limitContent(post?.content)}
            </span>
          </div>
          <Link
            href={`http://localhost:3000/community/main-post?postId=${post.post_id}`}
            className={`${styles['card2-button']} hover:bg-[#7A7A7A]`}
          >
            READ NOW
          </Link>
        </div>
        {/* card end  */}
      </div>
      {/* ------- Section 2 /Community End ---------- */}

      {/* ------- Section 3 / Live Start ---------- */}
      <div 
      ref={sec3Ref}
      className={`${styles.homeSectionThree} md:mb-[100px] top-0 overflow-hidden h-full`}>
        <div>
          <div className={styles.rowThreeContainer}>
            <div className={styles['sec3-img-container']}>
              <video className="rounded" autoPlay muted loop>
                <source src="/video/live.mp4" type="video/mp4" />
                Video is unavailable
              </video>
            </div>
            <div className="w-full md:w-1/3 md:order-2">
              <div className="text-white w-full" ref={card3Ref}>
                <div className="text-sm mb-2">LIVE!</div>
                <div className="w-full md:mb-12 md:text-3xl text-2xl">
                  <div className="">拿起手機</div>
                  <div className="">啟動你的廢墟探險</div>
                </div>
                <div className="md:pt-[20px] md:static absolute left-0 md:bottom-0 bottom-[-280px] w-full">
                  <div className="w-full md:text-start text-center">
                    <Link
                      href={'http://localhost:3000/chat'}
                      className="md:px-[52px] px-[30px] justify-center text-black hover:text-white md:py-[18px] py-[10px] items-center bg-white italic border border-black hover:bg-black hover:border-white"
                    >
                      GO LIVE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Section 3 / Live End ---------- */}

      {/* ------- Section 4 / Game Start ---------- */}
      <div ref={sec4Ref}>
        <div className="relative mb-[50px] md:mb-0">
          <div className="w-full">
            <TestF />
          </div>
          <Link
            href={'http://localhost:3000/game'}
            className="absolute bottom-[20%] w-full hover:text-white py-[22px] bg-white hover:bg-black hover:bg-opacity-70 bg-opacity-70 flex-col justify-center items-center gap-2.5 inline-flex"
          >
            <div className="justify-start items-center gap-[5px] inline-flex">
              <RiArrowRightDoubleFill className="md:text-[50px] text-[30px]" />
              <div className="md:text-[32px] text-[20px] font-medium">
                GO PLAY
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div>
            <div>
              <div className={styles.ps5}></div>
              <p className={styles['cards-container-title']}>RECENTLY ADDED</p>
              <div className="flex w-full justify-between  md:px-24 px-4 py-5 flex-col space-y-5">
                <div
                  className={`flex md:gap-10 gap-5  ${styles['containerP']} `}
                >
                  {products &&
                    products.rows.map((v, i) => {
                      return (
                        <Link
                          key={v.pid}
                          href={`/shop/product/${v.pid}`}
                          className={`md:w-1/5 w-1/2 ${styles['product-item']} flex-col  gap-5 flex transition duration-200 hover:skew-y-2`}
                        >
                          <img
                            className="w-full aspect-square  rounded-xl"
                            src={`/images/product/${v.img.split(',')[0]}`}
                            alt="pic"
                          />
                          <div className="md:px-10 flex-col  gap-1 flex">
                            <div className="text-white text-sm font-medium font-['IBM Plex Mono']">
                              {v.name}
                            </div>
                            <div className="text-zinc-500 text-[15px] font-medium font-['IBM Plex Mono']">
                              {v.price}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------- Section 4 / Game End ---------- */}
    </>
  )
}
