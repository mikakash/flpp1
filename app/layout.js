import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "./components/header/Header";
import Footer from "./HomeHub/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Seensd",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased box-border w-full`}
      >
        {/* <Header /> */}
        <div style={{ paddingTop: "55px" }}></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}