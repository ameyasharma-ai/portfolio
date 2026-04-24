import { ResultsIcon } from "@/components/icons/focus/results-icon";
import { SecureIcon } from "@/components/icons/focus/secure-icon";
import { FastIcon } from "@/components/icons/focus/fast-icon";

export function Focus() {
  return (
    <div className="w-full flex flex-col gap-4">

      {/* RESULTS */}
      <div className="bg-black border border-[#353739] rounded-3xl p-6 
        flex flex-col md:flex-row items-center md:items-center gap-6
        transition-all duration-300 hover:border-[#555759] hover:-translate-y-1">

        {/* Icon */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <ResultsIcon className="w-20 h-20 md:w-24 md:h-24" />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h4 className="font-heading text-[#f2f2f2] text-lg md:text-xl mb-2">
            RESULTS THAT MATTER
          </h4>

          <p className="text-[#b3b3b3] font-light text-sm md:text-base leading-relaxed">
            I build high-performance applications that scale, convert, and actually get used.
          </p>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* SECURE */}
        <div className="bg-black border border-[#353739] rounded-3xl p-6 
          flex flex-col items-center text-center
          transition-all duration-300 hover:border-[#555759] hover:-translate-y-1">

          <SecureIcon className="w-12 h-12 md:w-14 md:h-14 mb-4" />

          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">
            BUILT SECURE
          </h4>

          <p className="text-[#b3b3b3] font-light text-sm md:text-base leading-relaxed max-w-xs">
            Authentication, API protection, and production-grade best practices built in.
          </p>
        </div>

        {/* FAST */}
        <div className="bg-black border border-[#353739] rounded-3xl p-6 
          flex flex-col items-center text-center
          transition-all duration-300 hover:border-[#555759] hover:-translate-y-1">

          <FastIcon className="w-12 h-12 md:w-14 md:h-14 mb-4" />

          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">
            SHIP FAST
          </h4>

          <p className="text-[#b3b3b3] font-light text-sm md:text-base leading-relaxed max-w-xs">
            From idea to production in weeks, with clean and scalable architecture.
          </p>
        </div>

      </div>
    </div>
  );
}