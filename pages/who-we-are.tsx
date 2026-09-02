import { getArticlesForBrand } from '@converge/utils'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { useConvergePage } from '../contexts/ConvergePageContext'
import { NavBarStatus } from '../types'
import leadershipTeam from '../data/leadership.json'
import CustomHead from '../components/CustomHead'
import {
  LeadershipModal,
  LeadershipMember,
} from '../components/LeadershipModal'
import ConvergeButtonLink from '../components/ConvergeButtonLink'
import NewsSectionSwitch from '../components/NewsSectionSwitch'
import ContactSection from '../components/ContactSection'

const WhoWeAre = ({ allArticlesResponse }: any) => {
  const { setCurrentPage, setNavStatus } = useConvergePage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<LeadershipMember | null>(
    null
  )

  const articles = allArticlesResponse.articles

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('who-we-are')
  }, [setNavStatus, setCurrentPage])

  const handleMemberClick = (member: LeadershipMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedMember(null), 300) // Clear after animation
  }

  return (
    <>
      <CustomHead page="who-we-are" />
      <div className="w-full bg-white overflow-x-clip">
        <div className="w-full flex justify-center">
          <div className="max-w-3xl lg:max-w-screen-2xl w-full mt-32 flex justify-start lg:justify-end lg:mt-44">
            <h1 className="font-bold text-8xl 3sm:text-9xl xs:text-10xl xs:leading-eight -ml-2 sm:-ml-3 lg:ml-0 lg:-mr-3 lg:text-15xl leading-eight 3sm:leading-eight lg:leading-[.9]">
              Who <br className="lg:hidden" />
              we
              <br />
              <span className="ml-20 lg:-ml-36"> are</span>
            </h1>
          </div>
        </div>

        <div className="w-full flex justify-center px-6 lg:px-20 mt-12 lg:mt-24 ">
          <div className="w-full max-w-xl lg:max-w-6xl">
            <h3 className="text-3xl font-bold text-balance mb-4 lg:text-4xlplus">
              Built different, by design.
            </h3>
            <p className="text-xlplus leading-default text-pretty lg:text-3xl lg:leading-default">
              We&apos;re a team of strategists, creatives, media experts,
              analysts, and operators from different worlds who came together
              around one belief: all marketing should perform, and building it
              should be as rewarding as the results it drives.
            </p>
          </div>
        </div>
        <div className="py-16 px-6 flex flex-col items-center lg:px-20">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16 pt-16 max-w-md md:max-w-6xl">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                onClick={() => handleMemberClick(member as LeadershipMember)}
                className="cursor-pointer"
              >
                <img
                  src={member.image.src}
                  alt={`${member.image.alt}`}
                  className="mb-10 w-full"
                />

                <h4 className="font-normal text-2xlplus lg:text-3xlplus">
                  {member.name}
                </h4>

                <p className="font-bold pt-4 text-xl font-roboto lg:text-2xl text-pretty">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <LeadershipModal
          isOpen={isModalOpen}
          member={selectedMember}
          onClose={handleCloseModal}
        />
        <div className="w-full flex justify-center px-6 lg:px-20 mt-12 lg:mt-32 mb-10 lg:mb-20">
          <div className="w-full max-w-xl lg:max-w-6xl">
            <p className="text-2xl mb-6 text-pretty lg:text-5xl lg:mb-12 lg:leading-[1.1]">
              We believe marketing works better together.
            </p>
            <p className="text-lg text-pretty lg:text-2xlplus lg:leading-tight mb-10">
              While most agencies divide the work—brand teams, performance
              teams, creative teams—we converge it. Every channel, every
              message, every dollar working as one system to drive measurable
              growth.
            </p>
          </div>
        </div>

        <NewsSectionSwitch
          NewsAndInsightsCards={articles}
          className="border-none"
        />
        <ContactSection />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allArticlesResponse: await getArticlesForBrand('Converge Marketing'),
    },
  }
}

export default WhoWeAre
