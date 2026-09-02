import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import { DoubleQuote } from './SVGs'
import Image from 'next/image'

const MessageSection = () => {
  const messageRef = useRef<HTMLDivElement>(null)

  // Use the standardized animation utility
  useScrollTriggerFadeIn(messageRef)

  return (
    <div
      id="message-section"
      className="w-full flex justify-center px-6 lg:px-10 py-32 lg:py-32 text-black bg-white"
      data-component-type="message-section"
      data-component-vis="true"
    >
      <div className="w-full max-w-md flex flex-col lg:max-w-screen-xl items-center">
        <h3 className="noshake text-2xl sm:text-3xl lg:text-5xl  font-medium mb-16">
          What our clients say:
        </h3>
        <div
          ref={messageRef}
          className="w-full border border-shark p-6 lg:p-12 lg:text-xl font-light rounded-lg"
        >
          <div className="w-8 mb-8">
            <DoubleQuote />
          </div>
          <p className="noshake text-2xl mb-12 lg:text-3xlplus text-pretty lg:leading-normal ">
            From Day 1, Converge has been much more than a media agency for us.
            Not only did they adapt to our evolving business without missing a
            beat, but they were able to improve core KPIs after transitioning
            from a larger agency partner in a matter of weeks, while raising the
            bar for our team in managing our campaigns.&rdquo;
          </p>
          <p className="noshake font-semibold text-darkPink mb-3">
            Lisa Goldberg
          </p>
          <p className="noshake font-normal mb-8">VP Marketing, OPTAVIA®</p>
          <img
            src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/optavia_0d576c57f6.webp"
            alt="aaa logo"
            className="w-52  lg:w-72"
          />
        </div>
      </div>
    </div>
  )
}

export default MessageSection
