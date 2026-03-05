import Link from "next/link";
import { DEVTO_PROFILE_URL, DEVTO_USERNAME } from "@/constant/blog.constant";

const BlogPageIntro = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
        My latest 4 Dev.to blog posts, focused on frontend engineering, product
        building, and practical JavaScript workflows.
      </p>

      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.16em]">
        <span className="bg-accent px-3 py-1.5 border border-border/30 text-primary">
          Source:{" "}
          <Link className="underline" target="_blank" href={DEVTO_PROFILE_URL}>
            Dev.to/{DEVTO_USERNAME}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default BlogPageIntro;
