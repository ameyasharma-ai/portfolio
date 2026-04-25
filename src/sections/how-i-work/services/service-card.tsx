import type { ServiceCardProps } from "./types";

export function ServiceCard({ icon, iconBg, title, description }: ServiceCardProps) {
  return (
    // flex-none prevents shrinking; fixed width keeps scrollWidth truthful
    <div className="flex-none w-80 relative h-full">
      {/* Desktop layout (>= 768px) */}
      <div className="hidden md:block bg-card border border-border rounded-3xl p-6">
        <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mb-6`} aria-hidden="true">
          {icon}
        </div>
        <h4 className="font-body font-medium text-[#f2f2f2] text-xl mb-4 leading-tight">
          {title}
        </h4>
        <p className="text-[#b3b3b3] font-body font-light text-sm leading-relaxed mb-17 whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Mobile layout (< 768px) */}
      <div className="md:hidden bg-card border border-border rounded-3xl p-6">
        <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h4 className="font-body font-medium text-[#f2f2f2] text-xl mb-4 leading-tight">
          {title}
        </h4>
        <p className="text-[#b3b3b3] font-body font-light text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
