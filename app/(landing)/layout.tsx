import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full bg-white text-black">
        <SidebarTrigger className="cursor-pointer p-8" />
        {children}
      </main>
    </SidebarProvider>
  );
}
