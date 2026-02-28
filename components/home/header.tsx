import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";

const Header = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <Container className="flex justify-between items-center h-15">
        <Link
          href={"/"}
          className="size-10 bg-primary grid place-items-center shadow-2xl rounded-tr-md rounded-bl-md relative before:content-[''] before:absolute before:size-full before:bg-secondary before:rounded-tr-md before:rounded-bl-md before:-z-10 before:translate-1 before:shadow-2xl"
        >
          S
        </Link>
        <Button size={"icon"} variant={"ghost"}>
          <svg
            width="79"
            height="70"
            viewBox="0 0 79 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="79" height="9" fill="#CAA529" />
            <rect x="14" y="31" width="65" height="8" fill="#CAA529" />
            <rect x="47" y="61" width="32" height="9" fill="#CAA529" />
          </svg>
        </Button>
      </Container>
    </section>
  );
};

export default Header;
