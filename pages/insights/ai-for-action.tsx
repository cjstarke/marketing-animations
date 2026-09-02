import { getArticlesForBrand } from '@converge/utils'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { generateMeta } from '../../api/functions'
import ScrollManager from '../../components/ScrollManager'
import { useConvergePage } from '../../contexts/ConvergePageContext'
import { FormSubmissionStatus, NavBarStatus } from '../../types'
import PdfForm from '../../components/PdfForm'
import { SubmitModal } from '../../components/SubmitModal'

const AiForAction = () => {
  const { setCurrentPage } = useConvergePage()

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const [formStatus, setFormStatus] = useState<FormSubmissionStatus>(
    FormSubmissionStatus.Initial
  )


  useEffect(() => {
    setCurrentPage('ai-for-action')
  }, [setCurrentPage])

  const handleSetFormStatus = (status: FormSubmissionStatus) => {
    setFormStatus(status)
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <>
      {generateMeta('ai-for-action')}
      <ScrollManager
        sections={[
          { id: 'ai-hero', navStatus: NavBarStatus.dark },
          { id: 'ai-content', navStatus: NavBarStatus.white }
        ]}
      />
      <div id="ai-hero">
        <div className="bg-motorcycle px-6 lg:px-20 pt-32 pb-20  bg-cover bg-center relative flex justify-center lg:pt-44 lg:pb-32 2xl:pb-36 2xl:pt-48">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
          <div className="w-full max-w-md lg:max-w-screen-xl">
            <h1 className="relative text-white text-3xl  font-bold font-inter z-30 max-w-80 lg:text-5xlplus lg:max-w-148 2xl:text-6xl 2xl:max-w-164 ">
              AI for Action: Scaling Performance Through Innovation and
              Intelligence
          </h1>
        </div>
        </div>
      </div>
      <div id="ai-content">
        <div className="w-full px-6 lg:px-10 pt-20 pb-12 flex justify-center bg-offWhite font-inter ">
          <div className="w-full max-w-md lg:max-w-screen-xl">
            <h4 className="text-lg font-medium leading-normal mb-4 lg:text-xlplus max-w-208 text-pretty">
              Performance now extends beyond last-click conversions to every
              consumer touchpoint—and AI is the catalyst making this
              transformation possible.
            </h4>
            <p className="font-roboto font-light text-sm max-w-208 lg:text-base lg:leading-normal text-pretty">
              Converge reveals how we&apos;re leveraging cutting-edge AI to
              democratize data access, scale creative output, and unlock the
              &quot;why&quot; behind campaign performance through advanced reasoning
              models. Discover our proven framework for AI implementation, real
              client case studies, and insights on autonomous marketing agents.{' '}
              <br />
              <br />
              This whitepaper provides the strategic roadmap for driving higher
              performance in the age of intelligent marketing.
            </p>
          </div>
        </div>
        <PdfForm
          formStatus={formStatus}
          setFormStatus={handleSetFormStatus}
          toggleModal={toggleModal}
        />

        <SubmitModal
          id="ai-submit-modal"
          formStatus={formStatus}
          isOpen={modalVisible}
          toggleModal={toggleModal}
        />
      </div>
    </>
  )
}

export default AiForAction
