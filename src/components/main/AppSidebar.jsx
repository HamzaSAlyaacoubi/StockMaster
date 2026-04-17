import React, { useContext } from "react";
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
import { House, ShoppingBag } from "lucide-react";
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

import DarkLogo from "/src/assets/dark-logo.png";
import DarkLogoText from "/src/assets/dark-logo-text.png";
import LightLogo from "/src/assets/light-logo.png";
import LightLogoText from "/src/assets/light-logo-text.png";
import { useTheme } from "../theme/theme-provider";
export function AppSidebar({ open, ...props }) {
  const routes = [
    {
      name: "Dashborad",
      url: "/",
      icon: House,
    },
    {
      name: "Products",
      url: "/products",
      icon: ShoppingBag,
    },
  ];

  const {theme} = useTheme();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center gap-2">
                {/* Logo icon (always visible) */}
                <img
                  className="w-6 shrink-0"
                  src={theme === "light" ? DarkLogo : LightLogo}
                  alt="logo"
                />

                {/* Logo text (auto hidden when collapsed like menu items) */}
                <img
                  className="w-30"
                  src={theme === "light" ? DarkLogoText : LightLogoText}
                  alt="logo text"
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu >
          {routes.map((r) => {
            return (
              <SidebarMenuItem key={r.name}>
                <SidebarMenuButton asChild>
                  <Link to={r.url} className="flex items-center gap-2">
                    {r.icon && <r.icon className="shrink-0" />}
                    <span>{r.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
