import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./components/context/AuthProvider";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Warm Paws",
  description: "This app provides services for pets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
               <Toaster
          position="top-center"
          toastOptions={{
            style: { zIndex: 9999 },
          }}
        />
        <AuthProvider>
          <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
