import { RiArrowDropDownLine } from '@remixicon/react'

const relationHandler = (status = 'unfollow') => {
  switch (status) {
    case 'follow':
      return (
        <>
          <span className="bg-gray-500 p-2 rounded-lg flex">
            FOLLOWING
            <RiArrowDropDownLine />
          </span>
        </>
      )
    case 'unfollow':
      return (
        <>
          <span className="bg-green-500 p-2 rounded-lg flex">
            FOLLOW
            <RiArrowDropDownLine />
          </span>
        </>
      )
    default:
      return null
  }
}

export default relationHandler
