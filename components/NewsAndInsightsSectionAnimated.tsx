import NewsAndInsightsSectionAnimatedDesktop from './NewsAndInsightsSectionAnimatedDesktop'
import NewsAndInsightsSectionAnimatedMobile from './NewsAndInsightsSectionAnimatedMobile'

const NewsAndInsightsSectionAnimated = ({ NewsAndInsightsCards }: any) => {
  return (
    <>
      {/* Mobile version - visible on mobile and tablet */}
      <div className="block lg:hidden">
        <NewsAndInsightsSectionAnimatedMobile NewsAndInsightsCards={NewsAndInsightsCards} />
      </div>
      
      {/* Desktop version - visible on desktop and larger screens */}
      <div className="hidden lg:block">
        <NewsAndInsightsSectionAnimatedDesktop NewsAndInsightsCards={NewsAndInsightsCards} />
      </div>
    </>
  )
}

export default NewsAndInsightsSectionAnimated
