import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import ConvergeButtonLink from './ConvergeButtonLink'
import NewsAndInsightsCard from './NewsAndInsightsCard'

const ExploreSectionAnimated = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLHeadingElement>(null)

  useScrollTriggerFadeIn(headingRef, {})
  useScrollTriggerFadeIn(buttonRef, {})

  return (
    <div id="explore-section" className="w-full flex justify-center">
      <div className="w-full max-w-2xl lg:max-w-screen-lg px-6   lg:px-20">
        <h3
          ref={headingRef}
          className="text-2xlplus mb-10 lg:text-4xl leading-default text-pretty lg:leading-default"
        >
          The traditional agency model is splintered. Brand teams, performance
          teams, media teams — each with different strategies, goals, and
          definitions of success.
          <span className="font-bold">
            {' '}
            We know marketing works better together.
          </span>
        </h3>
        <div ref={buttonRef}>
          <ConvergeButtonLink
            id="explore-what-we-do-button"
            text="Explore what we do"
          />
        </div>
      </div>
    </div>
  )
}

export default ExploreSectionAnimated
