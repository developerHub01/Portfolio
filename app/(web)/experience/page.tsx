import MainHeading from "@/components/headings/MainHeading";
import SecondaryHeading from "@/components/headings/SecondaryHeading";
import FrameV1 from "@/components/ui/frame-v1";
import PageWrapper from "@/components/ui/page-wrapper";
import { Separator } from "@/components/ui/separator";
import { EXPERIENCES } from "@/constant/experience.constant";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

const Page = () => {
  return (
    <PageWrapper>
      <MainHeading>Experience</MainHeading>

      <div className="flex flex-col gap-8 sm:gap-12">
        <div className="flex flex-col gap-6">
          <SecondaryHeading>Professional Journey</SecondaryHeading>

          {EXPERIENCES.map((experience, index) => (
            <FrameV1
              key={experience.id}
              className="opacity-0 group-hover:opacity-100"
            >
              <article className="bg-secondary p-5 sm:p-8 lg:p-10 flex flex-col gap-6 shadow-awesome-dark">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                        Experience {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[10px] font-mono text-muted-foreground">
                        / {experience.employmentType}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                      {experience.position}
                    </h2>

                    <p className="text-sm sm:text-base text-primary font-medium">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/30 px-3 py-2 w-fit">
                    {experience.status}
                  </span>
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-x-5 gap-y-3 text-muted-foreground">
                  <div className="flex items-center gap-2 text-xs">
                    <CalendarDays size={14} />
                    {experience.duration}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <MapPin size={14} />
                    {experience.location}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <BriefcaseBusiness size={14} />
                    {experience.workMode}
                  </div>
                </div>

                <Separator />

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-foreground">
                    Responsibilities & Contributions
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {experience.responsibilities.map(
                      (responsibility, responsibilityIndex) => (
                        <li
                          key={responsibilityIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary font-mono mt-0.5 leading-normal font-bold">
                            0{responsibilityIndex + 1}.
                          </span>
                          <p className="leading-normal">{responsibility}</p>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-col gap-3">
                  <Separator />

                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-foreground">
                    Tools & Technologies
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map(technology => (
                      <span
                        key={technology}
                        className="text-[11px] sm:text-xs font-mono text-muted-foreground bg-background/60 border border-border/50 px-3 py-2 hover:text-primary hover:border-primary/40 transition-colors"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FrameV1>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
