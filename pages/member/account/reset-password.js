import { useState, useEffect } from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import AccountBtn from '@/components/linda/buttons/accountBtn'
import { useAuth } from '@/contexts/auth-context'
import { z } from 'zod'
import { MB_UPDATE_PASS } from '@/components/config/api-path'
import { Router, useRouter } from 'next/router'
import Loader from '@/components/linda/loader/loader'

const passwordRe = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
const schemaPassword = z.string().regex(passwordRe, {
  message: 'USE 8 OR MORE CHARACTERS MIXING LETTERS AND NUMBERS',
})

export default function CreateNewPassword() {
  const router = useRouter()
  const { auth, dateInSec } = useAuth()
  const token = router.query.token

  const defaultForm = {
    newPassword: '',
    repeatedPassword: '',
  }

  const initErrors = {
    newPassword: '',
    repeatedPassword: '',
  }

  const [showNewPass, setShowNewPass] = useState(false)
  const [showRepeatedPass, setShowRepeatedPass] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [errors, setErrors] = useState(initErrors)
  const [passwordErrorCode, setPasswordErrorCode] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }))

    if (isSubmitted) {
      updateError()
    }
  }

  const updateError = () => {
    let initErrors = {
      hasErrors: false,
      newPassword: '',
      repeatedPassword: '',
    }

    if (!form.newPassword) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        newPassword: 'Cannot be blank',
      }
    } else {
      const passwordZod = schemaPassword.safeParse(form.newPassword)
      if (!passwordZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          newPassword: passwordZod.error.issues[0].message,
        }
      }
    }

    if (!form.repeatedPassword) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        repeatedPassword: 'Cannot be blank',
      }
    } else if (passwordErrorCode === 1) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        repeatedPassword: 'Token is required',
      }
    } else if (passwordErrorCode === 2 || passwordErrorCode === 3) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        repeatedPassword: 'Invalid or expired token',
      }
    } else if (passwordErrorCode === 4) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        repeatedPassword: 'This link is used already. Try requesting new email',
      }
    } else if (form.newPassword.trim() !== form.repeatedPassword.trim()) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        repeatedPassword: 'Passwords do not match',
      }
    }

    if (initErrors.hasErrors) {
      setErrors(initErrors)
      return false
    } else {
      setErrors(initErrors)
      return true
    }
  }

  const handleButtonClick = async () => {
    setIsSubmitted(true)
    const passedValidation = updateError()
    if (passedValidation) {
      try {
        const r = await fetch(MB_UPDATE_PASS, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newPassword: form.newPassword, token: token }),
        })
        const result = await r.json()
        if (result.success) {
          router.push('/member/account/login?from=reset-password')
        } else {
          setPasswordErrorCode(result.code)
        }
      } catch (ex) {
        console.log('Failed to fetch edit email', ex)
      }
    }
  }

  useEffect(() => {
    if (isSubmitted) {
      updateError()
    }
  }, [form, passwordErrorCode])

  useEffect(() => {
    if (auth.id) {
      router.push('/')
    }
  }, [auth, router])

  return (
    <>
      <Navbar />
      <Loader>
        <>
          <div className="select-none flex w-full md:py-0 px-[24px] pt-[100px] pb-[150px] h-lvh flex-col justify-center items-center gap-y-2.5 ">
            <div className="flex flex-col md:w-5/12 items-center pb-[34px]">
              <div className="flex self-stretch border-b-[3px] text-white">
                <div className="flex md:flex-row w-full flex-col gap-[35px]">
                  <div className="text-[25px] md:pb-0 pb-[40px] flex justify-center">
                    CREATE NEW PASSWORD
                  </div>
                  <a
                    href="./login"
                    className="md:text-base uppercase text-[15px] text-[#9F9F9F] flex justify-end items-end"
                  >
                    Login
                  </a>
                </div>
                <div className="flex items-end justify-end md:block hidden flex-1 text-[#9F9F9F] font-thin text-xl">
                  {dateInSec}
                </div>
              </div>
              <div className="flex flex-col items-start self-stretch">
                {/* Password input */}
                <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                  <div className="flex gap-[30px] font-medium text-xl">
                    <label
                      htmlFor="newPassword"
                      className="text-[#9F9F9F] text-base"
                    >
                      NEW PASSWORD
                    </label>
                  </div>
                  <div
                    className={`${errors.newPassword ? 'text-[#EA7E7E]' : 'text-white'} h-[24px] font-medium py-1 text-xs uppercase`}
                  >
                    {errors.newPassword}
                  </div>
                  <div className="flex pl-[66px] py-3">
                    {' '}
                    <input
                      name="newPassword"
                      id="newPassword"
                      onChange={handleChange}
                      type={showNewPass ? 'text' : 'password'}
                      className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                    />{' '}
                    <div
                      onClick={() => {
                        setShowNewPass(!showNewPass)
                      }}
                    >
                      {showNewPass ? (
                        <IoMdEye className="md:text-2xl text-xl text-white" />
                      ) : (
                        <IoMdEyeOff className="md:text-2xl text-xl text-white" />
                      )}
                    </div>
                  </div>
                </div>
                {/* Confirm Password input */}
                <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                  <div className="flex gap-[30px] font-medium text-xl">
                    <label
                      htmlFor="repeatedPassword"
                      className="text-[#9F9F9F] text-base"
                    >
                      CONFIRM PASSWORD
                    </label>
                  </div>
                  <div className="h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                    {errors.repeatedPassword}
                  </div>
                  <div className="flex pl-[66px] py-3">
                    {' '}
                    <input
                      name="repeatedPassword"
                      id="repeatedPassword"
                      onChange={(e) => {
                        handleChange(e)
                        setPasswordErrorCode(0)
                      }}
                      type={showRepeatedPass ? 'text' : 'password'}
                      className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                    />{' '}
                    <div
                      onClick={() => {
                        setShowRepeatedPass(!showRepeatedPass)
                      }}
                    >
                      {showRepeatedPass ? (
                        <IoMdEye className="md:text-2xl text-xl text-white" />
                      ) : (
                        <IoMdEyeOff className="md:text-2xl text-xl text-white" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AccountBtn onClick={handleButtonClick} text="save" />
        </>
      </Loader>
    </>
  )
}
