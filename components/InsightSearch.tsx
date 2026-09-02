import clsx from 'clsx'
import { useState } from 'react'
import InsightThumbnail from './InsightThumbnail'

export type InsightSearchProps = {
  articles: any[]
}

export const InsightSearch = ({ articles }: InsightSearchProps) => {
  const [searchField, setSearchField] = useState('')

  const filteredResults = articles.filter((article) => {
    return article.categories.some((e: any) => e.name === searchField)
  })

  const handleChange = (e: any) => {
    setSearchField(e.target.value)
  }
  const buttonClass = 'text-shark py-1 lg:py-2 px-2 lg:px-4  lg:text-2xl'

  const getButtonClass = (value: string) =>
    clsx(searchField === value ? 'bg-searchBlue' : 'bg-fthree', buttonClass)


  const allClass = getButtonClass('')
  const pressClass = getButtonClass('Press')
  const insightsClass = getButtonClass('Insights')
  const pressReleasesClass = getButtonClass('Press Releases')



  const results = searchField ? filteredResults : articles

  return (
    <div
      id="news-and-insights-search"
      data-component-vis="true"
      data-component-type="search"
      className="w-full"
    >
      <div className="w-full flex justify-center px-6  mt-16 mb-10 lg:my-20">
        <div className="w-full max-w-md lg:max-w-screen-xl flex flex-col lg:flex-row justify-start lg:items-center max-w-sm lg:space-x-8">
          <p className="text-xl mb-3 lg:mb-0">Filter by:</p>
          <div className="flex flex-col sm:flex-row gap-y-3 sm:space-x-4 font-medium">
            <div className="flex space-x-4">
              <button className={allClass} onClick={handleChange} value="">
                All
              </button>
              <button
                className={pressClass}
                onClick={handleChange}
                value="Press"
              >
                Press
              </button>
            </div>
            <div className="flex space-x-4">
              <button
                className={insightsClass}
                onClick={handleChange}
                value="Insights"
              >
                Insights
              </button>
              <button
                className={pressReleasesClass}
                onClick={handleChange}
                value="Press Releases"
              >
                Press Releases
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full flex justify-center px-6 lg:px-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 max-w-md lg:max-w-screen-lg w-full">
          {results.map((result, i) => {
            let attributes = result
            const isLeftColumn = i % 2 === 0

            return (
              <div key={`news-card-${i}`} className="relative">
                <InsightThumbnail
                  index={i}
                  link={attributes.slug}
                  heading={attributes.title}
                  img={attributes.ogImage.url}
                  categories={attributes.categories}
                  summary={attributes.description}
                  date={attributes.date}
                  author={
                    attributes.author?.name ? attributes.author.name : ''
                  }
                  externalUrl={
                    attributes.externalUrl ? attributes.externalUrl : ''
                  }
                  className={
                    isLeftColumn ? 'lg:mb-10 lg:pr-10' : 'lg:mb-10 lg:pl-10'
                  }
                />
                {isLeftColumn && (
                  <div className="hidden lg:block absolute right-0 bottom-1/3 h-1/2 w-px bg-shark" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
