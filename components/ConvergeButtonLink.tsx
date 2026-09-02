import { twMerge } from 'tailwind-merge'
import RightArrow from './SVGs/RIghtArrow'

export type ConvergeButtonLinkProps = {
  className?: string
  href?: string
  text?: string
  id: string
  onClick?: Function
  pinkArrow?: boolean
  openInNewTab?: boolean
}

const ConvergeButtonLink = ({
  className,
  href = '/contact',
  text = 'Get a free performance audit',
  id,
  onClick = () => {},
  pinkArrow = true,
  openInNewTab = false,
}: ConvergeButtonLinkProps) => {
  const classes = twMerge(
    'text-lg text-shark font-medium border px-5 py-2 border-shark rounded-full flex items-center group justify-center w-fit',
    className
  )

  return (
    <a
      id={id}
      href={href}
      className={classes}
      onClick={() => {
        onClick()
      }}
      data-component-type="button"
      data-component-vis="true"
      {...(openInNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      <p className="text-nowrap">{text}</p>
      <div className="w-2 group-hover:w-4 transition-all ease-in"></div>
      <div className="w-4">
        <RightArrow strokeColor={pinkArrow ? '#E64C76' : '#b1e4ff'} />
      </div>
    </a>
  )
}
export default ConvergeButtonLink
