import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TechItemInterface } from "@/types/projects.types";
import Image from "next/image";

interface Props {
  techStack: Array<TechItemInterface>;
}

const ProjectTechStack = ({ techStack }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-accent/20 w-fit px-2 py-1 border-l-2 border-primary font-bold">
        Stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => {
          return (
            <Tooltip key={tech.id}>
              <TooltipTrigger asChild>
                <div className="w-10 h-10 bg-accent/30 p-2 flex items-center justify-center shadow-awesome-light hover:bg-accent transition-all duration-300 cursor-default border border-border/30">
                  <Image
                    src={`/skills/${tech.id}.png`}
                    width={24}
                    height={24}
                    alt={tech.label}
                    className="w-full h-full object-contain"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="bg-foreground text-background text-[10px] rounded-none px-2 py-1"
              >
                {tech.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTechStack;
