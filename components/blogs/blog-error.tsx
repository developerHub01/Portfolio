import FrameV1 from "@/components/ui/frame-v1";
import Link from "next/link";
import { DEVTO_PROFILE_URL } from "@/constant/blog.constant";
import { ArrowTopRightIcon } from "@/components/icons";

const BlogError = () => {
  return (
    <FrameV1 className="opacity-0 group-hover:opacity-100">
      <div className="bg-secondary p-5 sm:p-8 border border-border/30 shadow-awesome-dark flex flex-col gap-4">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Could not load posts from Dev.to right now. Please try again in a few
          minutes or open my profile directly.
        </p>
        <Link
          href={DEVTO_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-primary font-bold text-xs sm:text-sm uppercase tracking-widest border-2 border-primary hover:bg-primary/90 transition-colors"
        >
          <span>Open Dev.to Profile</span>
          <ArrowTopRightIcon size={16} />
        </Link>
      </div>
    </FrameV1>
  );
};

export default BlogError;
