import React, { useState, useRef, useEffect } from 'react'
import home2 from '@/public/images/home2.jpg'
import { MdOutlineFileUpload } from 'react-icons/md'
import ProfileIcon from '@/public/icons/profileIcon.svg'
import ProfileIconBold from '@/public/icons/profileIconBold.svg'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
import Toggle from '@/components/linda/toggle'
import { CgProfile } from 'react-icons/cg'
import AccountLayout from '@/components/linda/accountLayout'
import { useAuth } from '@/contexts/auth-context'
import { FaCamera } from 'react-icons/fa'
import NotifyGreen from '@/components/linda/notify/notify-green'
import NotifyRed from '@/components/linda/notify/notify-red'
import { MB_EDIT_PROFILE, IMG_SERVER } from '@/components/config/api-path'
import { z } from 'zod'
import { PiWarningCircle } from 'react-icons/pi'
import Router, { useRouter } from 'next/router'

const nameRe = new RegExp(/^[a-zA-Z0-9\s]*$/)
const schemaName = z
  .string()
  .min(3, { message: 'It is too short' })
  .regex(nameRe, { message: 'Must not contain special characters' })
const schemaEmail = z.string().email({ message: 'Invalid email' })

export default function Account() {
  const { auth, setUpdate, update } = useAuth()
  const [aboutMe, setAboutMe] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const coverInputRef = useRef(null)
  const avatarInputRef = useRef(null)
  const [coverPreview, setCoverPreview] = useState('')
  const [avatarPreview, setAvatarPreview] = useState('')
  const [showRedNotification, setShowRedNotification] = useState(false)
  const [showGreenNotification, setShowGreenNotification] = useState(false)
  const [notificationText, setNotificationText] = useState('')
  const [usernameErrorCode, setUsernameErrorCode] = useState(null)
  const storageKey = 'ruins-auth'
  const router = useRouter()

  const [myForm, setMyForm] = useState({
    cover: '',
    avatar: '',
    username: '',
    name: '',
    aboutMe: '',
    allowShowContact: false,
    yt: '',
    fb: '',
    ig: '',
    email: '',
  })

  const [errors, setErrors] = useState({
    hasErrors: false,
    name: '',
    username: '',
    email: '',
    fb: '',
    yt: '',
    ig: '',
  })

  const handleAboutMe = (e) => {
    const value = e.target.value
    setAboutMe(value)
    setCharCount(value.length)
  }

  const handleChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null

    if (!file) {
      // No file selected, handle accordingly
      setMyForm({ ...myForm, [e.target.name]: e.target.value })
      return
    }

    console.log('file uploaded')
    const fileSizeInMB = file.size / (1024 * 1024)
    if (fileSizeInMB > 2) {
      setNotificationText('File size is too big (Max 2MB)')
      setShowRedNotification(true)
      return
    }
    setMyForm({ ...myForm, [e.target.name]: file })
    if (e.target.name === 'avatar') {
      setAvatarPreview(URL.createObjectURL(file))
    } else if (e.target.name === 'cover') {
      setCoverPreview(URL.createObjectURL(file))
    }
  }

  const updateError = (code) => {
    let initErrors = {
      hasErrors: false,
      name: '',
      username: '',
      email: '',
      fb: '',
      yt: '',
      ig: '',
    }

    if (!myForm.username) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        username: 'Cannot be blank',
      }
    } else if (code === 1) {
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

    if (myForm.name) {
      const nameZod = schemaName.safeParse(myForm.name)
      if (!nameZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          name: nameZod.error.issues[0].message,
        }
      }
    }

    if (myForm.email) {
      const emailZod = schemaEmail.safeParse(myForm.email)
      if (!emailZod.success) {
        initErrors = {
          ...initErrors,
          hasErrors: true,
          email: emailZod.error.issues[0].message,
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

  const editAPI = async () => {
    try {
      const fd = new FormData(document.form1)

      const r = await fetch(`${MB_EDIT_PROFILE}/${auth.id}`, {
        method: 'put',
        body: fd,
      })

      const result = await r.json()
      if (result.success) {
        const data = result.data[0]
        const str = localStorage.getItem(storageKey)
        const storageData = JSON.parse(str)
        try {
          storageData.username = data.username
          storageData.name = data.name
          storageData.aboutMe = data.about_me
          storageData.profileUrl = data.profile_pic_url
          storageData.coverUrl = data.cover_pic_url
          storageData.googleLogin = data.google_login
          storageData.googlePhoto = data.google_photo
          storageData.showContactInfo = data.allow_contact_info_visibility
          storageData.fbLink = data.facebook_link
          storageData.ytLink = data.youtube_link
          storageData.igLink = data.instagram_link
          storageData.gmailLink = data.gmail_link

          localStorage.setItem(storageKey, JSON.stringify(storageData))
          return result.success
        } catch (ex) {
          console.log('Something happened while updating the local storage', ex)
        }
      } else {
        updateError(result.code)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  const handleFormSubmit = async () => {
    const passedValidation = updateError()
    if (passedValidation) {
      const isSuccessful = await editAPI()
      if (isSuccessful) {
        setUpdate(!update)
        updateFormInfo()
        setNotificationText('Edit successfully')
        setShowGreenNotification(true)
        // router.push()
      } else {
        setNotificationText('Edit unsuccessful')
        setShowRedNotification(true)
      }
    } else {
      setNotificationText('Check fields marked in red')
      setShowRedNotification(true)
    }
  }

  const updateFormInfo = () => {
    setMyForm((prevForm) => ({
      ...prevForm,
      username: auth.username || '',
      name: auth.name || '',
      aboutMe: auth.aboutMe || '',
      allowShowContact: auth.showContactInfo || false,
      yt: auth.ytLink || '',
      fb: auth.fbLink || '',
      ig: auth.igLink || '',
      email: auth.gmailLink || '',
    }))
  }

  useEffect(() => {
    let timer
    if (showRedNotification || showGreenNotification) {
      timer = setTimeout(() => {
        setShowRedNotification(false)
        setShowGreenNotification(false)
      }, 6000)
    }
    return () => clearTimeout(timer)
  }, [showRedNotification, showGreenNotification])

  useEffect(() => {
    updateFormInfo()
  }, [auth])

  return (
    <>
      <form name="form1" onSubmit={(e) => e.preventDefault()}>
        <div className="md:py-[50px] md:px-[80px] p-0 flex flex-col items-start md:p-0 p-[30px] gap-[28px] w-full">
          {/* Profile */}
          <div
            className="text-[29px] font-medium md:block hidden
            "
          >
            Profile
          </div>
          <div className="flex flex-col gap-[18px] ">
            <div className="text-[15px] font-bold md:block hidden">
              Personal details
            </div>
            <div className="text-[15px] md:block hidden">
              Create your own world
            </div>
          </div>
          {/* Upload banner */}
          <div
            onClick={() => {
              coverInputRef.current.click()
            }}
            className="md:h-72 h-52 relative w-full hover:brightness-50 cursor-pointer hover:shadow-[0_0_0_2px_rgba(255,255,255,1)]"
          >
            <div className="absolute flex gap-1.5 top-1/2 md:left-[40%] left-[30%] z-10">
              <MdOutlineFileUpload />
              <div className="font-bold text-[15px]">Upload banner</div>
            </div>
            <div
              className="bg-cover bg-center absolute inset-0"
              style={{
                backgroundImage: `url(${coverPreview ? coverPreview : `${IMG_SERVER}/${auth.coverUrl}`})`,
                width: '100%',
                height: 'auto',
              }}
            ></div>
          </div>
          <input
            onChange={handleChange}
            type="file"
            hidden
            name="cover"
            ref={coverInputRef}
          />
          <div className="flex cursor-pointer md:flex-row flex-col md:gap-[37px] gap-[20px] md:items-start items-center md:border-b md:border-white w-full">
            {/* Upload avatar */}
            <div
              onClick={() => {
                avatarInputRef.current.click()
              }}
              className="relative rounded-full max-h-[110px] min-w-[110px] flex justify-center items-center"
            >
              <Image
                priority
                className="max-h-[110px] min-h-[110px] object-cover min-w-[110px] rounded-full hover:border"
                alt=""
                width={110}
                height={110}
                src={
                  avatarPreview
                    ? avatarPreview
                    : auth.googlePhoto
                      ? auth.profileUrl
                      : `${IMG_SERVER}/${auth.profileUrl}`
                }
                onMouseEnter={() => {
                  setIsHovered(true)
                }}
                onMouseLeave={() => {
                  setIsHovered(false)
                }}
              />
              {isHovered ? (
                <div className="absolute rounded bg-white px-[8px] py-[4px] bottom-[10px] text-black right-0 text-[20px]">
                  <FaCamera />
                </div>
              ) : (
                ''
              )}
            </div>
            <input
              onChange={handleChange}
              type="file"
              name="avatar"
              hidden
              ref={avatarInputRef}
            />
            <div className="flex flex-col md:gap-[50px] gap-[30px] w-full">
              <div className="flex flex-col gap-[24px]">
                <div className="flex w-1/3 flex-col gap-[6px] md:w-2/5 w-full">
                  <div className="text-[#969696] text-[14px]">Name</div>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      type="text"
                      maxLength={50}
                      name="name"
                      value={myForm.name}
                      className="w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
                    />
                    <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-[11px] uppercase">
                      {errors.name}
                    </div>
                    {errors.name ? (
                      <PiWarningCircle className="absolute text-[#EA7E7E] text-[24px] top-1.5 right-2" />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="flex w-1/3 flex-col gap-[6px] md:w-2/5 w-full">
                  <div className="text-[#969696] text-[14px]">Username</div>
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      maxLength={25}
                      className="w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none "
                      value={myForm.username}
                      onChange={handleChange}
                    />
                    <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-[11px] uppercase">
                      {errors.username}
                    </div>
                    {errors.username ? (
                      <PiWarningCircle className="absolute text-[#EA7E7E] text-[24px] top-1.5 right-2" />
                    ) : (
                      ''
                    )}
                  </div>
                  <span className="text-[12px] text-[#969696]">
                    This will affect your login details
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[6px] md:w-3/5 w-full">
                <div className="text-[#969696] text-[14px]">About me</div>
                <textarea
                  name="aboutMe"
                  id=""
                  cols="30"
                  rows="10"
                  value={myForm.aboutMe}
                  maxLength={500}
                  onChange={(e) => {
                    handleAboutMe(e)
                    handleChange(e)
                  }}
                  className="px-[20px] placeholder:text-[#969696] leading-[22px] rounded py-[10px] focus:outline-none text-[14px] resize-none h-38 bg-[#191919]"
                  placeholder="Let others know something about you"
                ></textarea>
                <div className="text-[#969696] text-[14px] text-end">
                  {charCount}/500
                </div>
              </div>
              <div></div>
            </div>
          </div>
          {/* Contact information */}
          <div className="flex flex-col gap-[30px] md:pb-[120px] pb-[180px] md:pl-[30px]">
            <div className="flex items-center relative gap-[30px]">
              <div className="font-bold text-[15px]">Contact Information</div>
              {/* toggle button */}
              <div className="absolute right-0 top-[45px] md:block md:right-0 md:top-0">
                <label className={`inline-flex items-center cursor-pointer`}>
                  <input
                    type="checkbox"
                    value={myForm.allowShowContact}
                    name="allowShowContact"
                    checked={myForm.allowShowContact}
                    onChange={(e) => {
                      setMyForm((prevForm) => ({
                        ...prevForm,
                        allowShowContact: e.target.checked,
                      }))
                    }}
                    className="sr-only peer"
                  />
                  <div
                    className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${myForm.allowShowContact ? 'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-[#A3E592]' : ''}`}
                  />
                </label>
              </div>
            </div>
            <div className="text-[15px] w-9/12 md:w-full">
              Allow others to see this information on my profile — I understand
              and accept that I may be exposed to spam, phishing, and other
              things.
            </div>
            <div className="flex md:pt-[30px] flex-col gap-[40px]">
              <div className="flex gap-[18px] md:w-2/5 w-full">
                <FaYoutube className="text-[36px] h-auto" />
                <input
                  onChange={handleChange}
                  value={myForm.yt}
                  maxLength={150}
                  name="yt"
                  type="text"
                  placeholder="youtube.com/example"
                  className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
                />
              </div>
              <div className="flex gap-[18px] md:w-2/5 w-full">
                <FaFacebook className="text-[36px] h-auto" />
                <input
                  type="text"
                  onChange={handleChange}
                  value={myForm.fb}
                  name="fb"
                  maxLength={150}
                  placeholder="@example"
                  className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
                />
              </div>
              <div className="flex gap-[18px] md:w-2/5 w-full">
                <AiFillInstagram className="text-[36px] h-auto" />
                <input
                  type="text"
                  onChange={handleChange}
                  value={myForm.ig}
                  name="ig"
                  maxLength={150}
                  placeholder="@example"
                  className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
                />
              </div>
              <div className="flex items-start gap-[18px] md:w-2/5 w-full">
                <MdEmail className="text-[36px] h-auto" />
                <div className="w-full relative">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={myForm.email}
                    maxLength={150}
                    name="email"
                    placeholder="example@gmail.com"
                    className="bg-[#191919] w-full text-[14px] rounded h-10 p-3 bg-[#191919] focus:outline-none"
                  />
                  <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-[11px] uppercase">
                    {errors.email}
                  </div>
                  {errors.email ? (
                    <PiWarningCircle className="absolute text-[#EA7E7E] text-[24px] top-1.5 right-2" />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-[277px] fixed bottom-[148px] md:bottom-[103px] right-0 w-full ">
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
        {/* Footer button */}
        <div className="fixed bottom-0 right-0 flex md:flex-row flex-col py-[23px] md:px-[80px] text-white md:justify-between gap-[15px] items-center w-full md:pl-[360px] bg-black">
          <div className="flex gap-[15px] items-center">
            <CgProfile className="text-[30px]" />
            <div className="font-bold text-white text-[15px]">View Profile</div>
          </div>
          <div className="flex gap-[15px]">
            <button
            onClick={()=>{
              setCoverPreview('')
              setAvatarPreview('')
              updateFormInfo()
            }}
              type="button"
              className="hover:bg-[#7A7A7A] py-[18px] md:px-[98px] px-[47px] flex justify-center items-center border border-white font-medium italic"
            >
              CANCEL
            </button>
            <button
              type="button"
              onClick={handleFormSubmit}
              className="hover:bg-black border hover:border-white hover:text-white py-[18px] md:px-[98px] px-[47px] flex justify-center items-center font-medium italic bg-white text-black"
            >
              SAVE
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

Account.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
