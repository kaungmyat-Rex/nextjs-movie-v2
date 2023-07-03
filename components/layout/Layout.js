import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [current, setcurrent] = useState(0);
  const [scroll, getscroll] = useState(false);
  const [prev, setprev] = useState(200);
  useEffect(() => {
    window.onscroll = function () {
      setcurrent(Math.floor(window.pageYOffset));
      if (prev > current) {
        getscroll(false);
      } else {
        getscroll(true);
      }
    };
  }, [current]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#278EA5" />
        <meta name="title" content="MRML | Movie with Myanmar Language" />
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="mrml, myanmar movie, movie review, movie information, movies, series, tv shows, tv, shows, torrents, tmdb"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Kaung Myat" />

        <title>MRML | Movie with Myanmar Language</title>
        <meta name="title" content="MRML | Movie with Myanmar Language" />
        <meta name="description" content="" />
        {/* ,,,,,,,,
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cine.tenyain.com" />
        <meta property="og:title" content="CINE | Live cinematic information" />
        <meta
          property="og:description"
          content="A website that provides you cinematic data with stunning UI. Torrents for movies are also available and just a touch to download them."
        />
        <meta property="og:image" content="/meta.png" />
     
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cine.tenyain.com" />
        <meta
          property="twitter:title"
          content="CINE | Live cinematic information"
        />
        <meta
          property="twitter:description"
          content="A website that provides you cinematic data with stunning UI. Torrents for movies are also available and just a touch to download them."
        />
        <meta property="twitter:image" content="/meta.png" /> */}
      </Head>

      <Navbar scroll={scroll} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
