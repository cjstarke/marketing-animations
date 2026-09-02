import { getConsumerHealthDataPrivacyNotice } from '@converge/utils'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import CustomHead from '../components/CustomHead'
import { getPageConfig } from '../config/pageConfig'

const Health: NextPage = ({
  compliance,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageConfig = getPageConfig('health')

  const prettyDate = (date: string) => {
    const dateFormat = { month: 'long', day: 'numeric', year: 'numeric' }
    //@ts-ignore
    return date ? new Date(date).toLocaleDateString('en-us', dateFormat) : ''
  }

  const ComplianceEntry = ({ entry }: any) => {
    // --- Add a specific ID to the entry sections in order to anchor to elements
    const entryId = entry.title
      .toString()
      .toLowerCase()
      .replaceAll(' ', '_')
      .replace(/[^a-zA-Z0-9_]/g, '')

    return (
      <div id={entryId} key={entry.id}>
        <h4 className="font-bold text-lg">{entry.title}</h4>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw] as any}
          className="overflow-auto"
        >
          {entry.content}
        </ReactMarkdown>
      </div>
    )
  }

  useEffect(() => {
    const url = new URLSearchParams(window.location.search) //window.location.href;
    const rpgn = url.get('rpgn') ? url.get('rpgn') : pageConfig.metaTags.title
    const rpurl = url.get('rpurl') ? url.get('rpurl') : pageConfig.metaTags.url

    const anchors = document.querySelectorAll('a')

    anchors.forEach(function (anchor) {
      //Loop through all the anchor tags and identify which ones need to be updated
      urlParameterValueUpdate(anchor)
    })

    //@ts-ignore
    function urlParameterValueUpdate(anchor) {
      //@ts-ignore;
      const curUrl = anchor.href

      if (curUrl.includes('rpgn=&rpurl=')) {
        const urlPieces = curUrl.split('?')
        urlPieces[1] = `rpgn=${rpgn}&rpurl=${rpurl}`

        const newUrl = urlPieces[0] + '?' + urlPieces[1]

        //@ts-ignore;
        anchor.href = newUrl
      }
    }
  })

  return (
    <>
      <CustomHead
        page="health"
      />

      <main className="bg-white compliance container font-inter mx-auto max-w-6xl my-24 px-4 text-textBlack lg:my-32">
        <div className="mb-8 text-center">
          <h1
            className="text-3xl font-bold"
            id="consumer_health_data_privacy_notice"
          >
            Consumer Health Data Privacy Notice
          </h1>
          <h3 className="mt-4 text-2xl font-bold">
            &#40;Last Updated{' '}
            {prettyDate(
              compliance.consumerHealthDataPrivacyNotice.updatedAt
            )}
            &#41;
          </h3>
        </div>

        <div>
          {compliance.consumerHealthDataPrivacyNotice.entries.map(
            (entry: any) => {
              return <ComplianceEntry entry={entry} key={entry.id} />
            }
          )}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      compliance: await getConsumerHealthDataPrivacyNotice(),
    },
  }
}

export default Health
