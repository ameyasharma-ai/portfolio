import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { useLoadingStore } from '@/stores/loadingStore'
import type { Application } from '@splinetool/runtime'

export function ParticleSphere() {
  const [splineApp, setSplineApp] = useState<Application | null>(null)
  const complete = useLoadingStore(state => state.complete)

  // Function to get appropriate zoom level based on screen size
  const getZoomLevel = () => {
    const width = window.innerWidth
    if (width < 768) { // Mobile
      return 0.95
    } else if (width < 1024) { // Tablet (md to lg breakpoint)
      return 1.2
    } else { // Desktop
      return 1.6
    }
  }

  function onLoad(spline: Application) {

    setSplineApp(spline)

    // Set initial zoom based on current screen size
    const zoomLevel = getZoomLevel()
    spline.setZoom(zoomLevel)

    // Notify that initial loading is complete
    complete();
  }

  // Handle resize for zoom adjustments
  useEffect(() => {
    const handleResize = () => {
      // Adjust zoom if we have a spline app
      if (splineApp) {
        const zoomLevel = getZoomLevel()
        splineApp.setZoom(zoomLevel)

      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [splineApp])

  return (
    <Spline
      scene="/scene-f0f0f0.splinecode"
      onLoad={onLoad}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
