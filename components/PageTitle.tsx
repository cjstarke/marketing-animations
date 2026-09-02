import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type PageTitleProps = {
  className?: string
  heading?: ReactNode
}
const PageTitle = ({ className, heading }: PageTitleProps) => {
  const classes = twMerge(
    'w-full flex justify-center px-6 lg:px-10 pt-20 pb-14 lg:pb-20 lg:pt-36',
    className
  )
  return (
    <div
      id="page-title"
      data-component-vis="true"
      data-component-type="heading"
      className={classes}
    >
      <div className="w-full max-w-md font-normal text-4xl text-pretty lg:text-5xl lg:max-w-screen-xl">
        {heading}
      </div>
    </div>
  )
}

export default PageTitle
