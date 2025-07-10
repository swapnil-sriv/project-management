import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";
import AuthProvider from "./authProvider"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Project Management",
  description: "By Swapnil Srivastava",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <AuthProvider>

      <DashboardWrapper>{children}</DashboardWrapper>  
        </AuthProvider>
      </body>
    </html>
  );
}
