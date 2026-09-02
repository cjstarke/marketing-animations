import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import ConvergeButtonLink from './ConvergeButtonLink'
import NewsAndInsightsCard from './NewsAndInsightsCard'
import NewsAndInsightsCardAnimated from './NewsAndInsightsCardAnimated'

const NewsAndInsightsSectionAnimatedMobile = ({
  NewsAndInsightsCards,
}: any) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  // Array of refs for cards
  const cardRefs = useRef<HTMLDivElement[]>([])

  // Use the standardized animation utilities
  useScrollTriggerFadeIn(buttonRef, {})
  useScrollTriggerFadeIn(cardRefs, {})

  return (
    <div
      ref={containerRef}
      id="news-and-insights-section-mobile"
      className="w-full flex justify-center px-6 py-36 text-black bg-white"
      data-component-type="news-and-insights-section-mobile"
      data-component-vis="true"
    >
      <div className="w-full max-w-md flex flex-col items-center">
        <h2
          ref={headingRef}
          className="noshake w-full text-center font-medium text-4xl text-pretty mb-6"
        >
          News & Insights.
        </h2>
        <p className="text-center text-lg mb-6">
          We&apos;re not just following trends. We&apos;re shaping them.
        </p>
        <div ref={buttonRef}>
          <ConvergeButtonLink
            id={'news-and-insights-read-all-mobile'}
            text="Read all"
            href="/insights"
          />
        </div>
        <div className="flex flex-col space-y-8 mt-10">
          {NewsAndInsightsCards.slice(0, 4).map((card: any, i: number) => {
            let attributes = card

            return (
              <div
                key={`action-mobile-${i}`}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el
                }}
              >
                <NewsAndInsightsCardAnimated
                  index={i}
                  link={attributes.slug}
                  heading={attributes.title}
                  img={attributes.ogImage.url}
                  categories={attributes.categories}
                  date={attributes.date}
                  author={attributes.author.name ? attributes.author.name : ''}
                  externalUrl={
                    attributes.externalUrl ? attributes.externalUrl : ''
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NewsAndInsightsSectionAnimatedMobile
