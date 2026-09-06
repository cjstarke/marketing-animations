interface RightArrowProps {
  strokeColor?: string
}

const RightArrow = ({ strokeColor = '#E64C76' }: RightArrowProps) => {
  return (
    <div className="w-full max-w-full">
      <svg viewBox="0 0 19 14" fill="none" xmlns="https://www.w3.org/2000/svg">
        <path
          d="M1.67871 7H17.6787M17.6787 7L11.6787 1M17.6787 7L11.6787 13"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default RightArrow
