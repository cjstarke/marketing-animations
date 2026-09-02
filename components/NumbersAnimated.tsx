import NumbersAnimatedMobile from './NumbersAnimatedMobile'
import NumbersAnimatedDesktop from './NumbersAnimatedDesktop'

const NumbersAnimated = () => {
  return (
    <>
      <div className="block md:hidden">
        <NumbersAnimatedMobile />
      </div>
      <div className="hidden md:block">
        <NumbersAnimatedDesktop />
      </div>
    </>
  )
}

export default NumbersAnimated
