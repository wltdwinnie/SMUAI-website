import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "SMUAI",
  description: "SMU Artificial Intelligence Club",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}