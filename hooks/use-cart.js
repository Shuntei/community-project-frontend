import { createContext, useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

// 1. 建立context
const CartContext = createContext()

// 2. 建立一個Context Provider元件
// 提供給最上層元件(_app.js)使用，把所需狀態都在這元件集中管理
export function CartProvider({ children }) {
  // 加入購物車的商品項目
  // 和products的物件相比會多了一個qty(數量)數字屬性

  const [items, setItems] = useState([])

  useEffect(() => {
    // 在組件掛載時，從 localStorage 中讀取購物車資料
    const storedCart = localStorage.getItem('ruins-cart')
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  const saveToLocalStorage = (cartItems) => {
    // 將購物車資料存入 localStorage
    localStorage.setItem('ruins-cart', JSON.stringify(cartItems))
  }

  // 純函式: 單純改變狀態的陣列 --- START ---
  // 商品數量(qty)遞增的函式
  const increase = (items, id) => {
    return items.map((v, i) => {
      // 如果id是傳入的id則qty屬性+1
      if (v.pid === id) return { ...v, qty: v.qty + 1 }
      else return v
    })
  }

  // 商品數量(qty)遞減的函式
  const decrease = (items, id) => {
    return items
      .map((v) => {
        if (v.pid === id) {
          // 如果商品數量減少到零時，彈出 SweetAlert 提示
          if (v.qty === 1) {
            onRemoveItem(id)
          } else {
            // 如果商品數量不是零，則直接減少數量
            return { ...v, qty: v.qty - 1 }
          }
        }
        return v
      })
      .filter((v) => v.qty > 0) // 過濾掉數量為零的商品
  }

  // 刪除函式
  const remove = (items, id) => {
    return items.filter((v, i) => v.pid !== id)
  }

  // 新增商品到購物車的函式
  // product是傳入的商品物件, product.id是要加入的商品物件的id
  const add = (items, product) => {
    // 先判斷這個商品是否有在購物車裡
    const foundIndex = items.findIndex((v) => v.pid === product.pid)

    if (foundIndex > -1) {
      // 如果有找到 ==> 遞增
      Swal.fire({
        toast: true,
        width: 280,
        position: 'top',
        icon: 'success',
        iconColor: 'black',
        title: '商品已添加到購物車',
        showConfirmButton: false,
        timer: 1500,
      })
      return increase(items, product.pid)
    } else {
      // 如果沒找到 ==> 新增商品
      // !!注意: 需要擴增商品物件多一個qty(數量)數字屬性
      const newItem = { ...product, qty: 1 }
      Swal.fire({
        toast: true,
        width: 280,
        position: 'top',
        icon: 'success',
        iconColor: 'black',
        title: '商品已添加到購物車',
        showConfirmButton: false,
        timer: 1500,
      })
      return [...items, newItem]
    }
  }

  // 純函式: 單純改變狀態的陣列 --- END ---

  // 事件處理函式: 包含狀態更動共通三個步驟 --- START ---
  const onAddItem = (product) => {
    setItems(add(items, product))
    saveToLocalStorage(add(items, product))
  }

  const onIncreaseItem = (id) => {
    setItems(increase(items, id))
    saveToLocalStorage(increase(items, id))
  }

  // 遞減時需考慮數量為0要移除
  const onDecreaseItem = (id) => {
    let nextItems = decrease(items, id)
    // 刪除(過濾)掉商品數量<=0的
    nextItems = nextItems.filter((v) => v.qty > 0)

    setItems(nextItems)
    saveToLocalStorage(nextItems)
  }

  const onRemoveItem = (id) => {
    Swal.fire({
      title: '確認刪除商品',
      text: '是否確定要從購物車中刪除該商品？',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '是',
      cancelButtonText: '否',
      confirmButtonColor: 'black',
      cancelButtonColor: 'gray',
    }).then((result) => {
      if (result.isConfirmed) {
        // 如果選擇是，則從購物車中移除該商品
        setItems(remove(items, id))
        saveToLocalStorage(remove(items, id))
      }
    })
  }

  const onAddMutiItem = (item) => {
    const { qty, ...remain } = item

    const index = items.findIndex((v, i) => v.pid === item.pid)

    if (index > -1) {
      const newQty = items[index].qty + qty

      setItems((prevItems) => {
        const newItems = prevItems.map((v, i) =>
          v.pid === item.pid
            ? { ...v, qty: newQty, subtotal: item.product_price * newQty }
            : v
        )
        Swal.fire({
          toast: true,
          width: 280,
          position: 'top',
          icon: 'success',
          iconColor: 'black',
          title: '商品已添加到購物車',
          showConfirmButton: false,
          timer: 1500,
        })
        saveToLocalStorage(newItems)
        return newItems
      })
    } else {
      const newItem = { ...item, qty: qty, subtotal: item.product_price * qty }
      Swal.fire({
        toast: true,
        width: 280,
        position: 'top',
        icon: 'success',
        iconColor: 'black',
        title: '商品已添加到購物車',
        showConfirmButton: false,
        timer: 1500,
      })
      setItems([...items, newItem])
      saveToLocalStorage([...items, newItem])
    }
  }
  //加入清單後清除購物車
  const removeAll = () => {
    setItems([])
    localStorage.removeItem('ruins-cart')
  }
  // 事件處理函式: 包含狀態更動共通三個步驟 --- END ---

  // const calcTotalItems = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty
  //   }
  //   return total
  // }

  // const calcTotalPrice = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty * items[i].price
  //   }
  //   return total
  // }

  // 陣列迭代方法 reduce(累加/歸納)
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const totalItems = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  return (
    <CartContext.Provider
      // 使用value屬性提供資料給提供者階層以下的所有後代元件
      value={{
        items,
        totalItems,
        totalPrice,
        onAddItem,
        onDecreaseItem,
        onIncreaseItem,
        onRemoveItem,
        onAddMutiItem,
        removeAll
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// 3. 提供一個包裝好useContext名稱，給消費者(Consumer)方便地直接呼叫使用
export const useCart = () => useContext(CartContext)
