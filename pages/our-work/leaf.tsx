import { getArticlesForBrand } from '@converge/utils'
import { Fragment, useEffect } from 'react'
import OurWorkThumbnail from '../../components/OurWorkThumbnail'
import { useConvergePage } from '../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../types'
import caseStudies from '../../data/caseStudies.json'
import CustomHead from '../../components/CustomHead'
import LogosAnimated from '../../components/LogosAnimated'
import ContactSectionAnimated from '../../components/ContactSectionAnimated'
import SmallInsightsAnimated from '../../components/SmallInsightsAnimated'
import ContactSection from '../../components/ContactSection'

const LeafFilterCaseStudy = () => {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('our-work')
  }, [setNavStatus, setCurrentPage])

  return (
    <>
      <CustomHead page="case-study" />
      <div className="pt-16 lg:pt-[76px] bg-white">
          <img
            src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/leafheader_63b6514ae6.webp"
            alt="LeafFilter Search"
            className="w-full xl:hidden"
          />
          <img
            src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/leafwideheader_426a7169f4.webp"
            alt="LeafFilter Search"
            className="hidden xl:w-full xl:block"
          />


        <div className="w-full flex  flex-col justify-center items-center">
          <div className="w-full max-w-2xl lg:max-w-screen-xl px-6 lg:px-16 xl:px-20 pt-12">
            <h1 className="font-bold text-3xl 2sm:text-4xl lg:text-balance lg:leading-tight xl:leading-tight lg:text-5xl lgplus:text-5xlplus xl:text-6xl mb-10 text-balance md:text-pretty">
              Building a $950M+ Growth Engine <br className="hidden lg:block" />
              <span className="font-light">for Leaf Home</span>{' '}
            </h1>
            <div className="lg:flex text-lg lg:flex-row-reverse lg:text-xl">
              <ul className="text-fiveSeven mb-6 lg:mb-0 lg:ml-12 shrink-0 xl:ml-20">
                <li>Predictive Modeling</li>
                <li>Geospatial Optimization</li>
                <li>Closed-Loop Attribution</li>
                <li>Demographic Overlay</li>
                <li>Behavioral Targeting</li>
                <li>Geo Ranking</li>
              </ul>
              <div className="font-medium space-y-6">
                <p>
                  Leaf Home needed a performance system built to scale demand,
                  adapt to market pressure, and turn every signal — media,
                  creative, call-center data, partner quality, geography, sales
                  outcomes — into smarter growth.
                </p>
                <p>That is what Converge built.</p>
                <p>
                  Since 2020, Converge has generated more than $869M in net
                  sales for LeafFilter and $87M for Erie Home, while driving 1.5
                  million high-value actions across a seven-year growth
                  partnership.
                </p>
                <p>
                  Not through one channel.Not through one campaign.Through one
                  connected performance engine.
                </p>
                <h6 className="text-xl font-bold">
                  {' '}
                  From channel management to growth orchestration
                </h6>
                <p>
                  Leaf’s market is never static: COVID-era demand spikes,
                  regional weather disruption, up and down print responsiveness,
                  inflation pressures… Converge helped Leaf move with those
                  changes — managing print and digital on a performance basis,
                  building forecasting and insight models, supporting technical
                  integrations, expanding new lead sources, and continuously
                  reallocating investment toward what drove calls, appointments,
                  sales, and net contribution. The mandate was clear: keep
                  finding growth, even when the easy growth got harder.
                </p>
                <h3 className="pt-12 font-light text-4xlplus lg:text-5xl  pb-12 lg:pb-16">
                  The engine we built
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl lg:max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="w-full h-full">
                <video
                  src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Section_1_whitebg_Work_sample_video_looping_1x1_54cf9a0ee9.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-leafGreen text-white px-6 py-10 lg:p-10 xl:p-16 xl:pt-20">
                <h4 className="text-3xl font-light mb-6 lgplus:text-4xl xl:mb-8">
                  Partner orchestration at scale
                </h4>
                <p className="text-lg lgplus:text-xl">
                  Converge activated{' '}
                  <span className="font-bold"> a network of 40+ partners </span>{' '}
                  across email, non-branded search, paid social, native,
                  display, programmatic, comparison sites, CTV, print, and
                  pay-per-call.
                  <br />
                  <br />
                  But access was only the start. We built the landing page
                  flows, call-center experiences, feedback loops, and
                  optimization infrastructure to measure quality beyond the lead
                  — using disposition and sales data to see what converted, what
                  wasted spend, and where to push next.
                  <br />
                  <br />
                  The result:{' '}
                  <span className="font-bold">
                    exclusive, high-quality lead volume at scale, with the
                    discipline to keep improving it.
                  </span>
                </p>
              </div>
              <div className="w-full h-full lg:col-start-2 lg:row-start-2">
                <video
                  src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/section2leaf_5538de3018.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-leafGreen text-white px-6 py-10 lg:p-10 xl:p-16 xl:pt-20 lg:col-start-1 lg:row-start-2">
                <h4 className="text-3xl font-light mb-6 lgplus:text-4xl xl:mb-8">
                  Creative built to convert
                </h4>

                <p className="text-lg lgplus:text-xl">
                  For LeafFilter, Converge tested new landing page and creative
                  experiences designed to reduce friction and increase form
                  completion.
                  <br />
                  <br />
                  One test delivered a{' '}
                  <span className="font-bold"> 309% lift </span> in form
                  conversions versus the control — a{' '}
                  <span className="font-bold"> 4.1X improvement.</span>
                  <br />
                  <br />
                  That is performance creative doing its job: not looking
                  better, <span className="font-bold">performing better. </span>
                  <br />
                  <br />
                </p>
              </div>
              <div className="w-full h-full">
                <video
                  src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Section_3_Leaf_Filter_animated_map_1x1_512a78f708.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-leafGreen text-white px-6 py-10 lg:p-10 xl:p-16 xl:pt-20">
                <h4 className="text-3xl font-light mb-6 lgplus:text-4xl xl:mb-8">
                  Smarter targeting through better data
                </h4>
                <p className="text-lg lgplus:text-xl mb-10 lg:mb-16">
                  Converge connected Leaf&apos;s first-party performance data —
                  circulation, calls, and sales — with third-party demographic
                  and behavioral data to build a{' '}
                  <span className="font-bold">predictive zip-code model.</span>
                  <br />
                  <br />
                  The model gave Leaf a living demand map: where to spend, where
                  to pull back, and which geographies were most likely to
                  convert efficiently.
                </p>
                <div className="w-full flex flex-wrap lg:justify-between">
                  <div className="mr-6 mb-6 lg:mr-0 lg:mb-0">
                    <div className="text-leafLight font-bold text-6xl lg:text-4xl lgplus:text-5xl mb-1">
                      +12%
                    </div>
                    <p className="text-sm lg:text-xs">
                      qualified inbound calls
                    </p>
                  </div>
                  <div className="mr-6 mb-6 lg:mr-0 lg:mb-0">
                    <div className="text-leafLight font-bold text-6xl lg:text-4xl lgplus:text-5xl mb-1">
                      +20%
                    </div>
                    <p className="text-sm lg:text-xs">sales dollars</p>
                  </div>
                  <div className="mr-6 mb-6 lg:mr-0 lg:mb-0">
                    <div className="text-leafLight font-bold text-6xl lg:text-4xl lgplus:text-5xl mb-1">
                      +17%
                    </div>
                    <p className="text-sm lg:text-xs">marketing efficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center  text-white mt-3 ">
            <div className="w-full lg:max-w-screen-2xl flex justify-center bg-leafGreen py-10 lg:py-20">
              <div className="max-w-screen-xl px-6 lg:px-16 xl:px-20 w-full">
                <div className="max-w-screen-lg">
                  <p className="uppercase text-leafLight font-bold mb-4">
                    Same discipline. Better signal. Stronger return.
                  </p>
                  <h4 className="text-3xl font-light mb-6 lgplus:text-4xl xl:mb-8">
                    Digital expansion that changed the growth curve
                  </h4>
                  <p className="text-lg lgplus:text-xl mb-10">
                    Leaf wanted to scale beyond traditional affiliate marketing.
                    Converge expanded the digital acquisition engine through
                    white-label brands, non-brand search, paid social, email,
                    display, native, and partner-led lead generation — all
                    routed through Converge-built flows and optimized through
                    performance feedback.
                    <br />
                    <br />
                    In two years, digital lead generation grew from{' '}
                    <span className="font-bold"> $10M in sales </span>
                    driven by traditional affiliate to{' '}
                    <span className="font-bold"> $165M in sales </span> through
                    an omnichannel performance strategy.
                  </p>
                  <div className="w-full flex flex-wrap lg:space-x-32">
                    <div className="mr-6 mb-6 lg:mr-0 lg:mb-0">
                      <div className="text-leafLight font-bold text-6xl mb-2">
                        15X
                      </div>
                      <p className="text-sm">increase in sales</p>
                    </div>
                    <div className="mr-6 mb-6 lg:mr-0 lg:mb-0">
                      <div className="text-leafLight font-bold text-6xl mb-2">
                        200K+
                      </div>
                      <p className="text-sm">additional leads</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center py-10 lg:py-20">
            <div className="w-full max-w-2xl lg:max-w-screen-xl px-6 lg:px-16 xl:px-20">
              <div className="max-w-screen-lg">
                <h4 className="text-3xl font-light mb-6 lgplus:text-4xl xl:mb-8">
                  The outcome
                </h4>
                <p className="text-lg lgplus:text-xl">
                  Converge helped Leaf build more than a marketing program.
                  <br />
                  <br />
                  We built a connected growth engine where media, data,
                  creative, partners, call-center feedback, and sales outcomes
                  worked together — every channel with a job, every source held
                  accountable, every signal making the next decision smarter.
                  <br />
                  <br />
                  That is how Converge turns performance marketing into business
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center border-dnine border-b-2">
          <div className="w-full lg:max-w-screen-2xl flex justify-center">
            <video
              src="https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Final_Leaf_Home_Showreel_7f03f75b9b.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full bg-pale">
          <ContactSection />
        </div>
      </div>
    </>
  )
}

export default LeafFilterCaseStudy
