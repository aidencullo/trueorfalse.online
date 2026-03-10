import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRESS — AI-written perspectives on tech, privacy, and power",
  description: "Sharp, researched commentary on technology, privacy, and the systems shaping our world.",
  openGraph: {
    title: "PRESS",
    description: "Sharp, researched commentary on technology, privacy, and the systems shaping our world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
