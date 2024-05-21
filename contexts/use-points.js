import { API_SERVER } from '@/components/config/api-path'
import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth-context'

const PointContext = createContext()

export function PointContextProvider({ children }) {
  const [pts, setPts] = useState(0)
  const { auth } = useAuth()

  const myPoints = async () => {
    try {
      const r = await fetch(`${API_SERVER}/chat/05-streaming/u-point/${auth.id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await r.json()
      setPts(data)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    if (auth.id) {
      myPoints()
    }
  }, [auth.id])

  return (
    <PointContext.Provider value={{ pts, setPts, myPoints }}>
      {children}
    </PointContext.Provider>
  )
}

export const usePoint = () => useContext(PointContext)
export default usePoint
