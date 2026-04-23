"use client"

export function HomeTitle() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="px-6 md:px-16 -mt-10 md:-mt-20 -translate-x-30">

        <h1 className="font-heading text-left text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tight text-foreground">
          BUILDING FAST <br />
          SCALABLE WEB APPS
        </h1>

        <p className="mt-6 max-w-xl text-left text-base md:text-lg text-muted-foreground">
          I’m a Next.js developer based in India, specializing in modern, high-performance web applications.
          Open to freelance projects and internship opportunities.
        </p>

        <div className="mt-6 flex gap-4">

          <button
            onClick={() => handleScroll("case-studies")}
            className="px-6 py-3 rounded-xl font-medium text-foreground
              backdrop-blur-md bg-white/10 border border-white/20
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              hover:bg-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
              active:scale-95 transition-all duration-300"
          >
            View My Work
          </button>

          <button
            onClick={openResume}
            className="px-6 py-3 rounded-xl font-medium text-foreground
              backdrop-blur-md bg-white/5 border border-white/20
              shadow-[0_6px_20px_rgba(0,0,0,0.1)]
              hover:bg-white/15 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
              active:scale-95 transition-all duration-300"
          >
            My Resume
          </button>

        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          • 🌐 Remote • 💼 Open to Work
        </div>

      </div>
    </div>
  )
}