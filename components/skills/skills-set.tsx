import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { SkillInterface } from "@/types/skills.types";
import FrameV1 from "@/components/ui/frame-v1";

interface SkillsSetProps extends ComponentProps<"div"> {
  skills: Array<SkillInterface>;
  title?: string;
}

const SkillsSet = ({ className = "", skills, ...props }: SkillsSetProps) => (
  <div
    className={cn(
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4",
      className,
    )}
    {...props}
  >
    {skills.map(({ id, label }) => (
      <FrameV1 key={id} className="opacity-0 group-hover:opacity-100">
        <AspectRatio
          ratio={1}
          className={cn(
            "p-4 flex flex-col justify-center items-center gap-3 bg-accent/10  select-none cursor-pointer",
            "shadow-awesome-light",
            "hover:bg-accent",
            "transition-all duration-300",
          )}
          tabIndex={0}
        >
          <Image
            src={`/skills/${id}.png`}
            width={80}
            height={80}
            className="w-full h-full object-contain max-h-8 max-w-8 sm:max-h-14 sm:max-w-14"
            alt={label}
          />
          <p className="text-center text-[10px] sm:text-xs">{label}</p>
        </AspectRatio>
      </FrameV1>
    ))}
  </div>
);

export default SkillsSet;
