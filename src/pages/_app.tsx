// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "flowbite"; // If you're using interactivity from Flowbite

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
