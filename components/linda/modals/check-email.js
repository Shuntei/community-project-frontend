import React from "react";
import { useAuth } from "@/contexts/auth-context";

export default function CheckEmailModal({email, setShowSendLink, setShowCheckEmail}) {

  const {dateInSec} = useAuth()

  return (
    <>
      <div className="flex justify-center h-[500px]">
        <div className="flex md:w-5/12 md:py-0 px-[24px] pt-[75px] pb-[36px] h-lvh pb-[140px] flex-col justify-center items-center gap-y-2.5 ">
          <div className="flex flex-col self-stretch items-center pb-[34px]">
            <div className="flex self-stretch border-b-[3px] text-white">
              <div className="flex md:flex-row w-full flex-col gap-[35px]">
                <div className="text-[25px] md:pb-0 pb-[40px] flex justify-center">
                  CHECK YOUR EMAIL
                </div>
                <a
                  href="./login"
                  className="md:text-base text-[15px] text-[#9F9F9F] flex justify-end items-end"
                >
                  LOGIN
                </a>
              </div>
              <div className="flex items-end justify-end md:block hidden flex-1 text-[#9F9F9F] font-thin text-xl">
                {dateInSec}
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
              <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                <p className="text-base text-white  py-[30px]">
                  To reset your password, please click the link we sent to
                  <span className="font-bold"> {email} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
