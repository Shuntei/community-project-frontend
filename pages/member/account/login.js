import { useState, useEffect } from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import { FaGoogle } from 'react-icons/fa'
import AccountBtn from '@/components/linda/buttons/accountBtn'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/router'
import SendLinkModal from '@/components/linda/modals/send-link-modal'
import CheckEmailModal from '@/components/linda/modals/check-email'
import Loader from '@/components/linda/loader/loader'

export default function Login() {
  const { login, auth, googleLogin, dateInSec } = useAuth()
  const [showPass, setShowPass] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)
  const router = useRouter()
  const [showSendLink, setShowSendLink] = useState(false)
  const [showCheckEmail, setShowCheckEmail] = useState(false)
  const [email, setEmail] = useState('')
  const {from} = router.query

  const [myForm, setMyForm] = useState({
    account: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    hasErrors: false,
    account: '',
    password: '',
  })

  useEffect(() => {
    if (auth.id) {
      if(from === 'reset-password'){
        router.push('/')
      } else {
        router.back()
      }
    }
  }, [auth, router])

  const handleChange = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value })
  }

  const updateError = () => {
    let initErrors = {
      hasErrors: false,
      account: '',
      password: '',
    }

    if (loginFailed) {
      initErrors = {
        ...initErrors,
        hasErrors: false,
        password: 'Account or password is wrong',
      }
    }

    if (!myForm.account) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        account: 'Cannot be blank',
      }
    }

    if (!myForm.password) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        password: 'Cannot be blank',
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

  const handleLogin = (e) => {
    e.preventDefault()
    setSubmitted(true)

    const passedVal = updateError()

    if (passedVal) {
      login(myForm.account, myForm.password).then((result) => {
        if (result) {
          console.log("Login successful");
        } else {
          console.log('failed')
          setLoginFailed(true)
        }
      })
    }
  }

  useEffect(() => {
    if (submitted) {
      updateError()
    }
  }, [myForm, loginFailed])

  return (
    <>
      <Navbar />
      <Loader duration={1000}>
        {!showSendLink && !showCheckEmail ? (
          <>
            <div className="flex md:h-[500px] md:pt-0 pt-[100px] justify-center">
              <div className="flex md:w-1/2 md:py-0 px-[24px] pb-[36px] md:h-lvh h-auto flex-col justify-center items-center gap-y-2.5 ">
                <div className="flex flex-col self-stretch items-center pb-[34px]">
                  <div className="flex self-stretch border-b-[3px] text-white">
                    <div className="flex md:flex-row w-full flex-col gap-[35px]">
                      <div className="text-[25px] flex justify-center">
                        LOGIN
                      </div>
                      <a
                        href="./signup"
                        className="md:text-base text-[15px] text-[#9F9F9F] flex justify-end items-end"
                      >
                        SIGNUP
                      </a>
                    </div>
                    <div className="flex items-end justify-end md:block hidden flex-1 text-[#9F9F9F] font-thin text-xl">
                      {dateInSec}
                    </div>
                  </div>
                  <div className="flex flex-col items-start self-stretch">
                    {/* username input */}
                    <div className="flex flex-col flex-1 border-b self-stretch border-[#9F9F9F]">
                      <div className="flex gap-[30px] font-medium text-xl">
                        <label
                          htmlFor="account"
                          className="text-[#9F9F9F] text-base"
                        >
                          ACCOUNT
                        </label>
                      </div>
                      <div
                        className={`h-[24px] ${errors.account ? 'text-[#EA7E7E]' : 'text-white'}  font-medium py-1 text-xs uppercase`}
                      >
                        {errors.account ? errors.account : 'username or email'}
                      </div>
                      <div className="flex pl-[66px] py-3">
                        {' '}
                        <input
                          type="text"
                          name="account"
                          id="account"
                          onChange={handleChange}
                          className="bg-inherit placeholder:uppercase focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                        />{' '}
                      </div>
                    </div>
                    {/* Password input */}
                    <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                      <div className="flex gap-[30px] font-medium text-xl">
                        <label
                          htmlFor="password"
                          className="text-[#9F9F9F] text-base"
                        >
                          PASSWORD
                        </label>
                      </div>
                      <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                        {errors.password}
                      </div>
                      <div className="flex pl-[66px] py-3">
                        {' '}
                        <input
                          type={showPass ? 'text' : 'password'}
                          name="password"
                          id="password"
                          onChange={handleChange}
                          className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                        />{' '}
                        <div
                          onClick={() => {
                            setShowPass(!showPass)
                          }}
                        >
                          {showPass ? (
                            <IoMdEye className="md:text-3xl text-xl text-white" />
                          ) : (
                            <IoMdEyeOff className="md:text-3xl text-xl text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:gap-[100px] gap-0 md:flex-row flex-col text-white md:items-center">
                  <button
                    onClick={() => {
                      setShowSendLink(true)
                    }}
                    className="border-b border-white ml-auto"
                  >
                    FORGOT PASSWORD
                  </button>
                  <button
                    onClick={googleLogin}
                    className="mt-[50px] flex bg-black hover:bg-[#7A7A7A] justify-center text-white border items-center gap-2.5 px-[35px] py-[18px] md:my-0"
                  >
                    <FaGoogle />
                    <div className="font-[15px]">CONTINUE WITH GOOGLE</div>
                  </button>
                </div>
              </div>
            </div>
            <AccountBtn onClick={handleLogin} text="login" />
          </>
        ) : null}
        {showSendLink ? (
          <SendLinkModal
            email={email}
            setEmail={setEmail}
            setShowSendLink={setShowSendLink}
            setShowCheckEmail={setShowCheckEmail}
          />
        ) : null}
        {showCheckEmail ? (
          <CheckEmailModal
            email={email}
            setShowSendLink={setShowSendLink}
            setShowCheckEmail={setShowCheckEmail}
          />
        ) : null}
      </Loader>
    </>
  )
}
