import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhrubojyoti Hazra | Developer Portfolio",
  description: "Data Science Undergrad Student and Gen AI and Prompt Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-abyss text-white antialiased selection:bg-neon-pink selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
