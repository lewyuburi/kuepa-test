import React from "react";

const AppHead = () => {
  return (
    <React.Fragment>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#FF671B" />
      <link rel="stylesheet" href="/css/bootstrap3.css" />
      <link rel="stylesheet" href="/css/kuepastrap.css" />
      <title>Kuepa</title>
    </React.Fragment>
  );
};

export default React.memo(AppHead);
