import React, { useEffect, useState } from 'react'
import {
  SN_COMMUNITY,
  SN_POST_VIEWS,
  SN_USER_INFO_POST,
} from '@/components/config/johnny-api-path'
import Image from 'next/image'
// import profileImg from '../../components/johnny/img/16.jpg'
import { useRouter } from 'next/router'
import CommentModal from '@/components/johnny/modal-comment'
import { useToggles } from '@/contexts/use-toggles'
import { useBoards } from '@/contexts/use-boards'
import LikeButton from '../../components/johnny/interactive-like'
import CommentCount from '../../components/johnny/interactive-cm-count'
import Views from '../../components/johnny/interactive-views'
import Comment from '@/components/johnny/comment'
import {
  RiMapPinFill,
  RiPriceTag3Fill,
  RiCloseLargeLine,
  RiAddLine,
} from '@remixicon/react'
import { SN_POSTS } from '@/components/config/johnny-api-path'
import dayjs from 'dayjs'
import emotionHandler from '@/components/johnny/utils/emotionHandler'
import tagsHandler from '@/components/johnny/utils/tagsHandler'
import { IMG_SERVER } from '@/components/config/api-path'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'

export default function MainPost() {
  const [renderAfterCm, setRenderAfterCm] = useState(false)
  const router = useRouter()
  const { commentModal, setCommentModal } = useToggles()
  const { getPost, setGetPost } = useBoards()
  const [afterTimerReset, setAfterTimerReset] = useState(false)
  const [timerRun, setTimerRun] = useState(false)
  const [proFilePic, setProfilePic] = useState('')
  const [authUsername, setAuthUsername] = useState('')
  const { auth } = useAuth()

  const handleBack = () => {
    setTimerRun(false) //未達秒數退出時解除更新
    router.back()
  }
  const postId = router.query.postId
  console.log('postId', postId)

  const isPostId = async (postId) => {
    // 用於重整
    // const postIdExist = postId
    //   ? localStorage.setItem('postId', postId)
    //   : localStorage.getItem('postId')

    // if (!postIdExist) return
    const r = await fetch(`${SN_POSTS}?postId=${postId}`)
    const result = await r.json()
    setGetPost(result)
    console.log(result)
  }

  const isPostAuth = async (postId) => {
    const r = await fetch(`${SN_USER_INFO_POST}?postId=${postId}`)
    const result = await r.json()
    console.log(result)

    // 圖片處理區

    const profilePicUrl = result[0].profile_pic_url
    console.log(profilePicUrl)
    const googleId = result[0].google_id
    console.log(googleId)
    googleId
      ? setProfilePic(`${IMG_SERVER}/${profilePicUrl}`) ||
        setProfilePic(profilePicUrl)
      : setProfilePic(`${IMG_SERVER}/${profilePicUrl}`)

    // 其他資訊區
    setAuthUsername(result[0].username)
  }

  // 進入頁面一定秒數後更新觀看數
  useEffect(() => {
    setTimeout(() => {
      setTimerRun(true)
    }, 3000)
  }, [])

  // 判斷後更新觀看數
  if (timerRun) {
    fetch(`${SN_POST_VIEWS}/${postId}`)
      .then((r) => r.json())
      .then((rst) => {
        console.log(rst)
        setAfterTimerReset(!afterTimerReset) //更新列表
        setTimerRun(false)
      })
  }

  useEffect(() => {
    if (!router.isReady) return
    isPostId(postId)
    isPostAuth(postId)
  }, [postId, router.isReady, afterTimerReset])

  // console.log(getPost[0])

  if (!getPost[0]) {
    console.log('data not ready to load')
    return
  }

  // console.log(getPost[0])
  return (
    <>
      {getPost && (
        <div className=" flex pc:items-start items-baseline justify-between w-ful p-5">
          <section className=" text-white w-full pc:w-[1000px]   pc:p-10 pc:ml-20">
            {/* <!-- 標題區 --> */}
            <div className="flex justify-between mb-5">
              <div>
                <div className="text-[24px] border-b-2">{getPost[0].title}</div>
                {/* <div>Feb 27, 2024</div> */}
                <div>
                  {dayjs(getPost[0].posts_timestamp).format('MMM DD, YYYY')}
                </div>
              </div>
            </div>
            {/* <div className="flex my-2 gap-2 items-center size-[35px] overflow-hidden rounded-[100%]"> */}
            <Link
              href={
                getPost[0].user_id === auth.id
                  ? {
                      pathname: '/community/main-personal',
                      query: { psUserId: auth.id },
                    }
                  : {
                      pathname: '/community/main-page',
                      query: { psUserId: getPost[0].user_id },
                    }
              }
            >
              <div className="flex items-center gap-2 my-2 text-white">
                <img
                  className="rounded-[100%] size-[35px]"
                  src={
                    proFilePic
                    // auth.profileUrl
                    //   ? auth.googlePhoto
                    //     ? auth.profileUrl
                    //     : `${IMG_SERVER}/${auth.profileUrl}`
                    //   : ''
                  }
                  width={35}
                  height={35}
                  layout="full"
                  objectFit="cover"
                  alt=""
                />
                {authUsername ? authUsername : '匿名者'}
              </div>{' '}
            </Link>
            {/* <!-- 文章 --> */}
            <div className="flex mb-2 pc:my-5 gap-5 text-gray-400">
              {/* <div className="flex">
                <RiMapPinFill className="mr-2" />
                <span className="hidden pc:inline-block">待老坑山</span>
              </div> */}
              <div className="flex">
                {/* <RiPriceTag3Fill className="mr-2" />
                <span className="hidden pc:inline-block"> */}
                {tagsHandler(getPost[0].tags)}
                {/* </span> */}
              </div>
              <div className="flex">
                {/* <RiEmotionLaughFill className="mr-2" />
                <span className="hidden pc:inline-block">覺得新奇</span> */}
                {emotionHandler(getPost[0].emotion)}
              </div>
            </div>
            <div className="mb-2 text-[20px] pc:py-5">{getPost[0].content}</div>

            {/* <!-- 圖片 --> */}
            <div className="mb-2">
              {getPost[0].image_url && (
                <img
                  src={`${SN_COMMUNITY}/${getPost[0].image_url}`}
                  // sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '517px',
                    objectFit: 'contain',
                  }}
                  alt=""
                  unoptimized={true}
                />
              )}
            </div>
            <div className="flex gap-2 my-3 pc:mx-20 pc:my-5 justify-end">
              <Views postId={getPost[0].post_id} />
              <CommentCount postId={getPost[0].post_id} />
              <LikeButton postId={getPost[0].post_id} />
              {/* <LikeButton postId={postId} /> */}
            </div>
            {/* <!-- 留言按鈕 --> */}
            <div
              className="border-y-2 px-5 cursor-pointer flex items-center justify-center"
              onClick={() => setCommentModal(!commentModal)}
            >
              <button className="items-center flex text-[20px]">
                <RiAddLine size={'50px'} /> Add a Comment
              </button>
            </div>
            {commentModal ? (
              <CommentModal
                postId={getPost[0].post_id}
                renderAfterCm={renderAfterCm}
                setRenderAfterCm={setRenderAfterCm}
              />
            ) : (
              ''
            )}
            {/* <!-- 留言 --> */}
            <Comment
              postId={getPost[0].post_id}
              renderAfterCm={renderAfterCm}
              setRenderAfterCm={setRenderAfterCm}
            />
            {/* <!-- 留言回覆 --> */}
            {/* <div className="bg-575757 rounded-md pc:p-10 p-3 w-[90%] my-2">
              <div className="likeZone:flex justify-between mb-5">
                <div>
                  <div className="text-[20px]">NameHere@ccmail.com</div>
                  <div>role.name?</div>
                </div>
                <div className="likeZone:flex gap-2 items-center flex">
                  <span>Feb 13(3 hr ago)</span>
                  <span>
                    <RiHeartLine />
                  </span>
                  <span>
                    <RiArrowDropDownLine className=" bg-white text-gray-600" />
                  </span>
                </div>
              </div>
              <div>
                <div>
                  在這個現代化的世界中，我們常常著眼於高樓大廈和繁忙的街道，但往往忽略了城市中蘊藏的另一種美——廢墟。走進這些被遺棄的建築物，你會感受到一種截然不同的氛圍，
                  伴隨著曾經熱鬧的歷史和靜靜的荒廢。廢墟不僅僅是城市的遺忘之地，更是一個充滿著神秘和探險的世界。
                  在廢墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，記錄著這個地方的生活和歷史。
                  每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
                </div>
              </div>
            </div> */}
          </section>
          <div onClick={handleBack} className="hover:cursor-pointer">
            <RiCloseLargeLine
              className="text-white w-[20px] pc:size-[100px] pc:mt-[20px] pc:mr-[30px]"
              // size={'pc:100px'}
            />
          </div>
        </div>
      )}
    </>
  )
}
