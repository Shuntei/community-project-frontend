import {useState, useEffect} from "react";
import styles from "./loader.module.css"
import { useAuth } from "@/contexts/auth-context";
import Router, { useRouter } from "next/router";

export default function Loader({color = "white", children, duration}) {
  const {auth} = useAuth()
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  const path = router.pathname

  useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        console.log(auth.id);
        if(!auth.id){
          if(path.includes('account-settings') && !path.includes('my-trips') && !path.includes('my-posts') && !path.includes('fav-tour-lists')){
            console.log("redirecting");
            router.push('/')
          }
        } else {
          
          console.log(auth.id);
        }
      }, duration ? duration : 2000);

      return () => clearTimeout(timer);
  }, [router, auth]);

  // useEffect(()=>{
  //   if(!auth.id){
  //     if(path.includes('account-settings')){
  //       router.push('/')
  //     }
  //   }
  // }, [auth])

  if(isLoading) {
    return (
      <>
      <div className="fixed h-lvh fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
        <div className={styles['loadingio-spinner-rolling-2by998twmg8']}>
          <div className={styles["ldio-yzaezf3dcmj"]}>
            <div className={` border-4  ${color==="white"?'border-white' : 'border-black'} `}></div>
          </div>
        </div>
        <div className={`absolute inset-0 flex items-center justify-center ${color==="white"?'text-white' : 'text-black'} font-light text-[80px]`}>R</div>
      </div>
      </>
    );
  }

  // if(auth.id || router.pathname.includes('reset-password')){
    return children ? children : null;
  // }

}
