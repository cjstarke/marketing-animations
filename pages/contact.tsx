import { getArticlesForBrand } from '@converge/utils'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import CustomHead from '../components/CustomHead'
import NewsAndInsightsSection from '../components/NewsAndInsightsSection'
import { useConvergePage } from '../contexts/ConvergePageContext'
import { NavBarStatus } from '../types'

const Contact = ({ allArticlesResponse }: any) => {
  const articles = allArticlesResponse.articles

  const { setCurrentPage, setNavStatus } = useConvergePage()

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('contact')
  }, [])

  return (
    <>
      <CustomHead page="contact" />
      <div className="w-full h-16 lg:h-19"></div>

      {/* EGD-4581 Remove the Q4 Header */}
      {/* <SprintSessionCTA /> */}
      <ContactForm />
      <NewsAndInsightsSection NewsAndInsightsCards={articles} />
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

export default Contact
