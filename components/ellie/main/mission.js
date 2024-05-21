import React, { useState, useEffect } from 'react'
import {
  RiCheckboxBlankLine,
  RiCheckboxFill,
  RiSubtractLine,
} from '@remixicon/react'
import Volume from '../vol/volume'
import { useRouter } from 'next/router'
import { useAuth } from '@/contexts/auth-context'

export default function Mission({data}) {

  // const [isChanged, setIsChanged ] = useState(false)

  const calculateProgress = () => {
    if (!data) return 0;

    const activatedCount = data.filter(v => v.activate === 1).length;
    const progressPercentage = (activatedCount / 10) * 100;
    return progressPercentage;
  };

  // useEffect(()=>{
  //   const data = getMission()
  //   setMission(data)
  // }, [mission])

  useEffect(()=>{
    console.log(data);
  }, [data])

  return (
    <>
      {/* {console.log(data)} */}

      <div className="w-1/6 relative">
        <div className="my-8 px-4">
          <div className="w-full flex flex-col border-b border-dotted mb-1"></div>
          <div className="w-full flex flex-col border-t border-dotted"></div>
        </div>
        <div className="flex justify-center text-lg font-regular font-['IBM Plex Mono'] text-white mb-4">
          MISSION
        </div>
        {/* 進度條 */}
        <div className='px-6'>
          <div className="w-full bg-white h-2 mt-4 rounded">
            <div
              className="bg-gray-400 h-full rounded"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6">
        {data &&
          data.map((v, i) => {
          return (
            <div className="flex">
              {/* {console.log(v.activate)} */}
              {v.activate === 0 ? <RiCheckboxBlankLine className="text-white" /> : <RiCheckboxFill className="text-white" />}
            <div className="flex-grow"></div>
            {v.activate === 0 ? <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white \">
            {v.title}
            </div> : <div className="mt-2 text-s font-light font-['IBM Plex Mono'] text-white line-through">
            {v.title}
            </div>}

          </div>
          )
        })}
        </div>
        <div className="my-8 px-4">
          <div className="w-full flex flex-col border-b border-dotted mb-1"></div>
          <div className="w-full flex flex-col border-t border-dotted"></div>
        </div>
        {/* <Volume /> */}
      </div>
    </>
  )
}
