import { useRef, useEffect, useState } from 'react'
import create from '@lottiefiles/lottie-interactivity'

export type LottieHoverProps = {
  container: string
  id: string
  src: string
}
export const LottieHover = ({ container, id, src }: LottieHoverProps) => {
  const myRef = useRef<HTMLDivElement>(null)
  const myRef2 = useRef<HTMLElement>(null)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    import('@lottiefiles/lottie-player')
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    }, {})
    observer.observe(myRef.current!)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (myRef2.current) {
      myRef2.current.addEventListener('load', () => {
        create({
          container: `#${container}`,
          mode: 'cursor',
          player: `#${id}`,
          actions: [
            {
              position: { x: [0, 1], y: [0, 1] },
              type: 'play',
              frames: [10, 60],
            },
            {
              position: { x: -1, y: -1 },
              type: 'stop',
              frames: [10],
            },
          ],
        })
      })
    }
  }, [isVisible, container, id])

  const lottiePlayer1 = (
    <>
      <lottie-player id={id} ref={myRef2} loop src={src} />
    </>
  )
  return (
    <div ref={myRef}>
      {!isVisible ? <></> : lottiePlayer1}
    </div>
  )
}
