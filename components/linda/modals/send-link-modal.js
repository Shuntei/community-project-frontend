import React, { useEffect, useState } from 'react'
import AccountBtn from '@/components/linda/buttons/accountBtn'
import { z } from 'zod'
import { useAuth } from '@/contexts/auth-context'
import { MB_REQ_EMAIL } from '@/components/config/api-path'

const schemaEmail = z.string().email({ message: 'Invalid email address' })

export default function SendLinkModal({
  email,
  setEmail,
  setShowSendLink,
  setShowCheckEmail,
}) {
  const [isSubmitted, setSubmitted] = useState(false)
  const { dateInSec } = useAuth()
  const [error, setError] = useState({ error: '' })
  const [errorCode, setErrorCode] = useState(0)
  const [remainingSec, setRemainingSec] = useState(599)

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const updateError = () => {
    let initErrors = {
      hasErrors: false,
      email: '',
    }

    if (!email) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        email: 'Cannot be blank',
      }
    } else if (errorCode === 1){
      initErrors = {
        ...initErrors,
        hasErrors: true,
        email: `Unregistered account`,
      }
    }
    else if (errorCode === 2) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        email: `Already requested an email. Try again in ${remainingSec} seconds`,
      }
    } else {
      const emailZod = schemaEmail.safeParse(email)
      if (!emailZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          email: emailZod.error.issues[0].message,
        }
      }
    }

    if (initErrors.hasErrors) {
      setError(initErrors)
      return false
    } else {
      setError(initErrors)
      return true
    }
  }

  const handleSendLink = async () => {
    setSubmitted(true)
    const passedValidation = updateError()
    if (passedValidation) {
      try {
        const r = await fetch(MB_REQ_EMAIL, {
          method: 'post',
          body: JSON.stringify({ email }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const result = await r.json()

        if (!result.success) {
          setErrorCode(result.code)
          setRemainingSec(result.sec)
        } else {
          setShowCheckEmail(true)
          setShowSendLink(false)
        }
      } catch (error) {
        console.log('Requesting email failed', error)
      }
    }
  }

  useEffect(()=>{
    if(isSubmitted){
      updateError()
    }
  }, [email, errorCode])

  return (
    <>
      <div className="flex justify-center h-[500px]">
        <div className="flex md:w-5/12 md:py-0 pb-[36px] h-lvh pb-[140px] flex-col justify-center items-center gap-y-2.5 ">
          <div className="flex flex-col self-stretch items-center pb-[34px]">
            <div className="flex self-stretch border-b-[3px] text-white">
              <div className="flex md:flex-row w-full flex-col gap-[35px]">
                <div className="text-[25px] flex justify-center">
                  RESET PASSWORD
                </div>
                <a
                  href="./login"
                  className="md:text-base text-[15px] text-[#9F9F9F] flex justify-end items-end"
                >
                  LOGIN
                </a>
              </div>
              <div className="flex items-end justify-end md:block hidden flex-1 text-[#9F9F9F] font-thin text-xl">
                {dateInSec}
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
              {/* Email input */}
              <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                <div className="flex gap-[30px] font-medium text-xl">
                  <label htmlFor="email" className="text-[#9F9F9F] text-base">
                    EMAIL
                  </label>
                </div>
                <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                  {error.email}
                </div>
                <div className="pl-[66px] py-3">
                  {' '}
                  <input
                    name="email"
                    id="email"
                    onChange={(e) => {
                      handleChange(e)
                      setErrorCode(0)
                    }}
                    type="text"
                    className="bg-inherit focus:outline-none md:text-base text-[14px] text-white flex self-stretch w-full flex-1 text-base"
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccountBtn onClick={handleSendLink} text="send link" />
    </>
  )
}
