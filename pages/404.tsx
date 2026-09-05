import ButtonLink from '../components/ButtonLink'

const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-hotPink">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ButtonLink
              id="404-go-home-button"
              href={'/'}
              className="flex"
              text="Go Home"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
