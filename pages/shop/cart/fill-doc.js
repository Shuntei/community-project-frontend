import Image from 'next/image'
import { useState, useEffect, useContext } from 'react'
import Process1 from '@/components/common/process1'
import Link from 'next/link'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import { useCart } from '@/hooks/use-cart'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { CART_MEMBER_INFO, CART_CREATEPO } from '@/components/config/api-path'
import AuthContext from '@/contexts/auth-context'
import debounce from 'lodash.debounce'
export default function FillDoc() {
  const { items, removeAll, totalPrice } = useCart()

  // 一鍵填入使用
  const [isSameAsMember, setIsSameAsMember] = useState(false)
  const [isSameAsBuyer, setIsSameAsBuyer] = useState(false)

  // 訂購人資料
  const [payName, setPayName] = useState('')
  const [memberName, setMemberName] = useState('')
  const [memberEmail, setMemberEmail] = useState('')
  const [payEmail, setPayEmail] = useState('')
  const [memberMobile, setMemberMobile] = useState(0)
  const [payMobile, setPayMobile] = useState('')

  // 付款方式狀態
  const paymentOptions = ['LinePay', '信用卡', '取貨付款']
  const [paymentMethod, setPaymentMethod] = useState('')
  const [coupon, selectedCoupon] = useState(0)
  const couponOptions = ['免運費']
  // 運送方式狀態
  const [storeid, setStoreid] = useState('')
  const [storename, setStorename] = useState('')

  const shippingOptions = ['7-11店到店(運費$60)', '宅配(運費$100)']
  const [shippingMethod, setShippingMethod] = useState('')
  const [shippingFee, setShippingFee] = useState(0)

  // 收件人資料
  const [recipientName, setRecipient] = useState('')
  const [recipientMobile, setRecipientMobile] = useState('')

  // 合計的狀態
  const [totalAmount, setTotalAmount] = useState(0)

  // 用於欄位驗證
  const [terms, setTerms] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  const router = useRouter()
  const { auth } = useContext(AuthContext)
  const memberId = auth.id //獲得會員資料

  const getMemberInfo = async () => {
    const mid = memberId
    try {
      const r = await fetch(CART_MEMBER_INFO + `/${mid}`) //fetch後端資料
      const d = await r.json()
      // console.log(d)
      if (d.success) {
        setMemberName(d.row.name)
        setMemberEmail(d.row.email)
        setMemberMobile(d.row.phone)
      } else {
        console.log('no member info')
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  const memberFromAuth = {
    member_id: memberId,
    member_name: memberName,
    member_email: memberEmail,
    member_mobile: memberMobile,
  }

  // 一鍵填入會員資料
  const handlecustomerInfo = (prev) => {
    // 如果沒有登入就跳出提示
    if (!memberId) {
      Swal.fire({
        toast: true,
        width: 230,
        position: 'top',
        icon: 'warning',
        iconColor: 'gray',
        title: '請先登入會員',
        showConfirmButton: false,
        timer: 2000,
      })
      return
    }
    setIsSameAsMember((prev) => !prev)
  }

  // 一鍵填入訂購人
  const handleRecipientInfo = (prev) => {
    if (!memberId) {
      Swal.fire({
        toast: true,
        width: 230,
        position: 'top',
        icon: 'warning',
        iconColor: '#ff804a',
        title: '請先登入會員',
        showConfirmButton: false,
        timer: 2000,
      })
      return
    }
    setIsSameAsBuyer((prev) => !prev)
    if (!isSameAsBuyer) {
      if (!isSameAsMember) {
        setRecipient(payName)
        setRecipientMobile(payMobile)
      }
      setRecipient(memberName)
      setRecipientMobile(memberMobile)
    } else {
      setRecipient('')
      setRecipientMobile(0)
    }
    console.log(recipientName)
  }
  // useShip711StoreOpener的第一個傳入參數是"伺服器7-11運送商店用Callback路由網址"
  // 指的是node(express)的對應api路由。
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3001/cart/711',
    { autoCloseMins: 3 } // x分鐘沒完成選擇會自動關閉，預設5分鐘。
  )

  // 欄位驗證
  const validateForm = debounce(() => {
    const isValid =
      memberName !== '' &&
      memberEmail.trim() !== '' &&
      memberMobile !== 0 &&
      paymentMethod !== '' &&
      shippingMethod !== '' &&
      storeid !== '' &&
      terms !== false

    setIsFormValid(isValid)
  }, 300) // 300 毫秒是 debounce 的延遲時間，可以根據需要進行調整

  // 送出訂單給後端
  const creactPo = async (e) => {
    e.preventDefault()
    // const storeidValue = store711.storeid || ''
    // const storeName = store711.storename || ''

    // 總訂單資訊
    const orderData = {
      member_id: memberId,
      recipient: recipientName,
      recipient_mobile: recipientMobile,
      store_id: storeid,
      store_name: storename,
      shipping_method: shippingMethod,
      shipping_fee: shippingFee,
      total_amount: totalAmount,
      payment_method: paymentMethod,
      products: items,
    }
    // console.log('orderDate:', orderData)

    try {
      const r = await fetch(CART_CREATEPO, {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const d = await r.json()
      console.log(d)
      if (d.success) {
        console.log(d.purchase_order_id)
        const newOrderId = d.purchase_order_id
        console.log(newOrderId)

        router.push(
          `http://localhost:3000/shop/cart/confirm-doc?poid=${newOrderId}`
        )
        removeAll()
      } else if (!d.success) {
        // 錯誤訊息:資料未填寫，導致無法新增訂單成功
        console.log('資料未填寫，導致無法新增訂單成功')
      }
    } catch (ex) {
      console.log(ex)
    }
  }
  useEffect(()=>{
    if(shippingMethod === '宅配(運費$100)'){
      setStoreid('000001')
    }
    if(shippingMethod === '7-11店到店(運費$60)'){
      setStoreid(store711.storeid)
      setStorename(store711.storename)
    }
  },[shippingMethod,storeid,storename,store711.storename,store711.storeid])

  useEffect(() => {
    if (!memberId) {
      Swal.fire({
        icon: 'warning',
        iconColor: '#ff804a',
        title: '請先登入會員',
        confirmButtonText: 'OK',
        confirmButtonColor: 'black',
        timer: 3000,
      })
      router.push(`http://localhost:3000/member/account/login`)
    }
  }, [memberId])

  useEffect(() => {
    validateForm()
  }, [
    memberName,
    memberEmail,
    memberMobile,
    paymentMethod,
    shippingMethod,
    storeid,
    terms,
  ])
  // 一進來先將 localstorage store711 刪除
  useEffect(() => {
    localStorage.removeItem('store711')
    setStoreid('')
    getMemberInfo()
    setTotalAmount(totalPrice)
  }, [memberId])

  useEffect(() => {
    if (shippingMethod === '7-11店到店(運費$60)') {
      setShippingFee(60)
    } else if (shippingMethod === '宅配(運費$100)') {
      setShippingFee(100)
    } else if (!shippingMethod) {
      setShippingFee(0)
    }
    if (coupon === '免運費' || terms) {
      setShippingFee(0)
    }
    const totalAmountFinal = Math.max(totalPrice + shippingFee)

    setTotalAmount(totalAmountFinal)
  }, [totalPrice, coupon, shippingMethod, shippingFee, terms])
  return (
    <>
      {console.log(recipientName)}
      {console.log(storename)}

      <div className=" bg-gray-100 flex flex-col justify-center items-center pt-8 md:pt-28 text-black">
        {/* header開始 */}
        <Navbar navColor={''} />
        {/* header結束 */}

        <div className="md:w-10/12  w-full flex  flex-col justify-center items-center bg-gradient-to-t from-gray-400 to-gray-100 md:px-24 px-4 py-5 mb-5">
          {/* 進度條開始 */}
          <Process1 name1={'購物車　'} name2={'填寫資料'} name3={'確認訂單'} />
          {/* 進度條結束 */}
          {/* 內頁開始 */}
          <form
            action=""
            className="md:w-9/12 w-full md:p-10 p-3 m-10 flex flex-col bg-white items-center space-y-12"
          >
            {/* title */}
            <div className="text-black text-xl font-semibold font-['IBM Plex Mono'] border-b border-b-black ">
              填寫資料
            </div>
            {/* 填寫資料 */}
            <div className="flex w-full flex-col md:flex-row justify-between">
              {/* 左側 */}
              <div className="flex md:w-5/12 flex-col space-y-10 ">
                {/* 訂購人資料 */}
                <div className="w-full space-y-4">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono']">
                    訂購人資訊{' '}
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="flex">
                      {' '}
                      <input
                        type="checkbox"
                        name="sameAsMember"
                        id=""
                        checked={isSameAsMember}
                        onChange={handlecustomerInfo}
                        className=""
                      />
                      <div className=" pl-2 text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        同會員資料
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        訂購人姓名
                      </div>
                      <input
                        type="text"
                        name="member_name"
                        value={isSameAsMember ? memberName : payName}
                        onChange={(e) => {
                          isSameAsMember
                            ? setMemberName(e.target.value)
                            : setPayName(e.target.value)
                        }}
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        電子信箱
                      </div>
                      <input
                        type="email"
                        name="member_email"
                        id=""
                        value={isSameAsMember ? memberEmail : payEmail}
                        onChange={(e) => {
                          isSameAsMember
                            ? setMemberEmail(e.target.value)
                            : setPayEmail(e.target.value)
                        }}
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        手機號碼
                      </div>
                      <input
                        type="number"
                        name="member_mobile"
                        value={isSameAsMember ? memberMobile : payMobile}
                        onChange={(e) => {
                          isSameAsMember
                            ? setMemberMobile(e.target.value)
                            : setPayMobile(e.target.value)
                        }}
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
                {/* 運送資料 */}
                <div className="w-full space-y-4 ">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono'] ">
                    運送資料{' '}
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono'] mb-2">
                        請選擇運送方式
                      </div>
                      <select
                        className="w-full bg-zinc-100 rounded  text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']"
                        name="shipping"
                        id="shipping"
                        value={shippingMethod}
                        onChange={(e) => setShippingMethod(e.target.value)}
                      >
                        <option value="">運送方式</option>
                        {shippingOptions.map((v, i) => {
                          return (
                            <option value={v} key={v}>
                              {v}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                    {/* 選擇711門市 */}
                    {shippingMethod === '7-11店到店(運費$60)' && (
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono'] ">
                        <div className="flex flex-col  space-y-5 w-full">
                          <button
                            className="border border-black py-3 justify-center items-center flex hover:bg-black hover:border-white hover:text-white group "
                            onClick={(e) => {
                              e.preventDefault()
                              openWindow()
                            }}
                          >
                            選擇7-11門市
                          </button>
                          <div className="space-y-1">
                            <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                              7-11門市名稱:
                            </div>
                            <input
                              className="w-full bg-zinc-100 rounded"
                              type="text"
                              value={store711.storename}
                              disabled
                            />
                          </div>

                          <div className="space-y-1">
                            <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                              7-11門市地址:
                            </div>
                            <input
                              className="w-full bg-zinc-100 rounded"
                              type="text"
                              value={store711.storeaddress}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {shippingMethod === '宅配(運費$100)' && (
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono'] ">
                        <div className="flex flex-col  space-y-5 w-full">
                          <div className="space-y-1">
                            <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                              寄件地址:
                            </div>
                            <input
                              className="w-full bg-zinc-100 rounded"
                              name="address"
                              type="text"
                              value={storename}
                              onChange={(e) => setStorename(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {/* 選擇711門市結束 */}

                    <div className="flex">
                      {' '}
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={isSameAsBuyer}
                        onChange={handleRecipientInfo}
                      />
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']  pl-2">
                        同訂購人資料
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        收件人姓名
                      </div>
                      <input
                        type="text"
                        name="recipientName"
                        value={
                          isSameAsMember
                            ? isSameAsBuyer
                              ? memberName
                              : recipientName
                            : isSameAsBuyer
                              ? payName
                              : recipientName
                        }
                        onChange={(e) => {
                          setRecipient(e.target.value)
                        }}
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']">
                        收件人手機
                      </div>
                      <input
                        type="number"
                        name="recipientMobile"
                        value={
                          isSameAsMember
                            ? isSameAsBuyer
                              ? memberMobile
                              : recipientMobile
                            : isSameAsBuyer
                              ? payMobile
                              : recipientMobile
                        }
                        onChange={(e) => {
                          setRecipientMobile(e.target.value)
                        }}
                        className="w-full bg-zinc-100 rounded"
                      />
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
                {/* 付款方式 */}
                <div className="w-full space-y-4 ">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono']  ">
                    付款方式{' '}
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono'] mb-2">
                        請選擇付款方式
                      </div>
                      <select
                        name="payment"
                        id="payment"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full bg-zinc-100 rounded text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']"
                      >
                        <option value="">付款方式</option>
                        {paymentOptions.map((v, i) => {
                          return (
                            <option value={v} key={v}>
                              {v}
                            </option>
                          )
                        })}
                      </select>
                      <div className=" text-neutral-400 text-[12px] font-normal font-['Noto Sans TC']">
                        支援LINE PAY,信用卡,貨到付款等之支付方式
                      </div>
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
                {/* 折價券 */}
                <div className="w-full space-y-4 ">
                  <div className="w-full text-neutral-500 text-base font-semibold font-['IBM Plex Mono'] ">
                    折價券
                  </div>
                  <div className="flex flex-col px-7  space-y-5">
                    <div className="space-y-1">
                      <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono'] mb-2">
                        選擇票券
                      </div>
                      <select
                        name="coupon"
                        id="coupon"
                        value={coupon}
                        onChange={(e) => selectedCoupon(e.target.value)}
                        className="w-full bg-zinc-100 rounded text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono']"
                      >
                        <option value="">票券</option>
                        {couponOptions.map((v, i) => {
                          return (
                            <option value={v} key={v}>
                              {v}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div className="w-full border-dotted border-gray border-b  h-1"></div>
              </div>

              {/* 右側 */}
              <div className="flex md:w-6/12 flex-col space-y-10 sticky h-min  top-20 ">
                <div>
                  {' '}
                  {/* 購物細項 */}
                  {items.map((v, i) => {
                    return (
                      <div
                        className="flex w-full justify-between pb-4"
                        key={v.pid}
                      >
                        <div className="w-1/5  ">
                          <Image
                            src={`/images/product/${v.img.split(',')[0]}`}
                            alt="Picture of camp"
                            width={100}
                            height={50}
                            className="aspect-square rounded-xl"
                            unoptimized={true}
                          />
                        </div>
                        <div className="w-4/5 px-5 space-y-5">
                          <div className="text-black text-small font-semibold font-['Noto Sans Tc']">
                            {v.name}
                          </div>
                          <div className="flex justify-between">
                            <div className="text-neutral-400 text-xs font-medium font-['Noto Sans']"></div>
                            <div className="t text-neutral-400 text-xs font-extralight font-['IBM Plex Mono']">
                              x {v.qty}
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="text-black text-base font-normal font-['IBM Plex Mono']">
                              $ {v.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  {/* 分隔線 */}
                  <div className="w-full border-dotted border-gray border-b  h-1"></div>
                  <div className="flex w-full items-center justify-between py-1">
                    <div className="text-gray-300 text-[13px] font-semibold font-['IBM Plex Mono']">
                      運費 (TWD)
                    </div>
                    <div className="text-gray-300 text-[13px] font-semibold font-['IBM Plex Mono']">
                      $ {shippingFee}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between py-2">
                    <div className="text-black text-[13px] font-semibold font-['IBM Plex Mono']">
                      合計 (TWD)
                    </div>
                    <div className="text-black text-xl font-semibold font-['IBM Plex Mono']">
                      $ {totalAmount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-neutral-500 text-[15px] font-normal font-['IBM Plex Mono'] mb-">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                value={terms}
                onChange={(e) => {
                  setTerms(e.target.checked)
                }}
              />
              &nbsp;
              <span>我同意網站服務條款及隱私權政策</span>
              <div className=" text-neutral-500 text-[15px] flex justify-center font-normal font-['IBM Plex Mono'] mb-2">
                並即刻享有全站免運費！
              </div>
            </div>

            {isFormValid ? (
              <button
                onClick={creactPo}
                className="w-[280px] h-[75px] bg-black border justify-center items-center gap-2.5 flex hover:bg-neutral-500 hover:border-white"
              >
                <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                  SUBMIT
                </div>
              </button>
            ) : (
              <>
                <button
                  disabled
                  className="w-[280px] h-[75px] bg-gray-200 border justify-center items-center gap-2.5 flex hover:bg-gray-200 hover:border-white"
                >
                  <div className="text-white  text-2xl font-semibold font-['IBM Plex Mono']">
                    SUBMIT
                  </div>
                </button>
                <p className="text-[12px] text-red-500 font-['IBM Plex Mono']">
                  請填寫完整資料
                </p>
              </>
            )}
          </form>
          {/* 內頁結束 */}
        </div>

        {/* footer開始 */}
        <Footer />
        {/* FOOTER結束 */}
      </div>
    </>
  )
}
