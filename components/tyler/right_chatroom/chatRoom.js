import { API_SERVER, IMG_SERVER } from '@/components/config/api-path'
import { useAuth } from '@/contexts/auth-context'
import usePoint from '@/contexts/use-points'
import useToggle from '@/contexts/use-toggle-show'
import { socket } from '@/src/socket'
import {
  RiCloseFill,
  RiGift2Line,
  RiMoneyDollarCircleFill,
  RiPushpinFill,
  RiReplyFill,
  RiUser3Fill,
  RiUserFill,
} from '@remixicon/react'
import { useEffect, useRef, useState } from 'react'
import styles from './chatRoom.module.css'

export default function ChatRoom({ isConnected, comment, setComment }) {
  const { auth } = useAuth()
  const {
    onPhone,
    showChatroom,
    handleShowGift,
    handleShowMemberlist,
    role,
    roomCode,
    joinRoom,
  } = useToggle()
  const [replyTarget, setreplyTarget] = useState('')
  const [replyTargetName, setreplyTargetName] = useState('')
  const [peopleOnline, setPeopleOnline] = useState(0)
  const { pts, myPoints } = usePoint()
  const [pin, setPin] = useState(false)
  const [pinnedData, setPinnedData] = useState({
    commentId: null,
    comment: '',
    profile: '',
    name: '',
  })
  const handleCommentFocus = useRef()
  const SendButton = useRef()
  const [clickedIds, setClickedIds] = useState([])
  const containerHeight = useRef(null)

  useEffect(() => {
    const handlePeopleOnline = (liveNum) => {
      setPeopleOnline(liveNum)
    }
    socket.on('updateLiveNum', handlePeopleOnline)

    return () => {
      socket.off('updateLiveNum', handlePeopleOnline)
      socket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (containerHeight.current) {
      containerHeight.current.scrollTop = containerHeight.current.scrollHeight
    }
  }, [comment])

  let isComposing = false

  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      isComposing = false
    } else {
      isComposing = true
    }
  }

  const handleCommentSubmit = (e) => {
    if (e.target !== SendButton.current) {
      if (e.key === 'Enter' && !isComposing) {
        const inputComment = e.target.value.trim()
        let newId = Date.now()

        if (inputComment !== '') {
          const newComment = {
            id: newId,
            name: auth.id ? auth.username : '探險家',
            profile: !auth.id
              ? '/images/adventure.png'
              : auth.googlePhoto
                ? auth.profileUrl
                : `${IMG_SERVER}/${auth.profileUrl}`,
            comment: inputComment,
            reply: replyTarget,
            target: replyTargetName,
          }

          if (isConnected) {
            socket.emit('sendComment', newComment, roomCode)
            console.log({ newComment }, { roomCode })
            e.target.value = ''
            setreplyTarget('')
          } else {
            console.log(`socket尚未連線`)
          }
        }
      }
    } else if (e.target == SendButton.current) {
      const inputComment = handleCommentFocus.current.value.trim()
      let newId = Date.now()

      if (inputComment !== '') {
        const newComment = {
          id: newId,
          name: auth.id ? auth.username : '探險家',
          profile: !auth.id
            ? '/images/adventure.png'
            : auth.googlePhoto
              ? auth.profileUrl
              : `${IMG_SERVER}/${auth.profileUrl}`,
          comment: inputComment,
          reply: replyTarget,
          target: replyTargetName,
        }

        if (isConnected) {
          socket.emit('sendComment', newComment, roomCode)
          console.log({ newComment }, { roomCode })
          handleCommentFocus.current.value = ''
          setreplyTarget('')
        } else {
          console.log(`socket尚未連線`)
        }
      }
    }
  }

  // 回覆功能
  const handleClickIcon = (comment, name) => {
    const target = comment
    const targetName = name
    setreplyTarget(target)
    setreplyTargetName(targetName)
    handleCommentFocus.current.focus()
  }

  const handleReply = () => {
    setreplyTarget('')
    setreplyTargetName('')
  }

  // 置頂功能
  useEffect(() => {
    socket.on('pinnedAll', (pinI, pinP, pinN, pinC) => {
      setPin(true)
      setPinnedData({
        commentId: pinI,
        profile: pinP,
        name: pinN,
        comment: pinC,
      })
    })

    return () => {
      socket.off('pinnedAll')
    }
  }, [])

  const handlePin = (pinI, pinP, pinN, pinC) => {
    setPin(!pin)
    setPinnedData({
      commentId: pinI,
      comment: pinC,
      profile: pinP,
      name: pinN,
    })

    socket.emit('pinnedComment', pinI, pinP, pinN, pinC, roomCode)
  }

  const handleUnpin = () => {
    setPin(false)
    socket.emit('unpinComment', roomCode)
  }

  useEffect(() => {
    socket.on('unpinAll', () => {
      setPin(false)
    })
  })

  // 點數功能

  useEffect(() => {
    if (joinRoom) {
      const getPoints = setInterval(() => {
        let newId = Date.now()
        const newComment = {
          id: newId,
          name: '系統',
          profile: '/images/treasure.png',
          comment: '點頭貼，領點數！',
        }
        console.log({ newId })

        setComment((prev) => [...prev, newComment])

        if (newComment.name !== '系統') {
          socket.emit('sendComment', newComment, roomCode)
        }
      }, 60000)

      return () => clearInterval(getPoints)
    }
  }, [joinRoom])

  const handleGetPoints = (profile, id) => {
    if (profile == '/images/treasure.png' && !clickedIds.includes(id)) {
      fetch(`${API_SERVER}/chat/add-point`, {
        method: 'POST',
        body: JSON.stringify({ id: auth.id }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(`新增 ${data} 點數`)
          setClickedIds((prevIds) => [...prevIds, id])
          console.log(clickedIds)
          myPoints()
        })
    }
  }

  return (
    <div
      className={`${styles['chatbar']} ${showChatroom ? '' : styles.hidden_right}`}
    >
      <div className={styles['chatbar-content']}>
        {onPhone ? (
          ''
        ) : (
          <>
            <div className="flex justify-between">
              <div className="text-xl">聊天室</div>
              <div className="flex items-center">
                <RiUser3Fill className="h-4 mt-0.5"></RiUser3Fill>
                {peopleOnline}
              </div>
            </div>
            <hr className="mt-2" />
          </>
        )}

        {/* 聊天內容 */}
        <div className={`${styles.chat}`} ref={containerHeight}>
          {comment.map((c) => {
            return (
              <div key={c.id} className="flex flex-col items-start mb-4">
                {c.reply && (
                  <div className={`flex text-xs ml-6 `}>
                    <RiReplyFill className="h-4" />
                    <div className="w-[200px] break-words">
                      {c.target}: {c.reply}
                    </div>
                  </div>
                )}

                <div className="flex justify-between w-full text-center">
                  <div className="flex w-6/12 gap-2 items-center justify-start">
                    <img
                      alt="大頭貼"
                      src={c.profile}
                      onClick={() => handleGetPoints(c.profile, c.id)}
                      className="bg-white rounded-full p-0.5 h-[34px] w-[34px] object-cover"
                    />
                    <div className="shrink-0">{c.name}</div>
                  </div>
                  {role === 'isStreamer' && c.name !== '系統' && (
                    <div className="flex w-6/12 justify-end">
                      <RiPushpinFill
                        className={styles.icon_reply}
                        onClick={() => {
                          handlePin(c.id, c.profile, c.name, c.comment)
                        }}
                      />
                    </div>
                  )}
                  {c.name !== '系統' && (
                    <RiReplyFill
                      className={styles.icon_reply}
                      onClick={() => {
                        handleClickIcon(c.comment, c.name)
                      }}
                    />
                  )}
                </div>

                <div className="w-[200px] ml-[42px] break-words">
                  {c.comment}
                </div>
              </div>
            )
          })}
        </div>

        {/* 釘選文字 */}
        <div
          className={`flex flex-col items-start rounded bg-neutral-700 p-1.5 mb-2 ${pin ? '' : 'hidden'}`}
        >
          <div className="flex justify-between w-full text-center">
            <div className="flex w-6/12 gap-2 items-center justify-start">
              <img
                alt="大頭貼"
                src={pinnedData.profile}
                className="bg-white rounded-full p-0.5 h-[34px] w-[34px] object-cover"
              />
              <div className="shrink-0">{pinnedData.name}</div>
            </div>
            {role === 'isStreamer' && (
              <div className="w-6/12 flex justify-end items-center">
                <RiCloseFill
                  className=" cursor-pointer h-5"
                  onClick={handleUnpin}
                ></RiCloseFill>
              </div>
            )}
          </div>
          <div className="w-[210px] ml-[42px] break-words">
            {pinnedData.comment}
          </div>
        </div>

        <hr className="border-dotted mb-1" />
        <hr className="border-dotted" />

        {/* 回覆哪個訊息 */}
        <div className={`flex justify-between ${replyTarget ? '' : 'hidden'}`}>
          <span
            className={`${styles.repliedTarget} w-[200px] text-sm break-words`}
          >
            回覆 @{replyTargetName}: {replyTarget}
          </span>
          <button className="mr-2" onClick={handleReply}>
            {replyTarget ? <RiCloseFill className="h-5"></RiCloseFill> : ''}
          </button>
        </div>

        {/* 發訊息 */}
        <div className={styles['comment-bar']}>
          <input
            type="text"
            placeholder="輸入內容"
            className="w-full p-1 pl-2 rounded text-black"
            onKeyDown={handleCommentSubmit}
            onCompositionStart={handleComposition}
            onCompositionEnd={handleComposition}
            maxLength={100}
            ref={handleCommentFocus}
          />

          <button
            className="absolute top-1 right-2 font-medium text-black"
            onClick={handleCommentSubmit}
            ref={SendButton}
          >
            {onPhone ? '送出' : ''}
          </button>
        </div>

        {/* 點數與禮物框 */}
        <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-1 ">
            <RiMoneyDollarCircleFill className="cursor-pointer"></RiMoneyDollarCircleFill>
            <div>{pts} pts</div>
          </div>
          <div className="flex gap-2">
            {onPhone ? (
              <>
                <RiGift2Line
                  className={styles.iconstore}
                  onClick={handleShowGift}
                />
                <RiUserFill
                  className={styles.iconstore}
                  onClick={handleShowMemberlist}
                ></RiUserFill>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
