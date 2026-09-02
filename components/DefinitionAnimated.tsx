import { useRef } from 'react'
import { gsap, useGSAP } from '../utils/gsap'

const DefinitionAnimated = () => {
  const h2Ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Don't create animations until refs are ready
    if (!h2Ref.current) return

    const h2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: h2Ref.current,
        start: 'top 35%',
        end: '600px top',
        pin: true,
        scrub: 1.5,
      },
    })

    h2Timeline
      .to(h2Ref.current, { opacity: 1, duration: 0.9, ease: 'power2.inOut' }) // Fade in
      .to(h2Ref.current, { opacity: 1, duration: 0.1, ease: 'power2.inOut' }) // Fade in
  })

  return (
    <div className="w-full flex flex-col px-6 lg:px-20 items-center overflow-x-clip">
      <div className="w-full max-w-lg lg:max-w-screen-xl">
        <div className=" h-340 lg:h-288 w-full max-w-lg lg:max-w-screen-lg flex justify-center">
          <div ref={h2Ref} className="opacity-0 lg:max-w-200 xl:max-w-200">
            <h1 className="noshake text-3xl lg:text-5xl text-balance font-medium mb-4">
              We&apos;re redefining <br /><span className='text-darkPink font-bold'>modern performance</span> 
            </h1>
            <p className="noshake font-semibold text-2xl ">
              mod·ern per·for·mance &#40;noun&#41;:{' '}
            </p>
            <p className="noshake text-lg 2sm:text-xl lg:text-2xl">
              A full-funnel marketing approach that holds all efforts—from brand
              to demand—accountable to business outcomes, balancing short- and
              long-term goals, and combining media, creative, and user
              experience to drive measurable, profitable action.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefinitionAnimated
