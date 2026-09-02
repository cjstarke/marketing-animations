import { twMerge } from 'tailwind-merge'
import RightArrow from './SVGs/RIghtArrow'

export type ConvergeSubmitButtonProps = {
  id: string
  text?: string
  className?: string
  onClick?: Function
  disabled?: boolean
  pinkArrow?: boolean
}

const ConvergeSubmitButton = ({
  id,
  text = 'Get started',
  className,
  onClick,
  disabled,
  pinkArrow = true,
}: ConvergeSubmitButtonProps) => {
  const classes = twMerge(
    'text-lg w-full text-shark font-medium border px-5 py-2 border-shark rounded-full  flex items-center group justify-center',
    className
  )

  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <button
      disabled={disabled}
      id={id}
      onClick={handleClick}
      type="submit"
      className={classes}
      data-component-type="button"
      data-component-vis="true"
    >
      <p className="text-nowrap">{text}</p>
      <div className="w-2 group-hover:w-4 transition-all ease-in"></div>
      <div className="w-4">
        <RightArrow strokeColor={pinkArrow ? '#E64C76' : '#b1e4ff'} />
      </div>
    </button>
  )
}

export default ConvergeSubmitButton
