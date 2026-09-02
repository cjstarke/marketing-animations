import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type CalloutSectionProps = {
  heading: string
  subheading: string
}

const CalloutSection = ({ heading, subheading }: CalloutSectionProps) => {
  return (
    <div className="lg:flex w-full lg:space-x-4 mb-8 mt-4">
      <h2 className='lg:w-2/5 font-bold text-2xl lg:text-pretty mb-4 lg:text-3xlplus xl:text-4xlplus'>{heading}</h2>
      <h3 className='lg:w-3/5 text-lg lg:text-2xl xl:text-2xlplus'>{subheading}</h3>
    </div>
  )
}

export default CalloutSection
