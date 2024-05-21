import React, { useEffect, useState } from 'react'
import Notification from '@/components/linda/notification'
import profile1 from '@/public/images/profile1.jpg'
import profile2 from '@/public/images/profile2.jpg'
import AccountLayout from '@/components/linda/accountLayout'
import { useAuth } from '@/contexts/auth-context'
import { MB_GET_NOTIFICATIONS } from '@/components/config/api-path'
import { IMG_SERVER } from '@/components/config/api-path'
import { SN_COMMUNITY } from '@/components/config/johnny-api-path'


export default function Notifications() {
  const { auth } = useAuth()
  const [today, setToday] = useState(null)
  const [week, setWeek] = useState(null)
  const [month, setMonth] = useState(null)

  const getNotificationInfo = async () => {
    try {
      const r = await fetch(`${MB_GET_NOTIFICATIONS}/${auth.id}`)
      const result = await r.json()
      setToday(result.data.today)
      setWeek(result.data.week)
      setMonth(result.data.month)
    } catch (error) {
      console.log('Error fetching notification info:', error)
    }
  }

  const calculateTime = (timestamp) => {
    const currentTime = new Date()
    const notificationTime = new Date(timestamp)
    const difference = currentTime - notificationTime
    const hoursDifference = Math.floor(difference / (1000 * 60 * 60))


    if (hoursDifference < 1) {
      const minutesDifference = Math.floor(difference / (1000 * 60))
      if(minutesDifference < 1){
        const secDiff = Math.floor(difference / 1000)
        return `${secDiff}s`
      } 
      return `${minutesDifference}m`
    } else if (hoursDifference < 24) {
      return `${hoursDifference}h`
    } else {
      const daysDifference = Math.floor(hoursDifference / 24)
      if (daysDifference < 7) {
        return `${daysDifference}d`
      } else {
        const weeksDifference = Math.floor(daysDifference / 7)
        return `${weeksDifference}w`
      }
    }
  }

  const markAsRead = async () => {}

  useEffect(() => {
    getNotificationInfo()
  }, [])

  return (
    <>
      <div className="flex w-full md:min-h-lvh flex-col items-center p-[15px] pt-[45px] md:py-[30px]">
        <div className="flex md:w-1/2 md:min-h-[50%] py-[20px] md:px-[16px] flex-col rounded-md md:shadow-[12px_12px_30px_0_rgba(255,255,255,0.3)] md:shadow-[-12px_-12px_30px_0_rgba(255,255,255,0.4)]">
          <div className="flex flex-col gap-[22px]">
            <div className="font-semibold text-[20px]">NOTIFICATIONS</div>
            <div className="flex flex-col">
              {today?.length > 0 || week?.length > 0 || month?.length > 0 ? (
                <>
                  {today && today.length > 0 && (
                    <>
                      <div className="py-[12px]">Today</div>
                      {today.map((v, i) => (
                        <Notification
                          key={i}
                          name={v.username}
                          src={
                            v.google_photo
                              ? v.profile_pic_url
                              : `${IMG_SERVER}/${v.profile_pic_url}`
                          }
                          postSrc={v.post_image_url ? `${SN_COMMUNITY}/${v.post_image_url}` : null}
                          text={`commented: ${v.message.length > 85 ? v.message.slice(0, 85) + '...' : v.message}`}
                          hour={calculateTime(v.created_at)}
                          notificationLink={`/community/main-post?postId=${v.resource_id}`}
                          userLink={`/community/main-page?psUserId=${v.sender_id}`}
                        />
                      ))}
                    </>
                  )}
                  {week && week.length > 0 && (
                    <>
                      <div className="py-[12px]">Last 7 days</div>
                      {week.map((v, i) => (
                        <Notification
                          key={i}
                          name={v.username}
                          src={
                            v.google_photo
                              ? v.profile_pic_url
                              : `${IMG_SERVER}/${v.profile_pic_url}`
                          }
                          postSrc={v.post_image_url ? `${SN_COMMUNITY}/${v.post_image_url}` : null}
                          text={`commented: ${v.message}`}
                          hour={calculateTime(v.created_at)}
                          notificationLink={`/community/main-post?postId=${v.resource_id}`}
                          userLink={`/community/main-page?psUserId=${v.sender_id}`}
                        />
                      ))}
                    </>
                  )}
                  {month && month.length > 0 && (
                    <>
                      <div className="py-[12px]">Last 30 days</div>
                      {month.map((v, i) => (
                        <Notification
                          key={i}
                          name={v.username}
                          src={
                            v.google_photo
                              ? v.profile_pic_url
                              : `${IMG_SERVER}/${v.profile_pic_url}`
                          }
                          postSrc={v.post_image_url ? `${SN_COMMUNITY}/${v.post_image_url}` : null}
                          text={`commented: ${v.message}`}
                          hour={calculateTime(v.created_at)}
                          notificationLink={`/community/main-post?postId=${v.resource_id}`}
                          userLink={`/community/main-page?psUserId=${v.sender_id}`}
                        />
                      ))}
                    </>
                  )}
                </>
              ) : (
                <div>No notifications yet ...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Notifications.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>
}
