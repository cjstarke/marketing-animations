import { twMerge } from 'tailwind-merge'
import RightArrow from './SVGs/RIghtArrow'

export type ButtonPinkSubmitProps = {
  className?: string
  text?: string
  id: string
  onClick?: () => void
  disabled?: boolean
}

const ButtonPinkSubmit = ({
  className,
  text = 'Go',
  id,
  onClick = () => {},
  disabled = false,
}: ButtonPinkSubmitProps) => {
  const classes = twMerge(
    ' text-white bg-darkPink px-4 py-3 font-medium rounded-full flex items-center group justify-around w-28 lg:text-lg',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  return (
    <button
      id={id}
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
      data-component-type="button"
      data-component-vis="true"
    >
      <p className="text-nowrap">{text}</p>
      <div className={`w-2 transition-all ease-in ${!disabled && 'group-hover:w-4'}`}></div>
      <div className="w-4">
        <RightArrow strokeColor='#ffffff' />
      </div>
    </button>
  )
}

export default ButtonPinkSubmit
