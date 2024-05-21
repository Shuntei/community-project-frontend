import Link from "next/link";

export default function LoginModal({isVisible}) {
  if (!isVisible) return null
  return (
    <>
      {/* mobile pop up login */}
      <div className="loginModal md:hidden text-white absolute top-[47px] left-0 w-full px-2 py-3.5 bg-black flex-col justify-start items-center gap-[13px] inline-flex">
        <div className="pb-[15px] border-b border-white justify-start items-start">
          <Link href="/member/account/login">LOGIN</Link>
        </div>
        <div className="justify-start items-start gap-2.5 inline-flex">
          <Link href="/member/account/signup">SIGN UP</Link>
        </div>
      </div>
    </>
  );
}
