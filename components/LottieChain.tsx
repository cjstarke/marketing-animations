import { useRef, useEffect, useState } from 'react'
import create from '@lottiefiles/lottie-interactivity'

export type LottieChainProps = {
    id: string
    src: string
    className?: string
    frames: number[]
}

export const LottieChain = ({
    id,
    className,
    src,
    frames,

}: LottieChainProps) => {

    const myRef = useRef<HTMLDivElement>(null)
    const myRef2 = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isInitial, setIsInitiial] = useState(true)

    useEffect(() => {
        import("@lottiefiles/lottie-player");
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
        if (myRef2.current && isInitial) {
            myRef2.current.addEventListener('load', () => {
                create({
                    mode: 'chain',
                    player: `#${id}`,
                    actions: [
                        {
                            state: 'autoplay',
                            transition: 'onComplete',
                            frames: [frames[0], frames[1]],
                        },
                        {
                            state: 'loop',
                            frames: [frames[1], frames[2]],
                            transition: 'none'
                        }
                    ]
                });
                let shadow = document.getElementById(`${id}`)
                let style = document.createElement('style')
                style.innerHTML = `path { strokeWidth: 3px; vector-effect: non-scaling-stroke } g {stroke:#FFB78E; strokeWidth: 3px; vector-effect: non-scaling-stroke } @media (max-width: 768px) {path { strokeWidth: 2px } g { strokeWidth: 2px }}`
                if (shadow) {
                  if (shadow.shadowRoot) {
                    shadow.shadowRoot.appendChild( style )
                  }
                }
            })
            setIsInitiial(false)
        }
    }, [isVisible, frames, id, isInitial])

    const lottiePlayer1 = <><lottie-player id={id}
        ref={myRef2}
        loop
        autoplay
        src={src}
    /></>
    
    return (
        <div className={className} ref={myRef}>
            {!isVisible && isInitial ? <></> :  lottiePlayer1  }
        </div>
    )
}
