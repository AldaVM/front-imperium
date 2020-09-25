import Head from "next/head";
import FooterSite from "../../componets/sections/Footer";
import { LayoutWrapper, MainLayout, Container } from "./styled";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="" />
        <meta name="author" content="Aldair Valencia" />
        <meta
          name="keywords"
          content="Aplicación web para registrar de Alumnos de Imperium Cross"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ImperiumCross | Registro</title>
        <meta
          property="og:title"
          content="ImperiumCross | Registro de Alumnos"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Aplicación web para registrar de Alumnos de Imperium Cross"
          key="ogdesc"
        />
        <meta property="og:image" content="/logo.png" key="ogimage" />
        <meta
          property="og:site_name"
          content="ImperiumCross"
          key="ogsitename"
        />
      </Head>

      <MainLayout>
        <Container>{children}</Container>
        <FooterSite />
      </MainLayout>
    </LayoutWrapper>
  );
}
