import { safelyUpdateCampaignId } from '@converge/utils'
import clsx from 'clsx'
import { Inter, Roboto_Flex } from 'next/font/google'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { useConvergePage } from '../contexts/ConvergePageContext'
import { NavBarStatus } from '../types'
import useSessionStorage from '../contexts/SessionStorageContext'
import Footer from './Footer'
import NavBar from './NavBar'
import PressBanner from './PressBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
})

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { navStatus, currentPage } = useConvergePage()
  const [isHydrated, setIsHydrated] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useSessionStorage<boolean>(
    'bannerDismissed',
    false
  )
  const router = useRouter()
  const isInsightsPage = router.pathname.startsWith('/insights')
  const isBarePage =
    router.pathname ===
    '/legal/advertising-services/marketing-partner-agreement/esign'

  useEffect(() => {
    setIsHydrated(true)
    safelyUpdateCampaignId('maker')
  }, [])


  const classes = `min-h-screen bg-almostWhite flex flex-col justify-between relative ${inter.variable} ${roboto.variable} font-inter`

  // only show banner when the following are ALL true
  // 1. the page has been hydrated
  // 2. the banner has not been dismissed
  // 3. the current page is not an insights page
  useEffect(() => {
    if (isHydrated && !bannerDismissed && !isInsightsPage) {
      setShowBanner(true)
    }
  }, [isHydrated, bannerDismissed, isInsightsPage])

  if (isBarePage) {
    return <>{children}</>
  }

  return (
    <div className={classes}>
      <div className="w-full z-[2000] fixed">
        {/* {showBanner && (
          <PressBanner
            onClick={() => {
              setBannerDismissed(true)
              setShowBanner(false)
            }}
          />
        )} */}
        <NavBar />
      </div>
      {/* {showBanner && <div className="mb-16 md:mb-12" />} */}

      {children}
      <Footer />
    </div>
  )
}

export default Layout
