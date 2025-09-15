import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font
const inter: any = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ena-Ema Innovative Digital Solutions",
  description:
    "Ena Ema Technology delivers modern, user-friendly, and high-performance digital solutions to help businesses grow online.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
