import { useRef } from 'react'
import { gsap, useGSAP } from '../utils/gsap'
import { PerformanceMarketing } from './SVGs/PerformanceMarketing'
import { NeedsA } from './SVGs/NeedsA'
import { Shift } from './SVGs/Shift'

const ThreeDOverlayMobile = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const wrapperRef2 = useRef<HTMLDivElement>(null)
  const performanceRef = useRef<HTMLHeadingElement>(null)
  const shiftRef = useRef<HTMLHeadingElement>(null)
  const needsARef = useRef<HTMLDivElement>(null)
  const shiftWordRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (
      !wrapperRef.current ||
      !performanceRef.current ||
      !shiftRef.current ||
      !wrapperRef2.current ||
      !needsARef.current ||
      !shiftWordRef.current
    )
      return

    const h2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 35%',
        end: '900px top',
        pin: true,
        scrub: 1.5,
      },
    })
    const shiftTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef2.current,
        start: 'top 35%',
        end: '1200px top',
        pin: true,
        scrub: 0.3,
      },
    })

    gsap.set(performanceRef.current, {
      x: '100vw',
      opacity: 0,
    })

    gsap.set(shiftRef.current, {
      x: '-100vw',
    })

    gsap.set(shiftWordRef.current, {
      scale: 0.2,
      transformOrigin: '0% 0%',
    })
    h2Timeline
      .to(performanceRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
      })
      .to(performanceRef.current, { opacity: 1, duration: 0.25 })
      .to(performanceRef.current, {
        y: '-100vh',
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      })

    shiftTimeline
      .to(shiftRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power2.out',
      })
      .to(needsARef.current, { opacity: 0, duration: 0.03 })
      .to(needsARef.current, {
        opacity: 0,
        width: 0,
        duration: 0.5,
      })
      .to(
        shiftWordRef.current,
        {
          scale: 28,
          duration: 0.5,
          y: '-350px',
          x: '-10540px',
          ease: 'power2.in',
        },
        '<'
      )
      .to(shiftWordRef.current, { duration: 0.2, scale: 28 })
  })

  return (
    <div className="w-full max-w-screen-xl px-6 text-center pointer-events-auto text-pale">
      <div className=" h-240  w-full  flex justify-center items-start mt-24">
        <div ref={wrapperRef}>
          <div ref={performanceRef} className="w-[370px] opacity-0">
            <PerformanceMarketing />
          </div>
        </div>
      </div>
      <div className="h-240  w-full  flex justify-center items-start mt-32 mb-[calc(100vh+20px)]">
        <div ref={wrapperRef2} className="h-full">
          <div ref={shiftRef} className="flex justify-center items-center">
            <div
              className="w-[228px] mr-4 flex-shrink-0 mt-2.5"
              ref={needsARef}
            >
              <NeedsA />
            </div>
            <div className="relative w-[126px] h-[36px] flex-shrink-0">
              <div
                className="absolute top-0 left-0 w-[630px]"
                ref={shiftWordRef}
              >
                <Shift />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDOverlayMobile
