import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Transition from "../shared/Transition";
import "../styles/transition.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
