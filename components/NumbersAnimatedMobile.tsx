import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'

const NumbersAnimatedMobile = () => {
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
      description: 'incididunt ut labore',
    },
  ]

  const headingRef = useRef<HTMLDivElement>(null)
  const number1Ref = useRef<HTMLDivElement>(null)
  const number2Ref = useRef<HTMLDivElement>(null)
  const number3Ref = useRef<HTMLDivElement>(null)
  const number4Ref = useRef<HTMLDivElement>(null)

  useScrollTriggerFadeIn(
    [headingRef, number1Ref, number2Ref, number3Ref, number4Ref],
    {
      scrollTrigger: {
        start: 'top 90%',
      },
    }
  )

  const numberTitleClass =
    'noshake font-bold text-3xl sm:text-4xl uppercase text-darkPink mb-2'
  const numberDescriptionClass = 'noshake text-sm sm:text-base text-pretty'

  return (
    <div className="w-full flex flex-col px-6 items-center pt-24 pb-24">
      <div className="w-full max-w-lg">
        <div className="text-center mb-12">
          <h3 className="noshake text-2xl sm:text-3xl font-medium mb-4">
            Lorem ipsum dolor sit amet.
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8">
          <div className="flex flex-col space-y-8">
            <div ref={number1Ref} className="text-center">
              <div className={numberTitleClass}>{results[0].title}</div>
              <div className={numberDescriptionClass}>
                {results[0].description}
              </div>
            </div>
            <div ref={number2Ref} className="text-center">
              <div className={numberTitleClass}>{results[1].title}</div>
              <div className={numberDescriptionClass}>
                {results[1].description}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div ref={number3Ref} className="text-center">
              <div className={numberTitleClass}>{results[2].title}</div>
              <div className={numberDescriptionClass}>
                {results[2].description}
              </div>
            </div>
            <div ref={number4Ref} className="text-center">
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

export default NumbersAnimatedMobile
