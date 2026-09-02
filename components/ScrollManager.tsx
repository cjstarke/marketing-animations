import { useEffect, useRef } from 'react'
import { useConvergePage } from '../contexts/ConvergePageContext'
import { NavBarStatus } from '../types'

export type ScrollSection = {
  id: string
  navStatus: NavBarStatus
}

type ScrollManagerProps = {
  sections: ScrollSection[]
}

const ScrollManager = ({ sections }: ScrollManagerProps) => {
  const { setNavStatus } = useConvergePage()
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (sections.length === 0) return

    // Set initial status to first section's status immediately
    if (!hasInitialized.current) {
      setNavStatus(sections[0].navStatus)
      hasInitialized.current = true
    }

    // Find all section elements
    const sectionElements = sections
      .map(section => ({
        element: document.getElementById(section.id),
        navStatus: section.navStatus,
        id: section.id
      }))
      .filter(item => item.element !== null)

    if (sectionElements.length === 0) return

    // Track which sections are currently intersecting
    const intersectingMap = new Map<string, boolean>()

    const observer = new IntersectionObserver(
      (entries) => {
        // Update intersection state for each entry
        entries.forEach(entry => {
          const id = entry.target.id
          intersectingMap.set(id, entry.isIntersecting)
        })

        // Find the first (topmost) intersecting section in our sections array order
        const topSection = sections.find(section => 
          intersectingMap.get(section.id) === true
        )

        if (topSection) {
          setNavStatus(topSection.navStatus)
        }
      },
      { 
        // rootMargin of -72px means intersection happens when section crosses navbar bottom (72px from top)
        rootMargin: '-72px 0px 0px 0px',
        threshold: 0 
      }
    )

    // Observe all sections
    sectionElements.forEach(({ element }) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sections, setNavStatus])

  return null // This component doesn't render anything
}

export default ScrollManager
