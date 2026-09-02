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
    // Don't create animations until refs are ready
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
        end: '900px top', // Adjusted for mobile - shorter scroll distance
        pin: true,
        scrub: 1.5,
      },
    })
    const shiftTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef2.current,
        start: 'top 35%',
        end: '1200px top', // Adjusted for mobile - shorter scroll distance
        pin: true,
        scrub: 0.3,
      },
    })

    // Set initial states - off-screen
    gsap.set(performanceRef.current, {
      x: '100vw', // Start off-screen right
      opacity: 0,
    })

    gsap.set(shiftRef.current, {
      x: '-100vw', // Start off-screen left
    })

    // shiftWordRef's box was widened 5x (126px -> 630px) to render the SVG at higher
    // resolution before the big scale-up, to avoid blurriness. Since the box itself is
    // now 5x wider than before, we counteract that visually by starting at scale 0.2
    // (1/5) so it still displays at the original 126px size before the animation begins.
    // shiftWordRef is now absolutely positioned inside a 126px-wide outer wrapper (see JSX),
    // so its 630px width no longer affects flex layout/centering - only the outer 126px
    // wrapper does. transformOrigin is anchored to the top-left corner so scaling grows/
    // shrinks from that fixed point, matching the outer wrapper's top-left corner.
    gsap.set(shiftWordRef.current, {
      scale: 0.2,
      transformOrigin: '0% 0%',
    })




    h2Timeline
      .to(performanceRef.current, {
        x: 0, // Fly in from right to center
        opacity: 1,
        duration: 0.75,
        ease: 'power2.out',
      }) // Fly in and scale the text
      .to(performanceRef.current, { opacity: 1, duration: 0.25 }) // Hold
      .to(performanceRef.current, {
        y: '-100vh', // Fly up
        opacity: 0, // Fade out
        duration: 0.5,
        ease: 'power2.in',
      }) // Smooth exit

    shiftTimeline
      .to(shiftRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power2.out',
      }) // Fly in from left
      .to(needsARef.current, { opacity: 0, duration: 0.03 })
      // Collapse "needs a" width to 0 while fading out - flex will auto-center "shift"
      .to(needsARef.current, {
        opacity: 0,
        width: 0,
        duration: 0.5,
      })
      .to(shiftWordRef.current, {
        scale: 28, // Reduced scale needed since base width was increased 5x (630px vs 126px) to avoid blur from over-scaling a small rasterized layer
        duration: 0.5,
        y: '-350px', // NOTE: likely needs re-tuning now that base box width changed (was 126px, now 630px) - shifts the box's layout position/center before transform is applied
        x: '-10540px', // NOTE: likely needs re-tuning now that base box width changed (was 126px, now 630px) - shifts the box's layout position/center before transform is applied
        ease: 'power2.in',
      }, "<")
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
          <div
            ref={shiftRef}
            className="flex justify-center items-center"
          >
            <div className="w-[228px] mr-4 flex-shrink-0 mt-2.5" ref={needsARef}>
              <NeedsA />
            </div>
            {/* Outer wrapper reserves the real 126px of flex-layout space (matches original visual size) */}
            <div className="relative w-[126px] h-[36px] flex-shrink-0">
              {/* Inner div is absolutely positioned so its 630px width doesn't affect layout -
                  it's only rendered wider internally for sharpness, then scaled down via GSAP */}
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
