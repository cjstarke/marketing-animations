import { useEffect, useRef, useState, useCallback } from 'react'

const VideoCarousel = () => {
  const videos = [
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_1_0eea90faaf.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_1_327b7bf4c3.webm',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder1_2af48b0e4c.webp',
      width: '192px',
    },
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_2_37ba8d877b.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_2_6785aa4d16.webm',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder2_27be678d64.webp',
      width: '160px',
    },
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_3_f4288f7700.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_3_c097d49811.webm',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder3_c6e201f1ab.webp',
      width: '192px',
    },
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_4_4254aaf0a5.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_4_d9dccf213a.webm',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder4_bc3ce7e2f9.webp',
      width: '192px',
    },
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_5_77454a4500.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_5_ce87116775.webm',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder_8eea4a5226.webp',
      width: '192px',
    },
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_6_a398fa4289.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_6_2b0493e76f.webm',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder6_2f2a31e1ba.webp',
      width: '192px',
    },
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_7_01b39e8ff5.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_7_b3035af944.webm',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder7_12a42c2bf6.webp',
      width: '160px',
    },
    {
      src: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_8_c3325ee113.mp4',
      webm: 'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/Converge_Work_Sample_8_c3325ee113.mp4',
      poster:
        'https://converge-strapi-prod.s3.us-east-1.amazonaws.com/placeholder8_3b20cfcb41.webp',
      width: '192px',
    },
  ]

  const loopedVideos = [...videos, ...videos, ...videos]

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolling, setIsScrolling] = useState(true)

  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const lastTimeRef = useRef<number>(0)

  const videoPadding = 8
  const scrollSpeed = 60

  const LOOP_POINT = videos.reduce((total, video) => {
    const width = parseInt(video.width)
    return total + width + videoPadding
  }, 0)

  // Observe container instead of individual videos for better performance
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play all videos when carousel is visible
          videoRefs.current.forEach((video) => {
            if (video) {
              video.play().catch(() => {})
            }
          })
        } else {
          // Pause all videos when carousel leaves viewport
          videoRefs.current.forEach((video) => {
            if (video) {
              video.pause()
            }
          })
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    // Observe the container instead of each video
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Auto-scrolling animation with timestamp-based movement
  useEffect(() => {
    if (isScrolling) {
      const animate = (timestamp: number) => {
        if (lastTimeRef.current === 0) {
          lastTimeRef.current = timestamp
        }

        // Calculate time elapsed since last frame (in seconds)
        const deltaTime = (timestamp - lastTimeRef.current) / 1000
        lastTimeRef.current = timestamp

        // Calculate pixels to move based on time elapsed
        const pixelsToMove = scrollSpeed * deltaTime

        setScrollPosition((prev) => {
          const newPos = prev + pixelsToMove
          // Reset to equivalent position when we've scrolled past one full set
          return newPos >= LOOP_POINT ? newPos - LOOP_POINT : newPos
        })

        animationRef.current = requestAnimationFrame(animate)
      }

      animationRef.current = requestAnimationFrame(animate)
    } else {
      // Reset timestamp when paused so it doesn't jump when resumed
      lastTimeRef.current = 0
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      lastTimeRef.current = 0
    }
  }, [isScrolling, LOOP_POINT, scrollSpeed])

  // Handle video click to pause/resume
  const handleVideoClick = () => {
    setIsScrolling(!isScrolling)
  }

  // Callback ref to store video elements
  const setVideoRef = useCallback(
    (element: HTMLVideoElement | null, index: number) => {
      videoRefs.current[index] = element
    },
    []
  )

  return (
    <div className="w-full bg-white pt-20 lg:pt-28 text-black pb-20">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md lg:max-w-screen-2xl px-4 flex flex-col items-center text-center text-pretty">
          <h2 className="text-4xl lg:text-5xlplus  text-pretty mb-3 lg:mb-5">
            All creative is performance creative
          </h2>
          <p className="text-lg font-bold text-darkPink leading-tight lg:text-xl">
            Insight led, always on, designed for action.
          </p>
        </div>
      </div>

      {/* Video Carousel */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden mt-10 lg:mt-16"
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            willChange: 'transform',
          }}
        >
          {loopedVideos.map((video, index) => (
            <div
              key={`${video.src}-${index}`}
              className="flex-shrink-0 cursor-pointer"
              style={{
                marginRight: `${videoPadding}px`,
              }}
              onClick={handleVideoClick}
            >
              <video
                ref={(el) => setVideoRef(el, index)}
                poster={video.poster}
                loop
                muted
                playsInline
                preload="none"
                style={{
                  width: video.width,
                  height: 'auto',
                  display: 'block',
                }}
              >
                {video.webm && <source src={video.webm} type="video/webm" />}
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoCarousel
