import Container from "@/components/ui/container";
import MainHeading from "@/components/headings/MainHeading";
import SecondaryHeading from "@/components/headings/SecondaryHeading";
import FrameV1 from "@/components/ui/frame-v1";
import { PERSONAL_INFO } from "@/constant/home.constant";
import PersonalInfoWrapper from "@/components/about/personal-info-wrapper";

const Page = () => {
  return (
    <div className="w-full h-full p-5 lg:p-10 overflow-y-auto">
      <Container className="flex flex-col gap-12 pb-16">
        <MainHeading>About Me</MainHeading>

        {/* Bio */}
        <FrameV1 className="opacity-0 group-hover:opacity-100">
          <div className="bg-secondary p-8 sm:p-10 flex flex-col gap-6 shadow-awesome1 transition-all duration-300">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              I&apos;m{" "}
              <span className="text-foreground font-medium">
                Abdus Shohid Shakil
              </span>
              , a fullstack JavaScript developer focused primarily on frontend.
              I build across web and desktop using modern JS/TS ecosystems —
              React, Next.js, Electron, Vue, Nuxt, Node, and more.
            </p>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              My flagship project{" "}
              <span className="text-primary font-medium">APIBolt</span> is a
              desktop REST API client I designed and built solo over 11 months —
              auth systems, env variables, theme builder, code generation across
              languages. The whole thing, from scratch.
            </p>
          </div>
        </FrameV1>

        {/* Personal Info */}
        <div className="flex flex-col gap-6">
          <SecondaryHeading>Info</SecondaryHeading>

          <PersonalInfoWrapper>
            {PERSONAL_INFO.map(info => (
              <FrameV1
                key={info.label}
                className="opacity-0 group-hover:opacity-100"
              >
                <div className="bg-secondary/50 p-4 sm:p-6 flex flex-col gap-2 shadow-awesome1 hover:bg-accent transition-all duration-300 md:group-has-[:hover]/container:not-hover:blur-xs hover:blur-none border border-border/30 h-full">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                    {info.label}
                  </span>
                  <span className="text-xs sm:text-sm font-primary font-semibold text-foreground wrap-break-word">
                    {info.value}
                  </span>
                </div>
              </FrameV1>
            ))}
          </PersonalInfoWrapper>
        </div>
      </Container>
    </div>
  );
};

export default Page;
