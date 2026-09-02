import ConvergeButtonLink from './ConvergeButtonLink'
import { CoveByConvergeBlack } from './SVGs/CoveByConvergeBlack'
import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'

const CoveWhatWeDo = () => {
  const coveRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLHeadingElement>(null)

  useScrollTriggerFadeIn(coveRef, {})
  useScrollTriggerFadeIn(textRef, {})
  useScrollTriggerFadeIn(buttonRef, {})

  return (
    <div className="w-full flex justify-center  py-20 lg:py-28 border-y-borderGray border-y-solid border-y-2">
      <div className="w-full max-w-xl lg:max-w-screen-xl px-6 lg:px-20 flex flex-col lg:flex-row  lg:justify-between  lg:items-start space-y-6 lg:space-y-0 lg:space-x-4">
        <div ref={coveRef} className="w-72 shrink-0 lg:w-80">
          <CoveByConvergeBlack />
        </div>
        <div ref={textRef} className="lg:max-w-lg">
          <p className="text-xlplus mb-2 lg:mb-4  text-pretty lg:text-3xl ">
            Our first-party data marketplace{' '}
            <span className="font-extrabold ">
              {' '}
              built to accelerate growth.
            </span>
          </p>
          <p className="text-pretty lg:max-w-md">
            Pre-qualified, identity-based customer intelligence. Powered by 20+
            years of owned data.
          </p>
        </div>
        <div ref={buttonRef}>
          <ConvergeButtonLink
            id={'cove-learn-more-button'}
            text="Learn more"
            href="https://cove.convergemarketing.com/"
            openInNewTab={true}
          />
        </div>
      </div>
    </div>
  )
}

export default CoveWhatWeDo
