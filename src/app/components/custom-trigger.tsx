"use client";
import { useSidebar } from "@/components/ui/sidebar";
import { ArrowLeftFromLine } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="flex items-center text-preset-3 ml-4"
    >
      <ArrowLeftFromLine className="mr-2" />
      Minimise Menu
    </button>
  );
}
