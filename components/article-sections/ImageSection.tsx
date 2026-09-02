import React from 'react'
import Image from 'next/image'

type ImageSectionProps = {
  source?: string
  alt?: string
}

const ImageSection = ({ source, alt }: ImageSectionProps) => {
  if (!source) return null

  return (
    <div className="mb-8">
      <Image
        src={source}
        alt={alt || ''}
        width={800}
        height={600}
        className="w-full h-auto rounded"
      />
    </div>
  )
}

export default ImageSection
