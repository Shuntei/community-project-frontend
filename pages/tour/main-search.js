import React, { useState } from 'react'
import { useRouter } from 'next/router';
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import Link from 'next/link'

export default function MainSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim() !== '') {
      router.push({
        pathname: '/tour/all-search',
        query: { keyword: encodeURIComponent(keyword.trim()) },
      });
    }
  };

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
      </div>
      <div className="md:px-[150px] px-5 space-y-10 pb-[50px]">
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">
            ▌即將在24小時內開始的探險
          </div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/1" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/ufo01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.3
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">安和路飛碟屋的神秘冒險</div>
                  <div className="text-[15px]">出團時間 : 2024/05/11</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/2" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/pink01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.6
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">粉色異世界</div>
                  <div className="text-[15px]">出團時間 : 2024/05/11</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 hrounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/3" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/elephantmt.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.0
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">封閉的飛宏象山聯誼中心建築群</div>
                  <div className="text-[15px]">出團時間 : 2024/05/10</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/4" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/steel01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.9
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北機械加工廠</div>
                  <div className="text-[15px]">出團時間 : 2024/05/11</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">▌最新發佈</div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/steel01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.9
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北機械加工廠</div>
                  <div className="text-[15px]">出團時間 : 2024/05/11</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 hrounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/3" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/elephantmt.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.0
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">封閉的飛宏象山聯誼中心建築群</div>
                  <div className="text-[15px]">出團時間 : 2024/05/10</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/2" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/jpclinic01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.7
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">保存完整的日治診所</div>
                  <div className="text-[15px]">出團時間 : 2024-05-17</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/2" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/pink01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.6
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">粉色異世界</div>
                  <div className="text-[15px]">出團時間 : 2024/05/11</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">
            ▌新手友善的行程
          </div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/2" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/horse01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>5.0
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">白河雷諾瓦山莊</div>
                  <div className="text-[15px]">出團時間 : 2024/06/27</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/2" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/grass01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.6
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">東平菸樓</div>
                  <div className="text-[15px]">出團時間 : 2024/05/31</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/2" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/pink01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.6
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">粉色異世界</div>
                  <div className="text-[15px]">出團時間 : 2024/05/11</div>
                </div>
              </Link>
            </div>
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="/tour/tourpost/4" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/steel01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.9
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北機械加工廠</div>
                  <div className="text-[15px]">出團時間 : 2024/05/11</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 font-['Noto Sans TC']">
          <div className="text-white text-2xl font-semibold">▌古宅洋樓</div>
          <div
            id="cardbox"
            className="md:flex md:space-x-7 md:space-y-0 space-y-5"
          >
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/frame01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.9
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">台北麗庭莊園的建築優雅</div>
                  <div className="text-[15px]">出團時間 : 2024/05/22</div>
                </div>
              </Link>
            </div>
            
            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/seaside04.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.8
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">奢華的海濱別墅</div>
                  <div className="text-[15px]">出團時間 : 2024/05/22</div>
                </div>
              </Link>
            </div>


            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/western01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>4.8
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">劉氏洋樓</div>
                  <div className="text-[15px]">出團時間 : 2024/11/25</div>
                </div>
              </Link>
            </div>


            <div className="bg-white md:w-1/4 rounded overflow-hidden pb-4">
              <Link href="#" className="space-y-5">
                <img
                  className="h-[250px] w-full object-cover"
                  src="/images/borou/quake01.jpg"
                  alt=""
                />
                <div className="flex justify-between px-5">
                  <span className="text-[15px] content-center">
                    <i className="ri-star-fill ri-lg pr-1"></i>5.0
                  </span>
                  <span className="space-x-1">
                    <i className="ri-heart-3-line ri-lg"></i>
                    <i className="ri-share-forward-fill ri-lg"></i>
                  </span>
                </div>
                <div className="px-5 space-y-1">
                  <div className="text-xl font-semibold">深山中的殘破古民宅</div>
                  <div className="text-[15px]">出團時間 : 2024/05/07</div>
                </div>
              </Link>
            </div>
            
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/tour/all-search">
            <button className="border text-white px-5 py-[10px] rounded-lg hover:bg-black">
              探索全部行程
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
