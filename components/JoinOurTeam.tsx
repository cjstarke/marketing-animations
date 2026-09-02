import ConvergeButtonLink from './ConvergeButtonLink'
import { RadialPink } from './SVGs'

const JoinOurTeam = ({
  children,
  ctaLink = '/contact',
  buttonText = 'View open positions',
  id = 'join-our-team-section',
}: any) => {
  return (
    <div
      className="w-full flex justify-center px-6 lg:px-10 py-20 lg:py-28 text-white bg-shark"
      id={id}
      data-component-vis="true"
      data-component-type="section"
    >
      <div className=" flex flex-col items-center">
        <h2 className="w-full text-center font-bold text-4xl text-pretty mb-6 lg:mb-12 lg:text-6xl ">
          {children || (
            <>
              <span className="font-light text-white">Join our team</span>
            </>
          )}
        </h2>

        <ConvergeButtonLink
          id={`${id}-cta`}
          href={ctaLink}
          text={buttonText}
          className="bg-transparent text-white border-white"
        />
      </div>
    </div>
  )
}

export default JoinOurTeam
