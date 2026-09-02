import clsx from 'clsx'
import { useState } from 'react'
import { useConvergePage } from '../contexts/ConvergePageContext'
import ConvergeButtonLink from './ConvergeButtonLink'
import BurgerHide from './SVGs/BurgerHide'
import ConvergeLogo from './SVGs/ConvergeLogo'
import ConvergeLogoPink from './SVGs/ConvergeLogoPink'

const NavBar = () => {
  const {  currentPage } = useConvergePage()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const navOpenClasses = 'h-screen overflow sm:overflow-y-clip'


  const outerclasses = clsx(
    isNavOpen ? `${navOpenClasses} ` : 'overflow-y-clip',
    'flex w-full flex-col z-[2000] bg-almostWhite'
  )

  const linkClasses =
    'text-lg xl:text-xl text-nowrap py-1 px-2 font-medium hover:text-darkPink dark:hover:text-skyBlue'
  const openLinkClasses =
    'text-3xl font-normal mb-12 relative text-darkPink dark:text-white'

  return (
    <div
      id={'nav-bar'}
      data-component-vis="true"
      data-component-type="menu"
      className={outerclasses}
    >
      <div className="w-full text-shark dark:text-white py-4 px-6  xl:px-10 overflow-x-clip border-b border-shark dark:border-white font-roboto flex justify-center">
        <div className="relative w-full flex items-center justify-between flex-row max-w-7xl">
          <a href={'/'} id="nav-bar-logo" className="w-44">
            <ConvergeLogoPink />
          </a>
          <div className="hidden lg:flex flex-row items-center lg:space-x-2 xl:space-x-10">
            <a href={'/who-we-are'} id="nav-bar-who-we-are">
              <p
                className={
                  currentPage === 'who-we-are'
                    ? `${linkClasses} text-darkPink`
                    : linkClasses
                }
              >
                Who we are
              </p>
            </a>
            <a href={'/what-we-do'} id="nav-bar-what-we-do">
              <p
                className={
                  currentPage === 'what-we-do'
                    ? `${linkClasses} text-darkPink dark:text-skyBlue`
                    : linkClasses
                }
              >
                What we do
              </p>
            </a>
            <a href={'/our-work'} id="nav-bar-our-work">
              <p
                className={
                  currentPage === 'our-work'
                    ? `${linkClasses} text-darkPink`
                    : linkClasses
                }
              >
                Our work
              </p>
            </a>
            <a href={'/insights'} id="nav-bar-insights">
              <p
                className={
                  currentPage === 'insights'
                    ? `${linkClasses} text-darkPink`
                    : linkClasses
                }
              >
                Insights & news
              </p>
            </a>
          </div>
          <div className="hidden lg:flex justify-start w-[250px] shrink-0">
            <ConvergeButtonLink
              id="nav-bar-contact"
              href={'/contact'}
              className="bg-transparent lg:px-16"
              text="Get in touch"
            />
          </div>
          {isNavOpen ? (
            <button
              className="lg:hidden"
              id="nav-bar-exit"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <div className="w-6">
                <BurgerHide />
              </div>
            </button>
          ) : (
            <div
              className=" space-y-2 lg:hidden "
              onClick={() => setIsNavOpen((prev) => !prev)}
              id="nav-bar-burger"
            >
              <span className="dark:bg-skyBlue flex h-0.5	 w-8 rounded-lg bg-hotPink"></span>

              <span className="dark:bg-skyBlue flex h-0.5	  w-8 rounded-lg bg-hotPink"></span>

              <span className="dark:bg-skyBlue flex h-0.5	  w-8  rounded-lg bg-hotPink"></span>
            </div>
          )}
        </div>
      </div>
      <div
        className={
          isNavOpen ? 'mt-12 flex flex-col justify-start pl-6' : 'hidden'
        }
      >
        <a
          href={'/who-we-are'}
          id="nav-bar-open-who-we-are"
          onClick={() => setIsNavOpen(false)}
          className="w-fit"
        >
          <p className={openLinkClasses}>Who we are</p>
        </a>

        <a
          href={'/what-we-do'}
          id="nav-bar-open-what-we-do"
          onClick={() => setIsNavOpen(false)}
          className="w-fit"
        >
          <p className={openLinkClasses}>What we do</p>
        </a>
        <a
          href={'/our-work'}
          id="nav-bar-open-our-work"
          onClick={() => setIsNavOpen(false)}
          className="w-fit"
        >
          <p className={openLinkClasses}>Our work</p>
        </a>
        <a
          href={'/insights'}
          id="nav-bar-open-insights"
          onClick={() => setIsNavOpen(false)}
          className="w-fit"
        >
          <p className={openLinkClasses}>Insights & news</p>
        </a>
        <ConvergeButtonLink
          id="nav-bar-contact"
          href={'/contact'}
          className={''}
          text="talk performance"
          onClick={() => setIsNavOpen(false)}
          
        />
      </div>
    </div>
  )
}

export default NavBar
