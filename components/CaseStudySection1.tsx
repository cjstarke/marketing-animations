export type CaseStudySection1Props = {
  heading: string
  text: string
}

const CaseStudySection1 = ({ text, heading }: CaseStudySection1Props) => {
  return (
    <div
      id="case-study-section-1"
      data-component-vis="true"
      data-component-type="case-study-section"
      className="border-y border-black py-8 w-full lg:pl-20"
    >
      <div className="w-3/4">
        <h2
          className="font-bold text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        ></h2>
        {text && (
          <p
            className="mt-2"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          ></p>
        )}
      </div>
    </div>
  )
}

export default CaseStudySection1
