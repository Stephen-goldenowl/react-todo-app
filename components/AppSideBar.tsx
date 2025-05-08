import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { GoalIcon, House, LogOut, Search, Settings } from "lucide-react";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Search",
      url: "/search",
      icon: Search,
    },
    {
      title: "Setting",
      url: "/setting",
      icon: Settings,
    },
    {
      title: "logout",
      url: "/",
      icon: LogOut,
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-center py-16">
            <div>
              <GoalIcon className="w-12 h-12" />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pl-12">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size={"lg"}>
                    <a
                      href={item.url}
                      className={item.title === "Thoát" ? "text-error" : ""}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
