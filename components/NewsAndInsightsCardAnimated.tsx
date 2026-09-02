import { format, parseISO } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export type NewsAndInsightsCardAnimatedProps = {
  link: string
  heading: string
  img: string
  categories: any[]
  className?: string
  date?: string
  author?: string
  summary?: string
  externalUrl?: string
  index?: number
}

const NewsAndInsightsCardAnimated = ({
  link,
  heading,
  img,
  className,
  categories,
  date = 'Jan 27, 2025',
  author = 'Converge Team',
  summary,
  index,
  externalUrl
}: NewsAndInsightsCardAnimatedProps) => {
  const classes = twMerge('flex flex-col items-start mb-10 w-80 sm:w-96', className)
  const normalDateString = format(parseISO(date), 'MMMM dd, yyyy')

  return (
    <a
      id={externalUrl ? `${index}-news-and-insights-card`: `${link}-news-and-insights-card`}
      data-component-vis="true"
      data-component-type="search"
      className={classes}
      href={externalUrl ? externalUrl : `/insights/${link}`}
      target ={externalUrl ? '_blank': ''}
    >
      <div className="relative lg:w-full lg:aspect-[3/2]">
        <div className="absolute bottom-2 left-2 z-10 bg-white/60 px-4 py-1 text-xl text-shark">
          {categories[0].name ? categories[0].name : ''}
        </div>

        <img
          src={img}
          alt={heading}
          className="h-52 sm:h-64 lg:hidden"
        />
        <img
          src={img}
          alt={heading}
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />
      </div>


      <h2 className="noshake font-bold text-2xl t mt-6 mb-2 line-clamp-2">{heading}</h2>
      {summary && <p className="text-steel mb-2">{summary}</p>}

      <div className="noshake flex space-x-2 text-darkGray text-xs">
        <p>{normalDateString}</p>
        <p> &#183;</p>
        <p>{author} </p>
      </div>
    </a>
  )
}

export default NewsAndInsightsCardAnimated
