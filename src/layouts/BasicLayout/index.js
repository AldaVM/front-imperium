import Head from "next/head";
import FooterSite from "../../componets/sections/Footer"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href=""
        />
        <meta name="author" content="Aldair Valencia <aldairvm95@gmail>" />
        <meta
          name="keywords"
          content="Registro Imperium Cross"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <main>{children}</main>
      <FooterSite />
    </>
  )
}

