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
import { GoalIcon, Settings, CalendarIcon } from "lucide-react";
import LogoutButton from "./LogoutButton";
export function AppSidebar() {
  const items = [
    {
      title: "Todos",
      url: "/",
      icon: CalendarIcon,
    },
    {
      title: "Setting",
      url: "/setting",
      icon: Settings,
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
              <LogoutButton />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
