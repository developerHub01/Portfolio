interface Props {
  tags: Array<string>;
}

const BlogTags = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span
          key={tag}
          className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] px-2.5 py-1 bg-accent border border-border/30 text-primary flex justify-center items-center"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default BlogTags;
