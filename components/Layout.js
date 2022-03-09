import Head from "next/head";
import Header from "./mainPage/Header";
import Footer from "./mainPage/Footer";

export const siteTitle = "U#Welcome";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Social media app for immigrants" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="https://reddish-egret-practicum-pink.vercel.app/images/images/U#Welcome-img.png"/>
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
