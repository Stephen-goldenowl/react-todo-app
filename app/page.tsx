import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="min-h-screen w-full bg-white text-black flex">
          <div className="p-8 w-full">
            <div className="ml-4">
              <SidebarTrigger className="cursor-pointer" />
            </div>
            {children}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
