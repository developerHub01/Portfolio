import ProjectFeaturesWrapper from "@/components/projects/project-features-wrapper";

interface Props {
  features?: Array<string>;
}

const ProjectFeatures = ({ features }: Props) => {
  if (!features?.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-accent/20 w-fit px-2 py-1 border-l-2 border-primary font-bold">
        Key Features
      </h3>
      <ProjectFeaturesWrapper>
        {features?.map(feature => {
          return (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
            >
              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
              {feature}
            </li>
          );
        })}
      </ProjectFeaturesWrapper>
    </div>
  );
};

export default ProjectFeatures;
