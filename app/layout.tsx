import type { Metadata } from "next";
import { Manrope as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import HeaderSection from "@/components/header";
import NavigationSection from "@/components/nav";
import { homeConfig } from "@/config/home";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Ngon Noodle",
  description: "Thương hiệu cho mấy ní thích ăn mì",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderSection></HeaderSection>
          <NavigationSection items={homeConfig.mobileNav}></NavigationSection>
        </ThemeProvider>
      </body>
    </html>
  );
}
