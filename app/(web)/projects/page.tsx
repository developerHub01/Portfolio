import MainHeading from "@/components/headings/MainHeading";
import FrameV1 from "@/components/ui/frame-v1";
import ProjectGallery from "@/components/projects/project-gallery/project-gallery";
import { PROJECTS } from "@/constant/projects.constant";
import ProjectTechStack from "@/components/projects/project-teach-stack";
import ProjectHeader from "@/components/projects/project-header";
import ProjectFeatures from "@/components/projects/project-features";
import ProjectLinks from "@/components/projects/project-links";
import ProjectLeftWrapper from "@/components/projects/project-left-wrapper";
import PageWrapper from "@/components/ui/page-wrapper";
import ProjectGalleryProvider from "@/context/project-gallery-prodiver";
import ProjectVideoProvider from "@/context/project-video-provider";
import ProjectVideoLightbox from "@/components/projects/project-video-lightbox";

export default function Page() {
  return (
    <PageWrapper>
      <MainHeading>Projects</MainHeading>
      <div className="flex flex-col gap-10 sm:gap-16">
        {PROJECTS.map((project, index) => {
          const projectVideoLink = project.links.find(
            link => link.type === "video",
          );
          return (
            <FrameV1
              key={project.id}
              className="opacity-0 group-hover:opacity-100"
            >
              <ProjectVideoProvider
                videoUrl={projectVideoLink?.url ?? ""}
                videoTitle={
                  projectVideoLink?.label ?? `${project.title} video demo`
                }
              >
                <div className="bg-secondary p-5 sm:p-10 flex flex-col lg:flex-row gap-8 xl:gap-12 shadow-awesome-dark">
                  {/* Left Column */}
                  <ProjectLeftWrapper>
                    <ProjectGalleryProvider
                      images={project.images}
                      title={project.title}
                    >
                      <ProjectGallery
                        images={project.images}
                        title={project.title}
                      />
                    </ProjectGalleryProvider>

                    {/* Desktop Only Stack */}
                    <div className="hidden lg:flex flex-col gap-6">
                      <ProjectTechStack techStack={project.techStack} />
                      <div className="h-px bg-border/20 mt-auto" />
                      <ProjectLinks links={project.links} />
                    </div>
                  </ProjectLeftWrapper>

                  {/* Right Column */}
                  <div className="flex flex-col gap-8 flex-1 min-w-0">
                    <ProjectHeader
                      index={index}
                      subtitle={project.subtitle}
                      title={project.title}
                      year={project.year}
                      status={project.status}
                      version={project.version}
                      duration={project.duration}
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
                <ProjectVideoLightbox />
              </ProjectVideoProvider>
            </FrameV1>
          );
        })}
      </div>
    </PageWrapper>
  );
}
