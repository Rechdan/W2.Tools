import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

export default class extends Document {
  static override getInitialProps = async (ctx: DocumentContext) => {
    const sheet = new ServerStyleSheet();
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyleProvider cache={cache}>
                <App {...props} />
              </StyleProvider>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement(),
          // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
          <style key="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />,
        ],
      };
    } finally {
      sheet.seal();
    }
  };

  override render = () => (
    <Html lang="pt">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
