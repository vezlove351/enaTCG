import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Import the fonts we need for the ENA Universe TCG
import { Orbitron, Rajdhani } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

// Load the main font (Orbitron is similar to the futuristic "MAIN ONE" font in the design)
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
})

// Load the cards font (Rajdhani is similar to "HORIZON" font in the design)
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cards",
  display: "swap",
})

export const metadata = {
  title: "ENA Universe TCG",
  description: "The first true AI-born Web3 Trading Card Game",
}

// Add proper type for children
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
