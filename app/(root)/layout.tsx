import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T.A.I.O.P",
  description:
    "A Next.js 14 Meta All In One Place social application for those visition the local Tokyo Area. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
