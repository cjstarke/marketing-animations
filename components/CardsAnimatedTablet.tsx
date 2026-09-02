import { useRef } from 'react'
import { gsap, useGSAP } from '../utils/gsap'

import {
  PinkCreative,
  PinkData,
  PinkMedia,
  PinkQualified,
} from './SVGs'
import cardData from '../data/whatWeDoData.json'

const CardsAnimatedTablet = () => {
  // Tablet refs - row-based
  const tabletRow1Ref = useRef<HTMLDivElement>(null)
  const tabletRow2Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Tablet animation - row-based triggers
    const tabletRows = [
      tabletRow1Ref.current,
      tabletRow2Ref.current,
    ].filter(Boolean)

    tabletRows.forEach((row) => {
      if (row) {
        // Get all cards within this row
        const rowCards = row.querySelectorAll('[data-card]')
        
        // Set initial state - cards offscreen
        gsap.set(rowCards, {
          x: '100vw',
          opacity: 0,
        })

        // Create timeline for each row
        const rowTl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 20%',
            end: '500px top',
            scrub: 1.5,
            pin: true,
          },
        })

        // Animate cards in the row
        rowTl.to(rowCards, {
          x: 0,
          opacity: 1,
          duration: .6,
          stagger: 0.1,
          ease: 'power2.out'
        })
        rowTl.to(rowCards, {
          duration: .4,
        })
      }
    })
  })

  const cardClass = 'w-full bg-white px-6 py-12'
  const cardh3Class = 'noshake text-xl font-bold text-balance mb-3'
  const cardpClass = 'noshake'
  const pinkSvgClass = 'w-24 mb-6'

  return (
    <div className="w-full flex flex-col px-6 xl:px-2 items-center overflow-x-clip md:h-550">
      <div className="w-full flex flex-col py-12 justify-center ">
        {/* Row 1: Cards 1 & 2 */}
        <div ref={tabletRow1Ref} className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-6 mb-164">
          <div data-card className={cardClass}>
            <div className={pinkSvgClass}>
              <PinkMedia />
            </div>
            <h3 className={cardh3Class}>{cardData[0].service}</h3>
            <p className={cardpClass}>{cardData[0].description}</p>
          </div>
          <div data-card className={cardClass}>
            <div className={pinkSvgClass}>
              <PinkQualified />
            </div>
            <h3 className={cardh3Class}>{cardData[1].service}</h3>
            <p className={cardpClass}>{cardData[1].description}</p>
          </div>
        </div>
        
        {/* Row 2: Cards 3 & 4 */}
        <div ref={tabletRow2Ref} className="w-full max-w-5xl mx-auto grid grid-cols-2 gap-6">
          <div data-card className={cardClass}>
            <div className={pinkSvgClass}>
              <PinkCreative />
            </div>
            <h3 className={cardh3Class}>{cardData[2].service}</h3>
            <p className={cardpClass}>{cardData[2].description}</p>
          </div>
          <div data-card className={cardClass}>
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

export default CardsAnimatedTablet
