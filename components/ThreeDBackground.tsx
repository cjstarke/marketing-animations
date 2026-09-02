import { useEffect, useRef, ReactNode } from 'react'
import * as THREE from 'three'

// GLSL Shaders
const vertexShader = `
  attribute float size;
  attribute vec3 customColor;

  varying vec3 vColor;

  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( 300.0 / -mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  uniform vec3 color;
  uniform sampler2D pointTexture;
  uniform float alphaTest;

  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4( color * vColor, 1.0 );
    gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
    if ( gl_FragColor.a < alphaTest ) discard;
  }
`

interface ThreeDBackgroundProps {
  className?: string
  particleSize?: number
  children?: ReactNode
  enableHover?: boolean
  geometrySegments?: number
}

const ThreeDBackground: React.FC<ThreeDBackgroundProps> = ({
  className = '',
  particleSize = 20,
  children,
  enableHover = true,
  geometrySegments = 24,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let renderer: THREE.WebGLRenderer
    let scene: THREE.Scene
    let camera: THREE.PerspectiveCamera
    let particles: THREE.Points
    let raycaster: THREE.Raycaster | null = null
    let pointer: THREE.Vector2 | null = null
    let INTERSECTED: number | null = null
    let animationFrameId: number

    // Initialize Three.js scene
    const init = () => {
      scene = new THREE.Scene()

      // Setup camera
      camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        10000
      )
      camera.position.z = 250

      // Create box geometry for particles with configurable segments
      let boxGeometry = new THREE.BoxGeometry(
        300, 
        300, 
        200, 
        geometrySegments, 
        geometrySegments, 
        geometrySegments
      )

      // Remove normal and UV attributes
      boxGeometry.deleteAttribute('normal')
      boxGeometry.deleteAttribute('uv')

      // Merge vertices - using toNonIndexed() as alternative to mergeVertices
      const geometry = boxGeometry.toNonIndexed()

      const positionAttribute = geometry.getAttribute('position')

      // Create colors and sizes for particles
      const colors: number[] = []
      const sizes: number[] = []
      const color = new THREE.Color()

      // Set all particles to darkPink (#FF0062)
      color.setRGB(1.0, 0.0, 0.384)

      for (let i = 0, l = positionAttribute.count; i < l; i++) {
        color.toArray(colors, i * 3)
        sizes[i] = particleSize * 1.0
      }

      geometry.setAttribute(
        'customColor',
        new THREE.Float32BufferAttribute(colors, 3)
      )
      geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

      // Create shader material
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xffffff) },
          pointTexture: {
            value: new THREE.TextureLoader().load('/textures/sprites/disc.svg'),
          },
          alphaTest: { value: 0.9 },
        },
        vertexShader,
        fragmentShader,
      })

      // Create particle system
      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Setup renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(renderer.domElement)

      // Setup raycaster for interactivity only if hover is enabled
      if (enableHover) {
        raycaster = new THREE.Raycaster()
        pointer = new THREE.Vector2()
        container.addEventListener('pointermove', onPointerMove)
      }

      // Event listeners
      window.addEventListener('resize', onWindowResize)

      // Start animation loop
      animate()
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!pointer) return
      const rect = container.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1
    }

    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      render()
    }

    const render = () => {
      // Rotate particles
      particles.rotation.x += 0.0005
      particles.rotation.y += 0.001

      // Only perform hover interactions if enabled
      if (enableHover && raycaster && pointer) {
        const geometry = particles.geometry
        const attributes = geometry.attributes

        // Check for intersections with raycaster
        raycaster.setFromCamera(pointer, camera)
        const intersects = raycaster.intersectObject(particles)

        if (intersects.length > 0) {
          const intersectedIndex = intersects[0].index

          if (
            intersectedIndex !== undefined &&
            INTERSECTED !== intersectedIndex
          ) {
            // Reset previous intersected particle
            if (INTERSECTED !== null) {
              ;(attributes.size as THREE.BufferAttribute).array[INTERSECTED] =
                particleSize
            }

            INTERSECTED = intersectedIndex
            ;(attributes.size as THREE.BufferAttribute).array[INTERSECTED] =
              particleSize * 1.25
            ;(attributes.size as THREE.BufferAttribute).needsUpdate = true
          }
        } else if (INTERSECTED !== null) {
          // Reset when no intersection
          ;(attributes.size as THREE.BufferAttribute).array[INTERSECTED] =
            particleSize
          ;(attributes.size as THREE.BufferAttribute).needsUpdate = true
          INTERSECTED = null
        }
      }

      renderer.render(scene, camera)
    }

    // Initialize scene
    init()

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', onWindowResize)
      if (enableHover) {
        container.removeEventListener('pointermove', onPointerMove)
      }

      if (renderer) {
        renderer.dispose()
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement)
        }
      }

      if (particles) {
        particles.geometry.dispose()
        if (particles.material instanceof THREE.Material) {
          particles.material.dispose()
        }
      }
    }
  }, [particleSize, enableHover, geometrySegments])

  return (
    <div
      className={`w-full bg-black relative ${className}`}
      style={{ minHeight: '1200px', zIndex: 1 }}
    >
      <div 
        ref={containerRef} 
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      {children && (
        <div className="relative flex items-center justify-center pointer-events-none overflow-x-clip" style={{ minHeight: '1200px', zIndex: 10 }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default ThreeDBackground
