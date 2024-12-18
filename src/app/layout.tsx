"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });
import { QueryProvider } from "./components/providers/Queryprovider";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <header className="w-screen fixed z-50">
                    <NavBar />
                    <QueryProvider>{children}</QueryProvider>
                </header>
            </body>
        </html>
    );
}