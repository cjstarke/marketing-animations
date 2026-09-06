import { twMerge } from 'tailwind-merge'
import RightArrow from './SVGs/RIghtArrow'

export type ButtonPinkProps = {
  className?: string
  href?: string
  text?: string
  id: string
  onClick?: Function
}

const ButtonPink = ({
  className,
  href = '/contact',
  text = 'Go',
  id,
  onClick = () => {},
}: ButtonPinkProps) => {
  const classes = twMerge(
    'text-lg text-white  bg-darkPink  px-5 py-3 rounded-full flex items-center group justify-center w-fit lg:text-xl',
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
    >
      <p className="text-nowrap">{text}</p>
      <div className="w-2 group-hover:w-4 transition-all ease-in"></div>
      <div className="w-4">
        <RightArrow strokeColor="#ffffff" />
      </div>
    </a>
  )
}
export default ButtonPink
