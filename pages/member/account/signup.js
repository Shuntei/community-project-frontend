import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import Checkbox from '@/public/icons/checkbox.svg'
import CheckboxEmpty from '@/public/icons/CheckboxEmpty.svg'
import CheckboxEmptyRed from '@/public/icons/CheckboxEmptyRed.svg'
import Image from 'next/image'
import AccountBtn from '@/components/linda/buttons/accountBtn'
import { z } from 'zod'
import Router, { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { useAuth } from '@/contexts/auth-context'

const nameRe = new RegExp(/^[a-zA-Z0-9]+$/)
const schemaName = z
  .string()
  .min(3, { message: 'Username is too short' })
  .regex(nameRe, { message: 'Invalid username (use letters & numbers)' })
  .max(25, { message: "It's too long" })
const passwordRe = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
const schemaPassword = z
  .string()
  .regex(passwordRe, { message: 'wrong password' })
const schemaEmail = z.string().email({ message: 'Invalid email address' })
const phoneRe = new RegExp(/^09\d{2}-?\d{3}-?\d{3}$/)
const schemaPhone = z.string().regex(phoneRe, { message: 'Invalid number' })
const birthdayRe = new RegExp(
  /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
)
const schemaBirthday = z
  .string()
  .regex(birthdayRe, { message: 'Invalid birthday' })

export default function Signup() {
  const router = useRouter()
  const { signup, auth, dateInSec } = useAuth()
  const [submitted, setSubmitted] = useState(false)
  const [checked, setChecked] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [emailErrorCode, setEmailErrorCode] = useState(null)
  const [usernameErrorCode, setUsernameErrorCode] = useState(null)
  const [myForm, setMyForm] = useState({
    email: '',
    password: '',
    username: '',
    phone: '',
    birthday: '',
  })

  const [errors, setErrors] = useState({
    hasErrors: false,
    email: '',
    password: '',
    username: '',
    phone: '',
    birthday: '',
    agreement: false,
  })

  useEffect(() => {
    if (auth.id) {
      router.back()
    }

    const {email} = router.query
    if(email){
      setMyForm(prevForm => ({
        ...prevForm,
        email: email.toString(),
      }))
    }
  }, [auth, router])

  const today = new Date().toISOString().split('T')[0]
  const handleChange = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value })
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  const updateError = () => {
    let initErrors = {
      hasErrors: false,
      email: '',
      password: '',
      username: '',
      phone: '',
      birthday: '',
      agreement: '',
    }

    if (!myForm.email) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        email: 'Cannot be blank',
      }
    } else if (emailErrorCode === 2 || emailErrorCode === 3) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        email: 'email is in use. try another',
      }
    } else {
      const emailZod = schemaEmail.safeParse(myForm.email)
      if (!emailZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          email: emailZod.error.issues[0].message,
        }
      }
    }

    if (!myForm.password) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        password: 'Cannot be blank',
      }
    } else {
      const passwordZod = schemaPassword.safeParse(myForm.password)
      if (!passwordZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          password: passwordZod.error.issues[0].message,
        }
      }
    }

    myForm.username = myForm.username.trim()
    if (!myForm.username) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        username: 'Cannot be blank',
      }
    } else if (usernameErrorCode === 1 || usernameErrorCode === 3) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        username: 'THIS NAME IS ALREADY TAKEN, TRY ANOTHER',
      }
    } else {
      const nameZod = schemaName.safeParse(myForm.username)
      if (!nameZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          username: nameZod.error.issues[0].message,
        }
      }
    }

    if (!myForm.phone) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        phone: 'Cannot be blank',
      }
    } else {
      const phoneZod = schemaPhone.safeParse(myForm.phone)
      if (!phoneZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          phone: phoneZod.error.issues[0].message,
        }
      }
    }

    if (!myForm.birthday) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        birthday: 'Cannot be blank',
      }
    } else {
      const birthdayZod = schemaBirthday.safeParse(myForm.birthday)
      if (!birthdayZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          birthday: birthdayZod.error.issues[0].message,
        }
      }
    }

    if (!checked) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        agreement: 'You must agree',
      }
    }

    if (initErrors.hasErrors) {
      setErrors(initErrors)
      return false
    } else {
      setErrors(initErrors)
      return true
    }

    // const result = initErrors.hasErrors
    // return result;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    const passedValidation = updateError()

    if (passedValidation) {
      const result = await signup(myForm)

      if (!result.success) {
        updateError()
        setEmailErrorCode(result.code)
        setUsernameErrorCode(result.code)
      } else {
        setEmailErrorCode(null)
        setUsernameErrorCode(null)
      }

      if (result.success) {
          router.back()
      }
    }
  }

  useEffect(() => {
    if (submitted) {
      updateError()
    }
  }, [myForm, emailErrorCode, usernameErrorCode])

  return (
    <>
      <Navbar />
      <form
        method="post"
        className="md:pb-0 md:h-[500px] pb-[136px]"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-center">
          <div className="flex md:w-1/2 md:py-0 px-[24px] pt-[75px] md:h-lvh flex-col justify-center items-center gap-y-2.5 ">
            <div className="flex flex-col self-stretch items-center pb-[34px]">
              <div className="flex self-stretch border-b-[3px] text-white">
                <div className="flex md:flex-row w-full flex-col gap-[35px]">
                  <div className="text-[25px] flex justify-center">SIGNUP</div>
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
                    <div className="bg-white px-2 text-black">1</div>
                    <label htmlFor='email' className="text-[#9F9F9F] text-base">EMAIL</label>
                  </div>
                  <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                    {errors.email}
                  </div>
                  <div className="pl-[66px] py-3">
                    {' '}
                    <input
                      type="text"
                      name="email"
                      id='email'
                      value={myForm.email}
                      onChange={(e) => {
                        handleChange(e)
                        setEmailErrorCode(null)
                      }}
                      className="bg-inherit focus:outline-none md:text-base text-[14px] text-white flex self-stretch w-full flex-1 text-base"
                    />{' '}
                  </div>
                </div>
                {/* Password input */}
                <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                  <div className="flex gap-[30px] font-medium text-xl">
                    <div className="bg-white px-2 text-black">2</div>
                    <label htmlFor='password' className="text-[#9F9F9F] text-base">PASSWORD</label>
                  </div>
                  <div
                    className={`h-[24px] ${
                      errors.password ? 'text-[#EA7E7E]' : 'text-white'
                    }  font-medium py-1 text-xs uppercase`}
                  >
                    USE 8 OR MORE CHARACTERS MIXING LETTERS AND NUMBERS
                  </div>
                  <div className="flex pl-[66px] py-3">
                    {' '}
                    <input
                      type={showPass ? 'text' : 'password'}
                    id='password'
                      name="password"
                      value={myForm.password}
                      onChange={handleChange}
                      className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                    />{' '}
                    <div onClick={handleShowPass}>
                      {showPass ? (
                        <IoMdEye className="md:text-3xl text-xl text-white" />
                      ) : (
                        <IoMdEyeOff className="md:text-3xl text-xl text-white" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:flex-row flex-col">
                  {/* username input */}
                  <div className="flex flex-col flex-1 border-b self-stretch border-[#9F9F9F]">
                    <div className="flex gap-[30px] font-medium text-xl">
                      <div className="bg-white px-2 text-black">3</div>
                      <label htmlFor='username' className="text-[#9F9F9F] text-base">USERNAME</label>
                    </div>
                    <div className="h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                      {errors.username}
                    </div>
                    <div className="flex pl-[66px] py-3">
                      {' '}
                      <input
                        type="text"
                        name="username"
                        id='username'
                        value={myForm.username}
                        onChange={(e) => {
                          handleChange(e)
                          setUsernameErrorCode(null)
                        }}
                        className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                      />{' '}
                    </div>
                  </div>
                  {/* phone input */}
                  <div className="flex flex-col flex-1 border-b self-stretch border-[#9F9F9F]">
                    <div className="flex gap-[30px] font-medium text-xl">
                      <div className="bg-white px-2 text-black">4</div>
                      <label htmlFor='phone' className="text-[#9F9F9F] text-base">PHONE</label>
                    </div>
                    <div className="h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                      {errors.phone}
                    </div>
                    <div className="flex pl-[66px] py-3">
                      {' '}
                      <input
                        type="text"
                        name="phone"
                        id='phone'
                        value={myForm.phone}
                        onChange={handleChange}
                        className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                      />{' '}
                    </div>
                  </div>
                  {/* Birthday, terms & agreement */}
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                    <div className="flex gap-[30px] font-medium text-xl">
                      <div className="bg-white px-2 text-black">5</div>
                      <label htmlFor='birthday' className="text-[#9F9F9F] text-base">BIRTHDAY</label>
                    </div>
                    <div className="h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                      {errors.birthday}
                    </div>
                    <div className="flex relative pl-[66px] py-3 self-stretch justify-between">
                      {' '}
                      <input
                        placeholder="YYYY/MM/DD"
                        type="date"
                        name="birthday"
                        id='birthday'
                        max={today}
                        value={myForm.birthday}
                        onChange={handleChange}
                        className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                      />{' '}
                      <div
                        onClick={handleChange}
                        className="flex gap-2.5 md:relative md:top-0 absolute top-[100px] right-0"
                      >
                        <div
                          onClick={() => {
                            setChecked(!checked)
                          }}
                        >
                          <Image
                            alt=""
                            src={
                              errors.agreement
                                ? CheckboxEmptyRed
                                : checked
                                  ? Checkbox
                                  : CheckboxEmpty
                            }
                            className="cursor-pointer md:w-[30px] w-[20px]"
                          />
                        </div>
                        <div
                          className={`${
                            errors.agreement
                              ? 'text-[#EA7E7E]'
                              : 'text-[#F1F1F1]'
                          } md:text-[15px] text-[12px] flex items-end`}
                        >
                          I ACCEPT THE ACCOUNT AGREEMENT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full bg-white hover:bg-black pb-[13px] md:absolute bottom-0 left-0 fixed"
        >
          <div className="flex uppercase w-full items-center justify-center md:py-[30px] py-[20px] border-b border-black hover:border-white hover:text-white md:text-[24px] text-[20px]">
            create account
          </div>
        </button>
      </form>
    </>
  )
}
