import { SN_POSTS } from '@/components/config/johnny-api-path'
import { createContext, useContext, useState } from 'react'
import React from 'react'

const BoardsContext = createContext()

export default function BoardsContextProvider({ children }) {
  const [viewsCounter, setViewsCounter] = useState([{ postId: '', count: 0 }])
  const [isBoard, setIsBoard] = useState('')
  const [boards, setBoards] = useState([])
  const [selectedPosts, setSelectedPosts] = useState([])
  const [postsList, setPostsLists] = useState({
    success: false,
    page: 0,
    totalPostsRows: [],
    totalPages: 0,
  })
  const [getPost, setGetPost] = useState([])
  const [render, setRender] = useState(false)
  {
    /*render, setRender用於解決新增及刪除post等變更時不刷新頁面useEffect依賴 */
  }

  // 初始載入posts
  const postsShow = async () => {
    // currentPage是?page=哪一頁
    try {
      const r = await fetch(`${SN_POSTS}${location.search}`)
      const data = await r.json()
      setPostsLists(data)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <BoardsContext.Provider
      value={{
        boards,
        setBoards,
        selectedPosts,
        setSelectedPosts,
        postsList,
        setPostsLists,
        postsShow,
        getPost,
        setGetPost,
        render,
        setRender,
        viewsCounter,
        setViewsCounter,
        isBoard,
        setIsBoard,
      }}
    >
      {children}
    </BoardsContext.Provider>
  )
}

export const useBoards = () => useContext(BoardsContext)
