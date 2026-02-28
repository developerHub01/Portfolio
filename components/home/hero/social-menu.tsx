import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/home/icons";
import Link from "next/link";

const menuList = [
  {
    id: "facebook",
    link: "/",
    Icon: FacebookIcon,
  },
  {
    id: "github",
    link: "/",
    Icon: GithubIcon,
  },
  {
    id: "linkedin",
    link: "/",
    Icon: LinkedinIcon,
  },
];

const SocialMenu = () => {
  return (
    <div className="absolute bottom-5 left-5 flex items-center justify-center gap-5">
      {menuList.map(({ id, link, Icon }) => (
        <Link
          key={id}
          href={link}
          className="size-10 bg-primary grid place-items-center shadow-2xl rounded-tr-md rounded-bl-md relative before:content-[''] before:absolute before:size-full before:bg-secondary before:rounded-tr-md before:rounded-bl-md before:-z-10 before:translate-1 before:shadow-2xl"
        >
          <Icon color="var(--primary)" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMenu;
