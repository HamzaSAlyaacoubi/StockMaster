import { useSidebar } from "@/components/ui/sidebar";
import { SidebarIcon } from "lucide-react";

export function CustomTrigger(props) {
  const { toggleSidebar } = useSidebar();

  return <SidebarIcon {...props} onClick={toggleSidebar} />;
}
