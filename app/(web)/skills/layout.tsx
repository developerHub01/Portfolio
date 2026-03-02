import Container from "@/components/ui/container";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full p-5">
      <Container className="flex flex-col gap-5">{children}</Container>
    </div>
  );
};

export default Layout;
