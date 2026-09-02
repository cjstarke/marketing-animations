import ThreeDOverlayMobile from './ThreeDOverlayMobile'
import ThreeDOverlayLarge from './ThreeDOverlayLarge'
import ThreeDOverlayXL from './ThreeDOverlayXL'
import ThreeDOverlay2XL from './ThreeDOverlay2XL'

const ThreeDOverlay = () => {
  return (
    <>
      <div className="block lg:hidden">
        <ThreeDOverlayMobile />
      </div>
      <div className="hidden lg:block xl:hidden">
        <ThreeDOverlayLarge />
      </div>
      <div className="hidden xl:block 2xl:hidden">
        <ThreeDOverlayXL />
      </div>
      <div className="hidden 2xl:block">
        <ThreeDOverlay2XL />
      </div>
    </>
  )
}

export default ThreeDOverlay
