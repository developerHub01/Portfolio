import type { Metadata } from "next";
import { Inter, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SplashScreen from "@/components/ui/splash-screen";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const primarySans = Roboto({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "600", "700", "800"],
});

const displaySans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_ENV === ""
      ? process.env.NEXT_PUBLIC_SITE_DEV_URL
      : process.env.NEXT_PUBLIC_SITE_PROD_URL)!,
  ),
  title: "Shakil Software Developer",
  description:
    "Abdus Shohid Shakil, frontend focused fullstack js developer and complex frontend lover.",
  openGraph: {
    title: "Shakil Software Developer",
    description:
      "Abdus Shohid Shakil, frontend focused fullstack js developer and complex frontend lover.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakil Software Developer",
    description:
      "Abdus Shohid Shakil, frontend focused fullstack js developer and complex frontend lover.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        className={`${primarySans.variable} ${displaySans.variable} antialiased h-screen overflow-hidden flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          // defaultTheme="system"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <TooltipProvider>{children}</TooltipProvider>
          <section id="portal-root"></section>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
