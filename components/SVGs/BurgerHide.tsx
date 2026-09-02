import { useConvergePage } from '../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../types'

const BurgerHide = () => {
  const { navStatus } = useConvergePage()
  const isDark = navStatus === NavBarStatus.dark || navStatus === NavBarStatus.pink

  return (
    <div className="w-full max-w-full">
      <svg

        viewBox="0 0 43 44"
        stroke={isDark ? '#B1E4FF' : '#FF0062'}
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L40.3068 40.3068"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M40.3066 3.69287L1.99988 41.9996"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default BurgerHide
