import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
const snell = localFont({
  src: "./fonts/SnellBT.otf",
  variable: "--font-snell-bt",
  display: "swap",
});
const apple = localFont({
  src: "./fonts/AppleGaramond.ttf",
  variable: "--font-apple",
  display: "swap",
});

export const metadata = {
  icons: { icon: "/favicon.png" },
  title: "Riya Sunil · Software Engineer",
  description:
    "Riya Sunil builds tracing, evaluation and multi-agent systems for AI products. Software engineer at Keyvalue, Kochi.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f24" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${snell.variable} ${apple.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
