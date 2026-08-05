import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tushar R. Gohil - Portfolio",
  description: "Academic and Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-slate-800">
        {children}
      </body>
    </html>
  );
}