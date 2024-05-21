import { useState, useEffect } from 'react'
import styles from './loader.module.css'

export default function Loader({ color = 'white', children }) {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className={styles['loadingio-spinner-rolling-2by998twmg8']}>
          <div className={styles['ldio-yzaezf3dcmj']}>
            <div
              className={` border-4  ${color === 'white' ? 'border-white' : 'border-black'} `}
            ></div>
          </div>
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center ${color === 'white' ? 'text-white' : 'text-black'} font-light text-[80px]`}
        >
          R
        </div>
      </div>
    </>
  )
}
