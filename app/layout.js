import localFont from "next/font/local";
import "./globals.css";

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
const getSnell = localFont({
  src: "./fonts/SnellBT.otf",
  variable: "--font-snell-bt",
  weight: "100 900"
})
const getApple = localFont({
  src: "./fonts/AppleGaramond.ttf",
  variable: "--font-apple",
  weight: "100 900"
})

export const metadata = {
  icons: {
    icon : '/favicon.png'
  },
  title: "Portfolio | Ria ",
  description: "Ria Sunil Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${getSnell.variable} ${getApple.variable} $ antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
