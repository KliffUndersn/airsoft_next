import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" async></script>
        <script
          src="https://apis.google.com/js/client:platform.js?onload=start"
          async
          defer
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
