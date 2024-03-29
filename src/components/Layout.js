import Head from "next/head";
import { Fragment } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Forms With Formik & Yup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <header>
        <span>Forms with Formik</span>
      </header>

      <nav className="nav">
        <Link href="/">
          <span>User</span>
        </Link>
        <Link href="/post">
          <span>Post</span>
        </Link>
      </nav>

      <main className="main">{children}</main>

      <footer className="footer">
        <a href="https://github.com/Lema1" target="_blank">
          @Lema1
        </a>
      </footer>
    </Fragment>
  );
};

export default Layout;
