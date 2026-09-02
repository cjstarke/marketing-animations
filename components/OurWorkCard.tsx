import { twMerge } from 'tailwind-merge'
import { SearchList } from './SearchList'
import WorkMockItems from '../data/WorkMockItems.json'
import { useState } from 'react'
import { Observer } from '@converge/ui'
import ConvergeButtonLink from './ConvergeButtonLink'
import Image from 'next/image'

export type OurWorkCardProps = {
  slug: string
  heading: string
  img: string
  subheading: string
  className: string
}

const OurWorkCard = ({
  slug,
  heading,
  img,
  subheading,
  className,
}: OurWorkCardProps) => {
  const classes = twMerge(
    'w-full flex flex-col border-t border-shark  items-center py-8   lg:space-x-12',
    className
  )
  return (
    <div
      id={`${slug}-card`}
      data-component-vis="true"
      data-component-type="search"
      className={classes}
    >
      <Image
        src={img}
        alt={heading}
        height={10}
        width={10}
        className="w-full mb-6 lg:w-136 lg:mb-0 xl:w-172"
      />

      <div className="flex flex-col lg:max-w-116">
        <h2
          className="text-3xl text-pretty mb-4 lg:text-3xl lg:mb-6 xl:text-4xl"
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        ></h2>

        <p className="mb-8 lg:text-base xl:text-lg">{subheading}</p>

        <ConvergeButtonLink
          className=""
          id={`${slug}-link`}
          href={`/our-work/${slug}`}
          text="Learn more"
        />
      </div>
    </div>
  )
}

export default OurWorkCard
