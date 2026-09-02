import ConvergeButtonLink from './ConvergeButtonLink'
import { RadialPink } from './SVGs'

const SeeOurWorkSection = ({
  children,
  ctaLink = '/our-work',
  buttonText = 'View all case studies',
  buttonId = 'cta-button',
}: any) => {
  return (
    <div
      className="w-full flex justify-center px-6 lg:px-10 py-20 lg:py-28 text-white bg-magenta relative overflow-clip"
      id="see-our-work-section"
      data-component-vis="true"
      data-component-type="section"
    >
      <div className="w-256 lg:w-[90rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  object-cover opacity-20">
        <RadialPink />
      </div>

      <div className="z-30 flex flex-col items-center">
        <h2 className="w-full text-center font-bold text-4xl text-pretty mb-6 lg:mb-12 lg:text-6xl z-30">
          {children || (
            <>
              <span className="font-light text-skyBlue">Want to see</span> our
              work?
            </>
          )}
        </h2>

        <ConvergeButtonLink id={buttonId} href={ctaLink} text={buttonText} pinkArrow={false} />
      </div>
    </div>
  )
}

export default SeeOurWorkSection
