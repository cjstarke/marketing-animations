import LogosAnimatedMobile from './LogosAnimatedMobile'
import LogosAnimatedDesktop from './LogosAnimatedDesktop'

const LogosAnimated = () => {
  return (
    <>
      <div className="block lg:hidden">
        <LogosAnimatedMobile />
      </div>
      <div className="hidden lg:block">
        <LogosAnimatedDesktop />
      </div>
    </>
  )
}

export default LogosAnimated
