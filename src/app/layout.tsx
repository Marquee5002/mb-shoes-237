import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "MB Shoes 237 — Votre paire, votre style", description: "Prototype de boutique et atelier virtuel pour MB Shoes 237." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
