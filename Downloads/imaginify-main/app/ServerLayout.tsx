// app/ServerLayout.tsx
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import ClientLayout from './ClientLayout';

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imagify",
  description: "AI-powered image Generator",
};

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#624cf5' } }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
