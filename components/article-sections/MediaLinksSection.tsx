import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import brandData from '../../data/brand.json'
import RightArrow from '../SVGs/RIghtArrow'

type MediaLinksSectionProps = {
  content: string
}

const MediaLinksSection = ({ content }: MediaLinksSectionProps) => {
  return (
    <div className="mb-0 w-full">
      <div className="w-full border-t border-dusty"></div>
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between my-6 lg:space-x-10">
        <div className="text-xl sm:text-2xl text-pretty lg:flex-1">
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
            {content}
          </ReactMarkdown>
        </div>
        <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-8 lg:flex-1 xl:space-x-16">
          <p className="text-xl mb-2 sm:mb-0 sm:text-2xl whitespace-nowrap">Share on</p>
          <div className='flex space-x-3 flex-wrap sm:flex-nowrap lg:justify-between lg:space-x-4 lg:w-full'>
            {brandData.socials.map((social, i) => (
              <a
                key={`social-${i}`}
                href={social.href}
                id={`${social.text}-insight-link`}
                target="_blank"
                className="flex items-center"
              >
                <p className='sm:text-lg'>{social.text}</p>
                <div className="w-4 md:w-5 ml-2">
                  <RightArrow />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-t border-dusty mb-12"></div>
    </div>
  )
}

export default MediaLinksSection
