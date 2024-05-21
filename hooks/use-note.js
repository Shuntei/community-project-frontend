// import { createContext, useContext, useEffect, useState } from 'react'

// // 1. 建立context
// const NoteContext = createContext()

// // 2. 建立一個Context Provider元件
// // 提供給最上層元件(_app.js)使用，把所需狀態都在這元件集中管理
// export function NoteProvider({ children }) {

//   const [notes, setNotes] = useState([])

//   useEffect(() => {
//     // 在組件掛載時，從 localStorage 中讀取資料
//     const storedNote = localStorage.getItem('ruins-game')
//     if (storedNote) {
//       setNotes(JSON.parse(storedNote))
//     }
//   }, [])

//   const saveToLocalStorage = (noteItems) => {
//     // 將購物車資料存入 localStorage
//     localStorage.setNote('ruins-game', JSON.stringify(noteItems))
//   }

//   // 純函式: 單純改變狀態的陣列 --- START ---
 

//   // 刪除函式
//   const remove = (notes, id) => {
//     return notes.filter((v, i) => v.pid !== id)
//   }



//   // 陣列迭代方法 reduce(累加/歸納)
//   // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//   const totalItems = items.reduce((acc, v) => acc + v.qty, 0)
//   const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

//   return (
//     <NoteContext.Provider
//       // 使用value屬性提供資料給提供者階層以下的所有後代元件
//       value={{
//         items,
//         totalItems,
//         totalPrice,
//         onAddItem,
//         onDecreaseItem,
//         onIncreaseItem,
//         onRemoveItem,
//         onAddMutiItem,
//         removeAll
//       }}
//     >
//       {children}
//     </NoteContext.Provider>
//   )
// }

// // 3. 提供一個包裝好useContext名稱，給消費者(Consumer)方便地直接呼叫使用
// export const useNote = () => useContext(NoteContext)
