import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Dropdown from '../dropdown/dropdown'
import _JSXStyle from 'styled-jsx/style'
import Mission from './mission'
import Entrance from '../three/Entrance'
import Image from 'next/image'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'
import Alert from '../popup/alert';

export default function Main() {
  const router = useRouter()
  //判斷登入
  const { auth } = useAuth()
  const mbID = auth.id

  const [mission, setMission] = useState('')

  const getMission = async () => {

    const url = `http://localhost:3001/game/gm_achieved/${mbID}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      //確保就算資料傳輸產生錯誤 畫面不會整個崩潰
      console.log(data);
      setMission(data.rows)
      // return data;
    } catch (e) {
      console.log(e)
    }
  }

  const getmbID = async () => {
    try {
      const r = await fetch(`http://localhost:3001/game/check/gm_achieved/${mbID}`)
      const d = await r.json()
      console.log(d)
      return d.success
    } catch (ex) {
      console.log(ex)
    }
  }

  const [showFirstSVG, setShowFirstSVG] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const flashingInterval = setInterval(() => {
      setShowFirstSVG((prevState) => !prevState)
    }, 1100)
    return () => clearInterval(flashingInterval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!mbID) {router.push('/member/account/login')}
  }, [mbID])

  useEffect(()=>{
    if(auth.id){
      fetch(``)
    }
  }, [auth])

  useEffect(() => {
    const fetchMbID = async () => {
      try {
        const result = await getmbID();
        if (result) {
          await getMission();
        }
      } catch (error) {
        console.error("Error fetching member ID:", error);
      }
    };

    fetchMbID();
  }, []);

  return (

    <>
    {/* {console.log(mission)} */}
      <div className="flex flex-row mt-24 relative">
        <div className="w-5/6 h-auto bg-gray-300 overflow-hidden">
          <Entrance/>
        </div>
        <div className="absolute w-5/6 h-full flex-row">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm absolute w-full h-full"></div>
          <div className="w-full absolute bottom-24">
            {loading ? (
              <img src="/svg/banner.svg" className="h-auto mx-auto" />
            ) : showFirstSVG ? (
              <button>
              </button>
            ) : (
              <Link href="/game/three">
                <img
                  src="/svg/enter.svg"
                  className="h-auto mx-auto"
                  id="start"
                />
              </Link>
            )}
          </div>
        </div>
        <Mission data={mission}/>
        <Dropdown data={mission} />
      </div>
      <style jsx>{`
        .flash-animation {
          opacity: ${showFirstSVG ? '0' : '1'};
          transition: opacity 0.8s ease-out;
        }
      `}</style>
    </>
  )
}
