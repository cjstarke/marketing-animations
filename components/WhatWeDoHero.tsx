const WhatWeDoHero = () => {
  return (
    <div
      id="what-we-do-hero"
      className="w-full flex justify-center px-6 lg:px-20 overflow-clip "
      data-component-type="hero-section"
      data-component-vis="true"
    >
      <div className="w-full max-w-xl lg:max-w-screen-xl pt-28 lg:pt-48">
        <h1 className="text-4xl mb-8  lg:text-7xl lg:text-pretty lg:max-w-200">
          Performance isn&apos;t one thing. It&apos;s{' '}
          <span className="font-bold">everything.</span>
        </h1>
        <p className='leading-[1.65] text-pretty lg:mb-36 lg:text-lg lg:max-w-200'>
          Performance is what happens when strategy, creative, media and
          analytics work together as one unified system. It&apos;s the difference
          between optimizing channels and accelerating growth.
        </p>
      </div>
    </div>
  )
}

export default WhatWeDoHero
