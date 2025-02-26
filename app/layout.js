import "./globals.css";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import Nav from "./components/Nav";
import ComingSoon from "./ComingSoon";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const Clash = localFont({ src: "./ClashGrotesk-Variable.woff2" });

export const metadata = {
  title: "Elite Football Programs in Madrid | Pro-Vía Academy",
  description:
    "Pro-Vía Academy offers top-tier football programs in Spain, combining professional training, elite coaching, and international exposure. Designed for aspiring athletes, our programs help players develop their skills, compete at the highest levels, and take their football careers to the next stage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/aha6akh.css" />
        <GoogleAnalytics gaId="G-SYNVHLLMPP" />
      </head>
      <body className={`${Clash.className}  antialiased bg-black`}>
        {process.env.NEXT_PUBLIC_COMING_SOON === "true" ? (
          <ComingSoon />
        ) : (
          <>
            {" "}
            <Nav /> {children}
            <Footer />{" "}
          </>
        )}

        <Toaster
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#FFFFF",
              borderRadius: "0px",
              padding: "16px",
            },
          }}
        />
      </body>
    </html>
  );
}
