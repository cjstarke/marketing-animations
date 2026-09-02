import clsx from 'clsx'
import ConvergeButtonLink from './ConvergeButtonLink'
import NewsAndInsightsCard from './NewsAndInsightsCard'

const NewsAndInsightsSection = ({ NewsAndInsightsCards, className }: any) => {
  const classes = clsx(
    "w-full flex justify-center px-6 lg:px-10 py-14 lg:py-20 text-black border-t border-shark",
    className
  )

  return (
    <div
      id="news-and-insights-section"
      className={classes}
      data-component-type="news-and-insights-section"
      data-component-vis="true"
    >
      <div className="w-full max-w-md flex flex-col items-center lg:max-w-screen-xl ">
        <h2 className="w-full text-center font-bold text-4xl text-pretty mb-7 lg:text-5xl">
          <span className="font-normal">Check out our latest</span> news &
          insights.
        </h2>
        <ConvergeButtonLink
          id={'news-and-insights-read-all'}
          text="Read all"
          href="/insights"
        />
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:grid-cols-4 xl:gap-6 mt-10">
          {NewsAndInsightsCards.slice(0, 4).map((article: any, i: number) => {
            return (
              <NewsAndInsightsCard
                index={i}
                key={`action-${i}`}
                link={article.slug}
                heading={article.title}
                img={article.ogImage?.url || ''}
                categories={article.categories}
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

export default NewsAndInsightsSection
