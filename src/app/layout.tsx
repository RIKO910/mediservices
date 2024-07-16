import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/(publicpages)/component/Nav/Nav";
import React from "react";
import Head from "next/head";
import Provider from "@/provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MediServices",
    description: "Provide Medical Services",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
    );
}
