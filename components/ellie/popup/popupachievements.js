import React, { useState, useEffect } from 'react'
import { RiCloseLargeLine } from "@remixicon/react";
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/auth-context'

export default function AchievementsPopup({ onClose }) {

  const router = useRouter()
  const { auth } = useAuth()
  const mbID = auth.id

  const [achieved, setAchieved] = useState('')

  const getAchieved = async () => {
    const url = `http://localhost:3001/game/gm_achieved/${mbID}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰

      setAchieved(data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getAchieved()
  }, [router])


  return (
    // {console.log(achieved.rows)}

    <div className="popup absolute left-1/4 top-1/6 py-8 px-8 bg-[#292929] rounded-md border divide-slate-200 w-5/12">
      <div className="popup_inner">
        <div className='flex mb-4'>
          <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">ACHIEVEMENTS</div>
          <div className='flex-1'></div>
          <button onClick={onClose} className='flex-none'>
            <RiCloseLargeLine className='text-white'/></button>
        </div>
        
          
          {achieved.rows &&
          achieved.rows.map((v, i) => {
          return (
            <div className='flex flex-col gap-2'>
             {v.activate === 0 ?
          <div className='gap-3 content-center flex flex-row bg-zinc-700 p-1'>
          <div className='w-10 h-10 flex items-center justify-center bg-zinc-600'>{v.mission_id}</div>
          <div className='gap-2'>
              <div className="text-base font-regular font-['IBM Plex Mono'] text-gray-500 ">{v.mission_name}</div>
              <div className="text-sm font-light font-['IBM Plex Mono'] text-gray-500 ">{v.description}</div>
          </div>
        </div>:<div className='gap-3 content-center flex flex-row'>
            <div className='w-10 h-10 flex items-center justify-center bg-gray-600'>
              <div className='w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center'>{v.mission_id}</div>
              </div>
            <div className='gap-2'>
                <div className="text-base font-regular font-['IBM Plex Mono'] text-white ">{v.mission_name}</div>
                <div className="text-sm font-light font-['IBM Plex Mono'] text-white ">{v.description}</div>
            </div>
          </div>
         }
        </div>
          )
        })}
          
          
          
        
        {/* {console.log(AchievementsData[0].description)} */}
      </div>
    </div>
  );
}
