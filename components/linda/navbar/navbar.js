import { useEffect, useState, useRef } from 'react'
import styles from './navbar.module.css'
import CartSvg from '@/public/icons/cart.svg'
import CartLine from '@/public/icons/cart-line.svg'
import CartLineB from '@/public/icons/cart-lineBlack.svg'
import CartLineBlack from '@/public/icons/CartLineBlack.svg'
import ProfileIcon from '@/public/icons/profile-icon.svg'
import ProfileIconBlack from '@/public/icons/profile-iconBlack.svg'
import Image from 'next/image'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import LogoutModal from '../modals/logout-modal'
import LoginModal from '../modals/login-modal'
import Login from '@/pages/member/account/login'
import ProfileModal from '../modals/profile-modal'
import NavbarPopup from './navbarPopup'
import NavbarMobile from './navbar-mobile'
import { useCart } from '@/hooks/use-cart'
import CartModal from '@/components/kevin/modal/cart-modal'
import { useAuth } from '@/contexts/auth-context'
import { IMG_SERVER } from '@/components/config/api-path'

export default function Navbar({ className, navColor = 'white' }) {
  const { auth } = useAuth()
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const { totalItems } = useCart()
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showNavbarPopup, setShowNavbarPopup] = useState(false)

  useEffect(() => {
    const listener = (e) => {
      const t = e.target
      if (t.closest('.profileItem')) {
        setShowProfileModal((prevState) => !prevState)
      } else {
        if (!t.closest('.profileModal')) {
          setShowProfileModal(false)
        }
      }

      if (t.closest('.navbarPopupItem')) {
        setShowNavbarPopup((prevState) => !prevState)
      } else {
        if (!t.closest('.navbarPopup')) {
          setShowNavbarPopup(false)
        }
      }

      if (t.closest('.logoutModalItem')) {
        setShowLogoutModal((prevState) => !prevState)
      } else {
        if (!t.closest('.logoutModal')) {
          setShowLogoutModal(false)
        }
        if (!t.closest('.loginModal')) {
          setShowLogoutModal(false)
        }
      }

    }
    window.addEventListener('click', listener)
    return () => {
      window.removeEventListener('click', listener)
    }
  }, [])

  return (
    <>
      <nav
        className={`${styles.navbar} ${showNavbarPopup ? '' : className} ${
          showNavbarPopup
            ? (navColor = 'white')
            : navColor === 'white'
              ? 'text-white'
              : 'text-black'
        } select-none`}
      >
        <div className="flex justify-start md:items-start md:pt-0 pt-[5px] w-1/3">
          <div className="flex md:justify-start select-none gap-[15px]">
            <div className="navbarPopupItem pt-[2px] cursor-pointer">
              <div
                id="nav-icon4"
                className="md:w-[30px] w-[23px] h-auto absolute"
              >
                <div
                  className={`w-full h-[2px] ${
                    navColor === 'white' ? 'bg-white' : 'bg-black'
                  } transform transition duration-500 ease-in-out ${
                    showNavbarPopup
                      ? 'rotate-45 md:translate-y-1.5 translate-y-1.5 bg-white'
                      : ''
                  } `}
                ></div>
                <div
                  className={`w-full h-[2px] ${
                    navColor === 'white' ? 'bg-white' : 'bg-black'
                  }  md:mt-[10px] mt-[6px] transform  transition duration-500 ease-in-out ${
                    showNavbarPopup
                      ? '-rotate-45 md:-translate-y-1.5 -translate-y-[0.125rem] bg-white'
                      : ''
                  }`}
                ></div>
              </div>
            </div>
            <span
              className={`${showNavbarPopup ? 'text-white' : ''} md:block hidden text-[15px] pl-[40px]`}
            >
              MAIN
            </span>
          </div>
        </div>
        <Link
          href="/"
          className={`${showNavbarPopup ? 'text-white' : ''} cursor md:text-[40px] text-[20px] font-medium justify-center flex w-1/3`}
        >
          Ruins
        </Link>
        <div
          className={`${showNavbarPopup ? 'text-white' : ''} ${styles['navlink-container']} relative w-1/3`}
        >
          {auth.id ? (
            <div>
              <div className="relative cursor-pointer">
                <div className="profileItem cursor-pointer select-none">
                  <div className="absolute top-[-6px] left-[-40px]">
                    <Image
                      width={30}
                      className="rounded-full min-h-[30px] max-h-[30px] object-cover"
                      height={30}
                      src={
                        auth.googlePhoto
                          ? auth.profileUrl
                          : `${IMG_SERVER}/${auth.profileUrl}`
                      }
                      alt=""
                    />
                  </div>
                  <div className="tracking-wide before:py-[10px]">
                    {auth.username}
                  </div>
                </div>
                <ProfileModal isVisible={showProfileModal} />
              </div>
            </div>
          ) : (
            <div
              className={`${styles['navlink-container']} ${styles['navlinks']}`}
            >
              <Link href="/member/account/login">LOG IN</Link>
              <span>/</span>
              <Link href="/member/account/signup">SIGN UP</Link>
            </div>
          )}

          <div
            className={`${styles.cartLineContainer} ${
              navColor === 'white' ? 'text-white' : 'text-black'
            }  ${styles['navlinks']}`}
          >
            <CartModal />
            <div className={`${styles['cart-number']}`}>
              {navColor === 'white' ? (
                <Image alt="" src={CartSvg} />
              ) : (
                <Image alt="" src={CartLineBlack} />
              )}
              <span>{totalItems}</span>
            </div>
          </div>
        </div>
        <div
          className={`${showNavbarPopup ? 'text-white' : ''} ${styles['navlink-container-mobile']} w-1/3 justify-end`}
        >
          <div className={`${styles['nav-cart-mobile']}`}>
            <CartModal />

            {navColor === 'white' ? (
              <Image alt="" src={CartLine} />
            ) : (
              <Image alt="" src={CartLineB} />
            )}
            <div className={styles['cart-number']}>{totalItems}</div>
          </div>
          <button
            className={`logoutModalItem ${styles['profile-icon']}`}
          >
            {auth.profileUrl ? (  
              <Image
                width={20}
                className="rounded-full h-[20px] object-cover"
                height={20}
                src={
                  auth.googlePhoto
                    ? auth.profileUrl
                    : `${IMG_SERVER}/${auth.profileUrl}`
                }
                alt=""
              />
            ) : navColor === 'white' ? (
              <Image alt="" src={ProfileIcon} />
            ) : (
              <Image alt="" src={ProfileIconBlack} />
            )}
          </button>
        </div>
        {auth.id ? (
          <LogoutModal navColor isVisible={showLogoutModal} />
        ) : (
          <LoginModal isVisible={showLogoutModal} />
        )}
      </nav>
      {showNavbarPopup ? <NavbarPopup /> : ''}
      {/* <NavbarMobile /> */}
    </>
  )
}
