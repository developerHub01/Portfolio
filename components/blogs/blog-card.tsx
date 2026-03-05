import Link from "next/link";
import FrameV1 from "@/components/ui/frame-v1";
import { CalendarIcon, PaperAirplaneIcon } from "@/components/icons";
import { DevToArticle } from "@/types/blogs.types";
import BlogTags from "@/components/blogs/blog-tags";
import Image from "next/image";

interface BlogCardProps {
  article: DevToArticle;
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));

const titleClampStyle = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical" as const,
  overflow: "hidden",
};

const BlogCard = ({ article }: BlogCardProps) => {
  const tags = Array.isArray(article.tag_list)
    ? article.tag_list.slice(0, 3)
    : [];
  const description =
    article.description?.trim() || "Read this post on Dev.to for full details.";

  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card"
    >
      <FrameV1
        className="opacity-0 group-hover/card:opacity-100"
        wrapperClass="h-full"
      >
        <article className="h-full bg-secondary border border-border/30 shadow-awesome-light hover:bg-accent transition-all duration-300 md:group-has-[:hover]/container:not-hover:blur-xs hover:blur-none p-4 sm:p-5 flex flex-col gap-4">
          <div className="h-45 sm:h-50 border border-border/30 relative overflow-hidden bg-accent/30">
            {Boolean(article.cover_image) && (
              <Image
                src={article.cover_image!}
                alt={article.title}
                fill
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
            {!article.cover_image && (
              <div className="w-full h-full flex items-center justify-center">
                <PaperAirplaneIcon size={26} className="text-primary/80" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground font-mono uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon size={14} />
              {formatDate(article.published_at)}
            </span>
            <span>{article.reading_time_minutes} min read</span>
          </div>

          <h2
            className="text-lg sm:text-xl font-primary font-black leading-snug text-foreground min-h-14"
            style={titleClampStyle}
          >
            {article.title}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>

          <BlogTags tags={tags} />
        </article>
      </FrameV1>
    </Link>
  );
};

export default BlogCard;
