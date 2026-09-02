import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type ParagraphSectionProps = {
  content: string
}

const ParagraphSection = ({ content }: ParagraphSectionProps) => {
  return (
    <div className="w-full lg:px-24 xl:px-32 mb-6 font-light">
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default ParagraphSection
