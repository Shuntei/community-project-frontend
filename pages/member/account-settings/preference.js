import React, { useEffect, useState } from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { MdCheckBox } from 'react-icons/md'
import AccountLayout from '@/components/linda/accountLayout'
import {
  MB_SAVE_PREFERENCES,
  MB_GET_PREFERENCES,
} from '@/components/config/api-path'
import NotifyRed from '@/components/linda/notify/notify-red'
import NotifyGreen from '@/components/linda/notify/notify-green'
import { useAuth } from '@/contexts/auth-context'

export default function Preference() {
  const [live, setLive] = useState(false)
  const [product, setProduct] = useState(false)
  const [trip, setTrip] = useState(false)
  const [game, setGame] = useState(false)
  const [all, setAll] = useState(false)
  const [notificationText, setNotificationText] = useState('')
  const [showRedNotification, setShowRedNotification] = useState(false)
  const [showGreenNotification, setShowGreenNotification] = useState(false)
  const { auth } = useAuth()

  const handleSaveButton = async () => {
    const preferences = {
      live,
      product,
      trip,
      game,
      all,
    }

    const r = await fetch(`${MB_SAVE_PREFERENCES}/${auth.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
    })

    const result = await r.json()
    if (result.success) {
      setNotificationText('Saved successfully')
      setShowGreenNotification(true)
      setShowRedNotification(false)
    } else {
      setNotificationText('Failed to save')
      setShowRedNotification(true)
    }
  }

  const fetchInfo = async () => {
    const r = await fetch(`${MB_GET_PREFERENCES}/${auth.id}`)
    const result = await r.json()
    const data = result.data
    console.log(result)
    if (data) {
      setLive(data.live)
      setProduct(data.product)
      setTrip(data.trip)
      setGame(data.game)
      setAll(data.all)
    } else {
      setLive(true)
      setProduct(true)
      setTrip(true)
      setGame(true)
      setAll(false)
    }
  }

  useEffect(() => {
    if (all) {
      setLive(false)
      setProduct(false)
      setTrip(false)
      setGame(false)
    }
  }, [all])

  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <>
      <div className="flex w-full flex-col md:pt-[80px] pt-[40px] items-center justify-center">
        <div className="md:py-[33px] md:px-[60px] px-[16px] w-full md:w-auto rounded-xl p-0 flex flex-col items-center md:justify-center md:bg-[#57575747] md:border-2 md:border-white md:shadow-[12px_12px_30px_0_rgba(255,255,255,0.3)] md:shadow-[-12px_-12px_30px_0_rgba(255,255,255,0.4)]">
          <div className="flex pb-[17px] flex-col md:justify-center items-center gap-[20px]">
            <div className="text-[36px] font-semibold pb-[10px] w-full md:w-auto">
              Preferences
            </div>
            <span className="text-[12px] md:max-w-[300px] md:text-center w-full">
              We respect your right to control the content that you wish to
              receive
            </span>
            <div className="flex flex-col items-start gap-[20px]">
              <div className="py-[10px] border-b border-white text-[12px] font-medium">
                What you’d like to receive:
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[6px] items-center">
                  <button
                    onClick={() => {
                      setLive(!live)
                      setAll(false)
                    }}
                  >
                    {live ? (
                      <MdCheckBox className="text-xl" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="text-xl" />
                    )}
                  </button>
                  <p className="text-sm">Live & activity notifications</p>
                </div>
                <div className="flex gap-[6px] items-center">
                  <button
                    onClick={() => {
                      setProduct(!product)
                      setAll(false)
                    }}
                  >
                    {product ? (
                      <MdCheckBox className="text-xl" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="text-xl" />
                    )}
                  </button>
                  <p className="text-sm">Product updates and highlights</p>
                </div>
                <div className="flex gap-[6px] items-center">
                  <button
                    onClick={() => {
                      setTrip(!trip)
                      setAll(false)
                    }}
                  >
                    {trip ? (
                      <MdCheckBox className="text-xl" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="text-xl" />
                    )}
                  </button>
                  <p className="text-sm">Trip recommendations</p>
                </div>
                <div className="flex gap-[6px] items-center">
                  <button
                    onClick={() => {
                      setGame(!game)
                      setAll(false)
                    }}
                  >
                    {game ? (
                      <MdCheckBox className="text-xl" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="text-xl" />
                    )}
                  </button>
                  <p className="text-sm">Game updates</p>
                </div>
                <div className="flex gap-[6px] items-center">
                  <button
                    onClick={() => {
                      setAll(!all)
                    }}
                  >
                    {all ? (
                      <MdCheckBox className="text-xl" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="text-xl" />
                    )}
                  </button>
                  <p className="text-sm">Unsubscribe from all</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleSaveButton}
            className="bg-white text-black hover:bg-black hover:text-white flex text-[15px] max-w-[300px] mt-[10px] italic py-[18px] md:px-[98px] w-full border border-black hover:border-white justify-center items-center"
          >
            SAVE CHANGE
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-black bg-opacity-50 z-[1001]">
        <div className="w-full">
          <NotifyGreen
            onClose={() => {
              setShowGreenNotification(false)
            }}
            text={notificationText}
            show={showGreenNotification}
          />
          <NotifyRed
            onClose={() => {
              setShowRedNotification(false)
            }}
            text={notificationText}
            show={showRedNotification}
          />
        </div>
      </div>
    </>
  )
}

Preference.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
