import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nannapat Mongkollertsirisuk - Resume",
  description: "Resume for Nannapat Mongkollertsirisuk (Bonus)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
