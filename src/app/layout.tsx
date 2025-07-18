import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Providers } from "./providers";
import { AddBudgetModal } from "./components/modals/add-budget-modal";
import { AddPotModal } from "./components/modals/add-pot-modal";
import { AddTransactionModal } from "./components/modals/add-transaction-modal";
import { DeletePotModal } from "./components/modals/delete-pot-modal";
import { DeleteBudgetModal } from "./components/modals/delete-budget-modal";
import { EditPotModal } from "./components/modals/edit-pot-modal";
import { EditBudgetModal } from "./components/modals/edit-budget.modal";
import MobileNav from "./components/mobile-nav";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance",
  description: "A personal finance dashboard app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>
        <Providers>
          <SidebarProvider>
            <div className="flex min-h-screen w-screen overflow-x-hidden">
              <AppSidebar />
              <main className="flex-1 min-w-0 w-full">
                <div className="w-full h-full pb-24 md:pb-0">{children}</div>
              </main>
            </div>
            <MobileNav />
            {/* Modals */}
            <AddBudgetModal />
            <AddPotModal />
            <AddTransactionModal />
            <DeletePotModal />
            <DeleteBudgetModal />
            <EditPotModal />
            <EditBudgetModal />
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
