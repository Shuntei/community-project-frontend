import ChannelAndMsg from '@/components/johnny/bar-msg-left'
import MessengerFollows from '@/components/johnny/bar-msg-follows'
import PageSelect from '@/components/johnny/page-select'
import React from 'react'
import CentralMsg from './central-msg'
import Navbar from '@/components/linda/navbar/navbar'

export default function MainMessenger() {
  const paddingBG = 'bg-292929'

  return (
    <div className="bg-292929 h-screen">
      {/* <Navbar className="bg-gradient-to-b from-black to-gray-800" /> */}
      <Navbar className="bg-gray-950" />
      <PageSelect />
      <div
        className={`mt-[40px] pc:h-[10px] h-[15px] fixed w-full z-10 ${paddingBG}`}
      ></div>
      <ChannelAndMsg />
      <MessengerFollows />
      <CentralMsg />
    </div>
  )
}
