import { useRef } from 'react'
import ButtonLink from './ButtonLink'
import { CoveCircles } from './SVGs/CoveCircles'
import { CoveLogo } from './SVGs/CoveLogo'
import { gsap, useGSAP } from '../utils/gsap'

const CoveSection = () => {
  const logoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (logoRef.current) {
      // Create scroll-triggered animation
      gsap.to(logoRef.current, {
        rotation: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top bottom', // Start when element enters viewport from bottom
          end: 'top 30%', // End when element is 75% up the page (25% from top)
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up"
        },
      })
    }
  })

  return (
    <div className="w-full flex justify-center bg-black py-20 lg:py-28 text-white">
      <div className="w-full max-w-2xl lg:max-w-screen-xl px-6  lg:px-20 flex flex-col lg:flex-row  lg:justify-between items-center">
        <div
          ref={logoRef}
          className="w-80 lg:shrink-0 lg:w-96 lg:mr-5 rotate-180 opacity-30 "
        >
          <CoveCircles />
        </div>
        <div className="lg:w-128">
          <div className="bg-onea w-fit border-solid border-2 border-three mt-8 flex items-center space-x-2 py-1 px-4 rounded-full lg:mt-0">
            <div className="w-2 h-2 rounded-full bg-darkPink"></div>
            <p className="text-aaa uppercase tracking-wider">Introducing</p>
          </div>
          <div className="flex items-center pt-8 space-x-3 lg:space-x-4">
            <div className="w-16 lg:w-20 ">
              <CoveLogo />
            </div>
            <img
              src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/i_Phone_17_1_1f3889c068.png"
              alt="logo"
              className='w-44'
            />
          </div>
          <h4 className="text-2xl pt-8 lg:text-3xl">
            Lorem ipsum dolor sit amet{' '}
            <span className="font-extrabold">
              consectetur adipiscing elit.
            </span>{' '}
          </h4>
          <p className="text-lg pt-4 pb-8">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua —
            ut enim ad minim veniam quis nostrud exercitation.
          </p>
          <ButtonLink
            id={'cove-section-button'}
            href="/"
            className="text-white border-white"
            text="Learn more"
            openInNewTab={true}
          />
        </div>
      </div>
    </div>
  )
}

export default CoveSection
