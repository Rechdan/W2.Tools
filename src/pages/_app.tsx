import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyle from "_/styles/global";

import App from "_/components/app";

export default ({ pageProps }: AppProps) => (
  <>
    <Head>
      <title>W2.Tools</title>
    </Head>

    <GlobalStyle />

    <App {...pageProps} />
  </>
);
