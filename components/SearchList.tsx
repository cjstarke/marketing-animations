import { twMerge } from 'tailwind-merge'
import Link from "next/link";
import { Observer } from '@converge/ui';
import { use, useEffect } from 'react';

export type SearchListProps = {
  id?: string
  className?: string
  results: SearchResultProps[]
}

export type SearchResultProps = {
  image: string
  imageLg: string
  imageAlt: string
  title: string
  description: string
  link: string
  date?: string
  hashtags?: string
  className?: string
  imgClassName?: string
  imgLgClassName?: string
  textClassName?: string
  id?: string
}


export const SearchList = ({
  id,
  className,
  results,
}: SearchListProps) => {
  const classes = twMerge(
    'w-full flex justify-center',
    className
  )


  return (
    <div
      id={id}
      data-component-vis="true"
      data-component-type="SearchList"
      className={classes}
    >
      <div className='w-full flex flex-col max-w-screen-lg items-start justify-between lg:flex-row flex-wrap py-12 '>
        {results.map((item: SearchResultProps, index: number) => {
          let remainder: number = index % 3
          let linkClass: string = ""
          let imgClass: string = ""
          let imgLgClass: string = ""
          let textClass: string = ""

          if(remainder == 0){
            linkClass = 'md:max-w-md lg:max-w-full'
            imgClass = 'block lg:hidden'
            imgLgClass = 'lg:block'
          }
          if (remainder !== 0) {
            linkClass = 'md:max-w-md'
            imgClass = 'lg:h-64'
            textClass = 'lg:text-3xl'
          }
          if (remainder === 2) {
            return (
              <Observer className='nofade' key={`item-${index}`}>
                <SearchResult
                  image={item.image}
                  imageLg={item.imageLg}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  date={item.date}
                  hashtags={item.hashtags}
                  className={linkClass}
                  imgClassName={imgClass}
                  imgLgClassName={imgLgClass}
                  textClassName={textClass}
                  id={`search-result-${index + 1}`}
                />
              </Observer>
            )
          }

          return (
            <SearchResult
              key={`item-${index}`}
              image={item.image}
              imageLg={item.imageLg}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              link={item.link}
              date={item.date}
              hashtags={item.hashtags}
              className={linkClass}
              imgClassName={imgClass}
              imgLgClassName={imgLgClass}
              textClassName={textClass}
              id={`search-result-${index + 1}`}
            />
          )
        })}
      </div>

    </div>
  )
}

export const SearchResult = ({id, image, imageLg, title, imageAlt, description, link, date, hashtags, className, imgClassName, imgLgClassName, textClassName }: SearchResultProps) => {
  const hashtagArr = hashtags?.split(',')
  let hashtagdivs = hashtagArr?.map((hashtag: string, index: number) => {
    return (
      <p key={`item-${index}`} className='text-blue-500'>
        &#35;{hashtag}
      </p>
    )

  })
  const classes = twMerge(
    'w-full flex justify-center items-start mb-12  group transition-all ease-in',
    className
  )
  const imgClasses = twMerge(
    'w-full bg-white flex justify-center items-center',
    imgClassName
  )
  const imgLgClasses = twMerge(
    'w-full bg-white flex justify-center items-center hidden',
    imgLgClassName
  )
  const textClasses = twMerge(
    'flex flex-col h-fit transition-all ease-in justify-between px-8 md:8 text-3xl lg:text-5xl lg:px-12',
    textClassName
  )



  return (
    <div className={classes}>
      <a href={link} className='w-full md:my-4 transition-all ease-in md:group-hover:shadow-lg' id={id}>
        <img className={imgClasses}
          src={image}
          alt={imageAlt}
        />
        <img className={imgLgClasses}
          src={imageLg}
          alt={imageAlt}
        />
        <div className={textClasses}>
          <div className=''>
            <div className='flex space-x-2 font-bold text-xs my-4 lg:mt-8 lg:mb-6'>
              <p className='w-max'>{date}</p>
              {hashtagdivs}
            </div>
            <h2 className='my-4 lg:mb-4 lg:mt-12 font-bold'>{title}</h2>
            <p className='text-sm mb-8 lg:mb-16 lg:pt-4'>{description}</p>
          </div>

          <div className='flex items-center transition ease-in  mb-2 lg:mb-20'>
            <div className='border-solid border-t-2 rounded-full border-black bg-blue-600 relative w-12 md:group-hover:w-24 transition-all ease-in my-2 group-hover:border-blue-500'>
              <div className='flex flex-col absolute top-[-4px] right-[-2px]'>
                <div className='border-solid border-t-2 rounded-full border-black w-2 rotate-45 mb-[3px] group-hover:border-blue-500'></div>
                <div className='border-solid border-t-2 rounded-full border-black w-2 rotate-[135deg] group-hover:border-blue-500'></div>
              </div>
            </div>
            <p className='ml-8 text-base font-bold group-hover:text-blue-500'>View Case Study</p>
          </div>
        </div>
      </a>

    </div>
  )
}
