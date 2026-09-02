import clsx from 'clsx'
import ConvergeButtonLink from './ConvergeButtonLink'
import NewsAndInsightsCard from './NewsAndInsightsCard'
import RelatedCard from './RelatedCard'

const RelatedSection = ({ RelatedCards }: any) => {
  return (
    <div
      id="news-and-insights-section"
      className="w-full flex justify-center px-6 py-16 lg:px-12 text-shark"
      data-component-type="news-and-insights-section"
      data-component-vis="true"
    >
      <div className="w-full max-w-md lg:max-w-screen-xl ">
        <h2 className="w-full  text-4xl text-pretty mb-6 lg:text-5xl ">
          Related
        </h2>
        <div className="flex justify-between items-center w-full">
          {RelatedCards.slice(0, 2).map((article: any, i: number) => {
            return (
              <RelatedCard
                index={i}
                key={`related-${i}`}
                link={article.slug}
                heading={article.title}
                date={article.date}
                author={article.author?.name || ''}
                externalUrl={article.externalUrl || ''}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedSection
