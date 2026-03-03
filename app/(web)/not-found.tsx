import Link from "next/link";
import Container from "@/components/ui/container";
import FrameV1 from "@/components/ui/frame-v1";
import { ArrowRightIcon } from "@/components/icons";
import BackgroundV2 from "@/components/ui/background-v2";

const NotFound = () => {
  return (
    <div className="w-full h-full p-5 lg:p-10 relative">
      <BackgroundV2 className="absolute inset-0 pointer-events-none" />
      <Container className="relative z-10 min-h-full flex items-center justify-center">
        <FrameV1 className="opacity-100 w-full max-w-4xl">
          <section className="bg-secondary/50 border-4 border-border/20 shadow-awesome1 p-6 sm:p-10 lg:p-14 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-primary font-mono text-sm font-bold tracking-[0.2em] uppercase">
                Error
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-primary font-black leading-none">
                404
              </h1>
              <h2 className="text-xl sm:text-2xl font-primary font-bold text-foreground">
                Page Not Found
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              The page you are looking for does not exist or may have been
              moved. Use one of the links below to continue browsing.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-primary font-bold text-xs lg:text-sm shadow-awesome1 transition-colors hover:bg-primary/90 uppercase tracking-widest border-2 border-primary"
              >
                <span>Go Home</span>
                <ArrowRightIcon size={16} />
              </Link>

              <Link
                href="/projects"
                className="px-6 py-3 font-primary font-bold text-xs lg:text-sm border-2 border-border/40 transition-colors hover:bg-accent hover:border-border/60 shadow-awesome1 uppercase tracking-widest"
              >
                View Projects
              </Link>
            </div>
          </section>
        </FrameV1>
      </Container>
    </div>
  );
};

export default NotFound;
