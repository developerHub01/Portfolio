import Container from "@/components/ui/container";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Container className="flex flex-col gap-5">{children}</Container>;
};

export default Layout;
