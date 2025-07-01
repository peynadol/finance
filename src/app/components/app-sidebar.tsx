"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { CustomTrigger } from "./custom-trigger";
import {
  House,
  ArrowUpDown,
  ChartPie,
  Wallet,
  ReceiptText,
  ChevronRight,
} from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: <House />,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: <ArrowUpDown />,
  },
  {
    title: "Budgets",
    url: "/budgets",
    icon: <ChartPie />,
  },
  {
    title: "Pots",
    url: "/pots",
    icon: <Wallet />,
  },
  {
    title: "Recurring Bills",
    url: "/recurring-bills",
    icon: <ReceiptText />,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <Link href="/" className="flex items-center p-4">
            <Image
              src={"/images/logo-large.svg"}
              alt="Finance Logo"
              width={120}
              height={120}
            />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="mt-6">
            <SidebarGroupContent>
              <SidebarMenu className="space-y-4">
                {items.map((item) => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className={cn(
                            "py-6 flex items-center text-[16px] leading-[150%] font-bold",
                            isActive
                              ? "bg-beige-100 text-grey-900"
                              : "text-grey-300"
                          )}
                        >
                          {item.icon}
                          <span className="ml-2">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="mb-4">
          <CustomTrigger />
        </SidebarFooter>
      </Sidebar>

      {/* Floating restore arrow when collapsed - positioned outside the Sidebar */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-4 z-50 rounded-full bg-grey-900 border border-gray-200 p-3 shadow-lg transition-all duration-200 cursor-pointer"
          aria-label="Expand sidebar"
        >
          <ChevronRight className=" text-white" />
        </button>
      )}
    </>
  );
}
