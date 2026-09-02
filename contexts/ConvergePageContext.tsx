import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { NavBarStatus } from '../types'

interface ConvergePageContextType {
  navStatus: NavBarStatus
  setNavStatus: (navStatus: NavBarStatus) => void
  isInitial: boolean
  setIsInitial: (isInitial: boolean) => void
  currentPage: string
  setCurrentPage: (currentPage: string) => void
}

interface ConvergePageProviderProps {
  children: ReactNode
}

const initialContextValue: ConvergePageContextType = {
  navStatus: NavBarStatus.white,
  setNavStatus: () => {},
  isInitial: true,
  setIsInitial: () => {},
  currentPage: '',
  setCurrentPage: () => {},
}

const ConvergePageContext =
  createContext<ConvergePageContextType>(initialContextValue)

export const ConvergePageContextProvider = ({
  children,
}: ConvergePageProviderProps) => {
  const [navStatus, setNavStatus] = useState<NavBarStatus>(NavBarStatus.white)
  const [isInitial, setIsInitial] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<string>('')
  
  const providerValue = useMemo(
    () => ({
      navStatus,
      setNavStatus,
      isInitial,
      setIsInitial,
      currentPage,
      setCurrentPage,
    }),
    [navStatus, isInitial, currentPage]
  )
  return (
    <ConvergePageContext.Provider value={providerValue}>
      {children}
    </ConvergePageContext.Provider>
  )
}

export const useConvergePage = (): ConvergePageContextType =>
  useContext(ConvergePageContext)
