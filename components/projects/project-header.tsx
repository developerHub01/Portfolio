interface Props {
  index: number;
  subtitle: string;
  title: string;
  year: string;
  status?: string;
  version?: string;
  duration?: string;
}

const ProjectHeader = ({
  index,
  subtitle,
  title,
  year,
  status,
  version,
  duration,
}: Props) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
      <div className="w-full flex flex-col gap-2 min-w-0">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-x-4 gap-y-2 flex-wrap pb-2">
          <span className="text-primary font-mono text-sm font-black shrink-0 py-1.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {Boolean(status || version || duration) && (
              <div className="inline-flex items-center gap-2 bg-accent/40 px-3 py-1.5 border border-border/40 shadow-awesome-light h-fit shrink-0">
                {status === "ongoing" && (
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0 animate-pulse" />
                )}
                <span className="text-[10px] sm:text-xs font-mono text-foreground tracking-wider uppercase font-bold">
                  {[status, version, duration].filter(Boolean).join(" / ")}
                </span>
              </div>
            )}
            <div className="inline-flex items-center gap-2 bg-accent/40 px-3 py-1.5 border border-border/40 shadow-awesome-light h-fit shrink-0">
              <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono text-foreground tracking-wider uppercase font-bold">
                {year}
              </span>
            </div>
          </div>
        </div>
        <span className="text-[10px] sm:text-xs font-mono text-muted-foreground uppercase truncate line-clamp-2">
          {subtitle}
        </span>
        <h2 className="text-xl sm:text-3xl xl:text-4xl font-primary font-black text-foreground truncate line-clamp-2">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ProjectHeader;
