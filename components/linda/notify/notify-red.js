import { useState, useEffect } from 'react'
import styles from './notify-red.module.css'
import { IoMdClose } from 'react-icons/io'
import { IoCloseCircle } from "react-icons/io5";

export default function NotifyRed({ show, text, onClose }) {
  const [isVisible, setIsVisible] = useState(show)

  useEffect(()=>{
    setIsVisible(show)
  }, [show])

  useEffect(()=>{
    if(isVisible){
      const timer = setTimeout(()=>{
        setIsVisible(false);
        onClose();
      }, 6000)
      return ()=> clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <>
    {isVisible && (
      <div className="bg-white">
        <div className='flex items-center p-[10px] px-[10px] gap-[20px]'>
        <div className='flex items-center gap-[16px] mr-auto'>
          <IoCloseCircle className="text-[24px] text-[#EA7E7E]" />
          <div className="text-black text-[14px]">
            {text}
          </div>
        </div>
          <IoMdClose 
          onClick={()=>{setIsVisible(false)}}
          className='text-[24px] text-black cursor-pointer' />
        </div>
        <div className="w-full bg-[#B8B8B8]">
          <div className={styles.progressBar}></div>
        </div>
      </div>
    )}
    </>
  )
}
