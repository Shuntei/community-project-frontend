import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import styles from '../homeContent/homeContent.module.css'
import Link from 'next/link'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
  const { slides, options, className, currentIndex, setCurrentIndex } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const limitContent = (content) => {
    const maxLength = 50
    if (content?.length > maxLength) {
      return content.slice(0, maxLength) + '...'
    }
    return content
  }

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0.4, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('select', () => {
        setCurrentIndex(emblaApi.selectedScrollSnap())
      })
  }, [emblaApi, tweenOpacity, currentIndex])

  return (
    <div className={`max-w-[30rem] ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className=" flex touch-pan-y">
          {slides.map((slide, index) => (
            <div className="flex-none w-1/2 min-w-0 pl-4" key={index}>
              <img
                className={`rounded block md:h-[300px] h-[150px] w-full object-cover`}
                src={`/images/borou/${slide.image_url}.jpg`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex gap-[5px]">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center gap-[10px]">
          {scrollSnaps?.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`flex after:w-[20px] after:h-[25px] cursor-pointer w-[15px] h-[15px] items-center justify-center border border-2 border-white  rounded-full ${index === selectedIndex ? '' : 'border-opacity-50'}`}
            />
          ))}
        </div>
      </div>
      {slides?.map((slide, index) => (
        <div
          className={`${styles['card1']} flex ${index === currentIndex ? 'block' : 'hidden'}`}
          key={index}
        >
          <div className="flex flex-col justify-center items-start gap-6 animate-duration-1000 animate-ease-in-out animate-fill-forwards">
            <span className="text-[14px] animate-duration-1000 animate-ease-in-out animate-fill-forwards">
              {slide.title}
            </span>
            <span className="font-medium md:text-[24px]">
              {limitContent(slide.description)}
            </span>
          </div>
          <Link
            href={
              currentIndex === 0
                ? `http://localhost:3000/tour/tourpost/${slides[slides.length - 1].tour_id}`
                : `http://localhost:3000/tour/tourpost/${slides[currentIndex - 1].tour_id}`
            }
            className={`${styles['card-button']} cursor-pointer hover:bg-[#7A7A7A]`}
          >
            READ NOW
          </Link>
        </div>
      ))}
    </div>
  )
}

export default EmblaCarousel
