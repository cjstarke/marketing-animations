import { getArticlesForBrand } from '@converge/utils'
import { GetStaticProps } from 'next'
import { useEffect, ReactNode } from 'react'
import WhatWeDoHero from '../components/WhatWeDoHero'
import WhatWeDoDiagram from '../components/WhatWeDoDiagram'
import WhatWeDoArea from '../components/WhatWeDoArea'
import { useConvergePage } from '../contexts/ConvergePageContext'
import CustomHead from '../components/CustomHead'
import ContactSectionAnimated from '../components/ContactSectionAnimated'
import VideoCarousel from '../components/VideoCarousel'
import CoveWhatWeDo from '../components/CoveWhatWeDo'

type Area = {
  title: ReactNode
  paragraph: string
  link: string
  id: string
}
const h2Class =
  'font-bold text-8xl 3sm:text-9xl sm:text-12xl -ml-2 sm:-ml-3 lg:-ml-4 lg:text-15xl leading-seven 3sm:leading-seven'

const whatWeDoAreas: Area[] = [
  {
    title: <h2 className={`${h2Class} `}>Media</h2>,
    paragraph:
      "We don't buy media. We design media ecosystems. Every channel, every placement, every dollar is orchestrated to drive measurable outcomes across the full funnel. We build campaigns where every touchpoint earns its place — and proves its value in real time.",
    link: '/insights/media-buying-in-2026/',
    id: 'media',
  },
  {
    title: (
      <h2 className={`${h2Class} `}>
        Lead <br />
        Gen
      </h2>
    ),
    paragraph:
      "We choose lead quality over lead volume. Leveraging our own first-party lead generation capabilities alongside a massive partner network, we capture, model, and optimize leads that are primed for action. The result: prospects your sales team actually wants to talk to. ",
    link: '/insights/media-buying-in-2026/',
    id: 'lead-gen',
  },
  {
    title: (
      <h2 className={`${h2Class} -mr-2 flex justify-end`}>
        <span>
          Creat
          <br />
          ive
        </span>
      </h2>
    ),
    paragraph:
      "Performance creative isn't about a funnel position or a set of tactics or channels. It's about ideas that compel meaningful action. We build creative that's designed to perform. Then we test and optimize every element—from messaging to visuals to experience—to maximize impact. Bold work. Measurable results. ",
    link: '/insights/media-buying-in-2026/',
    id: 'creative',
  },
  {
    title: (
      <h2 className={`${h2Class} mb-12 3sm:mb-16`}>
        Strat
        <br />
        egy
      </h2>
    ),
    paragraph:
      'Audience-first thinking, business-driven outcomes. We unify your customer insights and market dynamics into strategies built to perform. No guesswork. Just clarity and direction that drives growth. ',
    link: '/insights/media-buying-in-2026/',
    id: 'strategy',
  },
  {
    title: (
      <h2 className={`${h2Class} `}>
        Data <br />
        Sci
        <wbr />
        ence
      </h2>
    ),
    paragraph:
      'Data without direction is just noise. We transform data into decisions—building bespoke measurement frameworks and orchestrating martech platforms that optimize experiences in real time, all in service of proving the effectiveness of every marketing dollar. ',
    link: '/insights/media-buying-in-2026/',
    id: 'data-science',
  },
]

const WhatWeDo = ({ allArticlesResponse }: any) => {
  const { setCurrentPage } = useConvergePage()

  const articles = allArticlesResponse.articles

  useEffect(() => {
    setCurrentPage('what-we-do')
  }, [setCurrentPage])

  return (
    <>
      <CustomHead page="what-we-do" />
      <WhatWeDoHero />
      <WhatWeDoDiagram />

      {/* What We Do Areas */}
      {whatWeDoAreas.map((area, i) => (
        <WhatWeDoArea
          key={`area-${i}`}
          index={i}
          paragraph={area.paragraph}
          link={area.link}
          id={area.id}
        >
          {area.title}
        </WhatWeDoArea>
      ))}
      <VideoCarousel />
      <CoveWhatWeDo />
      <ContactSectionAnimated />
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

export default WhatWeDo
