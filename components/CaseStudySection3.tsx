export type ActionNumber = {
  number: string
  text: string
}
export type CaseStudySection3Props = {
  heading: string
  text: string
  numbers: ActionNumber[]
}

const CaseStudySection3 = ({
  text,
  heading,
  numbers,
}: CaseStudySection3Props) => {
  return (
    <div
      id="case-study-section-3"
      data-component-vis="true"
      data-component-type="case-study-section"
      className="lg:pl-20 mt-10 lg:w-3/4"
    >
      <h2
        className="text-2xl font-bold mb-2 lg:text-3xl lg:mb-4"
        dangerouslySetInnerHTML={{
          __html: heading,
        }}
      ></h2>
      <p
        className="mb-10"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></p>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3  gap-4">
        {numbers.map((number: ActionNumber, i: number) => {
          return (
            <div key={`number-${i}`} className="max-w-60">
              <div className="font-bold text-5xl uppercase lg:text-6xl  text-darkPink mb-3">
                {number.number}
              </div>
              <div className="lg:text-xl text-dusty ">
                {number.text}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CaseStudySection3
