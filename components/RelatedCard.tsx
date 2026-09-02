import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import RightArrow from './SVGs/RIghtArrow'
import LeftArrow from './SVGs/LeftArrow'

export type RelatedCardProps = {
  link: string
  heading: string
  className?: string
  date?: string
  author?: string
  externalUrl?: string
  index?: number
}

const RelatedCard = ({
  link,
  heading,
  className,
  date = 'Jan 27, 2025',
  author = 'Converge Team',
  index,
  externalUrl,
}: RelatedCardProps) => {
  // const classes = twMerge('', className)
  const normalDateString = format(parseISO(date), 'MMMM dd, yyyy')
  const isEven = index !== undefined ? index % 2 === 0 : true

  return (
    <a
      id={externalUrl ? `${index}-related-card` : `${link}-related-card`}
      data-component-vis="true"
      data-component-type="search"
      className={`w-full flex items-center space-x-2 lg:space-x-6 ${isEven ? '' : 'flex-row-reverse space-x-reverse lg:space-x-reverse'}`}
      href={externalUrl ? externalUrl : `/insights/${link}`}
      target={externalUrl ? '_blank' : ''}
    >
      <div className='w-4 sm:w-6 lg:w-12'>
        {isEven ? <LeftArrow /> : <RightArrow />}
      </div>
      <div className='w-32 2sm:w-36 xs:w-40 sm:w-44 lg:w-72'>
        <h2 className=" text-base xs:text-lg lg:text-2xl mt-6 mb-2 line-clamp-2 font-medium">
          {heading}
        </h2>
        <div className="lg:flex lg:space-x-2 text-darkGray text-xs">
          <p>{normalDateString}</p>
          <p className='hidden lg:block'> &#183;</p>
          <p>{author} </p>
        </div>
      </div>
    </a>
  )
}

export default RelatedCard
