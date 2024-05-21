import {
  RiEmotionLaughLine,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
  RiEmotionNormalLine,
  RiEmotionLine,
} from '@remixicon/react'

const emotionHandler = (emotion) => {
  switch (emotion) {
    case 'laugh':
      return (
        <>
          <RiEmotionLaughLine className="mr-2" />
          <span className="hidden pc:inline-block">覺得笑死</span>
        </>
      )
    case 'happy':
      return (
        <>
          <RiEmotionLine className="mr-2" />
          <span className="hidden pc:inline-block">覺得開心</span>
        </>
      )
    case 'unhappy':
      return (
        <>
          <RiEmotionUnhappyLine className="mr-2" />
          <span className="hidden pc:inline-block">覺得不開心</span>
        </>
      )
    case 'sad':
      return (
        <>
          <RiEmotionSadLine className="mr-2" />
          <span className="hidden pc:inline-block">覺得傷心</span>
        </>
      )
    case 'boring':
      return (
        <>
          <RiEmotionNormalLine className="mr-2" />
          <span className="hidden pc:inline-block">覺得無聊</span>
        </>
      )
    default:
      return null
  }
}

export default emotionHandler
