import { useState, useEffect } from 'react'
import { RiCloseLargeLine } from '@remixicon/react'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import { z } from 'zod'
import { useAuth } from '@/contexts/auth-context'
import { MB_CHECK_PASS } from '@/components/config/api-path'
import OTPModal from './otp-modal'

const passwordRe = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
const schemaPassword = z
  .string()
  .regex(passwordRe, {
    message: 'USE 8 OR MORE CHARACTERS MIXING LETTERS AND NUMBERS',
  })

export default function ChangePasswordPopup({
  isVisible,
  onClose,
  setShowOTPModal,
  setShowPasswordModal,
  setNewPassword,
}) {
  if (!isVisible) return null

  const { auth } = useAuth()

  const defaultForm = {
    oldPassword: '',
    newPassword: '',
    repeatedPassword: '',
    email: auth.email,
    username: auth.username,
  }

  const initErrors = {
    oldPassword: '',
    newPassword: '',
    repeatedPassword: '',
  }

  const [showOldPass, setShowOldPass] = useState(false)
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
      oldPassword: '',
      newPassword: '',
      repeatedPassword: '',
    }

    if (passwordErrorCode) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        oldPassword: 'wrong old password',
      }
    }

    if (!form.newPassword) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        newPassword: 'Cannot be blank',
      }
    } else if (form.oldPassword.trim() === form.newPassword.trim()) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        newPassword: 'new password should be different than old password',
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
        const r = await fetch(`${MB_CHECK_PASS}/${auth.id}`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        const result = await r.json()
        if (result.success) {
          setNewPassword(form.newPassword)
          setShowOTPModal(true)
          setShowPasswordModal(false)
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

  return (
    <div className="fixed select-none inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
      <div className="flex flex-col md:h-auto h-full relative md:justify-center items-center gap-[37px] py-8 px-8 bg-[#292929] md:rounded-md divide-slate-200 md:w-4/12">
        <div className="flex items-start w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="flex">
              <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">
                EDIT PASSWORD
              </div>
              <div className="flex-1"></div>
              <button className="flex-none">
                <RiCloseLargeLine className="text-white" onClick={onClose} />
              </button>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="text-[14px]">
                For your security, we highly recommend that you choose a unique
                password that you don’t use for any other online account.
              </div>
            </div>
          </div>
        </div>
        <div className="gap-[25px] flex w-full flex-col">
          <div className="flex w-full flex-col gap-[6px]">
            <div className="text-[#969696] text-[14px]">Old password</div>
            <div className="flex flex-col relative">
              {' '}
              <input
                name="oldPassword"
                onChange={(e) => {
                  handleChange(e)
                  setPasswordErrorCode(0)
                }}
                type={showOldPass ? 'text' : 'password'}
                className="bg-[#191919] h-[44px] rounded focus:outline-none text-[14px] text-white flex w-full p-[15px]"
              />{' '}
              {errors.oldPassword ? (
                <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                  {errors.oldPassword}
                </div>
              ) : (
                <div className="text-[#969696] mt-1 text-xs">
                  Do not complete this field if this account does not have a
                  previously associated password
                </div>
              )}
              <div
                className="absolute md:top-2 top-3 right-2"
                onClick={() => {
                  setShowOldPass(!showOldPass)
                }}
              >
                {showOldPass ? (
                  <IoMdEye className="md:text-2xl text-xl text-white" />
                ) : (
                  <IoMdEyeOff className="md:text-2xl text-xl text-white" />
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-[6px]">
            <div className="text-[#969696] text-[14px]">New password</div>
            <div className="flex flex-col relative">
              {' '}
              <input
                name="newPassword"
                onChange={(e) => {
                  handleChange(e)
                  // setPasswordErrorCode(0)
                }}
                type={showNewPass ? 'text' : 'password'}
                className="bg-[#191919] h-[44px] rounded focus:outline-none text-[14px] text-white flex w-full p-[15px]"
              />{' '}
              <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                {errors.newPassword}
              </div>
              <div
                className="absolute md:top-2 top-3 right-2"
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
          <div className="flex w-full flex-col gap-[6px]">
            <div className="text-[#969696] text-[14px]">Repeat password</div>
            <div className="flex flex-col relative">
              {' '}
              <input
                name="repeatedPassword"
                onChange={(e) => {
                  handleChange(e)
                  // setPasswordErrorCode(0)
                }}
                type={showRepeatedPass ? 'text' : 'password'}
                className="bg-[#191919] h-[44px] rounded focus:outline-none text-[14px] text-white flex w-full p-[15px]"
              />{' '}
              <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                {errors.repeatedPassword}
              </div>
              <div
                className="absolute md:top-2 top-3 right-2"
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
          <button
            onClick={handleButtonClick}
            className="bg-black hover:bg-[#7A7A7A] flex items-center justify-center w-full py-[18px] italic border border-white"
          >
            UPDATE PASSWORD
          </button>
        </div>
      </div>
    </div>
  )
}
