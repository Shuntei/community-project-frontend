import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  MB_SIGNUP,
  MB_LOGIN,
  MB_GOOGLE_LOGIN,
} from '@/components/config/api-path'
import { firebaseAuth } from '@/components/config/firebase'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

const AuthContext = createContext()

const defaultAuth = {
  id: 0,
  username: '',
  name: '',
  email: '',
  profileUrl: '',
  coverUrl: '',
  googlePhoto: false,
  aboutMe: '',
  showContactInfo: false,
  ytLink: '',
  fbLink: '',
  igLink: '',
  gmailLink: '',
  token: '',
}

const storageKey = 'ruins-auth'

export function AuthContextProvider({ children }) {
  const googleAuth = new GoogleAuthProvider()
  const [auth, setAuth] = useState(defaultAuth)
  const [update, setUpdate] = useState(false)
  const [dateInSec, setDateInSec] = useState(null)

  const signup = async (formData) => {
    try {
      const r = await fetch(MB_SIGNUP, {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await r.json()
      if (result.success) {
        localStorage.setItem(storageKey, JSON.stringify(result.data))
        setAuth(result.data)
      }
      return result
    } catch (ex) {
      console.log(ex)
    }
  }

  const login = async (account, password) => {
    const r = await fetch(MB_LOGIN, {
      method: 'post',
      body: JSON.stringify({ account, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await r.json()
    if (result.success) {
      localStorage.setItem(storageKey, JSON.stringify(result.data))
      setAuth(result.data)
      // because the function is promise, it has to return a promise
      return true
    } else {
      return false
    }
  }

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleAuth)
      const { user } = result

      let account = user.email
      let username = user.displayName
      let photoUrl = user.photoURL
      let googleId = user.uid

      if (account && username) {
        const r = await fetch(MB_GOOGLE_LOGIN, {
          method: 'post',
          body: JSON.stringify({ account, username, photoUrl, googleId }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const res = await r.json()
        if (res.success) {
          localStorage.setItem(storageKey, JSON.stringify(res.data))
          setAuth(res.data)
          return true
        } else {
          return false
        }
      } else {
        console.log(user)
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  const logout = async () => {
    try {
      await signOut(firebaseAuth)
      localStorage.removeItem(storageKey)
      setAuth(defaultAuth)

      router.push('/')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  useEffect(() => {
    const dateInSec = Math.floor(Date.now() / 1000)
    setDateInSec(dateInSec)
  }, [])

  useEffect(() => {
    const str = localStorage.getItem(storageKey)
    try {
      const data = JSON.parse(str)
      if (data) {
        setAuth(data)
      }
    } catch (ex) {}
  }, [update])

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        signup,
        auth,
        googleLogin,
        update,
        setUpdate,
        dateInSec,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
