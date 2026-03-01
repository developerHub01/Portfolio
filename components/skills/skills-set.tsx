import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { SkillInterface } from "@/types/skills.types";

interface SkillsSetProps extends ComponentProps<"div"> {
  skills: Array<SkillInterface>;
  title?: string;
}

const SkillsSet = ({ className = "", skills, ...props }: SkillsSetProps) => (
  <div
    className={cn(
      "grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4",
      className,
    )}
    {...props}
  >
    {skills.map(({ id, label }) => (
      <AspectRatio
        ratio={1}
        key={id}
        className="p-8 flex flex-col justify-center items-center gap-2 hover:bg-accent select-none cursor-pointer transition-[background] duration-100"
        tabIndex={0}
      >
        <Image
          src={`/skills/${id}.png`}
          width={80}
          height={80}
          className="w-full h-full object-contain"
          alt={label}
        />
        <p className="text-center text-xs">{label}</p>
      </AspectRatio>
    ))}
  </div>
);

export default SkillsSet;
