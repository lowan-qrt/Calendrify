import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

import { Header } from "../components/header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Calendrify",
    description: "Générateur de calendrier",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <Header />
            <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col  grow`}>
                {children}
            </body>
        </html>
    );
}