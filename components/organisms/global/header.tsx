import React from "react";
import Link from "next/link";

const AppHeader = () => {
  return (
    <header>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link href="/">
              <a className="navbar-brand" style={styles.brand}>
                <img
                  alt="Kuepa"
                  style={styles.logoImage}
                  src="/images/logo.png"
                  height="34"
                />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  brand: {
    display: "inline-block",
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0
  },
  logoImage: {
    display: "block"
  }
};

export default React.memo(AppHeader);
