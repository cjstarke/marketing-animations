import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import ButtonLink from './ButtonLink'

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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis.
          <span className="font-bold">
            {' '}
            Et quasi architecto beatae vitae dicta sunt explicabo.
          </span>
        </h3>
        <div ref={buttonRef}>
          <ButtonLink
            id="explore-what-we-do-button"
            text="Explore what we do"
          />
        </div>
      </div>
    </div>
  )
}

export default ExploreSectionAnimated
