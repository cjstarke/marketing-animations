import { useEffect, useRef, useState } from 'react'
import { gsap } from '../utils/gsap'
import { XIconBlack } from './SVGs/XIconBlack'

export type LeadershipMember = {
  id: string
  name: string
  title: string
  body: string
  image: {
    src: string
    alt: string
  }
}

export type LeadershipModalProps = {
  isOpen: boolean
  member: LeadershipMember | null
  onClose: () => void
}

export const LeadershipModal = ({
  isOpen,
  member,
  onClose,
}: LeadershipModalProps) => {
  const backdropRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [shouldRender, setShouldRender] = useState(false)
  const isAnimatingRef = useRef(false)

  // Handle opening animation
  useEffect(() => {
    if (isOpen && member) {
      setShouldRender(true)
      isAnimatingRef.current = true

      // Wait for next frame to ensure elements are in DOM, then wait one more frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (backdropRef.current && panelRef.current) {
            // Set initial states with GSAP
            gsap.set(backdropRef.current, { opacity: 0 })
            gsap.set(panelRef.current, { x: '100%' })

            // Small delay to ensure set completes
            setTimeout(() => {
              // Animate backdrop fade in
              gsap.to(backdropRef.current, {
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => {
                  isAnimatingRef.current = false
                },
              })

              // Animate panel slide in from right
              gsap.to(panelRef.current, {
                x: 0,
                duration: 0.6,
                ease: 'power2.out',
              })
            }, 10)
          }
        })
      })
    }
  }, [isOpen, member])

  const handleClose = () => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    if (backdropRef.current && panelRef.current) {
      // Animate backdrop fade out
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })

      // Animate panel slide out to right
      gsap.to(panelRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => {
          setShouldRender(false)
          isAnimatingRef.current = false
          onClose()
        },
      })
    }
  }

  if (!shouldRender || !member) return null

  return (
    <div
      className="fixed inset-0 z-[3000]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black bg-opacity-60 cursor-pointer z-40"
        onClick={handleClose}
        style={{ opacity: 0 }}
      />

      {/* Modal positioning */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center md:justify-end p-4 md:p-8 z-50">
        <div
          ref={panelRef}
          className="pointer-events-auto w-full max-w-xl bg-white shadow-2xl relative lg:max-w-3xl"
        >
          <div className="relative max-h-[95vh] overflow-y-auto">
            {/* Close button */}

            {/* Content */}
            <div className="m-8 relative">
              <button
                onClick={handleClose}
                className="absolute top-0 right-0  hover:opacity-50 w-4 lg:w-6"
                aria-label="Close modal"
              >
                <XIconBlack />
              </button>
              <img
                src={member.image.src}
                alt={member.image.alt}
                className="w-2/3 mb-4 lg:w-1/2 lg:mb-5"
              />

              <h2
                id="modal-title"
                className="font-normal text-2xl lg:text-4xl mb-3 lg:mb-5"
              >
                {member.name}
              </h2>

              <p className="font-bold lg:text-lgplus font-roboto mb-1 text-pretty lg:mb-2">
                {member.title}
              </p>

              <p className="text-sm  text-pretty">{member.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
