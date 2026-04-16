import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarProvider,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenu,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Plus,
  SidebarIcon,
} from "lucide-react";
import { CustomTrigger } from "../ui/sidebar-triger";
import { Link } from "react-router";
import { LuShoppingBag } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { TooltipProvider } from "../ui/tooltip";

export function AppSidebar({open}) {

  const routes = [
    {
      name: "Dashborad",
      url: "/",
      icon: Home,
    },
    {
      name: "Products",
      url: "/products",
      icon: LuShoppingBag,
    },
  ];

  return (
      <Sidebar collapsible="icon">
        <SidebarHeader className="h-16 mb-4 bg-gray-200 items-center justify-center font-bold text-2xl">
          {open ? "Stock Master" : "SM"}
        </SidebarHeader>
        <SidebarContent>
          {routes.map((r) => {
            return (
              <SidebarMenuItem key={r.name}>
                <SidebarMenuButton
                  className="text-xl p-5 hover:bg-gray-100 "
                  asChild
                >
                  <Link to={r.url}>
                    {<r.icon className="icon-md" />}
                    {r.name}
                  </Link>
                </SidebarMenuButton>

                {r.childrens && (
                  <>
                    <SidebarMenuAction>
                      <ChevronDown className="ml-auto" />
                    </SidebarMenuAction>

                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Hello</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarContent>
        {/* <SidebarContent>
          {routes.map((item) => (
            <Collapsible
              key={item.name}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon && item.icon}
                      <span>{item.name}</span>
                      {item.childrens && (
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.childrens?.map((subItem) => (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem key={subItem.name}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.name}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                ))}
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarContent> */}
        <SidebarFooter />
      </Sidebar>
      
  );
}
