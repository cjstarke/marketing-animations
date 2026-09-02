import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import ConvergeButtonLink from './ConvergeButtonLink'

const SmallInsightsAnimated = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLHeadingElement>(null)

  // useScrollTriggerFadeIn(headingRef, {
  //   scrollTrigger: {
  //     start: 'top 95%',
  //   },
  // })
  // useScrollTriggerFadeIn(buttonRef, {
  //   scrollTrigger: {
  //     start: 'top 95%',
  //   },
  // })

  return (
    <div
      id="to-insights-section"
      className="w-full flex flex-col items-center px-6 lg:px-10 py-20 lg:py-28 text-black bg-white"
      data-component-type="news-and-insights-section"
      data-component-vis="true"
    >
      <h2
        ref={headingRef}
        className="w-full text-center  text-4xl text-pretty mb-10 lg:text-5xl"
      >
        Check out our latest news & insights.
      </h2>
      <div ref={buttonRef}>
        <ConvergeButtonLink
          id={'news-and-insights-read-all'}
          text="View all"
          href="/insights"
        />
      </div>
    </div>
  )
}

export default SmallInsightsAnimated
