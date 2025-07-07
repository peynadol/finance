"use client";

import {
  House,
  ArrowUpDown,
  ChartPie,
  Wallet,
  ReceiptText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", icon: House },
  { href: "/transactions", icon: ArrowUpDown },
  { href: "/budgets", icon: ChartPie },
  { href: "/pots", icon: Wallet },
  { href: "/recurring-bills", icon: ReceiptText },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-20 bg-[#1E1E23] rounded-t-2xl md:hidden">
      {NAV_ITEMS.map(({ href, icon: Icon }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href}>
            <div
              className={cn(
                "flex flex-col items-center justify-center px-4 py-2 rounded-xl",
                isActive
                  ? "bg-[#F9F6F3] text-[#287D82]"
                  : "text-[#B3B3B3]" 
              )}
            >
              <Icon className="w-5 h-5" />
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
