import { getArticlesForBrand } from '@converge/utils'
import { useEffect } from 'react'
import OurWorkThumbnail from '../../components/OurWorkThumbnail'
import { useConvergePage } from '../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../types'
import caseStudies from '../../data/caseStudies.json'
import CustomHead from '../../components/CustomHead'
import LogosAnimated from '../../components/LogosAnimated'
import ContactSectionAnimated from '../../components/ContactSectionAnimated'
import SmallInsightsAnimated from '../../components/SmallInsightsAnimated'
import ContactSection from '../../components/ContactSection'

// Dummy/placeholder entry for the LeafFilter case study.
// This links to the static page at /our-work/leaf and is
// always shown first, ahead of the JSON-driven case studies.
const leafCaseStudy = {
  slug: 'leaf',
  heading:
    'LeafFilter: <b>Data Driven Geo-Targeting Drives Sales & Efficiency</b>',
  thumbnail: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/leaf_3efa7fd073.webp',
  section1Heading:
    'Print advertising delivers powerful results when targeted to your ideal customers with precision-driven campaign strategies.',
}

const OurWorkPage = () => {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  const allCaseStudies = [leafCaseStudy, ...caseStudies]

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('our-work')
  }, [setNavStatus, setCurrentPage])

  return (
    <>
      <CustomHead page="our-work" />
      <div className="w-full overflow-x-clip">
        <div className="w-full flex justify-center">
          <div className="max-w-3xl lg:max-w-none w-full mt-32 lg:mt-44">
            <h1 className="font-bold tracking-tight text-8xl 3sm:text-9xl xs:text-10xl leading-eight xs:leading-eight -ml-3  lg:-ml-4 lg:text-15xl 3sm:leading-eight">
              Our
              <br className="lg:hidden" />
              <span className="ml-10 lg:ml-0"> work</span>
            </h1>
          </div>
        </div>
        <LogosAnimated />
        <div className="w-full flex justify-center px-6 lg:px-10 pb-20  lg:pb-28 text-pretty lg:-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 max-w-screen-xl w-full">
            {allCaseStudies.map((caseStudy: any, i: number) => {
              const isLeftColumn = i % 2 === 0
              return (
                <div key={caseStudy.slug} className="relative">
                  <OurWorkThumbnail
                    slug={caseStudy.slug}
                    heading={
                      caseStudy.linkHeading
                        ? caseStudy.linkHeading
                        : caseStudy.heading
                    }
                    img={caseStudy.thumbnail}
                    className={
                      isLeftColumn ? 'lg:mb-10 lg:pr-10' : 'lg:mb-10 lg:pl-10'
                    }
                    subheading={caseStudy.section1Heading}
                  />
                  {isLeftColumn && (
                    <div className="hidden lg:block absolute right-0 bottom-1/3 h-1/2 w-px bg-shark" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <SmallInsightsAnimated />
        <ContactSection />
      </div>
    </>
  )
}

export default OurWorkPage
