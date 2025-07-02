import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Providers } from "./providers";
import { AddBudgetModal } from "./components/modals/add-budget-modal";

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
        <SidebarProvider>
          <div className="flex min-h-screen w-screen overflow-x-hidden">
            <AppSidebar />
            <main className="flex-1 min-w-0 w-full">
              <Providers>
                <div className="w-full h-full">{children}</div>
              </Providers>
            </main>
          </div>
          <AddBudgetModal />
        </SidebarProvider>
      </body>
    </html>
  );
}
