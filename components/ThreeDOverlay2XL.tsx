import { useRef } from 'react'
import { gsap, useGSAP, ScrollTrigger } from '../utils/gsap'
import { PerformanceMarketing } from './SVGs/PerformanceMarketing'
import { NeedsA } from './SVGs/NeedsA'
import { Shift } from './SVGs/Shift'

const ThreeDOverlay2XL = () => {
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
        end: '800px top',
        scrub: 1.5,
      },
    })
    const shiftTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef2.current,
        start: 'top 35%',
        end: '1800px top',
        scrub: 0.3,
      },
    })

    ScrollTrigger.create({
      trigger: '#explore-section',
      start: 'bottom top',
      onEnter: () => gsap.set(shiftWordRef.current, { display: 'none' }),
      onLeaveBack: () => gsap.set(shiftWordRef.current, { display: 'block' }),
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
    })

    h2Timeline
      .to(performanceRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to(performanceRef.current, { opacity: 1, duration: 0.1 })
      .to(performanceRef.current, {
        y: '-100vh',
        opacity: 0,
        duration: 0.4,
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
        duration: 0.4,
      })
      .to(
        shiftWordRef.current,
        {
          scale: 18,
          duration: 0.5,
          y: '7000px',
          x: '-4440px',
          ease: 'power2.in',
        },
        '<'
      )
      .to(shiftWordRef.current, { duration: 0.2, scale: 18 })
  })

  return (
    <div className="w-full max-w-screen-xl px-6 lg:px-10 text-center pointer-events-auto text-pale">
      <div className=" h-328  w-full  flex justify-center items-start mt-24">
        <div ref={wrapperRef} className="sticky top-[35vh]">
          <div ref={performanceRef} className="w-[1520px] opacity-0">
            <PerformanceMarketing />
          </div>
        </div>
      </div>
      <div className=" h-500  w-full  flex justify-center items-start mt-44 mb-[calc(100vh-700px)]">
        <div ref={wrapperRef2} className="sticky top-[35vh]">
          <div ref={shiftRef} className="flex justify-center  items-center">
            <div className="w-[870px] mr-[4.5rem]" ref={needsARef}>
              <NeedsA />
            </div>
            <div className="relative w-[500px] h-[187px] mb-1 flex-shrink-0">
              <div
                className="absolute -left-[1000px] -top-[373px] w-[2500px] safari-stable"
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

export default ThreeDOverlay2XL
