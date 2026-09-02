import { ReactNode, useRef } from 'react'
import Link from 'next/link'
import ConvergeButtonLink from './ConvergeButtonLink'
import {
  gsap,
  ScrollTrigger,
  useGSAP,
  useScrollTriggerFadeIn,
} from '../utils/gsap'

interface WhatWeDoAreaProps {
  paragraph: string
  index: number
  link: string
  children: ReactNode
  id: string
}

const WhatWeDoArea = ({
  paragraph,
  index,
  link,
  children,
  id,
}: WhatWeDoAreaProps) => {
  const childrenRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Apply default fade-in animation to content
  useScrollTriggerFadeIn(contentRef, {})

  useGSAP(() => {
    if (!childrenRef.current) return

    // Determine animation direction based on index
    // Even indices (0, 2, 4) fly in from left
    // Odd indices (1, 3) fly in from right
    const isEven = index % 2 === 0
    const initialX = isEven ? '100vw' : '-100vw'

    // Set initial state - off-screen with no scaling
    gsap.set(childrenRef.current, {
      x: initialX,
    })

    // Animate to final position
    gsap.to(childrenRef.current, {
      x: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: childrenRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [index])

  return (
    <div id={id} className="w-full overflow-x-clip flex-col flex items-center ">
      <div className="w-full max-w-screen-2xl" ref={childrenRef}>
        {children}
      </div>
      {/* Content */}
      <div className="w-full px-6 lg:px-20 flex justify-center mt-8 mb-28 sm:mb-36 sm:mt-12 lg:mt-20 lg:mb-48">
        <div className="w-full max-w-xl lg:max-w-screen-lg">
          <p className="text-lgplus leading-normal mb-6 lg:text-2xlplus lg:leading-default text-pretty">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoArea
