import React, { useEffect, useState, useRef } from 'react'
import { RiCloseLargeLine } from '@remixicon/react'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import { MB_EDIT_INFO, MB_SEND_CODE } from '@/components/config/api-path'
import { useAuth } from '@/contexts/auth-context'
import NotifyRed from '../notify/notify-red'
import NotifyGreen from '../notify/notify-green'
import Router, { useRouter } from 'next/router'
import Loader from '../loader/loader'

export default function OTPModal({setShowOTPModal, isVisible, onClose, newEmail, newPassword }) {
  if (!isVisible) return null
  const router = useRouter()
  const { auth, logout } = useAuth()
  const [otpInputs, setOtpInputs] = useState(Array(5).fill(''))
  const inputRefs = useRef([])
  const [showRedNotification, setShowRedNotification] = useState(false)
  const [showGreenNotification, setShowGreenNotification] = useState(false)
  const [notificationText, setNotificationText] = useState('')
  const [processCompleted, setProcessCompleted] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    inputRefs.current[0].focus()
  }, [])

  const sendCode = async ()=>{
    const username = auth.username
    const email = auth.email
    const payload = {email, username}
    try {
      const r = await fetch(`${MB_SEND_CODE}/${auth.id}`, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const result = await r.json()

    } catch(ex){
      console.log("Something happened while sending code:", ex);
    }
  }

  const startCountdown = async () => {
    setDisableButton(true)
    await sendCode()
    setOtpInputs(Array(5).fill(''))

    let remainingTime = countdown

    const interval = setInterval(() => {
      remainingTime -= 1;
      setCountdown(remainingTime)
    }, 1000);

    setTimeout(()=>{
      clearInterval(interval)
      setCountdown(60)
      setDisableButton(false)
    }, countdown * 1000)
  }

  const handleChange = (index, value) => {
    const newInputs = [...otpInputs]
    newInputs[index] = value
    setOtpInputs(newInputs)

    if (value !== '' && index < otpInputs.length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otpInputs[index] === '') {
      inputRefs.current[index - 1].focus()
    }
  }

  const otpFields = otpInputs.map((input, index) => (
    <input
      key={index}
      ref={(ref) => (inputRefs.current[index] = ref)}
      type="text"
      className="flex w-1/5 bg-[#121517] text-white text-center text-base p-2 h-16 rounded focus:outline-none focus:border border-white"
      maxLength="1"
      value={input}
      onChange={(e) => handleChange(index, e.target.value)}
      onKeyDown={(e) => handleKeyDown(e, index)}
    />
  ))

  const verifyOTP = async () => {
    const otp = otpInputs.join('')

    const payload = { otp, newEmail, newPassword }

    try {
      const r = await fetch(`${MB_EDIT_INFO}/${auth.id}`, {
        method: 'post',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await r.json()

      if(!result.success){
        if(result.code === 3){
          setNotificationText('OTP has expired')
        setShowRedNotification(true)
        } else if(result.code === 4){
          setNotificationText('Invalid OTP')
          setShowRedNotification(true)
        }
      } else {
        if(result.code === 1){
          setNotificationText('Email updated successfully')
          setShowGreenNotification(true)
          setShowRedNotification(false)
          setProcessCompleted(true)
        } else if (result.code === 2){
          setNotificationText('Password updated successfully')
          setShowGreenNotification(true)
          setShowRedNotification(false)
          setProcessCompleted(true)
        }
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(()=>{
    if(processCompleted){
      setTimeout(async() => {
        await logout()
        setShowOTPModal(false)
        router.push('/member/account/login')
      }, 3000);
    }
  }, [processCompleted])

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
        <div className="flex flex-col md:h-auto h-full relative md:justify-center items-center gap-[37px] py-8 px-8 bg-[#292929] md:rounded-md divide-slate-200 md:w-[400px]">
          <div className="flex items-start w-full">
            <div className="flex flex-col gap-[30px] w-full">
              <div className="flex">
                <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">
                  ENTER SECURITY CODE
                </div>
                <div className="flex-1"></div>
                <button className="flex-none"
                disabled={processCompleted}
                >
                  <RiCloseLargeLine className="text-white" onClick={onClose} />
                </button>
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="text-[14px]">
                  A security code has been sent to:
                </div>
                <div className="text-[14px] font-bold">
                  {auth.email}
                </div>
              </div>
            </div>
          </div>
          <div className="gap-[25px] flex w-full flex-col">
            <form className="flex gap-4 items-center">{otpFields}</form>
            <button
              onClick={verifyOTP}
              className="bg-black hover:bg-[#7A7A7A] flex items-center justify-center w-full py-[18px] italic border border-white"
            >
              VERIFY OTP
            </button>

            <div className="text-[14px]">
              If you haven't received an email, check your spam folder
            </div>
            <div className="flex justify-center">
              <button
              disabled={disableButton || processCompleted}
              onClick={startCountdown}
              className={`underline hover:text-white text-[#9F9F9F]`}>
                Resend code {countdown === 60 || countdown < 1 ? '' : countdown}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 w-full bg-black bg-opacity-50 z-[1001]'>
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
    </>
  )
}
