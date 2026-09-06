import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Draggable } from 'gsap/dist/Draggable'
import { useGSAP } from '@gsap/react'
import { RefObject } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP)
}

export { gsap, ScrollTrigger, Draggable, useGSAP }
export default gsap

export interface FadeInConfig {
  opacity?: number
  y?: number
  duration?: number
  ease?: string
  scrollTrigger?: {
    start?: string
    end?: string
    toggleActions?: string
  }
  delay?: number
}

const DEFAULT_FADE_IN_CONFIG: Required<FadeInConfig> = {
  opacity: 0,
  y: 100,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    start: 'top 90%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
  },
  delay: 0,
}

const mergeConfig = (
  config: Partial<FadeInConfig> = {}
): Required<FadeInConfig> => ({
  ...DEFAULT_FADE_IN_CONFIG,
  ...config,
  scrollTrigger: {
    ...DEFAULT_FADE_IN_CONFIG.scrollTrigger,
    ...(config.scrollTrigger || {}),
  },
})

const extractElements = (
  elementRefs:
    | RefObject<HTMLElement>
    | RefObject<HTMLElement[]>
    | RefObject<HTMLElement>[]
): HTMLElement[] => {
  if (Array.isArray(elementRefs)) {
    return elementRefs
      .map((ref) => ref.current)
      .filter(Boolean) as HTMLElement[]
  }

  if (!elementRefs.current) return []

  return Array.isArray(elementRefs.current)
    ? elementRefs.current.filter(Boolean)
    : [elementRefs.current]
}

export const applyScrollTriggerFadeIn = (
  elements: HTMLElement[] | HTMLElement,
  config: Partial<FadeInConfig> = {}
): gsap.core.Tween[] => {
  const elementsArray = (
    Array.isArray(elements) ? elements : [elements]
  ).filter(Boolean)
  if (elementsArray.length === 0) return []

  const finalConfig = mergeConfig(config)

  gsap.set(elementsArray, {
    opacity: finalConfig.opacity,
    y: finalConfig.y,
  })

  return elementsArray.map((element) =>
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: finalConfig.duration,
      ease: finalConfig.ease,
      delay: finalConfig.delay,
      scrollTrigger: {
        trigger: element,
        start: finalConfig.scrollTrigger.start,
        end: finalConfig.scrollTrigger.end,
        toggleActions: finalConfig.scrollTrigger.toggleActions,
      },
    })
  )
}

export const useScrollTriggerFadeIn = (
  elementRefs:
    | RefObject<HTMLElement>
    | RefObject<HTMLElement[]>
    | RefObject<HTMLElement>[],
  config: Partial<FadeInConfig> = {}
) => {
  useGSAP(() => {
    const elements = extractElements(elementRefs)
    if (elements.length > 0) {
      applyScrollTriggerFadeIn(elements, config)
    }
  })
}
