import { Inter, Roboto_Flex } from 'next/font/google'
import { ReactNode } from 'react'
import NavBar from './NavBar'

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



  const classes = `min-h-screen bg-almostWhite flex flex-col justify-between relative ${inter.variable} ${roboto.variable} font-inter`


  return (
    <div className={classes}>
      <div className="w-full z-[2000] fixed">
        <NavBar />
      </div>
      {children}
    </div>
  )
}

export default Layout
