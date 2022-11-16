import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Transition from "../shared/Transition";
import "../styles/transition.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Transition>
      <Component {...pageProps} />
    // </Transition>
  );
}

export default MyApp;
