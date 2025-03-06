import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Rightbar from "@/components/rightbar";
import Leftbar from "@/components/leftbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); 

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl  mx-auto  flex justify-between ">
          <div className="px-2 xsm:px-4 xxl:px-8 "><Leftbar/></div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-500 ">{children}</div>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1"><Rightbar/></div> 
        </div>
      </body>
    </html>
  );
}
