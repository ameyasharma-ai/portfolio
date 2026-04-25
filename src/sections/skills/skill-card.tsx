import type { SkillCardProps } from "./types";

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <div key={index} className="bg-card">
      <div className="p-6 flex flex-col items-center justify-center text-center h-[180px] w-full">
        <div className="mb-4">
          {skill.icon}
        </div>
        <span className="font-body text-sm text-foreground font-light">
          {skill.name}
        </span>
      </div>
    </div>
  );
}