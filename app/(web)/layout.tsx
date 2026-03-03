import Sidebar from "@/components/sidebar/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarProvider from "@/context/sidebar-prodiver";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <main className="w-full h-screen flex overflow-hidden">
        <Sidebar />
        <section className="flex-1 bg-background h-full">
          <ScrollArea className="w-full h-full min-h-0 [&>div>div]:h-full">
            <div className="w-full min-h-screen flex *:flex-1 *:h-auto">
              {children}
            </div>
          </ScrollArea>
        </section>
      </main>
    </SidebarProvider>
  );
};

export default Layout;
