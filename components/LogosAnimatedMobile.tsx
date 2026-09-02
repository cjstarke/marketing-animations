import { useRef } from 'react'
import { gsap, useGSAP } from '../utils/gsap'
import { Target } from './SVGs'
import clients from '../data/clients.json'

// Helper function to calculate circular positions
const getCircularPosition = (
  index: number,
  total: number,
  radius: number,
  radiusOffset: number = 0,
  angleOffset: number = 0
) => {
  const baseAngle = (index * 360) / total
  const angle = baseAngle + angleOffset - 120 // Start from 11 o'clock (-120 degrees)
  const radian = (angle * Math.PI) / 180
  const effectiveRadius = radius + radiusOffset
  return {
    x: Math.cos(radian) * effectiveRadius,
    y: Math.sin(radian) * effectiveRadius,
  }
}

// Helper function to calculate next position (one step clockwise)
const getNextPosition = (
  index: number,
  total: number,
  radius: number,
  radiusOffset: number = 0,
  angleOffset: number = 0
) => {
  const nextIndex = index + 2 / 3 // Move 2/3 of a position clockwise
  return getCircularPosition(
    nextIndex,
    total,
    radius,
    radiusOffset,
    angleOffset
  )
}

const LogosAnimatedMobile = () => {
  // Refs for animation
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    if (!containerRef.current || !targetRef.current) return

    const radius = 160

    // Create timeline for desktop
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 15%',
        end: '900px top',
        pin: true,
        scrub: 1.5,
      },
    })

    // Phase 1: Everything scrolls and pins together (0% - 40% of scroll)
    // tl.to(containerRef.current, { opacity: 1, duration: 0.5 }) // Fade in

    // Phase 2: Logos rotate one position clockwise (40% - 70% of scroll)
    logosRef.current.forEach((logoEl, index) => {
      if (logoEl) {
        const radiusOffset = clients[index].radiusOffsetMobile || 0
        const angleOffset = clients[index].angleOffsetMobile || 0
        const nextPosition = getNextPosition(
          index,
          clients.length,
          radius,
          radiusOffset,
          angleOffset
        )

        // Animate the positioning div (children[0]) to the absolute next position
        tl.to(
          logoEl.children[0],
          {
            duration: 0.4,
            ease: 'power2.inOut',
            transform: `translate(${nextPosition.x}px, ${nextPosition.y}px)`,
          },
          '-=0.4'
        ) // Start all animations at the same time
      }
    })
  })

  return (
    <div className="w-full flex flex-col -mt-6 px-6 items-center overflow-hidden h-408">
      <div className="w-full flex flex-col items-center lg:px-10">
        <div
          ref={containerRef}
          className="w-full flex flex-col items-center max-w-screen-xl"
        >
          <div className="relative flex justify-center items-center ">
            {/* Target SVG */}
            <div
              ref={targetRef}
              className="flex justify-center items-center w-124 relative"
            >
              <Target className="w-full" />
              <h2 className="noshake absolute inset-0 flex items-center justify-center text-center text-xl font-medium text-shark px-4">
                Our client partners
              </h2>
            </div>

            {/* Client logos positioned around the circle */}
            <div className="absolute inset-0 flex justify-center items-center">
              {clients.map((client, index) => {
                const radius = 160
                const radiusOffset = client.radiusOffsetMobile || 0
                const angleOffset = client.angleOffsetMobile || 0
                const position = getCircularPosition(
                  index,
                  clients.length,
                  radius,
                  radiusOffset,
                  angleOffset
                )
                return (
                  <div
                    key={client.name}
                    ref={(el) => {
                      if (el) logosRef.current[index] = el
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                      }}
                    >
                      <div className="flex justify-center items-center">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className={`object-contain transition-all duration-300 ${
                            client.animatedClassName || 'w-20 md:w-28'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogosAnimatedMobile
