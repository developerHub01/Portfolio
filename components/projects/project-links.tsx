"use client";

import Link from "next/link";
import { ArrowTopRightIcon, GithubIcon, YouTubeIcon } from "@/components/icons";
import { ProjectLinkType } from "@/types/projects.types";
import { useProjectVideo } from "@/context/project-video-provider";

interface Props {
  links: Array<{
    label: string;
    url: string;
    type: ProjectLinkType;
  }>;
}

const ProjectLinks = ({ links }: Props) => {
  const { handleChangeIsLightboxOpen } = useProjectVideo();

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {links.map(link =>
        link.type === "video" ? (
          <button
            key={link.label}
            type="button"
            onClick={() => handleChangeIsLightboxOpen(true)}
            className="group/link inline-flex items-center gap-2 text-[10px] font-mono font-bold text-foreground bg-accent/20 px-3 py-2 border border-border/40 hover:border-primary/40 hover:text-primary transition-all duration-300 shadow-awesome-light uppercase select-none"
          >
            <YouTubeIcon
              size={14}
              className="group-hover/link:scale-110 transition-transform"
            />
            {link.label}
          </button>
        ) : (
          <Link
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-[10px] font-mono font-bold text-foreground bg-accent/20 px-3 py-2 border border-border/40 hover:border-primary/40 hover:text-primary transition-all duration-300 shadow-awesome-light uppercase select-none"
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
        ),
      )}
    </div>
  );
};

export default ProjectLinks;
