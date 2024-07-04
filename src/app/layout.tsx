import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "오박사의 인사",
  description:
    "포켓몬 도감이란 포켓몬을 만나면 자동으로 기록해주는 하이테크한 도구란다!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="min-h-screen w-full m-auto max-w-[800px]">
          {children}
        </div>
      </body>
    </html>
  );
}
