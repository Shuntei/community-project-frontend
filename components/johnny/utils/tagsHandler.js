import {
  RiPriceTag3Fill,
  RiCloseLine,
  RiCloseCircleLine,
} from '@remixicon/react'

const tagsHandler = (tagsName) => {
  return (
    <>
      {tagsName && (
        <>
          <RiPriceTag3Fill className="mr-2 " />
          <span className="hidden pc:inline-block">{tagsName}</span>
        </>
      )}
    </>
  )
}

export default tagsHandler
