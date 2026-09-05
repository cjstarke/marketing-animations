import { useRef } from 'react'
import { gsap, useGSAP } from '../utils/gsap'


const NumbersAnimatedDesktop = () => {
  const results = [
    {
      title: '$5B+',
      description: 'lorem ipsum dolor sit',
    },
    {
      title: '$2b+',
      description: 'consectetur adipiscing elit',
    },
    {
      title: '1M+',
      description: 'sed do eiusmod',
    },
    {
      title: '1K+',
      description: 'incididunt ut labore ',
    },
  ]
  // Desktop refs
  const numbersRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const number1Ref = useRef<HTMLDivElement>(null)
  const number2Ref = useRef<HTMLDivElement>(null)
  const number3Ref = useRef<HTMLDivElement>(null)
  const number4Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Desktop animation
    if (
      !numbersRef.current ||
      !headingRef.current ||
      !number1Ref.current ||
      !number2Ref.current ||
      !number3Ref.current ||
      !number4Ref.current
    )
      return

    const numbers = [
      number1Ref.current,
      number2Ref.current,
      number3Ref.current,
      number4Ref.current,
    ]

    // Create timeline for desktop
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: numbersRef.current,
        start: 'top 30%',
        end: '600px top',
        pin: true,
        scrub: 1.5,
      },
    })

    // Set initial state - numbers off-screen right, scaled 130%, heading invisible
    gsap.set(numbers, {
      x: '100vw',
      scale: 3,
      opacity: 0,
    })

    gsap.set(headingRef.current, {
      opacity: 0,
    })

    // Phase 1: numbers enter from right and move to position (0% - 30% of scroll)
    tl.to(numbers, {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out',
    })

    // Phase 2a: heading fades in after numbers are fully visible (30% - 50% of scroll)
    tl.to(headingRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    })

    // Phase 2b: Hold both heading and numbers in position (50% - 70% of scroll)
    tl.to({}, { duration: 0.1 })
  })

  const numberTitleClass =
    'noshake font-bold text-5xl uppercase lg:text-6xl xl:text-7xl text-darkPink mb-2'
  const numberDescriptionClass =
    'noshake lg:text-lg  xl:text-2xl text-pretty max-w-32 xl:max-w-44'

  return (
    <div className="w-full flex flex-col px-6 items-center overflow-x-clip h-360">
      <div className="w-full -mt-0 flex flex-col items-center lg:px-10">
        <div
          ref={numbersRef}
          className="w-full flex flex-col items-center max-w-screen-xl"
        >
          <div ref={headingRef} className="text-center mb-16">
            <h3 className="noshake text-4xl md:text-5xl  font-medium  mb-8">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>

          <div className="w-full flex justify-between">
            <div ref={number1Ref}>
              <div className={numberTitleClass}>{results[0].title}</div>
              <div className={numberDescriptionClass}>
                {results[0].description}
              </div>
            </div>
            <div ref={number2Ref}>
              <div className={numberTitleClass}>{results[1].title}</div>
              <div className={numberDescriptionClass}>
                {results[1].description}
              </div>
            </div>
            <div ref={number3Ref}>
              <div className={numberTitleClass}>{results[2].title}</div>
              <div className={numberDescriptionClass}>
                {results[2].description}
              </div>
            </div>
            <div ref={number4Ref}>
              <div className={numberTitleClass}>{results[3].title}</div>
              <div className={numberDescriptionClass}>
                {results[3].description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NumbersAnimatedDesktop
