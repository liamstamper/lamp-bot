import type React from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/lib/auth";

export const metadata = {
  title: "Lamp PR Bot - AI-Powered GitHub Pull Request Reviews",
  description:
    "Automate your code reviews, catch bugs before they ship, and improve your team's productivity with our GitHub AI PR Bot.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AuthProvider> {children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
