import { ArrowRightIcon } from "@/components/icons";
import BackgroundV1 from "@/components/ui/background-v1";
import FrameV1 from "@/components/ui/frame-v1";
import Image from "next/image";

const TwitterCard = () => {
  return (
    <div>
      <div className="w-[1200px]! h-[628px]! relative flex items-center justify-center overflow-hidden bg-background border-2 gap-15">
        <BackgroundV1 className="absolute inset-0" />
        <div className="w-full max-w-90 flex flex-col gap-3">
          <FrameV1 className="opacity-100">
            <Image
              src="/home/shakil.png"
              width={400}
              height={450}
              alt="Abdus Shohid Shakil"
              className="w-full h-full bg-secondary overflow-hidden shadow-awesome-dark border-4 border-border/20 object-cover"
              priority
            />
          </FrameV1>
        </div>
        <FrameV1 className="opacity-100">
          <div className="relative w-[min(92vw,560px)] border-2 border-border/30 bg-sidebar/90 backdrop-blur-sm px-6 py-8 sm:px-8 sm:py-10 shadow-awesome-dark overflow-hidden">
            <div className="pointer-events-none absolute -inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent" />

            <span className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.35em] text-primary/90 mb-4">
              dream builder
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-primary font-black leading-none text-foreground mb-3">
              Abdus Shohid <span className="text-primary">Shakil</span>
            </h1>

            <p className="text-sm sm:text-base font-display text-muted-foreground mb-3">
              Software Developer | Frontend Focused | Web & Desktop
            </p>
            <p className="max-w-120 text-xs sm:text-sm font-display leading-relaxed text-muted-foreground/90 mb-8">
              I build polished software products with clean UI, strong
              performance, and product-first thinking.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 font-primary font-bold text-xs lg:text-sm shadow-awesome-light transition-colors hover:bg-primary/90 uppercase tracking-widest border-2 border-primary select-none">
              <span>Connect with me</span>
              <ArrowRightIcon size={16} />
            </div>
          </div>
        </FrameV1>
      </div>
    </div>
  );
};

export default TwitterCard;
