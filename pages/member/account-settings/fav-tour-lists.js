import React, { useEffect, useState } from 'react'
import AccountLayout from '@/components/linda/accountLayout'
import Link from 'next/link'
import { API_SERVER, TOUR_GET_FAVTOURBOOK } from '@/components/config/api-path'
import { useAuth } from '@/contexts/auth-context'

export default function FavTourLists() {
  const { auth } = useAuth()
  const [favtourList, setFavTourList] = useState([])
  const [hoveredBid, setHoveredBid] = useState(null);

  useEffect(() => {
    async function getFavTourList() {
      try {
        const res = await fetch(`${TOUR_GET_FAVTOURBOOK}/${auth.id}`)

        const result = await res.json()
        if (result.success) {
          setFavTourList(result.row)
        }
        console.log(result.row)
      } catch (error) {
        console.log('failed to fetch favtourbook data', error)
      }
    }
    getFavTourList()
  }, [])

  // Organize favtour data by bid
  const favtourByBid = favtourList.reduce((acc, item) => {
    // Check if there is already an entry for the current bid
    if (!acc[item.bid]) {
      // If not, create a new entry with the bid as the key
      acc[item.bid] = {
        bid: item.bid,
        book_name: item.book_name,
        tours: [],
      }
    }
    // 同個bid, 他的tour會被加入tours陣列中
    acc[item.bid].tours.push(item)
    // 回傳更新後的accumulator
    return acc
  }, {})

  return (
    <>
      <div className="flex w-full flex-col md:p-0 p-[30px] gap-[37px]">
        <div className="pt-[50px] pb-5 md:px-[80px] flex w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="md:text-[30px] text-[24px] font-semibold">
              你的收藏
            </div>
            <div
              id="favBox"
              className="flex flex-wrap md:gap-[25px] md:justify-normal justify-between"
            >
              {/* group即是變數, 包含"bid","book_name","tours" */}
              {Object.values(favtourByBid).map((group) => (
                <div
                  key={group.bid}
                  className="md:w-fit py-2.5 relative"
                  onMouseEnter={() => setHoveredBid(group.bid)}
                  onMouseLeave={() => setHoveredBid(null)}
                >
                  <button
                    className="absolute top-5 left-2 bg-white bg-opacity-50 rounded-full h-[1.5em] drop-shadow-xl"
                    style={{ visibility: hoveredBid === group.bid ? 'visible' : 'hidden' }}
                  >
                    <i className="ri-close-line ri-xl text-black"></i>
                  </button>
                  <Link
                    href={`/member/account-settings/${group.bid}`}
                    className="space-y-2.5"
                  >
                    <img
                      src={`/images/borou/${group.tours[0].image_url}.jpg`}
                      className="md:w-[250px] w-36 aspect-square rounded object-cover"
                      alt=""
                    />
                    <div className="md:text-xl text-[13px]">
                      {group.book_name}
                    </div>
                    <div className="md:text-base text-[13px] text-zinc-400">
                      {group.tours.length}項收藏
                    </div>
                  </Link>
                </div>
              ))}
              {/* <div id="favCard" className="w-fit py-2.5">
                <Link
                  href="/member/account-settings/fav-tours"
                  className="space-y-2.5"
                >
                  <img
                    src="/images/tempuse.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div className="md:text-xl text-[13px]">工廠123</div>
                  <div className="md:text-base text-[13px] text-zinc-400">
                    9項收藏
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </>
  )
}

FavTourLists.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}

// Bid 排序下的 favtour 物件結構
// favtourByBid = {
//   1: {
//     bid: 1,
//     book_name: "工廠",
//     tours: [
//       {
//         "bid": 1,
//         "book_name": "工廠"
//         "favlist_id": 10,
//         "image_url": "arcade03"
//         "user_id": 182,
//         "tour_id": 2,
//       },
//       {
//         "favlist_id": 41,
//         "user_id": 182,
//         "tour_id": 3,
//         "image_url": "arcade03"
//         "bid": 1,
//         "book_name": "工廠"
//       }
//     ]
//   },
//   2: {
//     bid: 2,
//     book_name: "森林秘境",
//     tours: [
//       {},
//       {}
//     ]
//   },
// }
