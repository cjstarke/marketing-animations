import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export type NewsAndInsightsCardProps = {
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

const NewsAndInsightsCard = ({
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
}: NewsAndInsightsCardProps) => {
  const classes = twMerge('w-full flex flex-col items-start mb-10', className)
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
      <div className="relative w-full lg:aspect-[3/2]">
        <div className="absolute bottom-2 left-2 z-10 bg-white/60 px-4 py-1 text-xl text-shark">
          {categories?.[0]?.name || ''}
        </div>

        <Image
          src={img}
          alt={heading}
          height={10}
          width={10}
          className="w-full lg:hidden"
        />
        <Image
          src={img}
          alt={heading}
          fill
          className="hidden lg:block object-cover"
        />
      </div>


      <h2 className="font-bold text-2xl t mt-6 mb-2 line-clamp-2">{heading}</h2>
      {summary && <p className="text-steel mb-2">{summary}</p>}

      <div className="flex space-x-2 text-darkGray text-xs">
        <p>{normalDateString}</p>
        <p> &#183;</p>
        <p>{author} </p>
      </div>
    </a>
  )
}

export default NewsAndInsightsCard
