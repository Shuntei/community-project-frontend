import React from 'react'
import { useToggles } from '@/contexts/use-toggles'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/auth-context'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useBoards } from '@/contexts/use-boards'

const notify = () => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    title: '請先登入會員',
    icon: 'info',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: `<a href="http://localhost:3000/member/account/login">點擊登入</a>`,
    cancelButtonText: `取消登入`,
    confirmButtonColor: '#292929', //#006400
    cancelButtonColor: '#8B0000',
    timer: 5000,
  })
}

export default function PageSelect({ bgColor = 'bg-black', optionsStyle }) {
  const { toggles, setToggles } = useToggles()
  optionsStyle =
    'text-white w-full text-center h-[40px] leading-[40px] cursor-pointer'
  const { setIsBoard } = useBoards()
  const router = useRouter()
  const { auth } = useAuth()

  const pathname = router.pathname

  return (
    <>
      <div
        className={`${bgColor} flex justify-center items-center h-[40px] fixed w-full z-[998] `}
      >
        <span
          className={
            pathname.includes('main-page')
              ? // ? `${optionsStyle} bg-zinc-600 `
                // : `${optionsStyle} bg-zinc-900`
                `${optionsStyle} bg-292929 `
              : `${optionsStyle} bg-gray-950`
          }
          onClick={() => {
            setIsBoard()
            setToggles({ ...toggles, follows: false, notification: false })
            router.push('./main-page')
          }}
        >
          HOME
        </span>
        <span
          className={
            pathname.includes('main-personal')
              ? // ? `${optionsStyle} bg-zinc-600`
                // : `${optionsStyle} bg-zinc-900`
                `${optionsStyle} bg-292929 `
              : `${optionsStyle} bg-gray-950`
          }
          onClick={() => {
            if (!auth.id) {
              notify()
              return
            } else {
              setToggles({ ...toggles, follows: false, notification: false })
              router.push({
                pathname: './main-personal',
                query: { ...router.query, psUserId: auth.id },
              })
            }
          }}
        >
          PERSONAL
        </span>
        {/* <span
          className={
            pathname.includes('main-messenger')
              ? // ? `${optionsStyle} bg-zinc-600`
                // : `${optionsStyle} bg-zinc-900`
                `${optionsStyle} bg-292929 `
              : `${optionsStyle} bg-gray-950`
          }
          onClick={() => {
            setToggles({ ...toggles, follows: false, notification: false })
            router.push('./main-messenger')
          }}
        >
          MESSENGER
        </span> */}
      </div>
      {/* 用於main page 頂部padding 滾軸時不會透出 */}
    </>
  )
}
