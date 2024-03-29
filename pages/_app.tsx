import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <>
      <Head>
        <title>Emil Lipskij</title>
        <meta
          name='description'
          content='Personal website of Emil Lipskij front end developer'
        />
        <link rel='icon' href='/favicon2.ico' />
      </Head>
      <Nav />
      <Component {...pageProps} canonical={router.route} key={router.route} />
      <footer>
        <p>Made by Emil Lipskij 2022</p>
      </footer>
    </>
  );
}

export default MyApp;
