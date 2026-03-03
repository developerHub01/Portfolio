import FrameV1 from "@/components/ui/frame-v1";
import { ArrowRightIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { SOCIALS } from "@/constant/home.constant";
import FullNameWrapper from "@/components/home/full-name-wrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HomePage = () => {
  return (
    <div className="w-full p-5 lg:p-10 flex-1 h-full flex justify-center items-center">
      <Container className="p-2 sm:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-mono text-sm font-bold tracking-[0.2em] uppercase">
              Fullstack JS Developer
            </span>
            <FullNameWrapper>
              Abdus Shohid <br className="hidden lg:block" />
              <span className="text-primary font-black!">Shakil</span>
            </FullNameWrapper>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Abdus Shohid Shakil, frontend developer and complex frontend lover.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 font-primary font-bold text-xs lg:text-sm shadow-awesome1 transition-colors hover:bg-primary/90 uppercase tracking-widest border-2 border-primary select-none"
            >
              <span>View Projects</span>
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 sm:px-6 sm:py-3 font-primary font-bold text-xs lg:text-sm border-2 border-border/40 transition-colors hover:bg-accent hover:border-border/60 shadow-awesome1 uppercase tracking-widest select-none"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 shrink-0">
          <div className="w-full max-w-55 sm:max-w-60 md:max-w-70 lg:max-w-80 flex flex-col gap-3">
            <FrameV1 className="opacity-100">
              <div className="relative w-full lg:h-85 bg-secondary overflow-hidden shadow-awesome1 border-4 border-border/20 group/photo">
                <Image
                  src="/home/shakil.png"
                  width={400}
                  height={450}
                  alt="Abdus Shohid Shakil"
                  className="w-full h-full object-cover"
                  priority
                />

                <div className="absolute inset-x-0 h-0.5 bg-primary/40 shadow-[0_0_15px_rgba(67,97,238,0.8)] z-10 animate-scanline pointer-events-none" />
              </div>
            </FrameV1>

            <FrameV1 className="opacity-100">
              <div className="bg-secondary/40 p-2 md:p-4 border-4 border-border/10 shadow-awesome1 grid grid-cols-5 gap-2">
                {SOCIALS.map(social => {
                  return (
                    <Link
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <AspectRatio
                        ratio={1}
                        className="p-0 md:p-3 w-full text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-300 shadow-awesome-light border border-transparent hover:border-border/40 grid place-items-center"
                      >
                        <social.Icon className="size-4 sm:size-5" />
                      </AspectRatio>
                    </Link>
                  );
                })}
              </div>
            </FrameV1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
