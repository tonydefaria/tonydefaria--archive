// App

// Built-in Components
import React, { useEffect, useLayoutEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Cookies from "js-cookie"
import TagManager from "react-gtm-module";

// Stylesheets
import "../styles/composer.scss"
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-fade";

export default function MyApp({ Component, pageProps}) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  // Hooks
  useEffect(() => {
    const cookie = Cookies.get("weLoveCookies")
    if (cookie === "iWantCookies") {
      TagManager.initialize({ gtmId: "GTM-W4P8CGP" })
    }
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}
