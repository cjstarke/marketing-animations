import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP } from '../utils/gsap'
import ConvergeButtonLink from '../components/ConvergeButtonLink'
import { Target } from '../components/SVGs'

const HeroAnimated = () => {
  const headingRef = useRef<HTMLDivElement>(null)
  const outerHeadingRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Don't create animations until refs are ready
    if (!outerHeadingRef.current || !headingRef.current || !targetRef.current) return

    // Fade-in animation on initial load for the parent container
    gsap.to(outerHeadingRef.current, {
      opacity: 1,
      duration: .8,
      ease: 'power2.in',
      delay: 0.05,
    })

    // Existing scroll animation for inner heading
    gsap.to(outerHeadingRef.current, {
      scrollTrigger: {
        trigger: outerHeadingRef.current,
        start: 'top top',
        end: '130% top',
        pin: true,
        scrub: 1.5,
      },
    })

    gsap.to(targetRef.current, {
      scale: 0.6,
      // ease: 'power1.in',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'center center',
        end: '+=400 80',
        scrub: 1.5,
      },
    })
  })

  return (
    <div className="w-full flex flex-col px-6 lg:px-20 items-center overflow-x-clip">
      <div className="h-328 2sm:h-400 lg:h-360 w-full max-w-lg lg:max-w-screen-xl">
        <div className=" relative">
          <div ref={outerHeadingRef} className=" opacity-0 relative pt-48 2sm:pt-80">
            <div className="relative">
              <div ref={targetRef} className=" pointer-events-none">
                <Target className="w-164 lg:w-240 xl:w-288 absolute target top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/3 xl:-translate-y-[40%]" />
              </div>
              <div ref={headingRef} className="noshake lg:max-w-208 xl:max-w-none">
                <h1 className="noshake text-4xl  lg:text-5xl xl:text-6xl text-balance">
                  Forget your agency of record. Converge is your{' '}
                  <span className="font-bold text-darkPink">
                    Agency of Action.
                  </span>
                </h1>
                <div className="flex flex-col xl:flex-row xl:items-center xl:mt-10">
                  <p className="noshake my-4 xl:my-0 text-pretty xl:w-164 lg:text-xl">
                    Performance doesn&apos;t stand still, and neither do we. For
                    today&apos;s modern growth marketer, Converge is your performance
                    innovation partner.
                  </p>
                  <ConvergeButtonLink
                    id={'heading'}
                    className="noshake"
                    text="Get in on the action"
                    href='/contact'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAnimated
