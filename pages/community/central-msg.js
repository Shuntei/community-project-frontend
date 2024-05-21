import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import 'tailwindcss/tailwind.css'

import {
  RiSettings3Fill,
  RiSendPlane2Fill,
  RiFileUploadLine,
  RiImageFill,
  RiVideoOnFill,
} from '@remixicon/react'

const socket = io.connect('http://localhost:3007')

export default function CentralContentM() {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState('')
  const [messageSended, setMessageSended] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    socket.emit('send_message', { message })
    setMessageSended(message)
    // setMessages([...messages, { name: "Johnny", msgSend: messageSended }]);
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message)
      // setMessages([
      //   ...messages,
      //   { name: "Tomatoyota", msgReceive: messageReceived },
      // ]);
    })
  }, [socket])

  return (
    <>
      {/* 依據navbar 加mt-[88px] pc:mt-[113px]調整*/}
      <div className="flex justify-center pt-[50px] mt-[50px] pc:mt-[112px]">
        <section className="w-full pc:w-[900px]">
          {/* <!-- chatroom-title --> */}
          <div className="bg-292929 text-white w-full  flex justify-between items-center pb-8 pc:w-[900px] px-10 pc:px-0 fixed">
            <div className=" text-[32px] flex-col justify-center text-dbd7de">
              <div className="font-semibold">Channel Name</div>
              <div className="text-[20px]">8&nbsp;members</div>
            </div>
            <div className=" pc:px-2 pc:fs-4">
              <RiSettings3Fill className="text-[24px]" />
            </div>
          </div>
          {/* <!-- chat-content --> */}
          <form action="">
            <div className="pt-[150px] mb-5 h-[300px] pc:h-[400px] overflow-auto">
              <div className=" text-white mb-5">
                {/* {messages.map((v, i) => (
                  <div
                    className="border-b-2 border-b-slate-500 pc:px-0 px-10 py-3 flex"
                    key={i}
                  >
                    <div>
                      <div className=" text-[20px] font-semibold mb-3">
                        {v.name === "Johnny" ? v.name : "Tomatoyota"}
                        &nbsp;-&nbsp;21:03
                      </div>
                      <div className=" text-[14px]">
                        {v.name === "Johnny"
                          ? v.msgSend
                          : v.name === "Tomatoyota"
                          ? v.msgReceive
                          : ""}
                      </div>
                    </div>
                  </div>
                ))} */}

                {/* map前 */}
                <div className="border-b-2 border-b-slate-500 pc:px-0 px-10 py-3 flex">
                  <div>
                    <div className=" text-[20px] font-semibold mb-3">
                      Tomatoyota &nbsp;-&nbsp;21:03
                    </div>
                    <div className=" text-[14px]">{messageReceived}</div>
                  </div>
                </div>
                <div className="border-b-2 border-b-slate-500 pc:px-0 px-10 py-3 flex">
                  <div className="w-full text-end">
                    <div className=" text-[20px] font-semibold mb-3">
                      Johnny&nbsp;-&nbsp;21:03&nbsp;read
                    </div>
                    <div className=" text-[14px]">{messageSended}</div>
                  </div>
                </div>
                {/* map前 */}
                <div className="border-b-2 border-b-slate-500 pc:px-0 px-10 py-3 flex">
                  <div>
                    <div className=" text-[20px] font-semibold mb-3">
                      Tomatoyota&nbsp;-&nbsp;21:03
                    </div>
                    <div className=" text-[14px]">
                      墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，
                      記錄著這個地方的生活和歷史。每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-b-slate-500 pc:px-0 px-10 py-3 flex">
                  <div className="w-full text-end">
                    <div className=" text-[20px] font-semibold text-end mb-3">
                      Johnny&nbsp;-&nbsp;21:03&nbsp;read
                    </div>
                    <div className=" text-[14px]">
                      墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，
                      記錄著這個地方的生活和歷史。每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-b-slate-500 pc:px-0 px-10 py-3 flex">
                  <div>
                    <div className=" text-[20px] font-semibold mb-3">
                      Tomatoyota&nbsp;-&nbsp;21:03
                    </div>
                    <div className=" text-[14px]">
                      墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，
                      記錄著這個地方的生活和歷史。每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
                    </div>
                  </div>
                </div>
                <div className="border-b-2 border-b-slate-500 pc:px-0 px-10 py-3 flex">
                  <div className="w-full text-end">
                    <div className=" text-[20px] font-semibold text-end mb-3">
                      Johnny&nbsp;-&nbsp;21:03&nbsp;read
                    </div>
                    <div className=" text-[14px]">
                      墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，
                      記錄著這個地方的生活和歷史。每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-5 pt-3 pb-10 rounded-lg m-3">
              <div className="flex justify-between mb-3">
                <div className=" flex gap-3">
                  <div className="flex">
                    <RiImageFill className="mr-2 text-[24px]" />
                    <span className="hidden pc:inline-block">PHOTO</span>
                  </div>
                  <div className="flex">
                    <RiVideoOnFill className="mr-2 text-[24px]" />
                    <span className="hidden pc:inline-block">VIDEO</span>
                  </div>
                  <div className="flex">
                    <RiFileUploadLine className="mr-2 text-[24px]" />
                    <span className="hidden pc:inline-block">UPLOAD</span>
                  </div>
                </div>
                <div>
                  <button type="submit" onClick={sendMessage}>
                    <RiSendPlane2Fill className="text-[24px]" />
                  </button>
                </div>
              </div>
              <textarea
                className="w-full outline-none"
                placeholder="Message Here..."
                onChange={(e) => {
                  // e.preventDefault();
                  setMessage(e.target.value)
                }}
              ></textarea>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
