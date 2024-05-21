import { useState, useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'

export default function NavbarMobile() {
  const initialDropdownList = [
    {
      title: 'general',
      items: [
        { label: 'Profile', href: '/member/account-settings/account' },
        { label: 'Email & Password', href: '/member/account-settings/email-and-password' },
      ],
    },
    {
      title: 'system',
      items: [
        { label: 'Notifications', href: '/member/account-settings/notifications' },
        { label: 'Preferences', href: '/member/account-settings/preference' },
      ],
    },
    {
      title: 'shop',
      items: [
        { label: 'history order', href: '/product/my-order' },
        { label: 'favorite products', href: '#products' },
      ],
    },
    {
      title: 'tour',
      items: [
        { label: 'my trips', href: '/member/account-settings/my-trips' },
        { label: 'favorite tours', href: '/member/account-settings/fav-tours' },
        { label: 'my posts', href: '/member/account-settings/my-posts' },
      ],
    },
    {
      title: 'social',
      items: [
        { label: 'saved posts', href: '#posts' },
        { label: 'saved draft', href: '#draft' },
      ],
    },
  ]

  const [isLeftIcon, setIsLeftIcon] = useState(false)
  const [selectedDropdown, setSelectedDropdown] = useState(null)
  const [dropdownList, setDropdownList] = useState(initialDropdownList)

  const handleArrowLR = () => {
    setIsLeftIcon(!isLeftIcon)
    setSelectedDropdown(null) // 將 dropdown 重置收起
  }

  const handleDropdown = (title) => {
    setSelectedDropdown(title)
  }

  useEffect(() => {
    const listener = (e) => {
      const t = e.target
      if (t.closest('.navbarMobileItem')) {
        handleArrowLR()
      } else {
        if (!t.closest('.navbarMobile')) {
          setIsLeftIcon(false)
          setSelectedDropdown(null)
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
      <div className="md:hidden z-10 fixed top-[50px] left-0 w-full">
        <div className="flex pt-[7px] px-[30px] relative">
          <div className="py-2">
            <button onClick={handleArrowLR}>
              {isLeftIcon ? (
                <i className="navbarMobileItem ri-arrow-drop-left-line ri-xl text-zinc-300 absolute top-[18px] left-1 w-3"></i>
              ) : (
                <i className="ri-arrow-drop-right-line ri-xl text-zinc-300 absolute top-[18px] left-1 w-3"></i>
              )}
            </button>
          </div>
          {isLeftIcon ? (
            <div className="navbarMobile flex bg-[var(--main-bg)] w-full overflow-x-auto text-zinc-300 text-[13px] font-['IBM Plex Mono']">
              {dropdownList.map((dropdown, index) => (
                <button
                  key={index}
                  className={`flex-auto py-2 border border-zinc-300 ${
                    selectedDropdown === dropdown.title
                      ? 'bg-white bg-opacity-10'
                      : ''
                  }`}
                  onClick={() => handleDropdown(dropdown.title)}
                >
                  {dropdown.title.toUpperCase()}
                </button>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>

        <div
          id="expand"
          className={`px-[30px] absolute top-full left-0 w-full ${
            isLeftIcon && selectedDropdown ? 'block' : 'hidden'
          }`}
        >
          {isLeftIcon && selectedDropdown && (
            // 當 menu 展開且 title 被點擊時才會顯示
            <div className="bg-zinc-800">
              <div className=" px-3 py-[15px] bg-white bg-opacity-10">
                <div className=" space-y-2 text-zinc-300 text-[13px] font-['IBM Plex Mono']">
                  {dropdownList
                    .find((dropdown) => dropdown.title === selectedDropdown)
                    .items.map((item, index) => (
                      <div key={index}>
                        <Link href={item.href}>{item.label.toUpperCase()}</Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
