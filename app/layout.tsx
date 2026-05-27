import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Picko - All of Korea's trends. One spot.",
  description: "Discover trending places, culture, and experiences across Korea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
