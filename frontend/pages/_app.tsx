import "../styles/globals.css";
import type { AppProps } from "next/app";

// making tailwind accessible throughout whole project

function RaceApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RaceApp;
