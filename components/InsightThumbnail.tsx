import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export type InsightThumbnailProps = {
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

const InsightThumbnail = ({
  link,
  heading,
  img,
  className,
  categories,
  date = 'Jan 27, 2025',
  author = 'Converge Team',
  summary,
  index,
  externalUrl,
}: InsightThumbnailProps) => {
  const classes = twMerge('w-full cursor-pointer flex flex-col', className)
  const normalDateString = format(parseISO(date), 'MMMM dd, yyyy')

  return (
    <a
      id={
        externalUrl
          ? `${index}-insight-thumbnail`
          : `${link}-insight-thumbnail`
      }
      data-component-vis="true"
      data-component-type="insight-thumbnail"
      className={classes}
      href={externalUrl ? externalUrl : `/insights/${link}`}
      target={externalUrl ? '_blank' : undefined}
    >
      <div className="relative w-full aspect-[3/2] mb-6 lg:mb-8">
        <div className="absolute bottom-2 left-2 z-10 bg-white/60 px-4 py-1 text-xl text-shark">
          {categories?.[0]?.name || ''}
        </div>
        <Image src={img} alt={heading} fill className="object-cover" />
      </div>
      <h2 className="font-bold text-xl text-pretty mb-2 lg:text-2xl lg:mb-4 line-clamp-2">
        {heading}
      </h2>
      {summary && <p className="text-steel mb-2 line-clamp-4">{summary}</p>}
      <div className="flex space-x-2 text-darkGray text-xs">
        <p>{normalDateString}</p>
        <p> &#183;</p>
        <p>{author}</p>
      </div>
    </a>
  )
}

export default InsightThumbnail
