import Link from "next/link";
import { ArrowTopRightIcon, GithubIcon } from "@/components/icons";

interface Props {
  links: Array<{
    label: string;
    url: string;
    type: "github" | "external";
  }>;
}

const ProjectLinks = ({ links }: Props) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {links.map(link => {
        return (
          <Link
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-[10px] font-mono font-bold text-foreground bg-accent/20 px-3 py-2 border border-border/40 hover:border-primary/40 hover:text-primary transition-all duration-300 shadow-awesome-light uppercase"
          >
            {link.type === "github" ? (
              <GithubIcon
                size={14}
                className="group-hover/link:scale-110 transition-transform"
              />
            ) : (
              <ArrowTopRightIcon
                size={14}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
            )}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectLinks;
