// App

// Built-in Components
import React, { useEffect, useLayoutEffect } from "react"
// import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
// import * as Fathom from "fathom-client"
// import Cookies from "js-cookie"
// import TagManager from "react-gtm-module"

// Components
import ScriptsComponent from "../components/scripts_component"

// Stylesheets
import "../styles/composer.scss"
import "swiper/css"
import "swiper/css/lazy"
import "swiper/css/effect-fade"

export default function MyApp({ Component, pageProps}) {
  // const router = useRouter()
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  // useEffect(() => {
    // const cookie = Cookies.get("weLoveCookies")
    // if (cookie === "iWantCookies") {
    //   TagManager.initialize({ gtmId: "GTM-W4P8CGP" })
    // }

    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    // Fathom.load("OGNVGKMQ", {
    //   includedDomains: [
    //     "tonydefaria.com",
    //     "www.tonydefaria.com"
    //   ]
    // })

    // function onRouteChangeComplete() {
    //   Fathom.trackPageview()
    // }
    // Record a pageview when route changes
    // router.events.on("routeChangeComplete", onRouteChangeComplete)

    // Unassign event listener
    // return () => {
    //   router.events.off("routeChangeComplete", onRouteChangeComplete)
    // }
  // }, [])

  return (
    <>
      <ScriptsComponent/>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}
