import type { Metadata } from "next";
import MainHeading from "@/components/headings/MainHeading";
import PageWrapper from "@/components/ui/page-wrapper";
import BlogCard from "@/components/blogs/blog-card";
import BlogPageIntro from "@/components/blogs/blog-page-intro";
import { DevToArticle } from "@/types/blogs.types";
import {
  DEVTO_ARTICLES_API_BASE_URL,
  DEVTO_REVALIDATE_SECONDS,
} from "@/constant/blog.constant";
import BlogEmpty from "@/components/blogs/blog-empty";
import BlogError from "@/components/blogs/blog-error";

export const metadata: Metadata = {
  title: "Blogs | Abdus Shohid Shakil",
  description:
    "Read blog posts by Abdus Shohid Shakil on Dev.to about frontend engineering, product-focused development, and modern JavaScript workflows.",
};

const Page = async () => {
  let paginatedArticles: Array<DevToArticle> = [];
  let hasFetchError = false;

  try {
    const response = await fetch(
      `${DEVTO_ARTICLES_API_BASE_URL}&page=1&per_page=4`,
      {
        next: {
          revalidate: DEVTO_REVALIDATE_SECONDS,
        },
      },
    );

    if (!response.ok)
      throw new Error(`Failed to fetch Dev.to posts: ${response.status}`);

    paginatedArticles = (await response.json()) as Array<DevToArticle>;
  } catch {
    hasFetchError = true;
  }

  const hasArticles = !hasFetchError && paginatedArticles.length > 0;
  const showEmptyState = !hasFetchError && !hasArticles;

  return (
    <PageWrapper>
      <MainHeading>Blogs</MainHeading>
      <BlogPageIntro />
      {hasFetchError && <BlogError />}
      {showEmptyState && <BlogEmpty />}
      {hasArticles && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 auto-rows-fr">
          {paginatedArticles.map(article => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export default Page;
