import React,{useState} from 'react'
import {
  RiCloseLine,
} from '@remixicon/react'


export default function AlertEdit({onClose,toggleAlertEdit, changeHandler, isOpen, setIsOpen}) {
  const [isChanged, setIsChanged ] = useState(false)

  // const [showAlert, setShowAlert] = useState(false)

  // const toggleAlert = () => {
  //   setShowAlert(!showAlert)
  // }

  

  return (
    <>
        {isOpen && <div
            className="w-[700px]  px-8 py-3 flex-col right-1/4 top-1/4 absolute"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <div className="flex justify-between items-baseline">
              <div className="text-[20px]">ALERT ALERT ALERT</div>
              <div className="flex items-center">
                <RiCloseLine size={"50px"} />
              </div>
            </div>
            <div className="text-[14px] flex justify-center  w-[640px] my-12">
              確定修改這則MEMO?
            </div>
            <div className="flex justify-center w-[640px]">
              <button 
              className="text-[15px] border border-white w-[216px] h-[47px] bg-black text-white mb-4"
              type='submit' onClick={changeHandler}
              >
                Confirm
              </button>
          </div>
        </div>}
       
    </>
  )
}
