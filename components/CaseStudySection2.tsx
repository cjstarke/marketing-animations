import Image from 'next/image'

export type CaseStudySection2Props = {
  heading: string
  text: string
  image: string
  imageAlt: string
}

const CaseStudySection2 = ({
  text,
  heading,
  image,
  imageAlt,
}: CaseStudySection2Props) => {
  return (
    <div
      id="case-study-section-2"
      data-component-vis="true"
      data-component-type="case-study-section"
      className="lg:grid grid-cols-2 py-6 lg:pl-20 lg:gap-10 items-start"
    >
      <div className="mt-10 ">
        <h2
          className="text-xl font-bold mb-4 lg:text-2xl "
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        ></h2>
        <div
        className='bullets'
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>
      <Image
        src={image}
        alt={imageAlt}
        width={10}
        height={10}
        className="w-full mt-8 lg:mt-0"
      />
    </div>
  )
}

export default CaseStudySection2
