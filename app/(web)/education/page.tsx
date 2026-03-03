import Container from "@/components/ui/container";
import MainHeading from "@/components/headings/MainHeading";
import FrameV1 from "@/components/ui/frame-v1";
import { AcademicCapIcon, CalendarIcon, MapPinIcon } from "@/components/icons";

const Page = () => {
  return (
    <div className="w-full h-full p-5 lg:p-10">
      <Container className="flex flex-col gap-12 pb-16">
        <MainHeading>Education</MainHeading>

        <FrameV1 className="opacity-0 group-hover:opacity-100">
          <div className="bg-secondary p-8 sm:p-10 flex flex-col gap-8 shadow-awesome1 border border-border/30">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent text-primary shadow-awesome1">
                  <AcademicCapIcon size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-black text-foreground leading-tight">
                  BSc in Computer Science & Engineering
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-muted-foreground font-mono">
                <span className="flex items-center gap-2 bg-accent/20 px-3 py-1 border border-border/30">
                  <MapPinIcon size={16} />
                  North East University, Bangladesh
                </span>
                <span className="flex items-center gap-2 bg-accent/20 px-3 py-1 border border-border/30 text-primary font-bold">
                  <CalendarIcon size={16} />
                  2021 — 2025
                </span>
              </div>
            </div>

            <div className="h-px bg-border/20" />

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Completed a comprehensive four-year program covering core computer
              science fundamentals, software engineering practices, and modern
              web technologies. This academic foundation, combined with
              self-directed projects, strengthened my engineering discipline and
              deepened my passion for frontend development.
            </p>
          </div>
        </FrameV1>
      </Container>
    </div>
  );
};

export default Page;
