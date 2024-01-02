import { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";

import { ConfigProvider, theme, ThemeConfig } from "antd";

import GlobalStyle from "_/styles/global";

import App from "_/components/app";

const FONT = Roboto({
  weight: ["400", "700"],
  display: "swap",
  preload: true,
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

const ANTD_THEME: ThemeConfig = {
  algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
  token: {
    fontFamily: FONT.style.fontFamily,
    fontSize: 16,
  },
};

export default ({ pageProps }: AppProps) => (
  <ConfigProvider theme={ANTD_THEME}>
    <Head>
      <title>W2.Tools</title>
    </Head>

    <GlobalStyle />

    <App {...pageProps} />
  </ConfigProvider>
);
