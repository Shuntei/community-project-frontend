import { useEffect, useRef } from 'react'
import { useAuth } from '@/contexts/auth-context'

export default function Modal({ isVisible, children }) {
  const modalRef = useRef(null)
  const {setShowModal, showModal} = useAuth()

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false)
      }
    }

    if (showModal) {
      document.addEventListener('click', handleClickOutside)
    } 
  }, [])

  if (!showModal) return null

  return <div 
  ref={modalRef}>{children}</div>
}
