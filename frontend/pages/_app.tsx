import type { AppProps } from "next/app";
import GlobalStyle from "../src/GlobalStyle/GlobalStyle";
import { Roboto } from 'next/font/google'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  )
}