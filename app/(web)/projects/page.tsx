import Container from "@/components/ui/container";
import MainHeading from "@/components/headings/MainHeading";
import FrameV1 from "@/components/ui/frame-v1";
import ProjectGallery from "@/components/projects/project-gallery";
import { PROJECTS } from "@/constant/projects.constant";
import ProjectTechStack from "@/components/projects/project-teach-stack";
import ProjectHeader from "@/components/projects/project-header";
import ProjectFeatures from "@/components/projects/project-features";
import ProjectLinks from "@/components/projects/project-links";
import ProjectLeftWrapper from "@/components/projects/project-left-wrapper";

export default function Page() {
  return (
    <div className="w-full h-full p-5 lg:p-10 overflow-y-auto">
      <Container className="flex flex-col gap-12 pb-16">
        <MainHeading>Projects</MainHeading>
        <div className="flex flex-col gap-16">
          {PROJECTS.map((project, index) => (
            <FrameV1
              key={project.id}
              className="opacity-0 group-hover:opacity-100"
            >
              <div className="bg-secondary p-8 sm:p-10 flex flex-col lg:flex-row gap-8 xl:gap-12 shadow-awesome1">
                {/* Left Column: Image + (Stack on lg) */}
                <ProjectLeftWrapper>
                  <ProjectGallery
                    images={project.images}
                    title={project.title}
                  />

                  {/* Desktop Only Stack */}
                  <div className="hidden lg:flex flex-col gap-6">
                    <ProjectTechStack techStack={project.techStack} />
                    <div className="h-px bg-border/20 mt-auto" />
                    <ProjectLinks links={project.links} />
                  </div>
                </ProjectLeftWrapper>

                {/* Right Column: Info + Features + (Stack on mobile) + Links (Always) */}
                <div className="flex flex-col gap-8 flex-1 min-w-0">
                  <ProjectHeader
                    index={index}
                    subtitle={project.subtitle}
                    title={project.title}
                    year={project.year}
                  />

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="h-px bg-border/20" />

                  <ProjectFeatures features={project.features} />

                  {/* Mobile Only Stack */}
                  <div className="flex lg:hidden flex-col gap-6">
                    <div className="h-px bg-border/20" />
                    <ProjectTechStack techStack={project.techStack} />
                    <div className="h-px bg-border/20 mt-auto" />
                    <ProjectLinks links={project.links} />
                  </div>
                </div>
              </div>
            </FrameV1>
          ))}
        </div>
      </Container>
    </div>
  );
}
