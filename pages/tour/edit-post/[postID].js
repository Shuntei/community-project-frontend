import React, { useState, useEffect } from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import Footer from '@/components/linda/footer/footer'
import {
  API_SERVER,
  TOUR_POST,
  TOUR_EDIT_POST,
} from '@/components/config/api-path'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { useAuth } from '@/contexts/auth-context'

const EditPost = () => {
  const router = useRouter()
  const { auth } = useAuth()
  const postId = router.query.postID
  // console.log(router.query)
  // console.log(postId)

  const [images, setImages] = useState([])
  const [formData, setFormData] = useState({
    tour_id: postId,
    user_id: auth.id,
    ruin_id: 0,
    event_date: '',
    max_groupsize: 0,
    event_period: 0,
    level_id: 0,
    title: '',
    description: '',
    content: '',
  })

  useEffect(() => {
    // Fetch post details from the server based on postId
    if (!router.isReady) return
    async function fetchPostDetails() {
      try {
        const response = await fetch(`${TOUR_POST}/${postId}`)
        const postData = await response.json()
        console.log(postData.row)

        if (response.ok) {
          const dataForShow = postData.row[0]

          // 從 postData.row 解購出照片的3欄資料
          const imagesData = postData.row.map((item) => ({
            tour_img_id: item.tour_img_id,
            image_url: item.image_url,
            image_descrip: item.image_descrip,
          }))

          //因為抓到的資料結構有row
          const {
            tour_id,
            ruin_id,
            event_date,
            max_groupsize,
            event_period,
            level_id,
            title,
            description,
            content,
          } = dataForShow

          // Set formData with the selected keys
          setFormData({
            ...formData,
            tour_id,
            ruin_id,
            event_date,
            max_groupsize,
            event_period,
            level_id,
            title,
            description,
            content,
          })

          setImages(imagesData)
          console.log(images)
        } else {
          console.error('Failed to fetch post details')
        }
      } catch (error) {
        console.error('Error fetching post details:', error)
      }
    }

    fetchPostDetails()
  }, [postId])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log('formData with e.targey:', formData)
  }

  // 紀錄選取的圖片
  const handleImageChange = (e) => {
    const { files } = e.target
    const newImages = Array.from(files).map((file) => ({
      file,
      image_descrip: '', // 初始化圖片說明
      image_url: URL.createObjectURL(file), // 新增 image_url
    }))
    setImages(newImages)
  }
  console.log('images chosen:', images)

  const handleImageDescrip = (index, value) => {
    const updatedImages = [...images]
    updatedImages[index] = {
      ...updatedImages[index],
      image_descrip: value,
    }
    setImages(updatedImages)
    console.log(images)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formDataToSend = new FormData(e.currentTarget)
      formDataToSend.append('tour_id', postId)
      formDataToSend.append('images', images)

      console.log(formDataToSend)
      // 向後端發出 POST
      const response = await fetch(`${TOUR_EDIT_POST}/${postId}`, {
        method: 'PUT',
        body: formDataToSend,
      })
      console.log(formDataToSend)
      if (!response.ok) {
        throw new Error('Failed to update post')
      }

      console.log('Post updated successfully')
      // 在這裡提示成功訊息
      router.push('/member/account-settings/my-posts');
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  const handleCancel = () => {
    router.push('/member/account-settings/my-posts');
  };

  return (
    <>
      <Navbar />
      <div className="pt-28 md:px-[150px] px-5">
        <form
          className="py-16 bg-gradient-to-t from-gray-400 to-gray-100 md:px-[150px] px-5"
          onSubmit={handleSubmit}
        >
          {/* {formData.row && ( */}
          <div className=" bg-white md:grid place-items-center md:px-0 px-5 py-10 space-y-5">
            <div className="w-fit m-auto mb-10">
              <h1 className="text-xl font-semibold border-b border-b-black">
                編輯探險行程
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
                    value={formData?.max_groupsize}
                    onChange={handleChange}
                    type="text"
                    className="text-black bg-zinc-100 rounded p-1 md:w-1/3 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="event_date">出發時間：</label>
                  <input
                    id="event_date"
                    name="event_date"
                    value={dayjs(formData?.event_date).format(
                      'YYYY-MM-DDTHH:mm'
                    )}
                    onChange={handleChange}
                    type="datetime-local"
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="event_period">探險時長：</label>
                  <select
                    id="event_period"
                    name="event_period"
                    value={formData?.event_period}
                    onChange={handleChange}
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
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
                </div>
                <div>
                  <label htmlFor="level_id">探險難度：</label>
                  <select
                    id="level_id"
                    name="level_id"
                    value={formData?.level_id}
                    onChange={handleChange}
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
                  >
                    <option value="1">簡單</option>
                    <option value="2">中等</option>
                    <option value="3">困難</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ruin_id">廢墟名稱：</label>
                  <select
                    id="ruin_id"
                    name="ruin_id"
                    value={formData?.ruin_id}
                    onChange={handleChange}
                    className="text-black bg-zinc-100 rounded py-1 md:w-1/3 w-full"
                  >
                    <option value="1">安和路飛碟屋</option>
                    <option value="2">頭汴坑警察官吏派出所</option>
                    <option value="3">飛宏象山國際聯誼中心</option>
                    <option value="4">社子大戲院</option>
                    <option value="5">麗庭莊園</option>
                  </select>
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
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData?.title}
                  className="w-full bg-zinc-100 text-black rounded p-1"
                  onChange={handleChange}
                />
              </div>
              <div className="md:flex align-top">
                <label htmlFor="content" className="text-nowrap">
                  文章內容：
                </label>
                <textarea
                  id="content"
                  name="content"
                  cols="30"
                  rows="10"
                  value={formData?.content}
                  className="w-full bg-zinc-100 text-black rounded p-1"
                  onChange={handleChange}
                ></textarea>
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
              {images.length > 0 && (
                <div className="flex flex-wrap justify-between">
                  {images.map(
                    (image, index) =>
                      // 確保有照片資料才呈現
                      image.image_url && (
                        <div
                          key={index}
                          className="flex flex-col mb-4 md:w-[30%]"
                        >
                          <img
                            src={
                              image?.image_url ?
                              // image?.image_url.startsWith('/img')
                                `${API_SERVER}/img/${image.image_url}` 
                                : image.file
                                  ? URL.createObjectURL(image.file)
                                  : `/images/borou/${image.image_url}.jpg`
                            }
                            alt=""
                            className="md:w-auto md:h-40 object-cover"
                          />
                          <input
                            type="text"
                            id={`image_descrip${index + 1}`}
                            name={`image_descrip`}
                            className="text-black bg-zinc-100 rounded p-1 mt-2"
                            value={image.image_descrip}
                            placeholder="請輸入圖片說明"
                            onChange={(e) =>
                              handleImageDescrip(index, e.target.value)
                            }
                          />
                        </div>
                      )
                  )}
                </div>
              )}
              <hr />
            </div>
            <div className="md:w-3/5 flex flex-col space-y-3 pb-5">
              <h2 className="text-xl font-semibold">介紹自己</h2>
              <textarea
                name="description"
                id="description"
                value={formData?.description}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="text-black bg-zinc-100 rounded"
              ></textarea>
            </div>
            <div className="md:space-x-8">
              <button
                type="submit"
                className="md:w-[200px] w-full h-[75px] bg-black text-white mt-5 p-2 text-2xl font-semibold"
              >
                確認修改
              </button>
              <button
                type="button"
                className="md:w-[200px] w-full h-[75px] bg-black text-white mt-5 p-2 text-2xl font-semibold"
                onClick={handleCancel}
              >
                取消
              </button>
            </div>
          </div>
          {/* )} */}
        </form>
      </div>
      <Footer />
    </>
  )
}

export default EditPost
