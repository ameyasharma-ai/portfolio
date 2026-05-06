import { ParticleSphere } from './model/particle-sphere'
import { HomeTitle } from './content/home-title'
import { HomeInfoGrid } from './content/home-info-grid'
import { AvailabilityStatus } from './content/availability-status'

export function Home() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-[100svh] overflow-hidden flex flex-col bg-background"
    >
      <div className="absolute inset-0 bg-background pointer-events-none">
        <ParticleSphere />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 flex-1 flex flex-col w-full pb-6 md:pb-10 pt-20 md:pt-24 px-6 md:px-16 pointer-events-none">
        
        {/* Title Section (Flex grow, centers content, prevents overlap) */}
        <div className="flex-1 flex flex-col justify-center w-full min-h-0 py-8">
           <HomeTitle />
        </div>

        {/* Bottom Section (Fixed at bottom) */}
        <div className="w-full flex-shrink-0 mt-auto">
           <HomeInfoGrid>
             <AvailabilityStatus />
           </HomeInfoGrid>
        </div>

      </div>
    </section>
  )
}
