import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/auth-context";
import NotifyRed from "../notify/notify-red";

export default function Footer() {
  const [email, setEmail] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [text, setText] = useState(false)
  const router = useRouter()
  const {auth} = useAuth()

  const handleChange = (e)=>{
    setEmail(e.target.value)
  }

  const handleClick = ()=>{
    if(auth.id){
      showError()
    } else {
      router.push({
        pathname: '/member/account/signup',
        query: {email: email}
      })
    }
  }

  const showError = () =>{
    setText('You are logged in already')
    setShowNotification(true)
  }

  const onClose= ()=>{
    setShowNotification(false)
  }

  useEffect(()=>{
    if(showNotification){
      const timer = setTimeout(()=>{
        setShowNotification(false);
        onClose()
      }, 6000)
      return ()=> clearTimeout(timer)
    }
  }, [showNotification])

  return (
    <>
    <NotifyRed onClose={onClose} show={showNotification} text={text}/>
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-sec12"]}>
            <div className={styles["footer-sec1"]}>
              <div className={styles["sec1-links"]}>
                <Link href="">shop</Link>
                <Link href="">communities</Link>
                <Link href="">live</Link>
                <Link href="">tour</Link>
                <Link href="">game</Link>
              </div>
              <div className={styles["sec1-links"]}>
                <Link href="">shipping &amp; returns</Link>
                <Link href="">terms of use</Link>
                <Link href="">privacy and policy</Link>
                <Link href="">privacy reference</Link>
              </div>
            </div>
            <div className={styles["footer-sec2"]}>
              <div className={`${styles["sec2-title"]} text-[10px]`}>
                MORE Ruins
              </div>
              <div className={styles["sec2-links"]}>
                <Link href="">
                  <FaDiscord />
                  <p>ruins</p>
                </Link>
                <Link href="">
                  <FaXTwitter />
                  <p>twitter</p>
                </Link>
                <Link href="">
                  <FaFacebook />
                  <p>facebook</p>
                </Link>
                <Link href="">
                  <AiFillInstagram />
                  <p>instagram</p>
                </Link>
                <Link href="">
                  <FaYoutube />
                  <p>youtube</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["footer-sec3"]}>
            <div className={`${styles["sec2-title"]} text-[10px]`}>
              WANT MORE Ruins?
            </div>
            <div className="text-[13px]">
              Get our emails. Letters from our forum administrator, new trips,
              live streams, merch, and more. Not too often - just enough.
            </div>
            <div className={styles["footer-sec3-bottom-section"]}>
              <div className={styles["email"]}>
                <label htmlFor="email" className="text-[11px] font-medium">Email</label>
                <input type="text" name="email" id="email" 
                  onChange={handleChange}
                />
              </div>
              <div
                className={`${styles["sec3-button-container"]} p-0 flex self-stretch`}
              >
                <button
                onClick={handleClick}
                  className={`${styles["signup"]} w-full border border-white bg-black md:text-[15px] font-medium hover:bg-[#7A7A7A] text-[13px]`}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
