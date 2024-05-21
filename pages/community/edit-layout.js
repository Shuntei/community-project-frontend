import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import { useToggles } from '@/contexts/use-toggles'
import FollowsBar from '@/components/johnny/bar-follows-notify'
import InfoBar from '@/components/johnny/bar-ps-intro'
import PageSelect from '@/components/johnny/page-select'
import Navbar from '@/components/linda/navbar/navbar'
import { useRouter } from 'next/router'
// import CentralContentP from './central-personal'

export default function EditLayout({ children }) {
  const { editModal, setEditModal } = useToggles()
  const router = useRouter()
  // console.log(editModal)
  console.log(router)

  console.log('test', router.query.test)
  // 編輯途中重整導回個人頁
  useEffect(() => {
    if (!editModal) {
      router.push(`/community/main-personal`)
    }
  }, [editModal])
  // useEffect(() => {
  //   setEditModal(true)
  // }, [])

  return (
    <>
      <div className="h-screen">
        <Navbar className="bg-black" />
        <PageSelect />
        <InfoBar />
        <FollowsBar />
        {/* <CentralContentP /> */}
        {editModal && <>{children}</>}
      </div>
    </>
  )
}
