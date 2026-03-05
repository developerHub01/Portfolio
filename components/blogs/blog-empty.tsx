import FrameV1 from "@/components/ui/frame-v1";

const BlogEmpty = () => {
  return (
    <FrameV1 className="opacity-0 group-hover:opacity-100">
      <div className="bg-secondary p-5 sm:p-8 border border-border/30 shadow-awesome-dark">
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          No published posts found for this page yet.
        </p>
      </div>
    </FrameV1>
  );
};

export default BlogEmpty;
