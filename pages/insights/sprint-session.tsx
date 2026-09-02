import { useEffect, useState } from 'react'
import { generateMeta } from '../../api/functions'
import ScrollManager from '../../components/ScrollManager'
import { useConvergePage } from '../../contexts/ConvergePageContext'
import { FormSubmissionStatus, NavBarStatus } from '../../types'

const SprintSession = () => {
  const { setCurrentPage } = useConvergePage()

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const [formStatus, setFormStatus] = useState<FormSubmissionStatus>(
    FormSubmissionStatus.Initial
  )

  useEffect(() => {
    setCurrentPage('sprint-session')
  }, [setCurrentPage])

  const handleSetFormStatus = (status: FormSubmissionStatus) => {
    setFormStatus(status)
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <>
      {generateMeta('sprint-session')}
      <ScrollManager
        sections={[
          { id: 'sprint-session-hero', navStatus: NavBarStatus.dark },
          { id: 'sprint-session-content', navStatus: NavBarStatus.white }
        ]}
      />
      <div id="sprint-session-hero" className="w-full flex justify-center bg-black">

          <div className="bg-q41 w-full max-w-8xl px-6 px-20 pt-100 sm:pt-60 pb-5 sm:pb-40 bg-cover bg-top-left relative flex justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b sm:bg-gradient-to-r from-transparent to-black "></div>
            <div className="w-full max-w-8xl">
              <h1 className="relative text-white text-center sm:text-right text-4xl font-bold font-inter z-30 sm:text-5xlplus 2xl:text-6xl ">
                Win Q4.
              </h1>
              <h1 className="relative text-white text-center sm:text-right text-4xl font-bold font-inter z-30 sm:text-5xlplus 2xl:text-6xl  ">
                Win the year.
              </h1>
            </div>
          </div>
        </div>
      <div id="sprint-session-content">
        <div className="w-full px-6 lg:px-10 pt-5 pb-2 flex justify-center bg-black font-inter ">
          <div className="w-full max-w-3xl ">
            <h2 className="text-white text-2xl lg:text-4xl leading-none mb-4 max-w-208 text-pretty text-center sm:text-left">
              Dial in your performance and finish the year strong.
            </h2>
          </div>
        </div>
        <div className="w-full px-6 lg:px-6 flex justify-center bg-gray-200 font-inter ">
          <div className="w-full pb-5 pt-5 max-w-3xl grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="text-center sm:text-start">
              <h4 className="text-lg font-semibold leading-normal lg:text-xlplus max-w-208 text-pretty">
                Book your 30-minute
              </h4>
              <h4 className="text-darkPink text-lg font-semibold leading-normal lg:text-xlplus max-w-208 text-pretty">
                Q4 Sprint Session
              </h4>
            </div>
            <div className="justify-self-center sm:justify-self-end">
              <a
                className="inline-block border rounded-full border-black px-20 py-3 text-pretty font-semibold "
                target="_blank"
                href="https://action.convergemarketing.com/meetings/sessions/q4-sprint-session"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-6 lg:px-10 flex justify-center bg-offWhite font-inter ">
          <div className="w-full max-w-3xl py-5 sm:pr-10 font-roboto font-light max-w-208 text-base leading-normal text-pretty">
            <p className="">
              At Converge, we&apos;ve spent decades helping brands turn complexity into clarity — blending media, data, and creative to drive measurable growth. Our Q4 Sprint Sessions distill that experience into a fast, focused 30-minute workshop built to help you finish the year strong. 
            </p>
          </div>
        </div>
        <div className="w-full px-6 py-5  lg:px-10 flex justify-center bg-gray-200 font-inter ">
          <div className="w-full max-w-3xl ">
            <h4 className="font-medium leading-normal mb-4 text-xlplus max-w-208 text-pretty">
              Pick your path, customize your sprint
            </h4>
            <p className="font-roboto font-light max-w-208 text-base leading-normal text-pretty">
              What&apos;s your biggest performance blocker? We&apos;ll tailor
              your Q4 Sprint Session to whatever is keeping you up at night.
            </p>
          </div>
        </div>
        <div className="w-full px-6 lg:px-6 flex justify-center font-inter py-10">
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 items-center">

            <div className="py-5 pt-10 sm:pt-5 text-center">
              <img className="inline" alt="Feed the Funnel" src="https://46128433.fs1.hubspotusercontent-na1.net/hub/46128433/hubfs/Lead-funnel.png?upscale=true&amp;width=240&amp;upscale=true&amp;name=Lead-funnel.png" width="140"></img>
            </div>
            <div className="py-5">
              <h4 className="text-darkPink text-lg font-semibold">
                Audience Path:
              </h4>
              <h3 className="text-xl">
                Find More In-Market Consumers
              </h3>
              <p>
                Identify where your next wave of conversions is hiding. We&apos;ll uncover overlooked segments, tighten targeting, and map quick-win opportunities that drive revenue before the year closes.
              </p>
            </div>

            <div className="py-5 text-center">
              <img className="inline" alt="Creative Impression" src="https://46128433.fs1.hubspotusercontent-na1.net/hub/46128433/hubfs/Group-6.png?upscale=true&width=250&upscale=true&name=Group-6.png" width="140"></img>
            </div>
            <div className="py-5">
              <h4 className="text-darkPink text-lg font-semibold">
                Creative Path:
              </h4>
              <h3 className="text-xl">
                Make Your Ads Work Harder
              </h3>
              <p>
                Get a fresh perspective on what&apos;s resonating — and what&apos;s not. We&apos;ll review your current creative, test new angles, and help you stand out in a crowded Q4 feed with messages that actually convert.
              </p>
            </div>

            <div className="py-5 text-center">
              <img className="inline" alt="Measure Success" src="https://46128433.fs1.hubspotusercontent-na1.net/hub/46128433/hubfs/Group-5.png?upscale=true&width=220&upscale=true&name=Group-5.png" width="140"></img>
            </div>
            <div className="py-5">
              <h4 className="text-darkPink text-lg font-semibold">
                Measurement Path:
              </h4>
              <h3 className="text-xl">
                Prove (and Improve) Performance
              </h3>
              <p>
                Cut through the noise and focus on what matters most. We&apos;ll help you zero in on the KPIs that drive real business impact — and show you where better tracking and attribution can pay off fast.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-6 py-5  lg:px-10 flex justify-center text-white bg-black font-inter ">
          <div className="w-full max-w-3xl ">
            <h4 className="font-medium leading-normal mb-4 text-xlplus max-w-208 text-pretty">
              About Converge
            </h4>
            <p className="font-roboto font-light max-w-208 text-base leading-normal text-pretty">
              <strong>Converge</strong> was founded on the belief that brand and performance are stronger together. For nearly 20 years, we&apos;ve helped ambitious marketers connect data, media, and creative into a single growth engine — one built to deliver not just clicks or impressions, but measurable business outcomes.
            </p>
          </div>
        </div>
        <div className="w-full px-6 lg:px-6 flex justify-center bg-black text-white font-inter ">
          <div className="w-full pb-5 pt-5 max-w-3xl grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div className="text-center sm:text-start">
              <h4 className="text-lg font-semibold leading-normal lg:text-xlplus max-w-208 text-pretty">
                Book your 30-minute
              </h4>
              <h4 className="text-darkPink text-lg font-semibold leading-normal lg:text-xlplus max-w-208 text-pretty">
                Q4 Sprint Session
              </h4>
            </div>
            <div className="justify-self-center sm:justify-self-end">
              <a
                className="inline-block border rounded-full border-white px-20 py-3 text-pretty font-semibold "
                target="_blank"
                href="https://action.convergemarketing.com/meetings/sessions/q4-sprint-session"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SprintSession
