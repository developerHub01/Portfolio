interface Props {
  index: number;
  subtitle: string;
  title: string;
  year: string;
}

const ProjectHeader = ({ index, subtitle, title, year }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div className="w-full flex flex-col gap-2 min-w-0">
        <div className="w-full flex justify-between items-center gap-4 flex-wrap">
          <span className="text-primary font-mono text-sm font-black shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="inline-flex items-center gap-2 bg-accent/40 px-3 py-1.5 border border-border/40 shadow-awesome-light h-fit shrink-0">
            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono text-foreground tracking-wider uppercase font-bold whitespace-nowrap">
              {year}
            </span>
          </div>
        </div>
        <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase truncate line-clamp-2">
          {subtitle}
        </span>
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-primary font-black text-foreground truncate line-clamp-2">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ProjectHeader;
