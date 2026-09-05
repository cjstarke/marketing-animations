import { useState, useRef, useEffect } from 'react'
import { gsap, Draggable } from '../utils/gsap'
import UpDown from './SVGs/UpDown'
import { PinkC } from './SVGs/PinkC'
import performanceData from '../data/performanceData.json'

const { allOptions, combinationBlurbs } = performanceData

interface CirclePosition {
  x: number
  y: number
}

interface CircleData {
  option: string
  initialPosition: CirclePosition
}

interface BlurbData {
  boldStart: string
  rest: string
}

const WhatWeDoDiagram = () => {
  // Dropdown styling constants
  const dropdownButtonClasses =
    'flex items-center justify-between px-4 py-2 lg:text-lg lg:px-5 font-medium  border border-shark rounded-full w-32 lg:w-40 lg:py-2.5'
  const dropdownMenuClasses =
    'absolute z-[1900] mt-2 min-w-full w-fit bg-pale rounded-lg'
  const dropdownItemClasses =
    'w-full px-4 py-2 text-left text-base hover:bg-darkPink/10 hover:text-shark transition-colors lg:text-lg'

  const [selectedOption1, setSelectedOption1] = useState('Media')
  const [selectedOption2, setSelectedOption2] = useState('Strategy')
  // Initialize with default Media-Strategy blurb
  const defaultBlurb =
    (combinationBlurbs as Record<string, BlurbData>)['Media-Strategy'] ||
    (combinationBlurbs as Record<string, BlurbData>)['Strategy-Media'] ||
    { boldStart: '', rest: '' }
  const [displayedBlurb, setDisplayedBlurb] = useState<BlurbData>(defaultBlurb)
  const [isDropdown1Open, setIsDropdown1Open] = useState(false)
  const [isDropdown2Open, setIsDropdown2Open] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const leftZoneRef = useRef<HTMLDivElement>(null)
  const rightZoneRef = useRef<HTMLDivElement>(null)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])
  const draggableInstances = useRef<Draggable[]>([])

  // Track current zone occupants synchronously (to avoid state timing issues)
  const currentLeftOption = useRef<string>('Media')
  const currentRightOption = useRef<string>('Strategy')

  // Store initial positions for each circle
  const initialPositions = useRef<{ [key: string]: CirclePosition }>({})

  // Calculate initial positions for circles - manually positioned left and right
  const getInitialPositions = (): CircleData[] => {
    // Manual positions - 6 on left (negative X), 5 on right (positive X)
    // These can be easily adjusted as needed
    const manualPositions: { [key: string]: CirclePosition } = {
      // Left side (6 circles)
      Brand: { x: -405, y: -64 },
      Creative: { x: -335, y: 35 },
      Data: { x: -444, y: 84 },
      Demand: { x: -288, y: -127 },
      Efficiency: { x: -296, y: 143 },
      Media: { x: -397, y: -176 },

      // Right side (5 circles)
      AI: { x: 379, y: -136 },
      'Lead Gen': { x: 344, y: -14 },
      Scale: { x: 440, y: 114 },
      Strategy: { x: 307, y: 157 },
      Tech: { x: 255, y: -186 },
    }

    // Map allOptions to CircleData array and store in ref
    return allOptions.map((option) => {
      const position = manualPositions[option]
      initialPositions.current[option] = position
      return {
        option,
        initialPosition: position,
      }
    })
  }

  const circleData = getInitialPositions()

  // Hit test to check if circle is in left zone
  const hitTestLeftZone = (element: HTMLElement): boolean => {
    if (!leftZoneRef.current) return false

    const circle = element.getBoundingClientRect()
    const zone = leftZoneRef.current.getBoundingClientRect()

    const circleCenterX = circle.left + circle.width / 2
    const circleCenterY = circle.top + circle.height / 2

    // Check if center of circle is within the zone
    const dx = circleCenterX - (zone.left + zone.width / 2)
    const dy = circleCenterY - (zone.top + zone.height / 2)
    const distance = Math.sqrt(dx * dx + dy * dy)

    return distance < zone.width / 2
  }

  // Hit test to check if circle is in right zone
  const hitTestRightZone = (element: HTMLElement): boolean => {
    if (!rightZoneRef.current) return false

    const circle = element.getBoundingClientRect()
    const zone = rightZoneRef.current.getBoundingClientRect()

    const circleCenterX = circle.left + circle.width / 2
    const circleCenterY = circle.top + circle.height / 2

    // Check if center of circle is within the zone
    const dx = circleCenterX - (zone.left + zone.width / 2)
    const dy = circleCenterY - (zone.top + zone.height / 2)
    const distance = Math.sqrt(dx * dx + dy * dy)

    return distance < zone.width / 2
  }

  // Move circle to its home position (initial circular layout position)
  const pushToHome = (element: HTMLElement) => {
    const option = element.dataset.option
    if (!option || !initialPositions.current[option]) return

    const { x, y } = initialPositions.current[option]
    gsap.to(element, {
      x,
      y,
      duration: 0.4,
      ease: 'back.out(1.7)',
    })
  }

  // Snap circle to zone center using fixed pixel values
  const snapToZone = (element: HTMLElement, zone: 'left' | 'right') => {
    // Fixed positions matching the zone locations (110px from center)
    const targetX = zone === 'left' ? -110 : 110
    const targetY = 0 // Centered vertically

    gsap.to(element, {
      x: targetX,
      y: targetY,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  // Handle drop detection
  const handleDrop = (element: HTMLElement) => {
    const option = element.dataset.option
    if (!option) return

    const inLeftZone = hitTestLeftZone(element)
    const inRightZone = hitTestRightZone(element)

    if (inLeftZone) {
      // Drop in left zone - push out current occupant if different
      if (currentLeftOption.current && currentLeftOption.current !== option) {
        const prevCircle = circleRefs.current.find(
          (el) => el?.dataset.option === currentLeftOption.current
        )
        if (prevCircle) pushToHome(prevCircle)
      }
      // Update left zone assignment
      currentLeftOption.current = option
      setSelectedOption1(option)

      // If this circle was in right zone, clear it from there
      if (currentRightOption.current === option) {
        currentRightOption.current = ''
        setSelectedOption2('')
      }
    } else if (inRightZone) {
      // Drop in right zone - push out current occupant if different
      if (currentRightOption.current && currentRightOption.current !== option) {
        const prevCircle = circleRefs.current.find(
          (el) => el?.dataset.option === currentRightOption.current
        )
        if (prevCircle) pushToHome(prevCircle)
      }
      // Update right zone assignment
      currentRightOption.current = option
      setSelectedOption2(option)

      // If this circle was in left zone, clear it from there
      if (currentLeftOption.current === option) {
        currentLeftOption.current = ''
        setSelectedOption1('')
      }
    } else {
      // Not in any zone - clear from both if present
      if (currentLeftOption.current === option) {
        currentLeftOption.current = ''
        setSelectedOption1('')
      }
      if (currentRightOption.current === option) {
        currentRightOption.current = ''
        setSelectedOption2('')
      }
    }
  }

  // Initialize Draggable instances
  useEffect(() => {
    if (!containerRef.current) return

    const circles = circleRefs.current.filter(Boolean) as HTMLElement[]

    draggableInstances.current = Draggable.create(circles, {
      type: 'x,y',
      bounds: containerRef.current,
      onDrag: function () {
        // Visual feedback: thicken border when dragging over zone
        const inLeft = hitTestLeftZone(this.target as HTMLElement)
        const inRight = hitTestRightZone(this.target as HTMLElement)

        if (leftZoneRef.current) {
          leftZoneRef.current.style.borderWidth = inLeft ? '2px' : '1px'
        }
        if (rightZoneRef.current) {
          rightZoneRef.current.style.borderWidth = inRight ? '2px' : '1px'
        }
      },
      onDragEnd: function () {
        handleDrop(this.target as HTMLElement)

        // Reset zone border width
        if (leftZoneRef.current) {
          leftZoneRef.current.style.borderWidth = '1px'
        }
        if (rightZoneRef.current) {
          rightZoneRef.current.style.borderWidth = '1px'
        }
      },
    }) as Draggable[]

    // Position default circles (Media and Strategy)
    const mediaCircle = circles.find((el) => el.dataset.option === 'Media')
    const strategyCircle = circles.find(
      (el) => el.dataset.option === 'Strategy'
    )

    if (mediaCircle) snapToZone(mediaCircle, 'left')
    if (strategyCircle) snapToZone(strategyCircle, 'right')

    return () => {
      draggableInstances.current.forEach((instance) => instance.kill())
    }
  }, [])

  // Handle dropdown selection for option 1 (left)
  const handleOption1Select = (option: string) => {
    // Push current option circle to home if it exists (using ref)
    if (currentLeftOption.current) {
      const prevCircle = circleRefs.current.find(
        (el) => el?.dataset.option === currentLeftOption.current
      )
      if (prevCircle) pushToHome(prevCircle)
    }

    // Move new option circle to left zone center
    const newCircle = circleRefs.current.find(
      (el) => el?.dataset.option === option
    )
    if (newCircle) {
      snapToZone(newCircle, 'left')
    }

    // Update both ref and state
    currentLeftOption.current = option
    setSelectedOption1(option)
    setIsDropdown1Open(false)
  }

  // Handle dropdown selection for option 2 (right)
  const handleOption2Select = (option: string) => {
    // Push current option circle to home if it exists (using ref)
    if (currentRightOption.current) {
      const prevCircle = circleRefs.current.find(
        (el) => el?.dataset.option === currentRightOption.current
      )
      if (prevCircle) pushToHome(prevCircle)
    }

    // Move new option circle to right zone center
    const newCircle = circleRefs.current.find(
      (el) => el?.dataset.option === option
    )
    if (newCircle) {
      snapToZone(newCircle, 'right')
    }

    // Update both ref and state
    currentRightOption.current = option
    setSelectedOption2(option)
    setIsDropdown2Open(false)
  }

  // Automatically update the blurb whenever both selections change
  useEffect(() => {
    if (!selectedOption1 || !selectedOption2) {
      setDisplayedBlurb({ boldStart: '', rest: '' })
      return
    }

    const combination1 = `${selectedOption1}-${selectedOption2}`
    const combination2 = `${selectedOption2}-${selectedOption1}`

    const blurb =
      (combinationBlurbs as Record<string, BlurbData>)[combination1] ||
      (combinationBlurbs as Record<string, BlurbData>)[combination2] ||
      { boldStart: '', rest: '' }

    setDisplayedBlurb(blurb)
  }, [selectedOption1, selectedOption2])

  // Filter options to exclude the other dropdown's selection
  const dropdown1Options = allOptions.filter((opt) => opt !== selectedOption2)
  const dropdown2Options = allOptions.filter((opt) => opt !== selectedOption1)

  return (
    <div
      id="what-we-do-diagram"
      className="w-full flex flex-col items-center  py-12 lg:py-24"
      data-component-type="hero-section"
      data-component-vis="true"
    >
      {/* Dropdowns */}
      <div className="w-full flex justify-center px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-center mb-8 max-w-xl lg:max-w-screen-xl w-full lg:justify-start lg:mb-0">
          <p className="font-bold text-lgplus mb-4 lg:mb-0 lg:text-xl lg:w-72 lg:mr-6">
            Lorem ipsum dolor sit amet consectetur:
          </p>
          <div className="flex items-center space-x-3 mb-5 lg:mb-0">
            {/* Dropdown 1 */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsDropdown1Open(!isDropdown1Open)
                  setIsDropdown2Open(false)
                }}
                className={`${dropdownButtonClasses} space-x-2`}
              >
                <p>{selectedOption1}</p>
                <div className="w-2.5 lg:w-3">
                  <UpDown />
                </div>
              </button>

              {/* Dropdown 1 menu */}
              {isDropdown1Open && (
                <div className={dropdownMenuClasses}>
                  <div className='w-full dropdown-gradient rounded-lg'>
                    {dropdown1Options.map((option, index) => (
                      <div key={index}>
                        <button
                          onClick={() => handleOption1Select(option)}
                          className={dropdownItemClasses}
                        >
                          {option}
                        </button>
                        {/* Add divider after each option except the last one */}
                        {index < dropdown1Options.length - 1 && (
                          <div className="h-[1px] mx-4 bg-[#D9D9D9]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <p className="text-4xl font-medium lg:text-5xl">&amp;</p>
            {/* Dropdown 2 */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsDropdown2Open(!isDropdown2Open)
                  setIsDropdown1Open(false)
                }}
                className={dropdownButtonClasses}
              >
                <p>{selectedOption2}</p>
                <div className="w-2.5 lg:w-3">
                  <UpDown />
                </div>
              </button>

              {/* Dropdown 2 menu */}
              {isDropdown2Open && (
                <div className={dropdownMenuClasses}>
                  <div className='w-full dropdown-gradient rounded-lg'>
                    {dropdown2Options.map((option, index) => (
                      <div key={index}>
                        <button
                          onClick={() => handleOption2Select(option)}
                          className={dropdownItemClasses}
                        >
                          {option}
                        </button>
                        {/* Add divider after each option except the last one */}
                        {index < dropdown2Options.length - 1 && (
                          <div className="h-[1px] mx-4 bg-[#D9D9D9]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Draggable Circles Container */}
      <div
        ref={containerRef}
        className="relative w-full hidden lg:flex items-center justify-center h-128"
      >
        {/* Drop Zones - Visual circles that also serve for hit testing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            ref={leftZoneRef}
            className="absolute w-80 h-80 rounded-full border border-darkPink pointer-events-none"
            style={{
              left: 'calc(50% - 110px)',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 1,
            }}
          />
          <div
            ref={rightZoneRef}
            className="absolute w-80 h-80 rounded-full border border-darkPink pointer-events-none"
            style={{
              left: 'calc(50% + 110px)',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 1,
            }}
          />

          {/* Centered Logo */}
          <div
            className="absolute w-8 pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <PinkC />
          </div>
        </div>

        {/* Draggable Circles */}
        {circleData.map((data, index) => {
          const isSelected =
            data.option === selectedOption1 || data.option === selectedOption2
          return (
            <div
              key={data.option}
              ref={(el) => (circleRefs.current[index] = el)}
              data-option={data.option}
              className={`absolute w-24 h-24 rounded-full flex items-center justify-center 
                           cursor-grab active:cursor-grabbing  text-base 
                           transition-colors select-none border
                           ${
                             isSelected
                               ? 'bg-pale text-darkPink border-darkPink font-bold'
                               : 'bg-pale text-darkGray border-borderGray'
                           }`}
              style={{
                transform: `translate(${data.initialPosition.x}px, ${data.initialPosition.y}px)`,
              }}
            >
              <span className="pointer-events-none">{data.option}</span>
            </div>
          )
        })}
      </div>

      {/* Blurb Display - Always visible */}
      <div className="mb-24 w-full flex justify-center px-6 lg:px-20">
        <p className="text-lg lg:text-2xl text-shark leading-relaxed w-full max-w-xl lg:max-w-screen-xl ">
          <strong>{displayedBlurb.boldStart}</strong> {displayedBlurb.rest}
        </p>
      </div>
    </div>
  )
}

export default WhatWeDoDiagram
