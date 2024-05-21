import { useEffect, useState } from 'react'
import { RiCloseLargeLine } from '@remixicon/react'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import { useAuth } from '@/contexts/auth-context'
import { z } from 'zod'
import { MB_CHECK_EMAIL } from '@/components/config/api-path'

const schemaEmail = z.string().email({ message: 'Invalid email address' })

export default function ChangeEmailPopup({
  isVisible,
  onClose,
  setShowOTPModal,
  setShowEmailModal,
  setNewEmail,
}) {
  if (!isVisible) return null
  const { auth } = useAuth()
  const [showPass, setShowPass] = useState(false)
  const defaultForm = {
    password: '',
    newEmail: '',
    username: auth.username,
    email: auth.email
  }

  const initErrors = {
    password: '',
    newEmail: '',
  }

  const [form, setForm] = useState(defaultForm)
  const [errors, setErrors] = useState(initErrors)
  const [emailErrorCode, setEmailErrorCode] = useState(0)
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
      password: '',
      newEmail: '',
    }

    if (passwordErrorCode) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        password: 'wrong password',
      }
    }

    if (!form.newEmail) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        newEmail: 'Cannot be blank',
      }
    } else if (emailErrorCode) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        newEmail: 'email is in use. try another',
      }
    } else if (auth.email == form.newEmail) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        newEmail: 'it should be different than your current email',
      }
    } else {
      const emailZod = schemaEmail.safeParse(form.newEmail)
      if (!emailZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          newEmail: emailZod.error.issues[0].message,
        }
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
        const r = await fetch(`${MB_CHECK_EMAIL}/${auth.id}`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        const result = await r.json()
        if (result.success) {
          setNewEmail(form.newEmail)
          setShowOTPModal(true)
          setShowEmailModal(false)
        } else {
          result.emailCode ? setEmailErrorCode(result.emailCode) : ''
          result.passwordCode ? setPasswordErrorCode(result.passwordCode) : ''
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
  }, [form, emailErrorCode, passwordErrorCode])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
      <div className="flex flex-col md:h-auto h-full relative md:justify-center items-center gap-[37px] py-8 px-8 bg-[#292929] md:rounded-md divide-slate-200 md:w-4/12">
        <div className="flex items-start w-full">
          <div className="flex flex-col gap-[30px] w-full">
            <div className="flex">
              <div className="flex-none text-xl font-regular font-['IBM Plex Mono'] text-white ">
                EDIT EMAIL
              </div>
              <div className="flex-1"></div>
              <button className="flex-none">
                <RiCloseLargeLine className="text-white" onClick={onClose} />
              </button>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="text-[14px]">
                For your security, you will have to validate your request with a
                code sent to your old email.
              </div>
              <div className="max-w-[300px] md:max-w-full flex gap-[10px] whitespace-nowrap items-center md:text-[14px] text-[12px] overflow-hidden">
                Current email:
                <span className="font-bold whitespace-normal overflow-hidden overflow-ellipsis text-[14px]">
                  {auth.email}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-[25px] flex w-full flex-col">
          <div className="flex w-full flex-col gap-[6px]">
            <div className="text-[#969696] text-[14px]">Your password</div>
            <div className="flex flex-col relative">
              {' '}
              <input
                name="password"
                onChange={(e) => {
                  handleChange(e)
                  setPasswordErrorCode(0)
                }}
                type={showPass ? 'text' : 'password'}
                className="bg-[#191919] h-[44px] rounded focus:outline-none text-[14px] text-white flex w-full p-[15px]"
              />{' '}
              {errors.password ? (
                <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                  {errors.password}
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
                  setShowPass(!showPass)
                }}
              >
                {showPass ? (
                  <IoMdEye className="md:text-2xl text-xl text-white" />
                ) : (
                  <IoMdEyeOff className="md:text-2xl text-xl text-white" />
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-[6px]">
            <div className="text-[#969696] text-[14px]">New email</div>
            <div className="flex flex-col relative">
              <input
                name="newEmail"
                onChange={(e) => {
                  handleChange(e)
                  setEmailErrorCode(0)
                }}
                type="text"
                className="bg-[#191919] h-[44px] rounded focus:outline-none text-[14px] text-white flex w-full p-[15px]"
              />
              <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                {errors.newEmail}
              </div>
            </div>
          </div>
          <button
            onClick={handleButtonClick}
            className="bg-black hover:bg-[#7A7A7A] flex items-center justify-center w-full py-[18px] italic border border-white"
          >
            SEND CODE
          </button>
        </div>
      </div>
    </div>
  )
}
