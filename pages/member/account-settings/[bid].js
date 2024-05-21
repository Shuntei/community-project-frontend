import React, { useEffect, useState } from 'react'
import AccountLayout from '@/components/linda/accountLayout'
import Link from 'next/link'
import { API_SERVER, TOUR_GET_FAVTOURS } from '@/components/config/api-path'
import { useRouter } from 'next/router'

export default function FavTours() {
  const [favTours, setFavTours] = useState([])

  const router = useRouter()
  const tourId = router.query.bid

  const change = () => {
    router.push({
      pathname: '/member/account-settings/2',
      query: { ...router.query, sad: 9 },
    })
  }
  const change2 = () => {
    router.push({ pathname: '', query: { ...router.query, sadafsts: 8 } })
  }
  console.log(router.query)
  console.log(router.query.bid)
  useEffect(() => {
    if (!router.isReady) return
    async function getFavTours() {
      try {
        const res = await fetch(`${TOUR_GET_FAVTOURS}/${tourId}`)
        const result = await res.json()
        if (result.success) {
          setFavTours(result.row)
        }
        console.log(result.row)
      } catch (error) {
        console.log('failed to fetch favtours data', error)
      }
    }
    getFavTours()
  }, [tourId])

  return (
    <>
      <div className="flex w-full flex-col md:p-0 p-[30px] gap-[37px]">
        <div className="pt-[50px] pb-5 md:px-[80px] flex w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="md:text-[30px] text-[24px] font-semibold">工廠</div>
            <div
              id="favBox"
              className="flex flex-wrap md:gap-[25px] md:justify-normal justify-between"
            >
              {favTours.map((v, i) => {
                return (
                  <div key={v.tour_id} id="favCard" className="md:w-[250px] w-full py-2.5">
                    <Link
                      href={{
                        pathname: '/member/account-settings',
                        query: { test: 3 },
                      }}
                      className="space-y-2.5"
                    >
                      <img
                        src={v.image_url && v.image_url.startsWith('/img') ? `${API_SERVER}${v.image_url}` : `/images/borou/${v.image_url}.jpg`}
                        className="w-full aspect-square rounded object-cover"
                        alt=""
                      />
                      <div>
                        <div className="md:text-xl text-[13px]">{v.title}</div>
                        <div className="md:text-base text-[13px] text-zinc-400">
                          {v.content}
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
              {/* <div id="favCard" className="w-1/4 py-2.a5">
                <Link href="#" className="space-y-2.5">
                  <img
                    src="/images/tempuse.jpg"
                    className="md:w-[250px] w-36 aspect-square rounded object-cover"
                    alt=""
                  />
                  <div>
                    <div className="md:text-xl text-[13px]">
                      {favTours.title}
                    </div>
                    <div className="md:text-base text-[13px] text-zinc-400">
                      內文內文內文內文內文內文
                    </div>
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

FavTours.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
