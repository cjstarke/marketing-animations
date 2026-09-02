interface LeftArrowProps {
  strokeColor?: string
}

const LeftArrow = ({ strokeColor = '#E64C76' }: LeftArrowProps) => {
  return (
    <div className="w-full max-w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 45" fill="none">
        <path
          d="M54.541 22.4584H3.20768M3.20768 22.4584L22.4577 3.20837M3.20768 22.4584L22.4577 41.7084"
          stroke={strokeColor}
          strokeWidth="6.41667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default LeftArrow
