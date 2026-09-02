import { useRef } from 'react'
import { gsap, useGSAP } from '../utils/gsap'

import {
  PinkCreative,
  PinkData,
  PinkMedia,
  PinkQualified,
} from './SVGs'
import cardData from '../data/whatWeDoData.json'

const CardsAnimatedDesktop = () => {
  // Desktop refs
  const cardsRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)
  const card4Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Desktop animation
    if (
      !cardsRef.current ||
      !card1Ref.current ||
      !card2Ref.current ||
      !card3Ref.current ||
      !card4Ref.current
    )
      return

    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
    ]

    // Create timeline for desktop
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 20%',
        end: '1000px top',
        pin: true,
        scrub: 1.5,
      },
    })

    // Set initial state - cards off-screen right, scaled 130%
    gsap.set(cards, {
      x: '100vw',
      scale: 1.6,
      opacity: 0,
    })

    // Phase 1: Cards enter from right and move to position (0% - 50% of scroll)
    tl.to(cards, {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
    })

    // Phase 2: Hold in position (50% - 70% of scroll)
    tl.to({}, { duration: 0.3 })

    // Phase 3: Cards exit to the left (70% - 100% of scroll)
    tl.to(cards, {
      x: '-100vw',
      duration: 1,
      stagger: 0.1,
      ease: 'power2.in',
      opacity: 0,
    })
  })

  const cardClass = 'w-full bg-white px-6 py-12'
  const cardh3Class = 'noshake text-xl font-bold text-balance mb-3 2xl:text-2xl'
  const cardpClass = 'noshake xl:text-sm/7'
  const pinkSvgClass = 'w-24 mb-6 xl:w-28 2xl:w-32'

  return (
    <div className="w-full flex flex-col px-6 xl:px-2 items-center overflow-x-clip xl:h-288">
      <div className="w-full flex justify-center">
        <div
          ref={cardsRef}
          className="w-full max-w-screen-2xl grid grid-cols-4 gap-3"
        >
          <div ref={card1Ref} className={cardClass}>
            <div className={pinkSvgClass}>
              <PinkMedia />
            </div>
            <h3 className={cardh3Class}>{cardData[0].service}</h3>
            <p className={cardpClass}>{cardData[0].description}</p>
          </div>
          <div ref={card2Ref} className={cardClass}>
            <div className={pinkSvgClass}>
              <PinkQualified />
            </div>
            <h3 className={cardh3Class}>{cardData[1].service}</h3>
            <p className={cardpClass}>{cardData[1].description}</p>
          </div>
          <div ref={card3Ref} className={cardClass}>
            <div className={pinkSvgClass}>
              <PinkCreative />
            </div>
            <h3 className={cardh3Class}>{cardData[2].service}</h3>
            <p className={cardpClass}>{cardData[2].description}</p>
          </div>
          <div ref={card4Ref} className={cardClass}>
            <div className={pinkSvgClass}>
              <PinkData />
            </div>
            <h3 className={cardh3Class}>{cardData[3].service}</h3>
            <p className={cardpClass}>{cardData[3].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsAnimatedDesktop
