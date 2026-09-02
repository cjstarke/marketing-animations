import CardsAnimatedMobile from './CardsAnimatedMobile'
import CardsAnimatedTablet from './CardsAnimatedTablet'
import CardsAnimatedDesktop from './CardsAnimatedDesktop'

const CardsAnimated = () => {
  return (
    <>
      <div className="block md:hidden">
        <CardsAnimatedMobile />
      </div>
      <div className="hidden md:block xl:hidden">
        <CardsAnimatedTablet />
      </div>
      <div className="hidden xl:block">
        <CardsAnimatedDesktop />
      </div>
    </>
  )
}

export default CardsAnimated
