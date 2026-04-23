import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { Toaster } from "react-hot-toast";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanika's Portfolio",
  description:
    "Welcome to my portfolio! I'm a passionate software developer with expertise in React, Next.js, and Tailwind CSS. Explore my projects and experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <Toaster
          position="top-right"
          containerStyle={{
            top: 90,
            zIndex: 999999,
          }}
          toastOptions={{
            style: {
              background: "#131332",
              color: "#e5e7eb",
              border: "1px solid rgba(34,211,238,0.2)",
              boxShadow: "0 0 20px rgba(34,211,238,0.15)",
            },
            success: {
              iconTheme: {
                primary: "#22d3ee",
                secondary: "#131332",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#131332",
              },
            },
          }}
        />
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
