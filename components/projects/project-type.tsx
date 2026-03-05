import { ProjectDataInterface } from "@/types/projects.types";

interface Props {
  projectType: ProjectDataInterface["projectType"];
}

const ProjectType = ({ projectType }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-accent/20 w-fit px-2 py-1 border-l-2 border-primary font-bold">
        Project Type:
      </h3>
      <div className="group/tech flex flex-wrap gap-2">
        {(Array.isArray(projectType) ? projectType : [projectType]).map(
          type => (
            <div
              key={type}
              className="group/link inline-flex items-center gap-2 text-[10px] font-mono font-bold text-foreground bg-accent/20 px-3 py-2 border border-border/40 hover:border-primary/40 hover:text-primary transition-all duration-300 shadow-awesome-light uppercase select-none"
            >
              {type}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default ProjectType;
