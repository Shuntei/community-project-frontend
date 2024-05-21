import React, { useEffect, useState } from 'react'
import CommentEditModal from './modal-edit-comment'
import { RiArrowDropDownLine, RiArrowDropUpLine } from '@remixicon/react'
import { SN_COMMENTS, SN_DELETE_COMMENT } from '../config/johnny-api-path'
import Link from 'next/link'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import toast from 'react-hot-toast'
import { useToggles } from '@/contexts/use-toggles'
import { useAuth } from '@/contexts/auth-context'
import dayjs from 'dayjs'

export default function Comment({ postId, renderAfterCm, setRenderAfterCm }) {
  const { auth } = useAuth()
  const [isComment, setIsComment] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)
  const [selectedCmId, setSelectedCmId] = useState('')
  console.log('heres the postId', postId)

  const { commentEditModal, setCommentEditModal } = useToggles()

  const commentsInit = () => {
    fetch(`${SN_COMMENTS}/${postId}`)
      .then((r) => r.json())
      .then((data) => {
        const { rows } = data
        console.log(rows)
        console.log(data)
        if (rows) {
          setIsComment(rows)
        }
      })
  }

  const removeComment = async (commentId) => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      icon: 'warning',
      title: '確認刪除留言?',
      showCancelButton: true,
      showCancelButton: true,
      confirmButtonColor: '#292929', //'#006400'
      cancelButtonColor: '#8B0000',
      confirmButtonText: '是',
      cancelButtonText: '否',
    }).then((rst) => {
      if (rst.isConfirmed) {
        MySwal.fire({
          title: '刪除成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        })

        fetch(`${SN_DELETE_COMMENT}/${commentId}`, {
          method: 'DELETE',
          body: JSON.stringify(commentId),
        })
          .then((r) => r.json())
          .then((result) => {
            // console.log(result)
            if (result.success) {
              setRenderAfterCm(!renderAfterCm)
            } else {
              toast.error('刪除失敗')
            }
          })
      }
    })
  }

  const editComment = (commentId) => {
    console.log(commentId)
    setCommentEditModal(true)
    setSelectedCmId(commentId)
    // console.log('inside', commentId)
  }

  useEffect(() => {
    commentsInit()
  }, [postId, renderAfterCm])

  return (
    <>
      {isComment &&
        isComment.map((v, i) => {
          return (
            <div
              className="bg-575757 rounded-md pc:p-10 p-3 my-2"
              key={v.comment_id}
            >
              <div className="likeZone:flex justify-between mb-5">
                <div>
                  <div className="text-[20px]">
                    {/* {auth.username} */}
                    {v.username}
                  </div>
                  {/* <div>role.name?</div> */}
                </div>
                <div className="likeZone:flex gap-2 items-center flex">
                  <span>
                    {dayjs(v.comment_timestamp).format('MMM DD, YYYY HH:mm')}
                  </span>
                  {/* <span>
                    <RiHeartLine />
                  </span> */}
                  <span
                    className="dropdown dropdown-end"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <div tabIndex={0} role="button">
                      {v.user_id === auth.id && (
                        <>
                          {toggleMenu ? (
                            <RiArrowDropUpLine className=" bg-white text-gray-600" />
                          ) : (
                            <RiArrowDropDownLine className=" bg-white text-gray-600" />
                          )}
                        </>
                      )}
                    </div>
                    {toggleMenu && (
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-24 text-black mt-2"
                      >
                        <li>
                          <span
                            // href={`/community/edit/${v.post_id}`}
                            onClick={() => editComment(v.comment_id)}
                          >
                            edit
                          </span>
                        </li>
                        <li onClick={() => removeComment(v.comment_id)}>
                          <a>remove</a>
                        </li>
                      </ul>
                    )}
                  </span>
                </div>
              </div>
              <div>
                <div>{v.content}</div>
              </div>
            </div>
          )
        })}
      {commentEditModal && (
        <CommentEditModal
          commentId={selectedCmId}
          renderAfterCm={renderAfterCm}
          setRenderAfterCm={setRenderAfterCm}
          commentsInit={commentsInit}
        />
      )}
    </>
  )
}
