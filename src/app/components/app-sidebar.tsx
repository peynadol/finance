import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CustomTrigger } from "./custom-trigger";
import {
  House,
  ArrowUpDown,
  ChartPie,
  Wallet,
  ReceiptText,
} from "lucide-react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: <House />,
  },
  {
    title: "Transactions",
    url: "#",
    icon: <ArrowUpDown />,
  },
  {
    title: "Budgets",
    url: "#",
    icon: <ChartPie />,
  },
  {
    title: "Pots",
    url: "#",
    icon: <Wallet />,
  },
  {
    title: "Recurring Bills",
    url: "#",
    icon: <ReceiptText />,
  },
];

//TODO: Add logo in header
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>finance</SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-6">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-preset-3">
                    <a href={item.url} className="py-6">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <CustomTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}
