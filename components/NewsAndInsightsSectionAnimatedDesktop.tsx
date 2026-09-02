import { useRef } from 'react'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import ConvergeButtonLink from './ConvergeButtonLink'
import NewsAndInsightsCard from './NewsAndInsightsCard'

const NewsAndInsightsSectionAnimatedDesktop = ({
  NewsAndInsightsCards,
}: any) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  // Animate heading and button with standard settings
  useScrollTriggerFadeIn(headingRef, {})
  useScrollTriggerFadeIn(buttonRef, {})

  // Animate cards with custom end trigger for better desktop experience
  useScrollTriggerFadeIn(cardRefs, {})

  return (
    <div
      ref={containerRef}
      id="news-and-insights-section-desktop"
      className="w-full flex justify-center px-10 pt-16 pb-32 text-black bg-white"
      data-component-type="news-and-insights-section-desktop"
      data-component-vis="true"
    >
      <div className="w-full max-w-md flex flex-col items-center lg:max-w-screen-xl ">
        <div ref={headingRef}>
          <h2 className="noshake w-full text-center font-medium text-4xl text-pretty mb-10 lg:text-5xl">
            News & Insights.
          </h2>
          <p className="text-center text-xl">
            We&apos;re not just following trends. We&apos;re shaping them.
          </p>
        </div>

        <div className="lg:grid  lg:grid-cols-4 lg:gap-6 mt-20 mb-6">
          {NewsAndInsightsCards.slice(0, 4).map((card: any, i: number) => {
            let attributes = card

            return (
              <div
                key={`action-desktop-${i}`}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el
                }}
              >
                <NewsAndInsightsCard
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
        <div ref={buttonRef}>
          <ConvergeButtonLink
            id={'news-and-insights-read-all-desktop'}
            text="View all"
            href="/insights"
          />
        </div>
      </div>
    </div>
  )
}

export default NewsAndInsightsSectionAnimatedDesktop
