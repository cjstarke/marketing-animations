import { useEffect, useState } from 'react'
import NumbersAnimated from '../components/NumbersAnimated'
import SubHero from '../components/SubHero'
import ThreeDBackground from '../components/ThreeDBackground'
import ThreeDOverlay from '../components/ThreeDOverlay'
import ExploreSectionAnimated from '../components/ExploreSectionAnimated'
import CoveSection from '../components/CoveSection'
import WhatWeDoDiagram from '../components/WhatWeDoDiagram'

const Home = () => {
  const [showCanvasMask, setShowCanvasMask] = useState(true)
  const [showBottomMask, setShowBottomMask] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setShowCanvasMask(window.scrollY < 50)

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
      
      <div>
        <div
          className={`fixed inset-0 z-[5] bg-pale pointer-events-none transition-opacity duration-300 ${
            showCanvasMask ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`fixed inset-0 z-[5] bg-pale pointer-events-none transition-opacity duration-300 ${
            showBottomMask ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="relative z-20 bg-pale">
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
        <div className="relative z-20 bg-pale">
          <ExploreSectionAnimated />
          <NumbersAnimated />
          <CoveSection />
          <WhatWeDoDiagram />
        </div>
      </div>
    </>
  )
}


export default Home
