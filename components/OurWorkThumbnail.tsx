import { twMerge } from 'tailwind-merge'
import { SearchList } from './SearchList'
import WorkMockItems from '../data/WorkMockItems.json'
import { useState } from 'react'
import { Observer } from '@converge/ui'
import ConvergeButtonLink from './ConvergeButtonLink'
import Image from 'next/image'
import Link from 'next/link'

export type OurWorkThumbnailProps = {
  slug: string
  heading: string
  img: string
  subheading: string
  className: string
}

const OurWorkThumbnail = ({
  slug,
  heading,
  img,
  subheading,
  className,
}: OurWorkThumbnailProps) => {
  const classes = twMerge('w-full cursor-pointer flex flex-col', className)
  return (
    <a
      data-component-vis="true"
      data-component-type="our-work-card"
      className={classes}
      id={`${slug}-link`}
      href={`/our-work/${slug}`}
    >
      <div className="relative w-full aspect-[19/10] mb-6 lg:mb-8">
        <Image
          src={img}
          alt={heading}
          fill
          className="object-cover"
        />
      </div>
      <h2
        className="text-xl text-pretty mb-2 lg:text-2xl lg:mb-4  line-clamp-4"
        dangerouslySetInnerHTML={{
          __html: heading,
        }}
      ></h2>
      <p className="lg:text-base lg:text-lg line-clamp-4">{subheading}</p>
    </a>
  )
}

export default OurWorkThumbnail
