import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejas M S | Builder & Developer",
  description:
    "A high-end personal portfolio for Tejas M S, focused on AI, business analytics, software development, and building in public.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
