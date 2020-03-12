import React from "react";
import Document, { Main, NextScript } from "next/document";
import { Head } from "next/document";
import AppHead from "components/organisms/global/head";

class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <AppHead />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://code.jquery.com/jquery-1.12.4.min.js" />
          <script src="/js/bootstrap.min.js" />
        </body>
      </html>
    );
  }
}
export default MyDocument;
