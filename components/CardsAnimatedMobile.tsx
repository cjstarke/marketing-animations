import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'

import {
  PinkCreative,
  PinkData,
  PinkMedia,
  PinkQualified,
} from './SVGs'
import cardData from '../data/whatWeDoData.json'

const CardsAnimatedMobile = () => {
  // Mobile refs
  const mobileCard1Ref = useRef<HTMLDivElement>(null)
  const mobileCard2Ref = useRef<HTMLDivElement>(null)
  const mobileCard3Ref = useRef<HTMLDivElement>(null)
  const mobileCard4Ref = useRef<HTMLDivElement>(null)

  // Apply default scroll-triggered fade-in animation to all cards
  useScrollTriggerFadeIn([
    mobileCard1Ref,
    mobileCard2Ref,
    mobileCard3Ref,
    mobileCard4Ref,
  ])

  const cardClass = 'w-full bg-white px-6 py-12 flex flex-col h-full'
  const cardh3Class = 'noshake text-xl font-bold text-balance mb-3'
  const cardpClass = 'noshake'
  const pinkSvgClass = 'w-24 mb-6'

  return (
    <div className="w-full flex flex-col px-6 items-center overflow-x-clip py-12">
      <div className="w-full max-w-lg grid grid-cols-1 grid-rows-4 gap-6">
        <div ref={mobileCard1Ref} className={cardClass}>
          <div className={pinkSvgClass}>
            <PinkMedia />
          </div>
          <h3 className={cardh3Class}>{cardData[0].service}</h3>
          <p className={cardpClass}>{cardData[0].description}</p>
        </div>
        <div ref={mobileCard2Ref} className={cardClass}>
          <div className={pinkSvgClass}>
            <PinkQualified />
          </div>
          <h3 className={cardh3Class}>{cardData[1].service}</h3>
          <p className={cardpClass}>{cardData[1].description}</p>
        </div>
        <div ref={mobileCard3Ref} className={cardClass}>
          <div className={pinkSvgClass}>
            <PinkCreative />
          </div>
          <h3 className={cardh3Class}>{cardData[2].service}</h3>
          <p className={cardpClass}>{cardData[2].description}</p>
        </div>
        <div ref={mobileCard4Ref} className={cardClass}>
          <div className={pinkSvgClass}>
            <PinkData />
          </div>
          <h3 className={cardh3Class}>{cardData[3].service}</h3>
          <p className={cardpClass}>{cardData[3].description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardsAnimatedMobile
