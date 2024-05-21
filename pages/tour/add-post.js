import Footer from '@/components/linda/footer/footer'
import Navbar from '@/components/linda/navbar/navbar'
import { useAuth } from '@/contexts/auth-context'
import { images } from '@/next.config'
import React, { useEffect, useState } from 'react'
import { TOUR_ADD_POST } from '@/components/config/api-path'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from 'next/router'

export default function AddPost() {
  const { auth } = useAuth()
  const router = useRouter();
  console.log(auth.id)
  // 定義表單資料
  const initialFormData = {
    user_id: auth.id,
    ruin_id: 0,
    event_date: '',
    max_groupsize: 0,
    event_period: 0,
    level_id: 0,
    title: '',
    description: '',
    content: '',
    images: [], // 存放圖片和說明
  }

  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState({})

  // 資料驗證
  // 出團人數要數字
  const validateMaxGroupsize = (value) => {
    const regex = /^[0-9]+$/
    return regex.test(value) && parseInt(value) > 0
  }

  // Validate all form fields
  const validateForm = () => {
    const errors = {}

    // 驗證人數為數字
    if (!validateMaxGroupsize(formData.max_groupsize)) {
      errors.max_groupsize = '請填入數字'
    }
    // 檢查其他欄位是否空白
    if (!formData.event_date) {
      errors.event_date = '請選擇時間'
    }
    if (!formData.event_period) {
      errors.event_period = '請選擇時長'
    }
    if (!formData.level_id) {
      errors.level_id = '請選擇難度'
    }
    if (!formData.ruin_id) {
      errors.ruin_id = '請選擇地點'
    }
    if (!formData.title) {
      errors.title = '請填寫標題'
    }
    if (!formData.content) {
      errors.content = '請填寫文章內容'
    }
    if (!formData.description) {
      errors.description = '請填寫自我介紹'
    }

    // Set form errors
    setFormErrors(errors)

    // Return true if no errors
    return Object.keys(errors).length === 0
  }

  // 紀錄選取的圖片
  const handleImageChange = (e) => {
    const files = e.target.files
    const imageFiles = Array.from(files).map((file) => ({
      file,
      caption: '', // 初始化圖片說明
    }))
    setFormData({
      ...formData,
      images: imageFiles,
    })
  }

  // 更新圖片說明文字
  const handleCaptionChange = (e, index) => {
    const newImages = [...formData.images]
    newImages[index].caption = e.target.value
    setFormData({
      ...formData,
      images: newImages,
    })
  }

  // 等 auth.id 變化後更新 user_id
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      user_id: auth.id,
    }))
  }, [auth.id])

  // 取得輸入的表單資料
  const handleChange = (e) => {
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // })

    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // 在變動時驗證資料輸入
    if (name === 'max_groupsize') {
      const isValid = validateMaxGroupsize(value)
      setFormErrors({
        ...formErrors,
        max_groupsize: isValid
          ? ''
          : value < 0
            ? '人數必須大於0'
            : '人數必須為數字',
      })
    } else {
      // Check for other fields and set appropriate error message
      let errorMessage = ''
      switch (name) {
        case 'event_date':
          errorMessage = value ? '' : '請選擇時間'
          break
        case 'event_period':
          errorMessage = value ? '' : '請選擇時長'
          break
        case 'level_id':
          errorMessage = value ? '' : '請選擇難度'
          break
        case 'ruin_id':
          errorMessage = value ? '' : '請選擇地點'
          break
        case 'title':
          errorMessage = value ? '' : '請填寫標題'
          break
        case 'content':
          errorMessage = value ? '' : '請填寫文章內容'
          break
        case 'description':
          errorMessage = value ? '' : '請填寫自我介紹'
          break
        default:
          errorMessage = ''
          break
      }
      // Set formErrors
      setFormErrors({
        ...formErrors,
        [name]: errorMessage,
      })
    }
  }

  // 處理表單送出
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 資料有誤不送出
    if (!validateForm()) {
      return
    }

    const MySwal = withReactContent(Swal)
    const confirmNotify = () => {
      MySwal.fire({
        title: '發文成功',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        try {
          fetch(SN_ADD_POST, {
            method: 'POST',
            body: formData,
          })
            .then((rst) => rst.json())
            .then((result) => {
              if (result.success) {
                setRender(true)
                setPostModal(!postModal)
                const redirect = ()=>{
                  router.push('/member/account-settings/my-posts');
                }
              } else {
                toast.error('發文失敗')
              }
            })
        } catch (err) {
          console.error('Error submitting form:', err)
        }
      })
    }

    try {
      const formDataToSend = new FormData(e.currentTarget)
      formDataToSend.append('user_id', auth.id)

      // console.log(formDataToSend)
      // console.log(postId)
      // 向後端發出 POST
      const response = await fetch(`${TOUR_ADD_POST}`, {
        method: 'POST',
        body: formDataToSend,
      })
      if (!response.ok) {
        throw new Error('Failed to create post')
      }
      console.log('Post created successfully')
      // 在這裡提示成功訊息
      confirmNotify()
      // 跳轉回到 MyPosts
      // router.push('/member/account-settings/my-posts')
      
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  const redirect = ()=>{
    router.push('/member/account-settings/my-posts');
  }

  return (
    <>
      <Navbar />
      <div className="pt-28 md:px-[150px] px-5">
        <form
          className="py-16 bg-gradient-to-t from-gray-400 to-gray-100 md:px-[150px] px-5"
          onSubmit={handleSubmit}
        >
          <div className=" bg-white md:grid place-items-center md:px-0 px-5 py-10 space-y-5">
            <div className="w-fit m-auto mb-10">
              <h1 className="text-xl font-semibold border-b border-b-black">
                發起探險行程
              </h1>
            </div>
            <div className="md:w-3/5 space-y-5">
              <div className="text-xl font-semibold">活動詳情</div>
              <div className="flex flex-col space-y-2">
                <div>
                  <label htmlFor="max_groupsize">出團人數：</label>
                  <input
                    id="max_groupsize"
                    name="max_groupsize"
                    value={formData.max_groupsize}
                    onChange={handleChange}
                    type="text"
                    className={`text-black bg-zinc-100 rounded p-1 md:w-1/3 w-full ${
                      formErrors.max_groupsize ? 'border border-red-500' : ''
                    }`}
                  />
                  {/* Display error message */}
                  {formErrors.max_groupsize && (
                    <span className="text-red-500">
                      {formErrors.max_groupsize}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="event_date">出發時間：</label>
                  <input
                    id="event_date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    type="datetime-local"
                    className={`text-black bg-zinc-100 rounded p-1 md:w-1/3 w-full ${
                      formErrors.event_date ? 'border border-red-500' : ''
                    }`}
                  />
                  {formErrors.event_date && (
                    <span className="text-red-500">
                      {formErrors.event_date}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="event_period">探險時長：</label>
                  <select
                    id="event_period"
                    name="event_period"
                    value={formData.event_period}
                    onChange={handleChange}
                    className={`text-black bg-zinc-100 rounded p-1 md:w-1/3 w-full ${
                      formErrors.event_period ? 'border border-red-500' : ''
                    }`}
                  >
                    <option value="1">1小時</option>
                    <option value="2">2小時</option>
                    <option value="3">3小時</option>
                    <option value="4">4小時</option>
                    <option value="5">5小時</option>
                    <option value="6">6小時</option>
                    <option value="7">7小時</option>
                    <option value="8">8小時</option>
                    <option value="9">9小時</option>
                    <option value="10">10小時</option>
                    <option value="11">11小時</option>
                    <option value="12">12小時</option>
                  </select>
                  {formErrors.event_period && (
                    <span className="text-red-500">
                      {formErrors.event_period}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="level_id">探險難度：</label>
                  <select
                    id="level_id"
                    name="level_id"
                    value={formData.level_id}
                    onChange={handleChange}
                    className={`text-black bg-zinc-100 rounded p-1 md:w-1/3 w-full ${
                      formErrors.level_id ? 'border border-red-500' : ''
                    }`}
                  >
                    <option value="1">簡單</option>
                    <option value="2">中等</option>
                    <option value="3">困難</option>
                  </select>
                  {formErrors.level_id && (
                    <span className="text-red-500">{formErrors.level_id}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="ruin_id">廢墟地點：</label>
                  <select
                    id="ruin_id"
                    name="ruin_id"
                    value={formData.ruin_id}
                    onChange={handleChange}
                    className={`text-black bg-zinc-100 rounded p-1 md:w-1/3 w-full ${
                      formErrors.ruin_id ? 'border border-red-500' : ''
                    }`}
                  >
                    <option value="1">安和路飛碟屋</option>
                    <option value="2">頭汴坑警察官吏派出所</option>
                    <option value="3">飛宏象山國際聯誼中心</option>
                    <option value="4">社子大戲院</option>
                    <option value="5">麗庭莊園</option>
                    <option value="6">中外百貨</option>
                    <option value="7">蘭州國宅</option>
                    <option value="8">陸軍保養廠</option>
                    <option value="9">基隆路招待所</option>
                    <option value="10">嘉禾新村</option>
                    <option value="11">松山台鐵宿舍</option>
                    <option value="12">義芳居古厝</option>
                    <option value="13">撫臺街洋樓</option>
                    <option value="14">第二台北市議會大廈</option>
                    <option value="15">北投亞太溫泉生活館</option>
                    <option value="16">北溝故宮文物典藏山洞</option>
                    <option value="17">東平菸樓</option>
                    <option value="18">全安堂</option>
                    <option value="19">大勇街屋</option>
                    <option value="20">東宮戲院</option>
                    <option value="21">中森戲院</option>
                    <option value="22">烏日車站舊站長宿舍</option>
                    <option value="23">烏日派出所</option>
                    <option value="24">大肚台地反空降堡</option>
                    <option value="25">臺中飛行場機槍堡</option>
                    <option value="26">積善中學</option>
                    <option value="27">台中鯊魚墳場</option>
                    <option value="28">磺溪書院</option>
                    <option value="29">繩繼堂</option>
                    <option value="30">水湳菸樓</option>
                    <option value="31">台汽客運彰化總站</option>
                    <option value="32">聚奎居</option>
                    <option value="33">霧峰民生診所</option>
                    <option value="34">千越大樓</option>
                    <option value="35">中華會館臺東分社</option>
                    <option value="36">富有大樓</option>
                    <option value="37">加母子灣民宿</option>
                    <option value="38">池上五洲戲院</option>
                    <option value="39">中華大戲院</option>
                    <option value="40">知本崎仔頭廢棄診所</option>
                    <option value="41">金星大戲院</option>
                    <option value="42">台南西市場</option>
                    <option value="43">新營成功戲院</option>
                    <option value="44">關廟中央戲院</option>
                    <option value="45">白河雷諾瓦山莊</option>
                    <option value="46">杏林綜合醫院</option>
                    <option value="47">潮州小學校</option>
                    <option value="48">培源殖產工廠</option>
                    <option value="49">潮州九塊厝天主堂</option>
                    <option value="50">雙溪口磚窯</option>
                  </select>
                  {formErrors.ruin_id && (
                    <span className="text-red-500">{formErrors.ruin_id}</span>
                  )}
                </div>
              </div>
              <hr />
            </div>
            <div className="md:w-3/5 flex flex-col space-y-5">
              <h2 className="text-xl font-semibold">活動介紹</h2>
              <div className="md:flex">
                <label htmlFor="title" className="text-nowrap">
                  探險標題：
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    className={`text-black bg-zinc-100 rounded p-1 w-full ${
                      formErrors.title ? 'border border-red-500' : ''
                    }`}
                    onChange={handleChange}
                  />
                  {formErrors.title && (
                    <span className="text-red-500">{formErrors.title}</span>
                  )}
                </div>
              </div>
              <div className="md:flex align-top">
                <label htmlFor="content" className="text-nowrap">
                  文章內容：
                </label>
                <div className="w-full">
                  <textarea
                    id="content"
                    name="content"
                    cols="30"
                    rows="10"
                    value={formData.content}
                    className="text-black bg-zinc-100 rounded p-1 w-full"
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.content && (
                    <span className="text-red-500">{formErrors.content}</span>
                  )}
                </div>
              </div>
              <hr />
            </div>
            <div className="md:w-3/5 flex flex-col space-y-3">
              <h2 className="text-xl font-semibold">上傳照片</h2>
              <label
                htmlFor="image"
                className=" bg-zinc-300 w-fit py-1 px-2 rounded hover:bg-zinc-400"
              >
                選擇圖片
              </label>
              <input
                type="file"
                id="image"
                name="images"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                className="hidden"
              />
              <div className="flex flex-wrap justify-between">
                {formData.images.map((image, index) => (
                  <div key={index} className="flex flex-col mb-4 md:w-[30%]">
                    <img
                      src={URL.createObjectURL(image.file)}
                      alt={`Preview ${index + 1}`}
                      className="md:w-auto md:h-40 object-cover"
                    />
                    <input
                      type="text"
                      id={`caption${index + 1}`}
                      name={`image_descrip`}
                      className="text-black bg-zinc-100 rounded p-1 mt-2"
                      value={image.caption}
                      placeholder="請輸入圖片說明"
                      onChange={(e) => handleCaptionChange(e, index)}
                    />
                  </div>
                ))}
              </div>
              <hr />
            </div>
            <div className="md:w-3/5 flex flex-col space-y-3 pb-5">
              <div>
                <h2 className="text-xl font-semibold">介紹自己</h2>
                {formErrors.description && (
                  <span className="text-red-500">{formErrors.description}</span>
                )}
              </div>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="text-black bg-zinc-100 rounded px-1"
              ></textarea>
            </div>
            <button
              type="submit"
              className="md:w-[280px] w-full h-[75px] bg-black text-white mt-5 p-2 text-2xl font-semibold"
              onClick={redirect}
            >
              建立行程
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
