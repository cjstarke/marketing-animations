import { getArticlesForBrand } from '@converge/utils'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import CustomHead from '../components/CustomHead'
import MessageSection from '../components/MessageSection'
import { useConvergePage } from '../contexts/ConvergePageContext'
import { NavBarStatus } from '../types'
import NumbersAnimated from '../components/NumbersAnimated'
import NewsAndInsightsSectionAnimated from '../components/NewsAndInsightsSectionAnimated'
import ContactSectionAnimated from '../components/ContactSectionAnimated'
import SubHero from '../components/SubHero'
import ThreeDBackground from '../components/ThreeDBackground'
import ThreeDOverlay from '../components/ThreeDOverlay'
import ExploreSectionAnimated from '../components/ExploreSectionAnimated'
import PieChartSection from '../components/PieChartSection'
import CoveSection from '../components/CoveSection'
import { NeedsA } from '../components/SVGs/NeedsA'

const Home = ({ allArticlesResponse }: any) => {
  const { setCurrentPage, setNavStatus } = useConvergePage()
  const [showCanvasMask, setShowCanvasMask] = useState(true)
  const [showBottomMask, setShowBottomMask] = useState(false)

  const articles = allArticlesResponse.articles

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('home')
  }, [setNavStatus, setCurrentPage])

  // Scroll listener to control canvas mask visibility (top and bottom)
  useEffect(() => {
    const handleScroll = () => {
      // Top mask: Hide when scrolled down more than 50px, show when at top
      setShowCanvasMask(window.scrollY < 50)

      // Bottom mask: Show when near the bottom of the page
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const isNearBottom = scrollPosition >= pageHeight - 100
      setShowBottomMask(isNearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <CustomHead page="index" />
      <div>
        {/* Fixed overlay mask to cover 3D canvas when at top of page */}
        <div
          className="fixed inset-0 bg-pale pointer-events-none transition-opacity duration-300"
          style={{
            zIndex: 5,
            opacity: showCanvasMask ? 1 : 0,
          }}
        />
        {/* Fixed overlay mask to cover 3D canvas when at bottom of page */}
        <div
          className="fixed inset-0 bg-pale pointer-events-none transition-opacity duration-300"
          style={{
            zIndex: 5,
            opacity: showBottomMask ? 1 : 0,
          }}
        />
        <div className="relative bg-pale" style={{ zIndex: 20 }}>
          {/* <HeroAnimated /> */}
          <SubHero />
        </div>
        {/* Mobile version - fewer particles, no hover */}
        <div className="block lg:hidden overflow-x-clip">
          <ThreeDBackground
            particleSize={60}
            enableHover={false}
            geometrySegments={24}
          >
            <ThreeDOverlay />
          </ThreeDBackground>
        </div>
        {/* Desktop version - more particles, with hover */}
        <div className="hidden lg:block overflow-x-clip">

          <ThreeDBackground
            particleSize={60}
            enableHover={true}
            geometrySegments={16}
          >
            <ThreeDOverlay />
          </ThreeDBackground>
        </div>
        <div className="relative bg-pale" style={{ zIndex: 20 }}>
          <ExploreSectionAnimated />
          <NumbersAnimated />
          <MessageSection />
          <PieChartSection />
          <CoveSection />
          <NewsAndInsightsSectionAnimated NewsAndInsightsCards={articles} />
          <ContactSectionAnimated />
        </div>
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

export default Home
