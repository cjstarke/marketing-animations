import { XMarkIcon } from '@heroicons/react/20/solid'
import BurgerHide from './SVGs/BurgerHide'
import { XIcon } from './SVGs'

export type PressBannerProps = { onClick?: Function; isDark?: boolean }

const PressBanner = ({ onClick, isDark }: PressBannerProps) => {
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <div
      className="bg-gray-900 px-6 py-3.5 lg:px-3.5 lg:before:flex-1 leading-[1.1] text-xs lg:text-base text-white font-inter font-bold lg:px-10"
      id="site-banner"
    >
      <div className="font-inter lg:my-0 max-w-screen-xl mx-auto  flex justify-between items-start lg:items-center">
        <p>
          <span className="text-skyBlue">NEW INSIGHT: &nbsp;</span>
          <span className="text-white font-black">SHOSHANA WINTER &nbsp;</span>
          RELEASES MANIFESTO ON MODERN PERFORMANCE MARKETING &nbsp; — &nbsp;
          <a
            id="banner-link"
            href="/insights/a-manifesto-on-modern-performance/"
            className="text-skyBlue text-xs lg:text-lg leading-none"
          >
            Read More
          </a>
        </p>
        <button
          type="button"
          className=" lg:py-0 focus-visible:outline-offset-[-4px]"
          onClick={handleClick}
          id="close-banner"
        >
          <span className="sr-only">Dismiss</span>
          <div className="w-4 ml-3">
            <XIcon />
          </div>
        </button>
      </div>
    </div>
  )
}
export default PressBanner
