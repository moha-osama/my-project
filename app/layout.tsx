import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Aside from "@/components/Aside/Aside";
import StoreProvider from "./StoreProvider";
import NewTask from "@/components/Tasks/NewTask";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${plus_Jakarta_Sans.className} antialiased relative`}
        >
          <Header />
          <aside>
            <Aside />
          </aside>
          <main className="md:ml-60 mt-48 w-full md:w-[calc(100%-240px)] bg-[#FAFAFA]">
            {children}
          </main>
          <NewTask />
        </body>
      </html>
    </StoreProvider>
  );
}
