import React from "react";

export default function AccountBtn({text, onClick, type}) {
  return (
    <>
      <button onClick={onClick} type={type} className="flex w-full bg-white hover:bg-black pb-[13px] md:absolute bottom-0 left-0 fixed">
        <div className="flex uppercase w-full items-center justify-center md:py-[30px] py-[20px] border-b border-black hover:border-white hover:text-white md:text-[24px] text-[20px]">
          {text}
        </div>
      </button>
    </>
  );
}
