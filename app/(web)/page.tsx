import FrameV1 from "@/components/ui/frame-v1";
import { ArrowRightIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { SOCIALS } from "@/constant/home.constant";
import FullNameWrapper from "@/components/home/full-name-wrapper";

const HomePage = () => {
  return (
    <div className="w-full p-5 lg:p-10 flex-1 h-full flex justify-center items-center">
      <Container className="py-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20">
        {/* Left Column: Content (Server Side) */}
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

          {/* First Copy Bio (Server Side) */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Abdus Shohid Shakil, frontend developer and complex frontend lover.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-primary font-bold text-xs lg:text-sm shadow-awesome1 transition-colors hover:bg-primary/90 uppercase tracking-widest border-2 border-primary"
            >
              <span>View Projects</span>
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 font-primary font-bold text-xs lg:text-sm border-2 border-border/40 transition-colors hover:bg-accent hover:border-border/60 shadow-awesome1 uppercase tracking-widest"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column: Photo + Socials (Server Side) */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 shrink-0">
          <FrameV1 className="opacity-100">
            <div className="relative w-78 lg:w-80 lg:h-85 bg-secondary overflow-hidden shadow-awesome1 border-4 border-border/20 group/photo">
              <Image
                src="/home/shakil.png"
                width={400}
                height={450}
                alt="Abdus Shohid Shakil"
                className="w-full h-full object-cover"
                priority
              />

              {/* Scanline Animation (CSS Based) */}
              <div className="absolute inset-x-0 h-0.5 bg-primary/40 shadow-[0_0_15px_rgba(67,97,238,0.8)] z-10 animate-scanline pointer-events-none" />
            </div>
          </FrameV1>

          {/* Social Links Block (Server Side) */}
          <FrameV1 className="opacity-100">
            <div className="bg-secondary/40 p-4 border-4 border-border/10 shadow-awesome1 flex items-center justify-around gap-2">
              {SOCIALS.map(social => {
                return (
                  <Link
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-300 shadow-awesome-light border border-transparent hover:border-border/40"
                  >
                    <span className="size-5 flex items-center justify-center">
                      <social.Icon size={20} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </FrameV1>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
