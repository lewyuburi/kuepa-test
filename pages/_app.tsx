import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import AppHead from "components/organisms/global/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;
