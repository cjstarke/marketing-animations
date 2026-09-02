import { useRef } from 'react'
import { gsap, useGSAP } from '../utils/gsap'

const PieChartSection = () => {
  const animatedDivRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (animatedDivRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animatedDivRef.current,
          start: 'top 90%',
          end: 'bottom 100px',
          scrub: 1.5, // Links animation progress directly to scroll position
        },
      })

      // Expand from scale 1.0 to 1.2 (45% of scroll)
      tl.to(animatedDivRef.current, {
        scale: 1.2,
        duration: 0.475,
        // ease: 'power1.out'
      })
        // Hold at scale 1.2 (10% of scroll - 1/10 of total duration)
        .to(animatedDivRef.current, {
          scale: 1.2,
          duration: 0.05,
        })
        // Contract back from scale 1.2 to 1.0 (45% of scroll)
        .to(animatedDivRef.current, {
          scale: 1.0,
          duration: 0.475,
          // ease: 'power1.out'
        })
    }
  })

  return (
    <div className="w-full flex justify-center bg-almostWhite py-24 lg:py-28">
      <div className="w-full max-w-2xl lg:max-w-screen-xl px-6 lg:px-10 xl:px-20 lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-144">
          <h2 className="noshake w-full text-4xl text-pretty mb-6 xl:text-5xl ">
            Performance means capturing demand now —{' '}
            <span className="font-bold">and accelerating demand next.</span>
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl">
            Only a small share of buyers are ready to act at any given time.
            Converge helps brands capture that demand today while building the
            audiences, creative, media, and measurement systems that create
            tomorrow&apos;s growth.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-28 lg:mt-0 lg:w-108 lg:shrink-0 lg:ml-5">
          <div className="w-72 h-72 lg:w-80 lg:h-80 relative text-center flex justify-center items-center">
            <div className="absolute -top-16 -left-6 lg:-top-2 lg:-left-[5.5rem] leading-tight">
              <div className="relative">
                <p className="font-semibold">
                  Capture <br /> current demand
                </p>
                <div className="absolute  top-[63px] left-[48px] w-[44px] h-[1px] bg-black rotate-[60deg] lg:rotate-[30deg] lg:w-[52px] lg:left-[59px] lg:top-[56px]"></div>
              </div>

              {/* diagonal down line */}
            </div>
            <div className="absolute -top-20 -right-1 lg:top-2 lg:-right-[88px]">
              <div className="relative">
                <p className="font-semibold leading-tight">
                  Accelerate <br /> future demand
                </p>
                <div className="absolute  top-[65px] left-[21px] w-[45px] h-[1px] bg-black rotate-[110deg] lg:rotate-[134deg] lg:w-[50px] lg:left-[10px] lg:top-[60px]"></div>
              </div>

              {/* diagonal down line */}
            </div>

            <div className="absolute">
              {' '}
              {/* animated div */}
              <div
                ref={animatedDivRef}
                className="relative bg-three rounded-full w-60 h-60 lg:w-[276px] lg:h-[276px] flex justify-center items-center"
              >
                <div className="absolute top-[16px] left-[44px] lg:top-[45px] lg:left-[24px] text-sm text-white bg-darkPink w-12 h-12  flex justify-center items-center rounded-full font-bold">
                  5%<sup className="top-[-.3em]">*</sup>
                </div>
                <p className="text-white font-bold text-5xl lg:text-5xlplus">
                  95%<sup className="top-[-.7em] text-[60%] text-[55%]">*</sup>
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg pt-3 text-center">
            Growth comes from winning the{' '}
            <span className="text-darkPink font-bold">5% now</span> and moving
            the 95% next.
          </p>
          <p className="text-sm text-center text-pretty pt-3 text-[#7a7a7a]">
            <sup>*</sup>Source: LinkedIn/WARC. Across categories, only 5% of
            consumers are in market at any given time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PieChartSection
