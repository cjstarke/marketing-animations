import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import caseStudies from '../data/caseStudies.json'
import ConvergeButtonLink from './ConvergeButtonLink'

const CaseStudiesAnimated = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const caseStudyRefs = useRef<HTMLDivElement[]>([])

  // Use the standardized animation utility
  useScrollTriggerFadeIn(caseStudyRefs)

  return (
    <div
      ref={containerRef}
      className="w-full pb-16 px-6 lg:px-10 xl:px-20 flex justify-center"
    >
      <div className="max-w-lg lg:max-w-screen-xl w-full">
        <h2 className="w-full text-center text-4xl mb-20 lg:text-5xl">
          Results you can measure.
        </h2>
        <div className="grid gap-y-32 items-start">
          {caseStudies.slice(0, 2).map((caseStudy, index) => (
            <div
              key={caseStudy.slug}
              ref={(el) => {
                if (el) caseStudyRefs.current[index] = el
              }}
              className={`flex flex-col lg:flex-row lg:space-x-10 items-center ${
                index % 2 === 0
                  ? 'lg:justify-self-start'
                  : 'lg:justify-self-end'
              }`}
            >
              <img
                src={caseStudy.homeImage}
                alt={caseStudy.sideImageAlt}
                className="w-full max-w-96 mb-8 lg:mb-0 lg:w-80"
              />

              <div className="text-shark lg:w-116">
                <h2 className="noshake text-2xl  lg:text-4xl font-medium mb-3 text-pretty">
                  {caseStudy.headingString}
                </h2>
                <p className="noshake text-base leading-normal lg:text-xl mb-4 text-pretty lg:leading-normal">
                  {caseStudy.section1Heading}
                </p>
                <ConvergeButtonLink
                  id={`${caseStudy.slug}-button`}
                  text="Learn More"
                  className="border-none bg-transparent pl-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseStudiesAnimated
